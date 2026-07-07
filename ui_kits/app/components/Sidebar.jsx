const Sidebar = ({ activeSubject, onSelectSubject }) => {
  const subjects = ["代数", "几何", "微积分", "化学", "物理"];
  const history = [
    { title: "一次方程", meta: "3 分钟前 · 已完成" },
    { title: "三角形角度", meta: "今天 · 待检查" },
    { title: "化学方程配平", meta: "昨天 · 进行中" }
  ];

  return (
    <aside className="kit-sidebar" aria-label="学习导航">
      <div className="kit-brand">
        <div className="kit-brand-mark">S</div>
        <div>
          <strong>Solvely.ai</strong>
          <span>Solver Workspace</span>
        </div>
      </div>

      <section className="kit-section">
        <h2>学科</h2>
        <div className="kit-subjects">
          {subjects.map((subject) => (
            <button
              key={subject}
              type="button"
              className={subject === activeSubject ? "kit-subject active" : "kit-subject"}
              onClick={() => onSelectSubject(subject)}
            >
              {subject}
            </button>
          ))}
        </div>
      </section>

      <section className="kit-section">
        <h2>最近题目</h2>
        <div className="kit-history">
          {history.map((item) => (
            <button type="button" className="kit-history-item" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.meta}</span>
            </button>
          ))}
        </div>
      </section>
    </aside>
  );
};

Object.assign(window, { Sidebar });
