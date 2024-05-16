#!/usr/bin/node

const request = require('request');

// Get the URL from command line arguments
const url = process.argv[2];

// Perform a GET request
request(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
