const App = () => {
  const { Sidebar, SolverQueue, ProblemCanvas, InputBar, ExamPrepWizard } = window;
  const [wizardDone, setWizardDone] = React.useState(false);
  const [planConfig, setPlanConfig] = React.useState(null);
  const [activeSubject, setActiveSubject] = React.useState("代数");
  const [inputValue, setInputValue] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  const handleWizardComplete = (config) => {
    setPlanConfig(config);
    setWizardDone(true);
  };

  if (!wizardDone) {
    return <ExamPrepWizard onComplete={handleWizardComplete} />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setMessages((current) => [`你问：${trimmed}`, ...current]);
    setInputValue("");
  };

  return (
    <div className="kit-app">
      <style>{`
        .kit-app {
          min-height: calc(100vh - 48px);
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr) 300px;
          gap: var(--svy-space-4);
        }
        .kit-sidebar, .kit-queue, .kit-canvas {
          min-width: 0;
        }
        .kit-sidebar {
          display: grid;
          align-content: start;
          gap: var(--svy-space-4);
          padding: var(--svy-space-4);
          background: var(--svy-surface);
          border: 1px solid var(--svy-border);
          border-radius: var(--svy-radius-xl);
        }
        .kit-brand {
          display: flex;
          gap: var(--svy-space-3);
          align-items: center;
          padding-bottom: var(--svy-space-4);
          border-bottom: 1px solid var(--svy-border);
        }
        .kit-brand-mark {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--svy-primary), var(--svy-secondary));
          color: white;
          font: 800 20px/1 var(--svy-font-display);
        }
        .kit-brand strong, .kit-brand span {
          display: block;
        }
        .kit-brand span, .kit-section h2, .kit-confidence {
          color: var(--svy-muted);
          font: 700 12px/1.35 var(--svy-font-body);
        }
        .kit-section {
          display: grid;
          gap: var(--svy-space-3);
        }
        .kit-section h2, .kit-card h2, .kit-card h3, .kit-card p {
          margin: 0;
        }
        .kit-subjects, .kit-history, .kit-queue-list, .kit-canvas, .kit-queue {
          display: grid;
          gap: var(--svy-space-3);
        }
        .kit-subject, .kit-history-item {
          width: 100%;
          border: 1px solid var(--svy-border);
          background: var(--svy-surface-soft);
          color: var(--svy-fg);
          border-radius: var(--svy-radius-md);
          padding: 12px;
          text-align: left;
          cursor: pointer;
        }
        .kit-subject.active {
          background: var(--svy-secondary-soft);
          border-color: color-mix(in oklch, var(--svy-secondary) 42%, var(--svy-border));
          color: var(--svy-secondary);
          font-weight: 800;
        }
        .kit-history-item strong, .kit-history-item span {
          display: block;
        }
        .kit-history-item span {
          margin-top: 4px;
          color: var(--svy-muted);
          font-size: 12px;
        }
        .kit-card {
          background: var(--svy-surface);
          border: 1px solid var(--svy-border);
          border-radius: var(--svy-radius-xl);
          padding: var(--svy-space-5);
          box-shadow: var(--svy-shadow-card);
        }
        .kit-compact {
          display: grid;
          gap: var(--svy-space-4);
          align-content: start;
        }
        .kit-card-head {
          display: flex;
          justify-content: space-between;
          gap: var(--svy-space-3);
          align-items: center;
          margin-bottom: var(--svy-space-4);
        }
        .kit-problem h1 {
          margin: 0 0 var(--svy-space-3);
          font: 760 clamp(26px, 4vw, 42px)/1.08 var(--svy-font-display);
        }
        .kit-problem p, .kit-card p {
          color: var(--svy-muted);
          line-height: 1.55;
        }
        .kit-answer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--svy-space-4);
          background: var(--svy-primary-soft);
        }
        .kit-answer span, .kit-answer strong {
          display: block;
        }
        .kit-answer span {
          color: var(--svy-primary-ink);
          font-weight: 750;
        }
        .kit-answer strong {
          margin-top: 4px;
          font: 800 38px/1 var(--svy-font-mono);
        }
        .kit-steps {
          display: grid;
          gap: var(--svy-space-4);
        }
        .kit-step {
          display: grid;
          grid-template-columns: 38px minmax(0, 1fr);
          gap: var(--svy-space-3);
          padding: var(--svy-space-4);
          border: 1px solid var(--svy-border);
          border-radius: var(--svy-radius-lg);
          background: var(--svy-surface-raised);
        }
        .kit-step-index {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--svy-secondary-soft);
          color: var(--svy-secondary);
          font-weight: 850;
        }
        .kit-step code {
          display: inline-flex;
          margin-top: var(--svy-space-2);
          padding: 8px 10px;
          border-radius: var(--svy-radius-sm);
          background: var(--svy-surface-soft);
          font-family: var(--svy-font-mono);
          color: var(--svy-fg);
        }
        .kit-queue-item {
          display: flex;
          justify-content: space-between;
          gap: var(--svy-space-3);
          padding: 12px;
          border-radius: var(--svy-radius-md);
          border: 1px solid var(--svy-border);
        }
        .kit-queue-item.done {
          background: var(--svy-primary-soft);
        }
        .kit-queue-item.active {
          background: var(--svy-secondary-soft);
        }
        .kit-queue-item.idle {
          background: var(--svy-surface-soft);
          color: var(--svy-muted);
        }
        .kit-followups {
          display: grid;
          gap: var(--svy-space-2);
          box-shadow: none;
        }
        .kit-inputbar {
          position: sticky;
          bottom: 16px;
          grid-column: 2 / 3;
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr) auto;
          gap: var(--svy-space-2);
          padding: var(--svy-space-3);
          border: 1px solid var(--svy-border);
          border-radius: var(--svy-radius-xl);
          background: color-mix(in oklch, var(--svy-surface) 86%, transparent);
          box-shadow: var(--svy-shadow-sheet);
          backdrop-filter: blur(16px);
        }
        .kit-icon-button {
          width: 44px;
          height: 44px;
          border: 1px solid var(--svy-border);
          border-radius: 50%;
          background: var(--svy-surface);
          color: var(--svy-secondary);
          font: 800 22px/1 var(--svy-font-body);
          cursor: pointer;
        }
        @media (max-width: 1100px) {
          .kit-app {
            grid-template-columns: 240px minmax(0, 1fr);
          }
          .kit-queue {
            display: none;
          }
          .kit-inputbar {
            grid-column: 2 / 3;
          }
        }
        @media (max-width: 760px) {
          body {
            padding: 12px;
          }
          #root {
            min-height: calc(100vh - 24px);
          }
          .kit-app {
            grid-template-columns: 1fr;
          }
          .kit-sidebar {
            order: 2;
          }
          .kit-inputbar {
            grid-column: 1 / -1;
            grid-template-columns: 44px minmax(0, 1fr);
          }
          .kit-inputbar .svy-button {
            grid-column: 1 / -1;
          }
          .kit-answer {
            align-items: stretch;
            flex-direction: column;
          }
        }
      `}</style>

      <Sidebar activeSubject={activeSubject} onSelectSubject={setActiveSubject} />
      <ProblemCanvas activeSubject={activeSubject} messages={messages} />
      <SolverQueue activeSubject={activeSubject} />
      <InputBar value={inputValue} onChange={setInputValue} onSubmit={handleSubmit} />
    </div>
  );
};

Object.assign(window, { App });
