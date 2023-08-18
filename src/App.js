
import './App.css';
import { Threads } from './Threads';


function App() {
  return (
    <div>
      <header className="App-header">
        <h2 className='sign'>掲示板</h2>
        <a className='make' href='th'>スレッドを作成</a>
      </header>
      <Threads />
    </div>
  );
}

export default App;
