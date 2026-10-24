import './style.css';
import { NavHeader, ActiveView } from './ui/nav-header';
import { CodexView } from './ui/codex-view';
import { SimulatorView } from './ui/simulator-view';
import { CalculatorsView } from './ui/calculators-view';
import { EvidenceView } from './ui/evidence-view';
import { DrafterView } from './ui/drafter-view';
import { ModalView } from './ui/modal-view';
import { i18n } from './ui/i18n';
import { judicialAudio } from './ui/audio';

class BayyinaApp {
  private currentView: ActiveView = 'codex';
  private navHeader: NavHeader;
  private codexView: CodexView;
  private simulatorView: SimulatorView;
  private calculatorsView: CalculatorsView;
  private evidenceView: EvidenceView;
  private drafterView: DrafterView;
  private modalView: ModalView;

  private headerContainer!: HTMLElement;
  private mainContentContainer!: HTMLElement;

  constructor() {
    this.modalView = new ModalView();

    this.navHeader = new NavHeader((view: ActiveView) => {
      this.switchView(view);
    });

    this.codexView = new CodexView((article, statute) => {
      this.modalView.showArticleModal(article, statute);
    });

    this.simulatorView = new SimulatorView((scenario, stage) => {
      this.modalView.showJudgmentDeedModal(scenario, stage);
    });

    this.calculatorsView = new CalculatorsView();
    this.evidenceView = new EvidenceView();
    this.drafterView = new DrafterView();

    // Listen to language changes
    i18n.subscribe(() => {
      this.renderAll();
    });
  }

  init() {
    const appRoot = document.querySelector<HTMLDivElement>('#app');
    if (!appRoot) return;

    appRoot.innerHTML = `
      <div id="header-mount"></div>
      <main id="app-main-content"></main>
    `;

    this.headerContainer = document.querySelector('#header-mount') as HTMLElement;
    this.mainContentContainer = document.querySelector('#app-main-content') as HTMLElement;

    this.renderAll();
  }

  switchView(view: ActiveView) {
    this.currentView = view;
    this.navHeader.setActive(view);
    this.renderView();
  }

  renderAll() {
    this.navHeader.render(this.headerContainer);
    this.renderView();
  }

  renderView() {
    this.mainContentContainer.innerHTML = '';
    switch (this.currentView) {
      case 'codex':
        this.codexView.render(this.mainContentContainer);
        break;
      case 'simulator':
        this.simulatorView.render(this.mainContentContainer);
        break;
      case 'calculators':
        this.calculatorsView.render(this.mainContentContainer);
        break;
      case 'evidence':
        this.evidenceView.render(this.mainContentContainer);
        break;
      case 'drafter':
        this.drafterView.render(this.mainContentContainer);
        break;
    }
  }
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const app = new BayyinaApp();
  app.init();
});
