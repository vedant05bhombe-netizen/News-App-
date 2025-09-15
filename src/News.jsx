import React, { useEffect, useState } from 'react'
import icon from './icons8-news.svg'
import icon1 from './icons8-search.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './About.jsx'
import './News.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [News, SetNews] = useState([]);
  const [dark, Setdark] = useState(false);

  function toggle() {
    Setdark(prev => !prev);
    console.log('toggling.....')

  }


  useEffect(() => {
    async function news() {

      const URL = `https://gnews.io/api/v4/top-headlines?country=in&lang=en&apikey=a27deb87865f84bfbd141b87929084e4`
      const response = await fetch(URL);
      console.log("fetching...")
      const data = await response.json();
      console.log(data)
      SetNews(data.articles)
    }
    news()
  }, []);

  return (
    <>
      <div className={dark ? 'dark-mode' : 'white-mode'}>
        <Link to="/"> </Link>
        <div className='logo-in' >
          <div>
            <strong> <img src={icon} alt="" /> </strong>
            <strong className='title'> InstaNews </strong>
          </div>

         <div className="d-flex align-items-center">
  <Link to="/search" className="but11">
  
    <img className="img2" src={icon1} alt="search icon" />
    
  </Link>

  <div className="form-check form-switch d-flex align-items-center ms-3">
    <input onChange={toggle} className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
    <label className="form-check-label ms-2" htmlFor="switchCheckDefault">{dark ? '' : 'DARK'}</label>
  </div>
</div>


        </div>

        <div className='cutout-text'> TOP HEADLINES OF THE DAY </div>

        {News.map((i, j) => (

          <div className='wrap' key={j}>

            <div className='image'> <img src={i.image} />
              <a href={i.url} target="_blank" rel="noopener noreferrer"></a>
            </div>

            <div className='title-2'> {i.title}</div>
            <div className='desc'> {i.description}</div>
            <div className='pub'>  {i.publishedAt}</div>

            {/* <p>{i.description}</p> */}


          </div>

        ))}

      </div>
    </>
  )
}

export default App
