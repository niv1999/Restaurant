import { SyntheticEvent, useState } from "react";
import "./Specials.css";

export function Specials(): JSX.Element {

    // Create a state for special item:
    // const arr = useState<string>();
    // const item = arr[0]; // This is the state variable.    
    // const setItem = arr[1]; // A function for (a) changing the variable, (b) rerender the component

    // Same as above using Destructuring Assignment(Unpacking):
    const [item, setItem] = useState<string>("Click to show our specials");

    function show(args: SyntheticEvent): void{
        console.log("The element raising the event:", args.target);
        setItem("Our special for today is: Pasta");
    }
    
    return (
        <div className="Specials">
			<button onClick={show}>Show Specials</button>
            <span> {item} </span>
        </div>
    );
}
