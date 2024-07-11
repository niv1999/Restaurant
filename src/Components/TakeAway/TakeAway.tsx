import css from "./TakeAway.module.css"; // Second method to avoid CSS Leaking

export function TakeAway(): JSX.Element {
    return(
        <div>
            <p className={css.CoolPar}>You can also take away from our restaurant its really good food</p>
        </div>
    );
}