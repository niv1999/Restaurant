import { useState } from "react";
import "./Clicker.css";

export function Clicker(): JSX.Element {

    const [counter, setCounter] = useState<number>(0);

    function raiseCount(): void {
        setCounter(counter + 1);
    }

    function initToZero(): void{
        setCounter(0);
    }

    return (
        <div className="Clicker">
			<button onClick={raiseCount}>Click Me</button>
            <span>Total Clicks: {counter} </span>
            <button onClick={initToZero}>0️⃣</button>
        </div>
    );
}
