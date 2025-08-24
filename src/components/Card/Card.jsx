import styles from "./Card.module.css";
import { getCardById } from "../../utils/cardUtils";

function Card({ cardId }) {
	const card = getCardById(cardId);
	return <div className={styles.container}>
		<div className={styles.name}>{card.name}</div>
		<div className={styles.element}>{card.element}</div>
		<div className={styles.hp}>{card.hp}</div>
		<div className={styles.moves}>{card.moves.map((move) => move.name).join(", ")}</div>
	</div>;
}

export default Card;
