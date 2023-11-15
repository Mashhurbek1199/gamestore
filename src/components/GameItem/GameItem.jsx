import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentGame} from "../../redux/game/reducer";
import "./GameItem.css";
import GameImage from "../GameImage/GameImage";
import GameBuy from "../GameBuy/GameBuy";
import GameGenre from "../game-genre/game-genre";
const GameItem = ({game}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
    
  };
  return (
    <div className="game-item" onClick={handleClick}>
      <GameImage image={game.image} />
      <div className="game-item___details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};

export default GameItem;
