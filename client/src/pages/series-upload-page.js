import React from 'react'
import "./page-css/series-upload.css"

const TvSeriesUpload = () => {
  return (
    <div className='upload-page content'>
      <div className="search">
        <input  type="text" id="serch" placeholder='Search' />
      </div>
      <div className="series">
        <div className="series-name">Game of throne</div>
        <div className='series-data'>
          <div className="nam0e">Series Name:</div>
          <div className="description">Description:</div>
          <div className="imdb">Imdb Rating:</div> 
        </div>
      </div>
      <div className="episode"></div>
    </div>
  )
}

export default TvSeriesUpload

































































// export const SeriesForm = () => {
//   const [formData, setFormData] = useState({
//     Name: "",
//     imdbRating: "",
//     CreatedBy: "",
//     ReleaseDate: {
//       Year: "",
//       Month: "",
//       Date: "",
//     },
//     imageURL: "",
//     Info: "",
//     Seasons: {
//       SeasonNumber: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/series/upload", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Series created successfully!");
//         setFormData({
//           Name: "",
//           imdbRating: "",
//           CreatedBy: "",
//           ReleaseDate: {
//             Year: "",
//             Month: "",
//             Date: "",
//           },
//           imageURL: "",
//           Info: "",
//           Seasons: {
//             SeasonNumber: "",
//           },
//         });
//       } else {
//         alert("Error creating series.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while creating the series.");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h1>Create TV Series</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="Name">Name:</label>
//         <input
//           type="text"
//           name="Name"
//           id="Name"
//           value={formData.Name}
//           onChange={handleChange}
//         />
//         <label htmlFor="imdbRating">imdb Rating:</label>
//         <input
//           type="number"
//           name="imdbRating"
//           id="imdbRating"
//           value={formData.imdbRating}
//           onChange={handleChange}
//         />
//         <label htmlFor="CreatedBy">CreatedBy:</label>
//         <input
//           type="text"
//           name="CreatedBy"
//           id="CreatedBy"
//           value={formData.CreatedBy}
//           onChange={handleChange}
//         />
//         <label htmlFor="Year">Year:</label>
//         <input
//           type="text"
//           name="Year"
//           id="Year"
//           value={formData.ReleaseDate.Year}
//           onChange={handleChange}
//         />
//         <label htmlFor="Month">Month:</label>
//         <input
//           type="text"
//           name="Month"
//           id="Month"
//           value={formData.ReleaseDate.Month}
//           onChange={handleChange}
//         />
//         <label htmlFor="Date">Date:</label>
//         <input
//           type="text"
//           name="Date"
//           id="Date"
//           value={formData.ReleaseDate.Date}
//           onChange={handleChange}
//         />
//         <label htmlFor="imageURL">imageURL:</label>
//         <input
//           type="text"
//           name="imageURL"
//           id="imageURL"
//           value={formData.imageURL}
//           onChange={handleChange}
//         />
//         <label htmlFor="Info">Info:</label>
//         <input
//           type="text"
//           name="Info"
//           id="Info"
//           value={formData.Info}
//           onChange={handleChange}
//         />
//         <label htmlFor="SeasonNumber">SeasonNumber:</label>
//         <input
//           type="number"
//           name="SeasonNumber"
//           id="SeasonNumber"
//           value={formData.Seasons.SeasonNumber}
//           onChange={handleChange}
//         />
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };
