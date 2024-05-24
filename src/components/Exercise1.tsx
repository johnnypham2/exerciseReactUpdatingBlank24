import { useState } from "react";

//We need a button when the user clicks a button it will update hte name: 'Zac' to name: 'Patrick'

const Exercise1 = () => {
    const [game, setGame] = useState({
        id:1,
        player: {
            name: "David"
        }
    });

    const handleClick = () => {
        const newName = {
          id: 1,
          player: {
            name: "Aaron"
          }   
        }
        setGame(newName);
       
    }
  return (
    <div>
      <h1>{game.player.name}</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default Exercise1
