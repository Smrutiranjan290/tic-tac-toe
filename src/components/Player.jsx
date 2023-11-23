import React, { useState } from "react";

const Player = ({ name, symbol, isActive, onNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
    console.log(isEditing,playerName,symbol)
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={`${isActive ? "active" : undefined}`}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            required
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
