import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useCallback, useState } from 'react';
import './App.css';
import Home from './pages/home'
// import User from './pages/user';
import Char from './pages/char';


function App() {
  const [nameValue, setnameValue] = useState('');

  const handleInputChange = useCallback((e: any) => {
    setnameValue(e.target.value);
  }, []);

  const handleSearchClick = useCallback(() => {
    setnameValue('');
  }, []);


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
              onChange={handleInputChange}
              value={nameValue}
            />


            <Link to={nameValue !== '' ? '/char?id=' + nameValue : '/char'}>
              <button onClick={handleSearchClick}
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
            {/* <Route path='/user' Component={User} /> */}
            <Route path='/char' Component={Char} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
