import { useEffect, useState } from "react";
import "./Clock.css";

export function Clock(): JSX.Element {

    const [time, setTime] = useState<string>("");

    // 1.
    // useEffect(() => { some code... }, []); // Run this code once.

    // 2.
    // useEffect(() => { some code... }, [ myKitten, myPuppy ]); // Run this code whenever myKitten or myPuppy changes.

    // 3.
    // useEffect(() => { 
    //      return () => {some code...}; //Run this code once when component destroyed
    // }, []);

    useEffect(() => {

        // Run following code once when component created:
        const timerId = setInterval(() => {
            const now = new Date();
            const currentTime = now.toLocaleTimeString();
            setTime(currentTime);
            console.log(currentTime);
        }, 1000);

        // Call following function once when component destroyed:
        return () => {
            clearInterval(timerId);
        };

    }, []);

    return (
        <div className="Clock">
			<span>{time}</span>
        </div>
    );
}
