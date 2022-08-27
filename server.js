
const app=require('./app');
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util")

const PORT = config.app.port;


const fs = require('fs');
const { count } = require('console');
const { stdin } = require('process');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
async function startServer(){
  try {
    await MongoDB.connect(config.db.uri);
    console.log("Connect Success")
    const PORT = config.app.port;
    app.listen(PORT,() => {
      console.log(`Server running on port ${PORT}`);
  });
    
  } catch (error) {
    console.log("Connect Insuccess",error);
    process.exit();
  }
}
startServer();
  
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