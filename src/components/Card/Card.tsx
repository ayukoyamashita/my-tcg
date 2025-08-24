import styles from "./Card.module.css";
import { useState } from "react";
import { getCardById } from "../../utils/cardUtils";
import { elementIcons } from "../../constants/cards";

type CardProps = {
  cardId: string;
};

function Card({ cardId }: CardProps) {
  const card = getCardById(cardId);
  const [currentHp, setCurrentHp] = useState<number>(card?.hp ?? 0);

  if (!card) {
    return <div className={styles.container}>カードが見つかりません</div>;
  }

  return (
    <div className={`${styles.container} ${styles[card.element]}`}>
      <div className={styles.header}>
        <div className={styles.name}>{card.name}</div>
        <div className={styles.hp}>{card.hp}</div>
        <div className={styles.element}>{elementIcons[card.element]}</div>
      </div>
      <figure className={styles.image}></figure>
      <ul className={styles.moves}>
        {card.moves.map((move) => (
          <li key={move.name} className={styles.move}>
            <button type="button">
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
