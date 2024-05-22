
const Team = ({ 
    team, 
    setTeam, 
    setMoney 
}) => {
    const handleRemoveFighter = (indexToRemove) => {
        const newTeam = team.filter((_, index) => index !== indexToRemove);
        const refund = team[indexToRemove].price;
        setTeam(newTeam);
        setMoney(prevMoney => prevMoney + refund);
    };
    
    return (
        <div>
            <h2>Your Team</h2>
            {team.length === 0 ? <p>Pick some team members!</p> : team.map((member, index) => (
                <div key={index}>
                    <img src={member.img} alt={member.name} />
                    <h3>{member.name}</h3>
                    <p>Price: {member.price}</p>
                    <p>Strength: {member.strength}</p>
                    <p>Agility: {member.agility}</p>
                    <button onClick={() => handleRemoveFighter(index)}>Remove from Team</button>
                </div>
            ))}
        </div>
    );
};

export default Team;