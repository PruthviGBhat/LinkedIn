import React from 'react'
import '../Css_files/Newsfeed.css';

const Newsfeed = () => {
  return (
    <>
      <div className='news'> 
        <div className='news_top'>
          <div className='news_header'>
            <h4 className='heading font-bold'>Linkedin News</h4>
          </div>
          <div className='news_body'>
            <ul className='news_options'>
              <li >
                <h4>Tech Stocks Soar, Investors Cheer</h4>
                <p>8 days ago * 14k readers</p>
              </li>
              <li>
                <h4>Blockchain and Crypto Rise</h4>
                <p>4 days ago * 7k readers</p>
              </li>
              <li>
                <h4>"Fintech Disrupts Banking</h4>
                <p>1 days ago * 4k readers</p>
              </li>
              <li>
                <h4>AI Reshapes Trading</h4>
                <p>3 days ago * 3k readers</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='news_top'>
          <div className='news_header'>
            <h4 className='heading font-bold'>Linkedin News</h4>
          </div>
          <div className='news_body'>
            <ul className='news_options'>
              <li>
                <h4>Big Tech Faces Scrutiny</h4>
                <p>4 days ago * 2k readers</p>
              </li>
              <li>
                <h4>"Digital Payments Transform Finance</h4>
                <p>2 days ago * 5k readers</p>
              </li>
              <li>
                <h4>Cybersecurity Threats Grow</h4>
                <p>3 days ago * 8k readers</p>
              </li>
              <li>
                <h4>E-commerce Profits Skyrocket</h4>
                <p>1 days ago * 9k readers</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default Newsfeed
