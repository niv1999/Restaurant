import "./Desserts.css";

export function Desserts(): JSX.Element {

    const items = [ // Demo for getting desserts from our backend.
        {id: 1, name: "Ice Cream", price: 20},
        {id: 2, name: "Apple Pie", price: 25},
        {id: 3, name: "Pavlova", price: 30},
        {id: 4, name: "Eclair", price: 15}
    ];
    
    return (
        <div className="Desserts">
			<p>Our Desserts: </p>
            {items.map(item => <span key={item.id}>{item.name} 🍪 </span>)}
        </div>
    );
}
