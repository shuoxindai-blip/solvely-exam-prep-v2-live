const ExamPrepWizard = ({ onComplete }) => {
  const [page, setPage] = React.useState(1);
  const [exam, setExam] = React.useState(null);
  const [grade, setGrade] = React.useState(null);
  const [uploads, setUploads] = React.useState([]);

  const examOptions = [
    { id: 'ap-bio', icon: '🧬', title: 'AP Biology', desc: 'Plan by Unit, FRQ, MCQ and high-frequency topics' },
    { id: 'sat-math', icon: '📐', title: 'SAT Math', desc: 'Plan by weak areas and score-efficiency' },
    { id: 'school-exam', icon: '📝', title: 'School Exam', desc: 'Midterm, final, or chapter test prep' },
    { id: 'custom', icon: '➕', title: 'Custom Exam', desc: 'Upload syllabus / rubric for a tailored plan' },
  ];

  const gradeOptions = [
    { id: 'middle', emoji: '📚', title: 'Middle School', desc: 'Grades 6–8' },
    { id: 'high', emoji: '🎓', title: 'High School', desc: 'Grades 9–12' },
    { id: 'college', emoji: '🏛️', title: 'College', desc: 'Undergraduate' },
    { id: 'grad', emoji: '🔬', title: 'Graduate', desc: "Master's / PhD" },
  ];

  const uploadOptions = [
    { id: 'textbook', icon: '📖', title: 'Textbook / Chapter', desc: 'Identify knowledge structure and exam scope' },
    { id: 'notes', icon: '📂', title: 'Class Notes / Slides', desc: 'Align with what your teacher emphasizes' },
    { id: 'wrong', icon: '❌', title: 'Wrong Questions / Quiz', desc: 'Prioritize your weakest topics first' },
  ];

  const toastMessages = {
    'ap-bio': "We'll match AP Bio's 8-unit structure, weight FRQ topics, and pull from past exam patterns.",
    'sat-math': "We'll organize by SAT Math domains, prioritize high-impact question types, and adapt to your weak areas.",
    'school-exam': "We'll structure around chapter-based review, key concepts your teacher likely tests, and efficient practice.",
    'custom': "We'll analyze your syllabus or rubric to identify exact topics, point distribution, and study priorities.",
  };

  const gradeMessages = {
    'middle': "We'll match content to Grades 6–8 curriculum standards and appropriate difficulty.",
    'high': "We'll align with 9–12 standards, including AP/Honors pacing where relevant.",
    'college': "We'll structure around lecture-exam formats, textbook chapters, and deeper concept coverage.",
    'grad': "We'll focus on research-depth topics, qualifying exam patterns, and advanced problem sets.",
  };

  const toggleUpload = (id) => {
    setUploads(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="wizard-container">
      <style>{`
        .wizard-container {
          min-height: calc(100vh - 48px);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .wizard-phone {
          width: 393px;
          min-height: 780px;
          background: var(--svy-surface);
          border-radius: var(--svy-radius-xl);
          border: 1px solid var(--svy-border);
          box-shadow: var(--svy-shadow-sheet);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }
        .wizard-topbar {
          padding: 20px 24px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font: 600 13px/1 var(--svy-font-body);
          color: var(--svy-muted);
        }
        .wizard-progress {
          display: flex;
          gap: 6px;
          padding: 0 24px 20px;
        }
        .wizard-progress-seg {
          flex: 1;
          height: 4px;
          border-radius: 2px;
          background: var(--svy-border);
          transition: background 400ms ease;
        }
        .wizard-progress-seg.filled {
          background: var(--svy-secondary);
        }
        .wizard-content {
          flex: 1;
          padding: 0 24px;
          overflow-y: auto;
        }
        .wizard-label {
          font: 600 13px/1 var(--svy-font-body);
          color: var(--svy-secondary);
          margin-bottom: 8px;
        }
        .wizard-title {
          font: 700 24px/1.2 var(--svy-font-display);
          color: var(--svy-fg);
          margin: 0 0 8px;
        }
        .wizard-desc {
          font: 400 14px/1.5 var(--svy-font-body);
          color: var(--svy-muted);
          margin: 0 0 24px;
        }
        .wizard-option {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 14px;
          background: var(--svy-surface);
          border: 1.5px solid var(--svy-border);
          border-radius: var(--svy-radius-md);
          margin-bottom: 10px;
          cursor: pointer;
          transition: border-color 200ms ease, background 200ms ease;
        }
        .wizard-option:hover {
          border-color: var(--svy-border-strong);
        }
        .wizard-option.selected {
          border-color: var(--svy-secondary);
          background: var(--svy-secondary-soft);
        }
        .wizard-option-icon {
          width: 42px;
          height: 42px;
          border-radius: 11px;
          background: var(--svy-surface-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }
        .wizard-option-text h4 {
          margin: 0;
          font: 600 15px/1.3 var(--svy-font-body);
          color: var(--svy-fg);
        }
        .wizard-option-text p {
          margin: 2px 0 0;
          font: 400 12px/1.3 var(--svy-font-body);
          color: var(--svy-muted);
        }
        .wizard-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--svy-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: auto;
          flex-shrink: 0;
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 200ms ease, transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wizard-option.selected .wizard-check {
          opacity: 1;
          transform: scale(1);
        }
        .wizard-grade-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .wizard-grade {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 18px 10px;
          background: var(--svy-surface);
          border: 1.5px solid var(--svy-border);
          border-radius: var(--svy-radius-md);
          cursor: pointer;
          text-align: center;
          transition: border-color 200ms ease, background 200ms ease;
        }
        .wizard-grade:hover {
          border-color: var(--svy-border-strong);
        }
        .wizard-grade.selected {
          border-color: var(--svy-secondary);
          background: var(--svy-secondary-soft);
        }
        .wizard-grade-emoji {
          font-size: 26px;
          margin-bottom: 6px;
        }
        .wizard-grade h4 {
          margin: 0;
          font: 600 14px/1.3 var(--svy-font-body);
        }
        .wizard-grade p {
          margin: 2px 0 0;
          font: 400 12px/1.3 var(--svy-font-body);
          color: var(--svy-muted);
        }
        .wizard-upload {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 14px;
          background: var(--svy-surface);
          border: 1.5px dashed var(--svy-border);
          border-radius: var(--svy-radius-md);
          margin-bottom: 10px;
          cursor: pointer;
          transition: border-color 200ms ease, background 200ms ease;
        }
        .wizard-upload:hover {
          border-color: var(--svy-secondary);
        }
        .wizard-upload.uploaded {
          border-style: solid;
          border-color: var(--svy-primary);
          background: var(--svy-primary-soft);
        }
        .wizard-upload-badge {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--svy-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: auto;
          flex-shrink: 0;
          opacity: 0;
          transition: opacity 200ms ease;
        }
        .wizard-upload.uploaded .wizard-upload-badge {
          opacity: 1;
        }
        .wizard-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 4px;
          margin-bottom: 12px;
        }
        .wizard-chip {
          padding: 5px 12px;
          border-radius: var(--svy-radius-pill);
          background: var(--svy-surface);
          border: 1px solid var(--svy-border);
          font: 500 12px/1 var(--svy-font-body);
          color: var(--svy-secondary);
        }
        .wizard-toast {
          margin-top: 14px;
          padding: 12px 14px;
          background: var(--svy-surface-soft);
          border: 1px solid var(--svy-border);
          border-radius: var(--svy-radius-md);
          display: flex;
          align-items: flex-start;
          gap: 10px;
          animation: wizardFadeIn 300ms ease forwards;
        }
        @keyframes wizardFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .wizard-toast-icon {
          color: var(--svy-secondary);
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .wizard-toast-text {
          font: 400 13px/1.5 var(--svy-font-body);
          color: var(--svy-fg);
        }
        .wizard-bottom {
          padding: 16px 24px 24px;
        }
        .wizard-btn-primary {
          width: 100%;
          height: 50px;
          border: none;
          border-radius: var(--svy-radius-pill);
          background: var(--svy-secondary);
          color: white;
          font: 600 15px/1 var(--svy-font-body);
          cursor: pointer;
          transition: background 200ms ease, opacity 200ms ease;
        }
        .wizard-btn-primary:hover {
          background: oklch(56% 0.14 235);
        }
        .wizard-btn-primary:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .wizard-btn-primary.green {
          background: var(--svy-primary);
        }
        .wizard-btn-primary.green:hover {
          background: var(--svy-primary-hover);
        }
        .wizard-btn-back {
          width: 100%;
          height: 44px;
          border: 1px solid var(--svy-border);
          border-radius: var(--svy-radius-pill);
          background: var(--svy-surface);
          color: var(--svy-fg);
          font: 500 14px/1 var(--svy-font-body);
          cursor: pointer;
          margin-top: 8px;
          transition: background 160ms ease;
        }
        .wizard-btn-back:hover {
          background: var(--svy-surface-soft);
        }
      `}</style>

      <div className="wizard-phone">
        <div className="wizard-topbar">
          <span>Step {page} / 3</span>
          <span>Exam Prep Agent</span>
        </div>
        <div className="wizard-progress">
          <div className={`wizard-progress-seg ${page >= 1 ? 'filled' : ''}`}></div>
          <div className={`wizard-progress-seg ${page >= 2 ? 'filled' : ''}`}></div>
          <div className={`wizard-progress-seg ${page >= 3 ? 'filled' : ''}`}></div>
        </div>

        <div className="wizard-content">
          {page === 1 && (
            <>
              <div className="wizard-label">Exam Goal</div>
              <h1 className="wizard-title">What exam are you preparing for?</h1>
              <p className="wizard-desc">Choose your exam type. We'll plan around its structure, key topics, and time weight.</p>
              {examOptions.map(opt => (
                <div
                  key={opt.id}
                  className={`wizard-option ${exam === opt.id ? 'selected' : ''}`}
                  onClick={() => setExam(opt.id)}
                >
                  <div className="wizard-option-icon">{opt.icon}</div>
                  <div className="wizard-option-text">
                    <h4>{opt.title}</h4>
                    <p>{opt.desc}</p>
                  </div>
                  <div className="wizard-check">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2.5 7.5 5.5 10.5 11.5 4.5"/></svg>
                  </div>
                </div>
              ))}
              {exam && (
                <div className="wizard-toast" key={exam}>
                  <span className="wizard-toast-icon">✓</span>
                  <span className="wizard-toast-text"><strong>Got it!</strong> {toastMessages[exam]}</span>
                </div>
              )}
            </>
          )}

          {page === 2 && (
            <>
              <div className="wizard-label">Grade Level</div>
              <h1 className="wizard-title">What's your grade?</h1>
              <p className="wizard-desc">This helps us match the difficulty level and pacing to your curriculum.</p>
              <div className="wizard-grade-grid">
                {gradeOptions.map(opt => (
                  <div
                    key={opt.id}
                    className={`wizard-grade ${grade === opt.id ? 'selected' : ''}`}
                    onClick={() => setGrade(opt.id)}
                  >
                    <div className="wizard-grade-emoji">{opt.emoji}</div>
                    <h4>{opt.title}</h4>
                    <p>{opt.desc}</p>
                  </div>
                ))}
              </div>
              {grade && (
                <div className="wizard-toast" key={grade}>
                  <span className="wizard-toast-icon">✓</span>
                  <span className="wizard-toast-text"><strong>Noted!</strong> {gradeMessages[grade]}</span>
                </div>
              )}
            </>
          )}

          {page === 3 && (
            <>
              <div className="wizard-label">Study Materials</div>
              <h1 className="wizard-title">Upload your materials</h1>
              <p className="wizard-desc">These make your plan more personalized — focusing on what you actually need.</p>
              {uploadOptions.map(opt => (
                <div
                  key={opt.id}
                  className={`wizard-upload ${uploads.includes(opt.id) ? 'uploaded' : ''}`}
                  onClick={() => toggleUpload(opt.id)}
                >
                  <div className="wizard-option-icon">{opt.icon}</div>
                  <div className="wizard-option-text">
                    <h4>{opt.title}</h4>
                    <p>{opt.desc}</p>
                  </div>
                  <div className="wizard-upload-badge">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2 6 5 9 10 3.5"/></svg>
                  </div>
                </div>
              ))}
              <div className="wizard-chips">
                <span className="wizard-chip">PDF</span>
                <span className="wizard-chip">Photo</span>
                <span className="wizard-chip">Notes</span>
                <span className="wizard-chip">Past Quiz</span>
              </div>
              {uploads.length > 0 && (
                <div className="wizard-toast" key={uploads.join(',')}>
                  <span className="wizard-toast-icon">✓</span>
                  <span className="wizard-toast-text"><strong>{uploads.length} material{uploads.length > 1 ? 's' : ''} added.</strong> Your plan will be cross-referenced with proven study patterns for your exam type.</span>
                </div>
              )}
            </>
          )}
        </div>

        <div className="wizard-bottom">
          {page < 3 ? (
            <button
              className="wizard-btn-primary"
              disabled={page === 1 ? !exam : !grade}
              onClick={() => setPage(page + 1)}
            >
              Continue
            </button>
          ) : (
            <button
              className="wizard-btn-primary green"
              onClick={() => onComplete({ exam, grade, uploads })}
            >
              Generate Exam Prep
            </button>
          )}
          {page > 1 && (
            <button className="wizard-btn-back" onClick={() => setPage(page - 1)}>
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { ExamPrepWizard });
