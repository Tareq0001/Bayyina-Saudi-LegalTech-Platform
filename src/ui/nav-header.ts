import { i18n } from './i18n';
import { judicialAudio } from './audio';

export type ActiveView = 'codex' | 'simulator' | 'calculators' | 'evidence' | 'drafter';

export class NavHeader {
  private activeView: ActiveView = 'codex';
  private onNavigate: (view: ActiveView) => void;

  constructor(onNavigate: (view: ActiveView) => void) {
    this.onNavigate = onNavigate;
  }

  setActive(view: ActiveView) {
    this.activeView = view;
  }

  render(container: HTMLElement) {
    const isAr = i18n.lang === 'ar';

    container.innerHTML = `
      <header class="bayyina-nav-header">
        <!-- Top Legal Banner -->
        <div class="top-legal-bar">
          <div class="legal-bar-content">
            <span class="royal-decree-lead">
              🇸🇦 ${isAr ? 'المملكة العربية السعودية | منظومة التشريعات القضائية المتطورة والتحول الرقمي العدلي (ناجز)' : 'Kingdom of Saudi Arabia | Modern Judicial Reforms & Najiz Digital Justice'}
            </span>
            <div class="top-bar-right">
              <span class="pulse-live">●</span>
              <span>${isAr ? 'الأنظمة سارية المفعول 1445هـ / 2024م' : 'In-Force Statutes 2024'}</span>
            </div>
          </div>
        </div>

        <!-- Main Brand & Action Header -->
        <div class="main-header-row">
          <div class="brand-section">
            <div class="brand-emblem-box">
              <div class="brand-emblem">⚖️</div>
            </div>
            <div class="brand-text-box">
              <div class="brand-name-row">
                <h1 class="brand-title">${i18n.t.appName}</h1>
                <span class="brand-version-badge">v2.5 Enterprise</span>
              </div>
              <p class="brand-subtitle">${i18n.t.appSub}</p>
            </div>
          </div>

          <!-- Quick Controls (Gavel, Sound, Lang) -->
          <div class="header-controls">
            <button id="gavel-strike-btn" class="gavel-btn" title="${i18n.t.gavelBtn}">
              <span class="gavel-icon">🔨</span>
              <span class="gavel-label">${isAr ? 'قرع المطرقة' : 'Strike Gavel'}</span>
            </button>

            <button id="sound-toggle-btn" class="ctrl-btn" title="${i18n.t.soundBtn}">
              <span id="sound-icon">${judicialAudio.isMuted ? '🔇' : '🔊'}</span>
            </button>

            <button id="lang-toggle-btn" class="ctrl-btn lang-btn">
              🌐 ${i18n.t.langBtn}
            </button>
          </div>
        </div>

        <!-- Primary Navigation Tabs -->
        <nav class="primary-nav-bar">
          <div class="nav-tabs-cluster">
            <button class="nav-tab-item ${this.activeView === 'codex' ? 'active' : ''}" data-view="codex">
              <span class="tab-icon">📜</span>
              <span class="tab-label">${i18n.t.navCodex}</span>
            </button>

            <button class="nav-tab-item ${this.activeView === 'simulator' ? 'active' : ''}" data-view="simulator">
              <span class="tab-icon">🏛️</span>
              <span class="tab-label">${i18n.t.navSimulator}</span>
              <span class="tab-pulse-badge">6 مراحل</span>
            </button>

            <button class="nav-tab-item ${this.activeView === 'calculators' ? 'active' : ''}" data-view="calculators">
              <span class="tab-icon">🧮</span>
              <span class="tab-label">${i18n.t.navCalculators}</span>
              <span class="tab-tag">م77 / التكاليف</span>
            </button>

            <button class="nav-tab-item ${this.activeView === 'evidence' ? 'active' : ''}" data-view="evidence">
              <span class="tab-icon">🔍</span>
              <span class="tab-label">${i18n.t.navEvidence}</span>
            </button>

            <button class="nav-tab-item ${this.activeView === 'drafter' ? 'active' : ''}" data-view="drafter">
              <span class="tab-icon">✍️</span>
              <span class="tab-label">${i18n.t.navDrafter}</span>
            </button>
          </div>

          <!-- Quick Stats Pill Cluster -->
          <div class="header-stats-pill">
            <div class="h-stat-unit">
              <strong>8</strong>
              <span>${i18n.t.statutesCount}</span>
            </div>
            <div class="h-stat-unit">
              <strong>4</strong>
              <span>${i18n.t.caseScenariosCount}</span>
            </div>
            <div class="h-stat-unit">
              <strong>100%</strong>
              <span>توافق نظامي</span>
            </div>
          </div>
        </nav>
      </header>
    `;

    this.attachEvents(container);
  }

  private attachEvents(container: HTMLElement) {
    // Navigation tabs
    container.querySelectorAll('.nav-tab-item').forEach(tab => {
      tab.addEventListener('click', () => {
        judicialAudio.playChime();
        const view = tab.getAttribute('data-view') as ActiveView;
        if (view) {
          this.activeView = view;
          this.onNavigate(view);
        }
      });
    });

    // Gavel strike button
    const gavelBtn = container.querySelector('#gavel-strike-btn');
    if (gavelBtn) {
      gavelBtn.addEventListener('click', () => {
        judicialAudio.playGavel();
      });
    }

    // Sound toggle button
    const soundBtn = container.querySelector('#sound-toggle-btn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const muted = judicialAudio.toggleMute();
        const icon = container.querySelector('#sound-icon');
        if (icon) icon.textContent = muted ? '🔇' : '🔊';
      });
    }

    // Language toggle button
    const langBtn = container.querySelector('#lang-toggle-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        judicialAudio.playChime();
        i18n.toggle();
      });
    }
  }
}
