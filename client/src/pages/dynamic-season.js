import "./page-css/dynamic-season.css";
import { SeasonCard } from "../components/season-card/season-card";
import { SeriesInfo } from "../components/season-info/series-info";
export const DynamicSeason = () => {
  return (
    <div className="season-all">
        <SeriesInfo/>
      <div className="sub-all">
        <SeasonCard />
      </div>
    </div>
  );
};
