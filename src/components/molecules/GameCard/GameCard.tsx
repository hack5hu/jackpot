import styles from "./GameCard.module.scss";
import GameImage from "@/components/atoms/GameImage/GameImage";

const GameCard = ({ game }) => (
  <div className={styles.card}>
    <div className={styles.imageWrapper}>
      <GameImage
        src={game.thumbnail}
        alt={game.name}
        borderColor={game.borderColor}
        blurDataURL={game.thumbnailBlur}
      />
    </div>
  </div>
);

export default GameCard;

