const fs = require('fs');
const csv = require('csv-parser');
function filterAndWriteData(inputFilePath, country, outputFilePath) {
  const writeStream = fs.createWriteStream(outputFilePath);
  fs.createReadStream(inputFilePath)
    .pipe(csv())
    .on('data', (row) => {
      if (row.Country === country) {
        writeStream.write(`${JSON.stringify(row)}\n`);
      }
    })
    .on('end', () => {
      writeStream.end();
      console.log(`Filtered data for ${country} written to ${outputFilePath}`);
    });
}
try {
  fs.unlinkSync('canada.txt');
  fs.unlinkSync('usa.txt');
  console.log('Existing canada.txt and usa.txt files deteled');
} catch (err) {
  console.error('Error deleting files:', err);
}
filterAndWriteData('input_countries.csv', 'Canada', 'canada.txt');
filterAndWriteData('input_countries.csv', 'United States', 'usa.txt');
