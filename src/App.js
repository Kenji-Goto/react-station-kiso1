
import { Link, Outlet } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div>
      <header className="App-header">
        <Link to="/" className='sign'>掲示板</Link>
        <Link to="/threads/new" className='make'>スレッドを作成</Link>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
