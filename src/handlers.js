const model = require("./model/model");
const html = require("./html");





function home(request, response) {
 
    response.writeHead(200, { "content-type": "text/html" });
    response.end(
      html.a 
      + 
      html.school
      +
      html.student
      +
      html.teacher
      +
      html.foter
      +
      html.b
  );
}

// function wall(request, response) {
//   model.getAllPosts() 
//   .then(result => {
//     const posts = result;
//     const postsList = posts.map(
//       post => ` 
//       <li>
//         <p>${post.text_content}</p>
//         <div>${post.student_id}</p>
//       </li>
//     `
//     );
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end(`<ul>${postsList.join("")}</ul>`);
//   });
// }
function wall(request, response) {
  model.getAllPosts() 
  .then(result => {
    const posts = result;
    const postsList = posts.map((obj) => `<li>${obj.studentname }:${obj.text_content}</li>`);
    response.writeHead(200, { "content-type": "text/html" });
    response.end(`<ul>${postsList.join("")}</ul>`);
  });
}





function fill(request, response) {
  let body = "";
  request.on("data", chunk => (body += chunk));
  request.on("end", () => {
    console.log(body);
    const searchParams = new URLSearchParams(body);
    console.log(searchParams);

    const data = Object.fromEntries(searchParams);
    console.log(data);

    model.fillGrades(data)  
      .then(() => {
        response.writeHead(302, { location: "/" });
        response.end();
      })
      .catch(error => {
        console.log(error);
        response.writeHead(500, { "content-type": "text/html" });
        response.end(`<h1>Something went wrong saving your data</h1>`);
      });
  });
}


function studentPost(request, response) {
  let body = "";
  request.on("data", chunk => (body += chunk));
  request.on("end", () => {
    console.log(body);
    const searchParams = new URLSearchParams(body);
    console.log(searchParams);

    const data = Object.fromEntries(searchParams);
    console.log(data);

    model.fillpost(data)  
      .then(() => {
        response.writeHead(302, { location: "/" });
        response.end();
      })
      .catch(error => {
        console.log(error);
        response.writeHead(500, { "content-type": "text/html" });
        response.end(`<h1>Something went wrong saving your data</h1>`);
      });
  });
}


module.exports = {
  home,wall,fill,studentPost
};






// model.getStudents().then((students) => {
//   const userList = students.map((student) => `<li>${student.studentname}</li>`);
//   response.writeHead(200, { "content-type": "text/html" });
//   response.end(`
//   <ul>${userList.join("")}</ul>
//   <div> fuck you</div>`
// );
// });