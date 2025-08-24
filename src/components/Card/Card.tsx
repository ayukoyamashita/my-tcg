import styles from "./Card.module.css";

import { getCardById } from "../../utils/cardUtils";
import { elementIcons } from "../../constants/cards";
import type { Move } from "../../types/card";

type BaseCardProps = {
  playerType: "player" | "cpu";
  cardId: string;
  currentHp: number;
  onAttack?: (move: Move) => void;
};

type PlayerCardProps = BaseCardProps & {
  playerType: "player";
  onAttack: (move: Move) => void;
};

type CpuCardProps = BaseCardProps & {
  playerType: "cpu";
};

type CardProps = PlayerCardProps | CpuCardProps;

function Card({ playerType, cardId, currentHp, onAttack }: CardProps) {
  const card = getCardById(cardId);

  if (!card) {
    return <div className={styles.container}>カードが見つかりません</div>;
  }

  const handleAttack = (move: Move) => {
    if (playerType === "player") {
      onAttack(move);
    }
  };

  return (
    <div className={`${styles.container} ${styles[card.element]}`}>
      <div className={styles.header}>
        <div className={styles.name}>{card.name}</div>
        <div className={styles.hp}>{currentHp}</div>
        <div className={styles.element}>{elementIcons[card.element]}</div>
      </div>
      <figure className={styles.image}></figure>
      <ul className={styles.moves}>
        {card.moves.map((move) => (
          <li key={move.name} className={styles.move}>
            <button
              type="button"
              onClick={() => handleAttack(move)}
              disabled={playerType === "cpu"}
            >
              <span className={styles.moveName}>{move.name}</span>
              <span className={styles.moveDamage}>{move.damage}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
