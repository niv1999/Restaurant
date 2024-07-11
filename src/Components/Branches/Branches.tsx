import "./Branches.css";

export function Branches(): JSX.Element {
    const branches = [
        {id: 1, branch: "Tel-Aviv", address: "Homa Ve-Migdal 29"},
        {id: 2, branch: "Jerusalem", address: "The Technology Park"},
        {id: 3, branch: "Haifa", address: "Markoni 39"},
    ];

    return (
        <div className="Branches">
			<p>Our Branches:</p>
            <ul>
                {branches.map(branch => <li key={branch.id}>{branch.branch} - {branch.address}</li>)}
            </ul>
        </div>
    );
}
