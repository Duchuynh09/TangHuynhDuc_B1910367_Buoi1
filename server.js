
const app=require('./app');
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util")

const PORT = config.app.port;


const fs = require('fs');
const { count } = require('console');
const { stdin } = require('process');
const { create } = require('domain');
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