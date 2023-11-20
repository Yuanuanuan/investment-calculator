import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

export default function UserInput() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualInvestment, setAnnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    if (e.target.id === "initialInvestment")
      setInitialInvestment(e.target.value);
    if (e.target.id === "annualInvestment") setAnnualInvestment(e.target.value);
    if (e.target.id === "expectedReturn") setExpectedReturn(e.target.value);
    if (e.target.id === "duration") setDuration(e.target.value);

    setData(
      calculateInvestmentResults({
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration,
      })
    );
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          {/* 初始投資 */}
          <label>Initial Investment</label>
          <input type="text" id="initialInvestment" onChange={handleChange} />
        </p>
        <p>
          {/* 年投資金額 */}
          <label>Annual Investment</label>
          <input type="text" id="annualInvestment" onChange={handleChange} />
        </p>
      </div>
      <div className="input-group">
        <p>
          {/* 預期收益 */}
          <label>Expected Return</label>
          <input type="text" id="expectedReturn" onChange={handleChange} />
        </p>
        <p>
          {/* 期間 */}
          <label>Duration</label>
          <input type="text" id="duration" onChange={handleChange} />
        </p>
      </div>
    </section>
  );
}
