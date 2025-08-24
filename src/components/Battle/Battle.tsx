import styles from "./Battle.module.css";
import Card from "../Card/Card";
import { useState } from "react";
import { getCardById } from "../../utils/cardUtils";

function Battle() {
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);
  
  const playerCard = getCardById("hogeta");
  const cpuCard = getCardById("nyaoha");
  
  const [playerHp, setPlayerHp] = useState<number>(playerCard?.hp ?? 0);
  const [cpuHp, setCpuHp] = useState<number>(cpuCard?.hp ?? 0);
  return (
    <div className={styles.container}>
      <div className={styles.turnIndicator}>
        {isPlayerTurn ? "あなたのターン" : "相手のターン"}
      </div>
      <div className={styles.opponentContainer}>
        <Card cardId="nyaoha" currentHp={cpuHp} />
      </div>
      <div className={styles.playerContainer}>
        <Card cardId="hogeta" currentHp={playerHp} />
      </div>
    </div>
  );
}

export default Battle;
