import './App.css';
import GameCard from "./components/GameCard/GameCard.tsx";

const App = () => {

  return (
      <>
        <div className="playingCards faceImages">
          <GameCard rank={'10'} suit={'hearts'}/>
        </div>
      </>
  );
};

export default App;
