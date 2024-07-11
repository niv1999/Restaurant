import "./RandomDish.css";
import sushi from "../../Assets/Images/sushi.jpg"
import burger from "../../Assets/Images/burger.jpg"
import steak from "../../Assets/Images/steak.jpg"
import pasta from "../../Assets/Images/pasta.webp"
import pizza from "../../Assets/Images/pizza.jpg"
import { SyntheticEvent, useEffect, useState } from "react";

export function RandomDish(): JSX.Element {

    const dishes = [sushi, burger, steak, pasta, pizza];
    const [index, setIndex] = useState<number>(0);
    const [isFrozen, setIsFrozen] = useState<boolean>(false);
    
    useEffect(() => {
        let timerId: NodeJS.Timeout;

        if(!isFrozen) {
            timerId = setInterval(() => {
                setIndex(Math.floor(Math.random() * dishes.length))
            }, 1000);
        }

        return () => clearInterval(timerId);

    }, [isFrozen]);

    function toggle(): void {
        setIsFrozen(!isFrozen)
    }

    return (
        <div className="RandomDish">
			<img src={dishes[index]} />
            <button onClick={toggle}>{isFrozen ? "Continue" : "Freeze"}</button>
        </div>
    );
}
