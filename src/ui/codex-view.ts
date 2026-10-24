import { SAUDI_STATUTES } from '../data/laws-codex';
import { LawArticle, Statute } from '../types';
import { i18n } from './i18n';
import { judicialAudio } from './audio';

export class CodexView {
  private selectedStatuteId: string = 'all';
  private searchQuery: string = '';
  private bookmarkedArticleIds: Set<string> = new Set();
  private onInspectArticle: (article: LawArticle, statute: Statute) => void;

  constructor(onInspectArticle: (article: LawArticle, statute: Statute) => void) {
    this.onInspectArticle = onInspectArticle;
    // Load local bookmarks if any
    try {
      const saved = localStorage.getItem('bayyina_bookmarks');
      if (saved) {
        this.bookmarkedArticleIds = new Set(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }

  toggleBookmark(articleId: string) {
    if (this.bookmarkedArticleIds.has(articleId)) {
      this.bookmarkedArticleIds.delete(articleId);
    } else {
      this.bookmarkedArticleIds.add(articleId);
      judicialAudio.playChime();
    }
    try {
      localStorage.setItem('bayyina_bookmarks', JSON.stringify(Array.from(this.bookmarkedArticleIds)));
    } catch {
      // ignore
    }
  }

  render(container: HTMLElement) {
    const isAr = i18n.lang === 'ar';

    // Collect all articles or filter by statute
    let statutesToDisplay = SAUDI_STATUTES;
    if (this.selectedStatuteId !== 'all') {
      statutesToDisplay = SAUDI_STATUTES.filter(s => s.id === this.selectedStatuteId);
    }

    // Filter by search query
    const query = this.searchQuery.trim().toLowerCase();

    container.innerHTML = `
      <div class="codex-wrapper fade-in">
        <!-- Search & Filter Controls -->
        <div class="codex-header-card">
          <div class="search-box-row">
            <div class="search-input-wrapper">
              <span class="search-icon">🔍</span>
              <input 
                type="text" 
                id="codex-search-input" 
                class="codex-search-input" 
                placeholder="${i18n.t.searchPlaceholder}"
                value="${this.searchQuery}"
              />
              ${this.searchQuery ? `<button id="clear-search-btn" class="clear-btn">✕</button>` : ''}
            </div>
          </div>

          <!-- Statute Filter Pills -->
          <div class="statute-pills-row">
            <button class="pill-btn ${this.selectedStatuteId === 'all' ? 'active' : ''}" data-statute="all">
              ${isAr ? 'كافة الأنظمة المعتمدة' : 'All Codified Statutes'}
              <span class="badge">${SAUDI_STATUTES.length}</span>
            </button>
            ${SAUDI_STATUTES.map(st => `
              <button class="pill-btn ${this.selectedStatuteId === st.id ? 'active' : ''}" data-statute="${st.id}">
                ${isAr ? st.nameAr : st.nameEn}
                <span class="badge">${st.articles.length}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Statutes & Articles Grid -->
        <div class="statutes-results-container">
          ${statutesToDisplay.map(statute => {
            const matchedArticles = statute.articles.filter(art => {
              if (!query) return true;
              return (
                art.titleAr.toLowerCase().includes(query) ||
                art.titleEn.toLowerCase().includes(query) ||
                art.textAr.toLowerCase().includes(query) ||
                art.textEn.toLowerCase().includes(query) ||
                art.commentaryAr.toLowerCase().includes(query) ||
                art.tags.some(t => t.toLowerCase().includes(query)) ||
                art.articleNumber.toString() === query ||
                statute.royalDecreeAr.toLowerCase().includes(query)
              );
            });

            if (matchedArticles.length === 0 && query) {
              return '';
            }

            return `
              <div class="statute-section-card">
                <div class="statute-banner">
                  <div class="statute-meta">
                    <span class="decree-tag">📜 ${isAr ? statute.royalDecreeAr : statute.royalDecreeEn}</span>
                    <span class="year-tag">📅 ${statute.yearHijri} (${statute.yearGregorian})</span>
                    <span class="cat-tag">🏛️ ${isAr ? statute.category : statute.categoryEn}</span>
                  </div>
                  <h3 class="statute-title">${isAr ? statute.nameAr : statute.nameEn}</h3>
                  <p class="statute-desc">${isAr ? statute.descriptionAr : statute.descriptionEn}</p>
                </div>

                <div class="articles-grid">
                  ${matchedArticles.map(art => {
                    const isBookmarked = this.bookmarkedArticleIds.has(art.id);
                    const weightColors: Record<string, { bg: string; text: string; labelAr: string; labelEn: string }> = {
                      conclusive: { bg: '#dcfce7', text: '#15803d', labelAr: 'حجية قاطعة ملزمة', labelEn: 'Conclusive Force' },
                      high: { bg: '#e0f2fe', text: '#0369a1', labelAr: 'قوة إثبات راجحة', labelEn: 'High Probative' },
                      medium: { bg: '#fef3c7', text: '#b45309', labelAr: 'بينة استئناسية', labelEn: 'Corroborative' },
                      circumstantial: { bg: '#f1f5f9', text: '#475569', labelAr: 'قرينة قضائية', labelEn: 'Circumstantial' }
                    };
                    const w = weightColors[art.evidentiaryWeight] || weightColors.high;

                    return `
                      <div class="article-card" data-article-id="${art.id}">
                        <div class="article-top-row">
                          <span class="article-num-badge">
                            ${isAr ? `المادة (${art.articleNumber})` : `Article (${art.articleNumber})`}
                          </span>
                          <div class="article-actions">
                            <span class="weight-badge" style="background: ${w.bg}; color: ${w.text};">
                              ${isAr ? w.labelAr : w.labelEn}
                            </span>
                            <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" data-bookmark-id="${art.id}" title="${isAr ? 'حفظ المادة' : 'Bookmark Article'}">
                              ${isBookmarked ? '★' : '☆'}
                            </button>
                          </div>
                        </div>

                        <h4 class="article-heading">${isAr ? art.titleAr : art.titleEn}</h4>
                        <div class="article-text-preview">
                          ${isAr ? art.textAr : art.textEn}
                        </div>

                        <div class="article-tags-row">
                          ${art.tags.slice(0, 3).map(tag => `<span class="tag-pill">#${tag}</span>`).join('')}
                        </div>

                        <div class="article-card-footer">
                          ${art.precedents && art.precedents.length > 0 ? `
                            <span class="precedents-indicator">
                              ⚖️ ${art.precedents.length} ${isAr ? 'مبدأ قضائي مرتبط' : 'Precedent Linked'}
                            </span>
                          ` : '<span></span>'}
                          <button class="inspect-btn" data-art-id="${art.id}" data-statute-id="${statute.id}">
                            ${i18n.t.viewDetails} →
                          </button>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    this.attachEvents(container);
  }

  private attachEvents(container: HTMLElement) {
    // Search input
    const searchInput = container.querySelector('#codex-search-input') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = (e.target as HTMLInputElement).value;
        this.render(container);
        const inputAfter = container.querySelector('#codex-search-input') as HTMLInputElement;
        if (inputAfter) {
          inputAfter.focus();
          inputAfter.setSelectionRange(inputAfter.value.length, inputAfter.value.length);
        }
      });
    }

    const clearBtn = container.querySelector('#clear-search-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.searchQuery = '';
        this.render(container);
      });
    }

    // Pills filter
    container.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        judicialAudio.playChime();
        this.selectedStatuteId = btn.getAttribute('data-statute') || 'all';
        this.render(container);
      });
    });

    // Bookmark buttons
    container.querySelectorAll('.bookmark-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const artId = btn.getAttribute('data-bookmark-id');
        if (artId) {
          this.toggleBookmark(artId);
          this.render(container);
        }
      });
    });

    // Inspect buttons
    container.querySelectorAll('.inspect-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        judicialAudio.playChime();
        const artId = btn.getAttribute('data-art-id');
        const stId = btn.getAttribute('data-statute-id');
        const statute = SAUDI_STATUTES.find(s => s.id === stId);
        if (statute) {
          const article = statute.articles.find(a => a.id === artId);
          if (article) {
            this.onInspectArticle(article, statute);
          }
        }
      });
    });
  }
}
