import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/home'
import User from './pages/user';


function App() {
  const [nameValue, setnameValue] = useState('');

  return (
    <>
      <Router>
        <header>
          <Link to='/'>
            <h1 className='logoBox'>Test page</h1>
          </Link>

          <div className='searchBox'>
            <input type="text"
              className='inputUserName'
              placeholder='이름을 입력하세요.'
              onChange={(e) => setnameValue(e.target.value)}
              value={nameValue}
            />

            <Link to={nameValue !== '' ? '/user?id=' + nameValue : '/user'}>
              <button onClick={() => {
                setnameValue('');
              }}
                className='searchBtn btn'>
                <span>검색!</span>
                <span><i className="fa-solid fa-magnifying-glass"></i></span>
              </button>
            </Link>

          </div>
        </header>

        <main>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/user' Component={User} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
