import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import './App.css';
import Home from './pages/home'
// import Char from './pages/char';
import validateUserName from './utils/validateUserName';
import Char from './pages/char';


function App() {
  const [nameValue, setnameValue] = useState('');
  const navigation = useNavigate();

  return (
    <>
      <header>
        <Link to='/' onClick={() => setnameValue('')}>
          <h1 className='logoBox'>Test page</h1>
        </Link>


        <div className='searchBox'>
          <input type="text"
            className='inputUserName'
            placeholder='캐릭터명을 입력하세요.'
            onChange={(e) => setnameValue(e.target.value)}
            value={nameValue}
          />
          <button
            type='submit'
            onClick=
            {
              (e) => {
                e.preventDefault();
                if (!validateUserName(nameValue)) {
                  alert('캐릭명을 확인해주세요.');
                } else {
                  navigation(`/char?id=${nameValue}`);
                  setnameValue(``);
                }
              }
            }
            className='searchBtn btn'>
            <span>검색!</span>
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
          </button>
        </div>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/char' element={<Char />} /> */}
            <Route path='/char' Component={Char} />
        </Routes>
      </main>
    </>
  );
}

export default App;
