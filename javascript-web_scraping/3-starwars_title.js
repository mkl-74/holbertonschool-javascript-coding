#!/usr/bin/node

const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Construct the URL for the API request
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

// Perform a GET request to the Star Wars API
request(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else if (response.statusCode !== 200) {
    console.error(`Failed to retrieve data. Status code: ${response.statusCode}`);
  } else {
    // Parse the response body to JSON
    const data = JSON.parse(body);
    // Print the title of the movie
    console.log(data.title);
  }
});
