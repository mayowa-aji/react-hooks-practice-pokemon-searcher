import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites }) {
  const [isFront, setIsFront] = useState(true)

  function handleClick(event){
    setIsFront(prev => !prev)
  }
  const spriteFlip = isFront ? sprites.front : sprites.back


  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={handleClick} src ={spriteFlip} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
