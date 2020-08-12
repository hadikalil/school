BEGIN;

DROP TABLE IF EXISTS students, blog_posts,class CASCADE;

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  studentname VARCHAR(255) NOT NULL,
  age INTEGER,
  location VARCHAR(255)
);

CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id),
  text_content TEXT
);

CREATE TABLE class (
  id SERIAL PRIMARY KEY,
  class VARCHAR(20) NOT NULL
);

CREATE TABLE class_student (
  class_id INTEGER REFERENCES class(id),
  student_id INTEGER REFERENCES students(id),
  grade INTEGER 
);






INSERT INTO students (studentname, age, location) VALUES
  ('Sery1976', 28, 'Middlehill, UK'),
  ('Notne1991', 36, 'Sunipol, UK'),
  ('Moull1990', 41, 'Wanlip, UK'),
  ('Spont1935', 72, 'Saxilby, UK'),
  ('Precand', 19, 'Stanton, UK')
;

INSERT INTO blog_posts (text_content, student_id) VALUES
  ('Announcing of invitation principles in.', 1),
  ('Peculiar trifling absolute and wandered yet.', 2),
  ('Far stairs now coming bed oppose hunted become his.', 3),
  ('Curabitur arcu quam, imperdiet ac orci ac.', 4),
  ('Aenean blandit risus sed pellentesque.', 5)
;

INSERT INTO class ( id, class) VALUES
  (1, 'arabic'),
  (2, 'english'),
  (3, 'math'),
  (4, 'hebrow'),
  (5, 'art')
;

COMMIT;
