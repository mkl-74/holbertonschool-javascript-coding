const fs = require('fs');

const filePath = process.argv[2]; // Récupère le chemin du fichier depuis les arguments de la ligne de commande
const stringToWrite = process.argv[3]; // Récupère la chaîne à écrire depuis les arguments de la ligne de commande

// Vérifie si le chemin du fichier et la chaîne à écrire ont été fournis en arguments
if (!filePath || !stringToWrite) {
  console.error('Usage: node 1-writeme.js <file-path> <string-to-write>');
  process.exit(1);
}

// Écriture de la chaîne dans le fichier en utf-8
fs.writeFile(filePath, stringToWrite, 'utf-8', (err) => {
  // Vérifie s'il y a eu une erreur lors de l'écriture dans le fichier
  if (err) {
    console.error(err);
    return;
  }
  
  console.log(`Successfully wrote '${stringToWrite}' to ${filePath}`);
});
