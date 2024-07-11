import "./Discount.css";

export function Discount(): JSX.Element {
    const percent = Math.floor(Math.random() * 15);

    function isWeekend(): boolean {
        const now = new Date();
        const day = now.getDay() + 1; // getDay returns 0 for Sunday.
        return day >= 6;
    }

    // Conditional Rendering - first way:
    if (percent < 5) {
        return (
            <div className="Discount">
                <p>No discount today 😔</p>
            </div>
        );
    }
    
    return (
        <div className="Discount">
            {/* Conditional Rendering - second way: */}
			{ isWeekend() ? 
                <p>Only now on weekends - {percent}% discount on all beverages!</p> : 
                <p>Only on Happy Hour - {percent}% discount on all beverages</p>
            }

            {/* Conditional Rendering - third way: */}
            { isWeekend() && <p>Happy Weekend!</p>}
        </div>
    );
}
