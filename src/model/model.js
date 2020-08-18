const db = require("../../database/db_connection");


function getStudents() {
  return db.query("SELECT * FROM students").then((result) => result.rows);
}
  


function getAllPosts() {
  return db.query(`
  SELECT students.studentname, blog_posts.text_content
  FROM blog_posts LEFT JOIN students
  ON students.id = blog_posts.student_id
  ORDER BY students.id;
  `).then((result) => result.rows);
}


function fillGrades(data) {
  console.log(data.name);
  const values = [data.name, data.class, data.numberInput];
  return db.query(
    "INSERT INTO class_student(student_id, class_id, grade) VALUES($1, $2, $3)",
    values
  );
}

function fillpost(data) {
  console.log(2,data);
  const values = [data.txtName, data.txtMsg];
  return db.query(
    "INSERT INTO blog_posts(student_id, text_content) VALUES($1, $2)",
    values
  );
}





  module.exports = { getStudents, getAllPosts ,fillGrades ,fillpost};
