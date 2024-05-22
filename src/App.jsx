import React, { useState, useEffect } from "react";
import Team from "./components/Team";
import ZombieFighters from "./components/ZombieFighters";

// const calculateTotal = team.reduce((total, member) => total + member[attribute], 0);


const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setzombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    
  ])

  useEffect(() => {
    const newTotalStrength = team.reduce(
      (acc, member) => acc + member.strength,
      0
    );
    setTotalStrength(newTotalStrength);
  
    const newTotalAgility = team.reduce(
      (acc, member) => acc + member.agility,
      0
    );
    setTotalAgility(newTotalAgility);
  }, [team]);
  
  return (
    <div>
      <h1>Zombie Apocalypse Team Manager\</h1>
      <ZombieFighters
        fighters={zombieFighters}
        team={team}
        setTeam={setTeam}
        money={money}
        setMoney={setMoney}
      />
      <div>Total Strength: {totalStrength}</div>
      <div>Total Agility: {totalAgility}</div>
      <Team team={team} setTeam={setTeam} setMoney={setMoney} />
    </div>
  );
  

// Move the export statement outside of the App component
}

export default App;
