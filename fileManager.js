var fs = require('fs');

/** 
 * appendFile - create new file or appends the content at the end of the file
 */
fs.appendFile('data/test.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

/** 
  * open - takes a "flag" as the second argument
  * 
  * If the flag is "w" for "writing", the specified file is opened for writing. 
  * If the file does not exist, an empty file is created
  */
fs.open('data/test.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

/**
 * writeFile
 *
 * If file exists - replaces the specified file and content.
 * If the file does not exist, a new file, containing the specified content.
 */
fs.writeFile('data/writefile.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

/**
 * unlink - deletes the file
 */
fs.unlink('data/deleteMe.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});

/**
 * rename - renames the file
 */
fs.rename('data/renameMe.txt', 'data/newName.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});