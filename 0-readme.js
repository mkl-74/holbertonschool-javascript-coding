#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2]; // Récupère le chemin du fichier depuis les arguments de la ligne de commande

// Vérifie si le chemin du fichier a été fourni en argument
if (!filePath) {
  console.error('Usage: node 0-readme.js <file-path>');
  process.exit(1);
}

// Lecture du contenu du fichier en utf-8
fs.readFile(filePath, 'utf-8', (err, data) => {
  // Vérifie s'il y a eu une erreur lors de la lecture du fichier
  if (err) {
    console.error(err);
    return;
  }
  
  // Impression du contenu du fichier
  console.log(data);
});