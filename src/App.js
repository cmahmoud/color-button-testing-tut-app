import { useState } from "react";
import "./App.css";

function App() {
    const [color, setColor] = useState("red");
    const [status, setStatus] = useState(false);
    const newButtonColor = color === "red" ? "blue" : "red";
    return (
        <div>
            <button
                style={{ backgroundColor: color }}
                onClick={() => setColor(newButtonColor)}
                disabled={status}
            >
                change to {newButtonColor}
            </button>
            <input
                type="checkbox"
                checked={status}
                aria-checked={status}
                onChange={() => setStatus(!status)}
            />
        </div>
    );
}
export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, " $1");
}
export default App;
