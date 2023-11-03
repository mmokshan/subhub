import express from 'express';
import mongoose from 'mongoose';
import { Series } from '../models/series.js';

const router = express.Router();


router.get('/:id', async (req, res) => {
  try {
    // const series = await Series.findOne({ _id: req.params.id });
    const objectId = mongoose.Types.ObjectId(req.params.id);// Convert the route parameter to an ObjectId
    const series = await Series.findById(objectId);
    if (!series) {
      return res.status(404).json({ message: 'Series not found' });
    }
    res.json(series);
  } catch (error) {
    console.error('Error fetching series:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.post('/upload', async (req, res) => {
  try {
    // Create a new TV series using the Series model
    const newSeries = new Series({
      Id: req.body.Id,
      Name: req.body.Name,
      imdbRating: req.body.imdbRating,
      CreatedBy: req.body.CreatedBy,
      imageURL: req.body.imageURL,
      Info: req.body.Info,
      Season: req.body.Season, // Assuming the entire "Season" data is sent correctly
    });

    // Save the new series to the database
    await newSeries.save();
    res.status(201).json(newSeries);
  } catch (error) {
    console.error('Error creating series:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/search', async (req, res) => {
  try {
    // Retrieve the search criteria from query parameters
    const searchId = req.query.id; // Example: /search?id=653e4bcf3a936fccb0443e2c

    // Perform the search based on the criteria
    const series = await Series.findOne({ Id: searchId });

    if (!series) {
      return res.status(404).json({ message: 'Series not found' });
    }

    res.json(series);
  } catch (error) {
    console.error('Error searching for series:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



export { router as seriesRouter };
