import React, { useState, useEffect } from 'react';
import './series-info.css';

export function SeriesInfo({ match }) {
  const [series, setSeries] = useState(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(`/series/${match.params.id}`); // Use match.params.id
        if (!response.ok) {
          throw new Error('Series not found');
        }
        const data = await response.json();
        setSeries(data);
      } catch (error) {
        console.error('Error fetching series:', error);
      }
    };

    fetchSeries();
  }, [match.params.id]);

  return (
    <div className="info">
      {series !== null ? (
        <>
          <div className="series-img">
            <img src={series.imageURL} alt="" />
          </div>
          <div className="series-info">
            <div className="name">{series.Name}</div>
            <div className="overview">{series.Info}</div>
            <div className="createdby">
              Created by: <span>{series.CreatedBy}</span>
            </div>
            <div className="releasedate">
              Original release: <span>{series.ReleaseDate}</span> {/* Adjust this line */}
            </div>
            <div className="season-tab">
              {series.Seasons.map((season) => (
                <div className="season-btn" key={season.SeasonNumber}>
                  S{season.SeasonNumber}
                </div>
              ))}
            </div>
            <div className="imdb">
              IMDb Rating: {series.imdbRating}
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
