const SolverQueue = ({ activeSubject }) => {
  const items = [
    { label: "识别题目", state: "完成", tone: "done" },
    { label: "拆解步骤", state: "完成", tone: "done" },
    { label: "代入检查", state: "进行中", tone: "active" },
    { label: "生成练习", state: "待开始", tone: "idle" }
  ];

  return (
    <aside className="kit-queue" aria-label="解题队列">
      <div className="kit-card kit-compact">
        <span className="svy-chip">{activeSubject}</span>
        <h2>解题进度</h2>
        <div className="kit-queue-list">
          {items.map((item) => (
            <div className={`kit-queue-item ${item.tone}`} key={item.label}>
              <span>{item.label}</span>
              <strong>{item.state}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="kit-card kit-compact">
        <h2>检查摘要</h2>
        <p>答案已代入原式，左右两边相等。建议再做一道同类型练习巩固。</p>
        <button type="button" className="svy-button svy-button-secondary">查看公式</button>
      </div>
    </aside>
  );
};

Object.assign(window, { SolverQueue });
