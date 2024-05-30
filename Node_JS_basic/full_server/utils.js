const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter(line => line);
      const students = lines.slice(1).map(line => line.split(','));
      const fields = {};
      students.forEach(student => {
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      });
      resolve(fields);
    });
  });
}

module.exports = readDatabase;
