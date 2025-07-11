CREATE TABLE IF NOT EXISTS cursos (
  id SERIAL PRIMARY KEY,
  image TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS slideshow (
  id SERIAL PRIMARY KEY,
  image TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  button_label TEXT NOT NULL,
  button_link TEXT NOT NULL
); 