import Player from './component/Player';
import GameBoard from './component/GameBoard';

function App() {
   return (
      <main>
         <div id='game-container'>
            <ol id='players'>
               <Player initialName='Player 1' symbol='X' />
               <Player initialName='Player 2' symbol='O' />
            </ol>
            <GameBoard />
         </div>
      </main>
   );
}

export default App;
