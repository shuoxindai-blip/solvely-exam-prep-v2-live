const ProblemCanvas = ({ activeSubject, messages }) => {
  const { StepCard } = window;
  const steps = [
    {
      title: "把常数项移到右边",
      body: "等式两边同时减 7，保持等式成立。",
      equation: "2x + 7 - 7 = 19 - 7"
    },
    {
      title: "化简并除以系数",
      body: "得到 2x = 12 后，两边同时除以 2。",
      equation: "x = 12 / 2 = 6"
    },
    {
      title: "代入检查",
      body: "将 x = 6 代回原式，确认左右相等。",
      equation: "2(6) + 7 = 19"
    }
  ];

  return (
    <main className="kit-canvas" aria-label="解题内容">
      <section className="kit-card kit-problem">
        <div className="kit-card-head">
          <span className="svy-chip">{activeSubject}</span>
          <span className="kit-confidence">置信度 96%</span>
        </div>
        <h1>解方程 2x + 7 = 19</h1>
        <p>题目已识别为一次方程。下面展示可复查的分步推理。</p>
      </section>

      <section className="kit-card kit-answer">
        <div>
          <span>最终答案</span>
          <strong>x = 6</strong>
        </div>
        <button type="button" className="svy-button svy-button-primary">生成相似练习</button>
      </section>

      <section className="kit-card kit-steps">
        <h2>解题步骤</h2>
        {steps.map((step, idx) => (
          <StepCard key={step.title} index={idx + 1} {...step} />
        ))}
      </section>

      {messages.length > 0 ? (
        <section className="kit-card kit-followups">
          <h2>追问记录</h2>
          {messages.map((message, index) => (
            <p key={`${message}-${index}`}>{message}</p>
          ))}
        </section>
      ) : null}
    </main>
  );
};

Object.assign(window, { ProblemCanvas });
