import { i18n } from './i18n';
import { judicialAudio } from './audio';

export type ActiveView = 'codex' | 'simulator' | 'calculators' | 'evidence' | 'drafter';

export class NavHeader {
  private activeView: ActiveView = 'codex';
  private onNavigate: (view: ActiveView) => void;
  private currentTheme: 'dark' | 'light' = 'dark';

  constructor(onNavigate: (view: ActiveView) => void) {
    this.onNavigate = onNavigate;
    try {
      const savedTheme = (localStorage.getItem('bayyina_theme') as 'dark' | 'light') || 'dark';
      this.currentTheme = savedTheme;
    } catch {
      this.currentTheme = 'dark';
    }
  }

  setActive(view: ActiveView) {
    this.activeView = view;
  }

  render(container: HTMLElement) {
    const isAr = i18n.lang === 'ar';
    const isDark = this.currentTheme === 'dark';

    container.innerHTML = `
      <header class="bayyina-nav-header">
        <!-- Top Sovereign Judicial Bar -->
        <div class="top-legal-bar">
          <div class="legal-bar-content">
            <div class="royal-lead-box">
              <span class="ksa-emblem">🇸🇦</span>
              <span class="royal-decree-lead">
                ${isAr ? 'المملكة العربية السعودية | منظومة التشريعات القضائية المتطورة والتحول العدلي الرقمي (ناجز)' : 'Kingdom of Saudi Arabia | Modern Judicial Reforms & Najiz Digital Justice System'}
              </span>
            </div>
            <div class="top-bar-right">
              <span class="pulse-live">●</span>
              <span class="status-badge-live">${isAr ? 'الأنظمة سارية المفعول 1445هـ / 2024م' : 'In-Force Statutes 2024'}</span>
              <span class="royal-seal-mini">⚖️ معتمد رسمياً</span>
            </div>
          </div>
        </div>

        <!-- Main Brand & Action Header -->
        <div class="main-header-row">
          <div class="brand-section">
            <!-- 24K Polished Gold Scale of Justice Emblem with Ambient Pulse Glow -->
            <div class="brand-emblem-box" title="شعار بَيّنة - ميزان العدالة الملكي">
              <div class="emblem-glow-ring"></div>
              <svg class="brand-scale-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="goldBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#fef08a" />
                    <stop offset="50%" stop-color="#f59e0b" />
                    <stop offset="100%" stop-color="#b45309" />
                  </linearGradient>
                  <linearGradient id="emeraldAura" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#10b981" />
                    <stop offset="100%" stop-color="#047857" />
                  </linearGradient>
                  <filter id="goldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="2.5" flood-color="#fbbf24" flood-opacity="0.6"/>
                  </filter>
                </defs>
                <!-- Central Pillar & Finial -->
                <circle cx="24" cy="7" r="3.5" fill="url(#goldBeamGrad)" filter="url(#goldGlowFilter)" />
                <path d="M24 10.5V40" stroke="url(#goldBeamGrad)" stroke-width="2.5" stroke-linecap="round" />
                <path d="M15 41H33" stroke="url(#goldBeamGrad)" stroke-width="3" stroke-linecap="round" />
                <path d="M18 38H30" stroke="url(#goldBeamGrad)" stroke-width="2" stroke-linecap="round" />
                <!-- Cross Beam -->
                <path d="M9 16.5C14 14.5 34 14.5 39 16.5" stroke="url(#goldBeamGrad)" stroke-width="2.6" stroke-linecap="round" filter="url(#goldGlowFilter)" />
                <circle cx="24" cy="15.5" r="2.2" fill="#020b08" stroke="url(#goldBeamGrad)" stroke-width="1.8" />
                <!-- Left Pan & Chains -->
                <path d="M9 17L5 27M9 17L13 27" stroke="url(#goldBeamGrad)" stroke-width="1.2" stroke-opacity="0.8" />
                <path d="M3 27C3 27 5 32 9 32C13 32 15 27 15 27Z" fill="url(#emeraldAura)" stroke="url(#goldBeamGrad)" stroke-width="1.5" />
                <!-- Right Pan & Chains -->
                <path d="M39 17L35 27M39 17L43 27" stroke="url(#goldBeamGrad)" stroke-width="1.2" stroke-opacity="0.8" />
                <path d="M33 27C33 27 35 32 39 32C43 32 45 27 45 27Z" fill="url(#emeraldAura)" stroke="url(#goldBeamGrad)" stroke-width="1.5" />
              </svg>
            </div>

            <div class="brand-text-box">
              <div class="brand-name-row">
                <h1 class="brand-title">${isAr ? 'بَيّنة | BAYYINA' : 'BAYYINA | بَيّنة'}</h1>
                <span class="brand-version-badge">v2.5 Prestige</span>
                <span class="brand-status-chip">قضاء ذكي</span>
              </div>
              <p class="brand-subtitle">${isAr ? 'المنصة القضائية الذكية للأنظمة السعودية وإدارة القضايا والمحاماة' : 'Saudi Judicial Intelligence & LegalTech Platform'}</p>
            </div>
          </div>

          <!-- Quick Controls: Gavel, Theme Toggle, Sound, Lang -->
          <div class="header-controls">
            <!-- Theme Toggle Button -->
            <button id="theme-toggle-btn" class="ctrl-btn theme-toggle-btn" title="${isAr ? (isDark ? 'التحويل إلى نمط الصكوك العاجي' : 'التحويل إلى النمط الليلي الفاخر') : (isDark ? 'Switch to Ivory Parchment Mode' : 'Switch to Obsidian Dark Mode')}">
              <span class="theme-icon">${isDark ? '☀️' : '🌙'}</span>
              <span class="theme-label">${isDark ? (isAr ? 'عاجي' : 'Ivory') : (isAr ? 'ليلي' : 'Dark')}</span>
            </button>

            <!-- Gavel Strike Button with 24K Gold Styling -->
            <button id="gavel-strike-btn" class="gavel-btn" title="${i18n.t.gavelBtn}">
              <span class="gavel-icon">🔨</span>
              <span class="gavel-label">${isAr ? 'قرع المطرقة' : 'Strike Gavel'}</span>
            </button>

            <!-- Sound Toggle Button -->
            <button id="sound-toggle-btn" class="ctrl-btn sound-btn" title="${i18n.t.soundBtn}">
              <span id="sound-icon">${judicialAudio.isMuted ? '🔇' : '🔊'}</span>
            </button>

            <!-- Language Switcher -->
            <button id="lang-toggle-btn" class="ctrl-btn lang-btn" title="تغيير اللغة / Switch Language">
              🌐 ${i18n.t.langBtn}
            </button>
          </div>
        </div>

        <!-- Majestic Metrics Strip Banner -->
        <div class="metrics-strip-wrapper">
          <div class="metrics-strip">
            <div class="metric-item">
              <span class="m-icon">📜</span>
              <span class="m-val">8</span>
              <span class="m-desc">${isAr ? 'أنظمة سيادية بمراسيم ملكية' : 'Sovereign Royal Decrees'}</span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <span class="m-icon">⚖️</span>
              <span class="m-val">380+</span>
              <span class="m-desc">${isAr ? 'مادة نظامية مفهرسة ومفسرة' : 'Codified Statutory Articles'}</span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <span class="m-icon">🏛️</span>
              <span class="m-val">6 مراحل</span>
              <span class="m-desc">${isAr ? 'محاكي قضاء ناجز الرقمي' : 'Najiz Judicial Lifecycle'}</span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <span class="m-icon">🧮</span>
              <span class="m-val">100%</span>
              <span class="m-desc">${isAr ? 'محركات حسابات عمالية وفرائض' : 'Labor & Mirath Engines'}</span>
            </div>
          </div>
        </div>

        <!-- Primary Navigation Tabs -->
        <nav class="primary-nav-bar">
          <div class="nav-tabs-cluster">
            <button class="nav-tab-item ${this.activeView === 'codex' ? 'active' : ''}" data-view="codex">
              <span class="tab-icon">📜</span>
              <span class="tab-label">${i18n.t.navCodex}</span>
              <span class="tab-indicator"></span>
            </button>

            <button class="nav-tab-item ${this.activeView === 'simulator' ? 'active' : ''}" data-view="simulator">
              <span class="tab-icon">🏛️</span>
              <span class="tab-label">${i18n.t.navSimulator}</span>
              <span class="tab-pulse-badge">6 مراحل</span>
              <span class="tab-indicator"></span>
            </button>

            <button class="nav-tab-item ${this.activeView === 'calculators' ? 'active' : ''}" data-view="calculators">
              <span class="tab-icon">🧮</span>
              <span class="tab-label">${i18n.t.navCalculators}</span>
              <span class="tab-tag">م77 / التكاليف</span>
              <span class="tab-indicator"></span>
            </button>

            <button class="nav-tab-item ${this.activeView === 'evidence' ? 'active' : ''}" data-view="evidence">
              <span class="tab-icon">🔍</span>
              <span class="tab-label">${i18n.t.navEvidence}</span>
              <span class="tab-indicator"></span>
            </button>

            <button class="nav-tab-item ${this.activeView === 'drafter' ? 'active' : ''}" data-view="drafter">
              <span class="tab-icon">✍️</span>
              <span class="tab-label">${i18n.t.navDrafter}</span>
              <span class="tab-tag-gold">صك رسمي</span>
              <span class="tab-indicator"></span>
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
              <span>توافق عدلي</span>
            </div>
          </div>
        </nav>
      </header>
    `;

    this.attachEvents(container);
  }

  private toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    try {
      localStorage.setItem('bayyina_theme', this.currentTheme);
    } catch {
      // ignore
    }
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

    // Theme toggle button
    const themeBtn = container.querySelector('#theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        judicialAudio.playChime();
        this.toggleTheme();
        this.render(container);
      });
    }

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
