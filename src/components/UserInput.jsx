export default function UserInput(props) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          {/* 初始投資 */}
          <label>Initial Investment</label>
          <input
            type="number"
            value={props.userInput.initialInvestment}
            onChange={(e) => props.handleChange("initialInvestment", e)}
            required
          />
        </p>
        <p>
          {/* 年投資金額 */}
          <label>Annual Investment</label>
          <input
            type="number"
            value={props.userInput.annualInvestment}
            onChange={(e) => props.handleChange("annualInvestment", e)}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          {/* 預期收益 */}
          <label>Expected Return</label>
          <input
            type="number"
            value={props.userInput.expectedReturn}
            onChange={(e) => props.handleChange("expectedReturn", e)}
            required
          />
        </p>
        <p>
          {/* 期間 */}
          <label>Duration</label>
          <input
            type="number"
            value={props.userInput.duration}
            onChange={(e) => props.handleChange("duration", e)}
            required
          />
        </p>
      </div>
    </section>
  );
}
