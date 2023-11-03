import React from 'react'
import "./season-card.css"

export const SeasonCard = () => {
  return (
      <div className="season-card">
          <div className="seson-no">
            <h3>SEASON 01</h3>
          </div>
          <div className="episode-container">
            <div className="episode-card">
              <div className="epi-des">
                <div className="epi-no">episode-02</div>
                <div className="description">Dragon hunter </div>
              </div>
              <div className="download-btn">
                <button className="dwn-button">Download</button>
              </div>
            </div>
            <div className="episode-card">
              <div className="epi-des">
                <div className="epi-no">episode-02</div>
                <div className="description">Dragon hunter </div>
              </div>
              <div className="download-btn">
                <button className="dwn-button">Download</button>
              </div>
            </div>
            <div className="episode-card">
              <div className="epi-des">
                <div className="epi-no">episode-02</div>
                <div className="description">Dragon hunter </div>
              </div>
              <div className="download-btn">
                <button className="dwn-button">Download</button>
              </div>
            </div>
          </div>
        </div>
        
      
  )
}

