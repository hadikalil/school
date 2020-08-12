const path = require("path");
const fs = require("fs");
const model = require("./model/model");


function studentsNames(request, response) {
   
      
model.getStudents().then((students) => {
  response.writeHead(200, { "content-type": "application/json" });
  console.log(students);
  response.end(JSON.stringify(students) );
});
}


module.exports = {studentsNames}

