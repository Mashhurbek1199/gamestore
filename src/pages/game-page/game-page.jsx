import React from "react";
import "./game-page.css";
import {useSelector} from "react-redux";
import GameImage from "../../components/GameImage/GameImage";
import GameGenre from "../../components/game-genre/game-genre";
import GameBuy from "../../components/GameBuy/GameBuy";
const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);
  if (!game) return null;
  return (
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div className="game-page__right">
          <GameImage image={game.image} />
          <p>{game.description}</p>
          <p className="secondary-text">Popular tags for this product::</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
