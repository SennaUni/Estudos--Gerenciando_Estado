import { Repo } from "../../queries/repo/types";

import "./styles.css";

type CardProps = {
  repo: Repo
  isFavorite: boolean;
  addToFavorites: (id: number) => void;
  removeFromFavorite: (id: number) => void;
};

const Card = ({ repo, isFavorite, addToFavorites, removeFromFavorite }: CardProps) => {

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorite(repo.id);
    } else {
      addToFavorites(repo.id);
    } 
  };

  return (
    <div className={"card"}>
      <h2>{repo.name}</h2>

      <div className="card-buttons">
        <button onClick={handleToggleFavorite}>
          {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </button>
      </div>
    </div>
  )
}

export default Card