'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посомтрели');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
  b = prompt('На сколько оцените его', ''),
  c = prompt('Один из последних просмотренных фильмов?', ''),
  d = prompt('На сколько оцените его', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[с] = d;
console.log(personalMovieDB);
