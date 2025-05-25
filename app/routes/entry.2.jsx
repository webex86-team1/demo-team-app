import { useState } from "react";

export default function Entry2() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleClick = (game) => {
    setSelectedGame(game);
  };

  return (
    <>
      <h1>BirthPlay</h1>
      <h2>どんなゲームで遊びたい？</h2>
      <button onClick={() => handleClick("factor")}>素因数分解</button>
      <button onClick={() => handleClick("arithmetic")}>四則演算</button>
      <button onClick={() => handleClick("match")}>数合わせ</button>
      <div></div>
    </>
  );
}
