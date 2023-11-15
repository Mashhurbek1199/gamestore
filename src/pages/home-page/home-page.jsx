import React from "react";
import "./home-page.css";
import GameItem from "./../../components/GameItem/GameItem";

const GAMES = [
  {
    id: 1,
    image: "/gameImages/cs2.jpg",
    title: "Counter-Strike 2",
    genres: ["Action", " First-person shooter "],
    price: 230,
    video: "https://www.youtube.com/embed/c80dVYcL69E",
    description:
      "Counter-Strike 2 is a 2023 multiplayer tactical first-person shooter game developed and published by Valve. It is the fifth main installment of the Counter-Strike series. Developed as an updated version of the previous main entry, Counter-Strike: Global Offensive (2012), it was announced on March 22, 2023 and was released on September 27, 2023",
  },
  {
    id: 2,
    image: "/gameImages/dota2.jpg",
    title: "Dota 2",
    genres: ["Action", " MOBA  "],
    price: 250,
    video: "https://www.youtube.com/embed/-cSFPIwMEq4",
    description:
      "Dota 2 is a multiplayer team computer game in the MOBA genre developed and published by Valve Corporation. The game is a continuation of DotA, a custom map modification for the game Warcraft III: Reign of Chaos and its add-on Warcraft III: The Frozen Throne.",
  },
  {
    id: 3,
    image: "/gameImages/ark.jpg",
    title: "ARK: Survival Ascended",
    genres: ["Action", " Adventure  ", "Massively Multiplayer"],
    price: 200,
    video: "https://www.youtube.com/embed/FW9vsrPWujI",
    description:
      " ARK: Survival Ascended includes access to all of ARKs worlds, including Scorched Earth, Aberration, Extinction, ARK Genesis Part 1, ARK Genesis Part 2, and more. The Island is released now, with the subsequent expansion worlds to be added at no additional cost on a regular basis.",
  },

  {
    id: 4,
    image: "/gameImages/life_is_strange_true_colors.jpeg",
    title: "Life is Strange True Colors",
    genres: ["Graphic adventure ", "Interactive drama"],
    video: "https://www.youtube.com/embed/b6CkzwVAr0M",
    price: 300,
    description:
      "Alex Chen hides his “curse” from everyone - the supernatural ability to read the strong emotions of others and influence them. But when her brother dies, allegedly in an accident, Alex uses her to find out the truth.",
  },
  {
    id: 5,
    image: "/gameImages/Call_Of_Duty_MW3_2023.jpg",
    title: "Call of duty modern warfare 3 ",
    genres: ["Action", " First-person shooter "],
    video: "https://www.youtube.com/embed/mHDEDDrGYvo",
    price: 275,
    description:
      "Call of Duty: MoCall of Duty: Modern Warfare III is a first-person shooter computer game developed by Sledgehammer Games, publisher of king Activision. It is a threequel to 2019's Call of Duty: Modern Warfare, and the twentieth installment in the series.dern Warfare III — компьютерная игра в жанре шутер от первого лица, разработанная компанией Sledgehammer Games, издателем мужчин Activision. Это триквел Call of Duty: Modern Warfare 2019 года, а также двадцатая часть серии..",
  },

  {
    id: 6,
    image: "/gameImages/battlefield_2042.jpg",
    title: "Battlefield 2042",
    genres: ["Action", " First-person shooter"],
    video: "https://www.youtube.com/embed/ASzOzrB-a9E",
    price: 243,

    description:
      "Battlefield™ 2042 is a first-person shooter that returns the franchise to its iconic large-scale battles. In a future of chaos, adapt and thrive on ever-changing battlefields with your squad and an arsenal of cutting-edge technology.",
  },
  {
    id: 7,
    image: "/gameImages/gta_v.jpeg",
    title: "Grand Theft Auto V",
    genres: ["Action adventure", "Third person shooter"],
    video: "https://www.youtube.com/embed/QkkoHAzjnUs",
    price: 150,

    description:
      "Grand Theft Auto V for PC allows players to explore the iconic world of Los Santos and Blaine County in resolutions up to 4k and above at 60 frames per second.",
  },
  {
    id: 8,
    image: "/gameImages/rainbow_siege.jpeg",
    title: "Tom Clancy's Rainbow Six® Siege",
    video: "https://www.youtube.com/embed/6wlvYh0h63k",
    genres: ["Tactics", "Shooter"],
    price: 50,

    description:
      "Tom Clancy's Rainbow Six Siege is a sequel to the acclaimed first-person shooter developed by Ubisoft Montreal.",
  },
  {
    id: 9,
    image: "/gameImages/assassins_creed_valhalla.png",
    title: "Assassin’s Creed Valhalla",
    genres: ["Parkour", "RPG", "Open world"],
    video: "https://www.youtube.com/embed/ssrNcwxALS4",
    price: 75,

    description:
      "Assassin's Creed Valhalla is a multi-platform computer game in the action/RPG genre, developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth game in the Assassin's Creed series.",
  },
];

const HomePage = () => {
  return (
    <div className="home-page">
      {GAMES.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
};

export default HomePage;
