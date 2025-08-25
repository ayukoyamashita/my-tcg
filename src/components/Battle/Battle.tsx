import styles from "./Battle.module.css";
import Card from "../Card/Card";
import { useState } from "react";
import { getCardById } from "../../utils/cardUtils";
import type { Move } from "../../types/card";

function Battle() {
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);
  
  const playerCard = getCardById("hogeta");
  const cpuCard = getCardById("nyaoha");
  
  const [playerHp] = useState<number>(playerCard?.hp ?? 0);
  const [cpuHp, setCpuHp] = useState<number>(cpuCard?.hp ?? 0);
  
  const handlePlayerAttack = (move: Move) => {
    if (!isPlayerTurn) return;
    
    setCpuHp(prevHp => Math.max(0, prevHp - move.damage));
    setIsPlayerTurn(false);
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.turnIndicator}>
        {isPlayerTurn ? "あなたのターン" : "相手のターン"}
      </div>
      <div className={styles.opponentContainer}>
        <Card playerType="cpu" cardId="nyaoha" currentHp={cpuHp} />
      </div>
      <div className={styles.playerContainer}>
        <Card playerType="player" cardId="hogeta" currentHp={playerHp} onAttack={handlePlayerAttack} />
      </div>
    </div>
  );
}

export default Battle;
