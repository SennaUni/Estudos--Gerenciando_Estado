import { useCallback } from 'react';

import useFetchRepos from './queries/repo'
import useFavoriteRepoStore from './store/useFavoriteRepos';
import Card from './components/Card';

import './App.css'

const App = () => {
  const { data } = useFetchRepos('CarlosLevir');

  const favoriteRepoIds = useFavoriteRepoStore(state => state.favoriteRepoIds);
  const addToFavorites = useFavoriteRepoStore(state => state.addToFavorites);
  const removeFromFavorites = useFavoriteRepoStore(state => state.removeFromFavorites);

  const handleAddToFavorites = useCallback((repoId: number) => {
    addToFavorites(repoId);
  }, [])

  const handleRemoveFromFavorites = useCallback((repoId: number) => {
    removeFromFavorites(repoId);
  }, [])

  return (
    <div>
      {
        data?.map((value, key) => (
          <Card 
            key={key}
            repo={value}
            addToFavorites={handleAddToFavorites}
            removeFromFavorite={handleRemoveFromFavorites}
            isFavorite={favoriteRepoIds.includes(value.id)}
          />
        ))
      }
    </div>
  )
}

export default App