
const app=require('./app');
const config = require("./app/config");

const PORT = config.app.port;
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});

const fs = require('fs');
const { count } = require('console');
const { stdin } = require('process');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  // console.log(data.length);
  // var count=0;
  // var start=0;
  // var space=0;
  // for(let i=0;i<data.length;i++){
  //   if(data.charAt(i))
  //     start=i+18;
  //     console.log(data.charAt(i));
  
    // count++;
    // console.log(i)
  // }
  // console.log(count);
  
});