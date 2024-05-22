const ZombieFighters = ({ fighters, team, setTeam, money, setMoney }) => {
    const handleAddFighter = (fighter) => {
        if (money >= fighter.price) {
            setTeam([...team, fighter]);
            setMoney(money - fighter.price);
        } else {
            console.log("Not enough money");
        }
    };

    return (
        <div>
            <h2>Available Fighters</h2>
            {fighters.map((fighter, index) => (
                <div key={index}>
                    <img src={fighter.img} alt={fighter.name} />
                    <h3>{fighter.name}</h3>
                    <p>Price: {fighter.price}</p>
                    <p>Strength: {fighter.strength}</p>
                    <p>Agility: {fighter.agility}</p>
                    <button onClick={() => handleAddFighter(fighter)}>Add to Team</button>
                </div>
            ))}
        </div>
    );
};

export default ZombieFighters;