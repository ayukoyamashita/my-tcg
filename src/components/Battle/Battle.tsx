import styles from "./Battle.module.css";
import Card from "../Card/Card";
import { useState } from "react";
import { getCardById } from "../../utils/cardUtils";
import type { Move } from "../../types/card";
import type { Effect } from "../../types/effect";
import { useTurnIndicator } from "../../hooks/useTurnIndicator";
import { useMomentState } from "../../hooks/useMomentState";

function Battle() {
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);
  const [moveName, setMoveName] = useState<string>("");
  const [showMoveName, setShowMoveName] = useState<boolean>(false);
  const { showPlayerTurnIndicator, showOpponentTurnIndicator } =
    useTurnIndicator(isPlayerTurn);

  const playerCard = getCardById("hogeta");
  const cpuCard = getCardById("nyaoha");

  const [playerHp] = useState<number>(playerCard?.hp ?? 0);
  const [playerEffect, setPlayerEffect] = useState<null | Effect>(null);
  const [cpuHp, setCpuHp] = useState<number>(cpuCard?.hp ?? 0);
  const [cpuEffect, setCpuEffect] = useMomentState<Effect>(null);

  const handlePlayerAttack = (move: Move) => {
    if (!isPlayerTurn) return;

    setMoveName(move.name);
    setShowMoveName(true);
    setTimeout(() => {
      setCpuHp((prevHp) => Math.max(0, prevHp - move.damage));
      setCpuEffect("damage", 1000);
      setIsPlayerTurn(false);
      setShowMoveName(false);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      {showPlayerTurnIndicator && (
        <div className={`${styles.turnIndicator} ${styles.playerTurn}`}>
          自分のターン
        </div>
      )}
      {showOpponentTurnIndicator && (
        <div className={`${styles.turnIndicator} ${styles.opponentTurn}`}>
          相手のターン
        </div>
      )}
      {showMoveName && <div className={styles.moveName}>{moveName}</div>}
      <div className={styles.battleField}>
        <div className={styles.opponentContainer}>
          <Card
            playerType="cpu"
            cardId="nyaoha"
            currentHp={cpuHp}
            currentEffect={cpuEffect}
          />
        </div>
        <div className={styles.playerContainer}>
          <Card
            playerType="player"
            cardId="hogeta"
            currentHp={playerHp}
            currentEffect={playerEffect}
            onAttack={handlePlayerAttack}
          />
        </div>
      </div>
    </div>
  );
}

export default Battle;
