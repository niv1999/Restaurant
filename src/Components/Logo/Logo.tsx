import "./Logo.css";
import logoSource1 from "../../Assets/Images/restaurant-logo.webp";
import logoSource2 from "../../Assets/Images/restaurant-logo2.webp";
import logoSource3 from "../../Assets/Images/restaurant-logo3.jpg";

export function Logo(): JSX.Element {

    const arr = [logoSource1, logoSource2, logoSource3];
    const index = Math.floor(Math.random() * 3);
    return (
        <div className="Logo">
			<img src={logoSource1} />
			<img src={logoSource2} />
			<img src={logoSource3} />
            <hr></hr>
            <img src={arr[index]} />
        </div>
    );
}
