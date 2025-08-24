import styles from "./Battle.module.css";
import Card from "../Card/Card";
import { useState } from "react";

function Battle() {
  const [isPlayerTurn, setIsPlayerTurn] = useState(true); // プレイヤーのターンから開始
  return (
    <div className={styles.container}>
      <div className={styles.turnIndicator}>
        {isPlayerTurn ? "あなたのターン" : "相手のターン"}
      </div>
      <div className={styles.opponentContainer}>
        <Card cardId="nyaoha" />
      </div>
      <div className={styles.playerContainer}>
        <Card cardId="hogeta" />
      </div>
    </div>
  );
}

export default Battle;
