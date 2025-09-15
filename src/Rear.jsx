import React, { useState } from 'react';
import icon from './icons8-news.svg'
const Rear = () => {
  const [SearchNews, setSearchNews] = useState("");
  const [News, SetNews] = useState([]);
  const [dark, Setdark] = useState(false);
    

  function toggle() {
    Setdark(prev => !prev);
  }

  async function fetchNews() {
    if(!SearchNews){
      console.log("news not found")
    }
    if (!SearchNews.trim()) return; 
    const URL = `https://gnews.io/api/v4/search?q=${encodeURIComponent(SearchNews)}&apikey=a27deb87865f84bfbd141b87929084e4`;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      SetNews(data.articles || []);
    } catch (err) {
      console.error("Fetch error:", err);
      SetNews([]);
    } 
  }

  return (
    <div className={dark ? 'dark-mode' : 'white-mode'}>
      <div className='logo-in'>
        <div>
          <strong> <img src={icon} alt="" /> </strong>
          <strong className='title'> InstaNews </strong>
        </div>
        <div className="form-check form-switch">
          <input onChange={toggle} className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
          <label className="form-check-label" htmlFor="switchCheckDefault">{dark ? '' : 'DARK-MODE'}</label>
        </div>
      </div>

      <div className='submit-in'>
        <input
          type='text'
          placeholder='ENTER'
          value={SearchNews}
          onChange={(e) => setSearchNews(e.target.value)}
        />
        <button onClick={fetchNews} className='button'>SUBMIT</button>
      </div>

      <div className='cutout-text'>SEARCH RESULTS</div>

      {News.map((i, j) => (
        <div className='wrap' key={j}>
          {i.image && (
            <a href={i.url} target="_blank" rel="noopener noreferrer" className="image">
              <img src={i.image} alt={i.title} />
            </a>
          )}
          <div className='title-2'>{i.title}</div>
          <div className='desc'>{i.description}</div>
          <div className='pub'>{i.publishedAt ? new Date(i.publishedAt).toLocaleString() : ''}</div>
        </div>
      ))}
    </div>
  );
}

export default Rear;
