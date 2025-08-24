import styles from "./Battle.module.css";
import Card from "../Card/Card";

function Battle() {
  return (
    <div className={styles.container}>
      <div className={styles.opponentContainer}>
        <Card />
      </div>
      <div className={styles.playerContainer}>
        <Card />
      </div>
    </div>
  );
}

export default Battle;
