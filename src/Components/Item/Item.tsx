import { Discount } from "../Discount/Discount";
import "./Item.css";

export function Item(): JSX.Element {
    return (
        <div className="Item">
            <p>Best item today: Pasta</p>
            <button>Click to order</button>
            <Discount />
        </div>
    );
}