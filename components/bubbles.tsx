export function Bubbles({ count = 100 }) {
  return (
    <div className="fixed inset-0">
      {new Array(100).fill("").map((_, i) => {
        return (
          <div className="bubble-container" key={i}>
            <div className="bubble"></div>
          </div>
        );
      })}
    </div>
  );
}
