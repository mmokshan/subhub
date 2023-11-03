import mongoose from "mongoose";

const TVSeriesSchema = new mongoose.Schema({
  Id: {type:Number , required: true, unique: true} ,
  Name: {type:String},
  imdbRating: {type:Number},
  CreatedBy: {type:String},
  imageURL: {type:String},
  Info: {type:String},
  Season:[
{
  SeasonNo:{type:String },
  SeasonImageURL:{type:String},
  Episode:[{
    EpisodeNo:{type:Number},
    EpisodeName:{type:String},
    DownloadLink:{type:String}
}]
}
  ]
});

export const Series = mongoose.model("tvseries", TVSeriesSchema);
