const StepCard = ({ index, title, body, equation }) => {
  return (
    <article className="kit-step">
      <div className="kit-step-index">{index}</div>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
        {equation ? <code>{equation}</code> : null}
      </div>
    </article>
  );
};

Object.assign(window, { StepCard });
