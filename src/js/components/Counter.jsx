import react from "react";
import "../../styles/counter.css";

const Counter = ({ seconds }) => {

    const safeSeconds = Math.max(0, seconds);
    const padded = String(safeSeconds).padStart(6, "0");
    const digits = padded.split("");

    return (
        <div className="counter">
            <div className="card icon">⌛</div>

            {digits.map((digit, index) => (
                <div className="card" key={index}>
                    {digit}
                </div>
            ))}
        </div>
    );
}

export default Counter;