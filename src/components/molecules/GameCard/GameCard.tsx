import styles from "./GameCard.module.scss";
import GameImage from "@/components/atoms/GameImage/GameImage";
import { GameCardProps } from "./type";
import HeartIcon from "@/assets/icons/HeartIcon";
import { gameStates } from "@/store/gameStates";

const GameCard = ({ game }: GameCardProps) => {
  const { favoriteGame = [], setFavoriteGame } = gameStates();

  const isFavorite = favoriteGame.some((fav) => fav.slug === game.slug);

  const toggleFavorite = () => {
    if (setFavoriteGame) setFavoriteGame(game);
  };
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.heartWrapper}>
          <HeartIcon isActive={isFavorite} onClick={toggleFavorite} />
        </div>
        <GameImage
          src={game.thumbnail}
          alt={game.name}
          borderColor={game.borderColor}
          blurDataURL={game.thumbnailBlur}
        />
      </div>
    </div>
  );
};

export default GameCard;

