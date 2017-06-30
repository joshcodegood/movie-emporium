(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('MovieApp', [])

function Movie(name, date, pic) {
        this.title = name;
        this.release_date = date;
        this.poster_path = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + pic;
        this.rating = null;
        this.rated = false;
        //this.genre = genre;
    };

app.controller('InputController', function ($scope, MovieService) {
    $scope.title = 'Fargo';
    $scope.release_date = '1996';

    $scope.newMovie = function () {
        const brandNewMovie = new Movie($scope.title, $scope.release_date);
        MovieService.addMovie(brandNewMovie);

        $scope.name = '';
        $scope.date = '';
    };

});

app.controller('ShowMoviesController', function($scope, MovieService) {
    $scope.movies = MovieService.getMovies();
    
    $scope.changeStars = function (selected, stars) {
        console.log('star clicked!');
        console.log(selected.title + "'s current rating is: " + stars);
        MovieService.rating(selected, stars);
    }
});

app.factory('MovieService', function ($http) {
    let movies = [];

    //$http.get('https://api.themoviedb.org/3/discover/movie?api_key=c109e02fab988ec80c61139213d78523').then(function (response) {
    $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c109e02fab988ec80c61139213d78523&language=en-US&page=1').then(function (response) {
        //console.log(response);
        for (let i = 0; i < response.data.results.length; i++) {
            let single = response.data.results;
            single[i] = new Movie(single[i].title, single[i].release_date, single[i].poster_path);
        }
        angular.copy(response.data.results, movies);
    });

    return {
        addMovie(info) {
            movies.push(info);
            console.log(movies);
        },
        getMovies() {
            console.log(movies);
            return movies;
        },
        rating(current, amt) {
            console.log('change rating of ' + current.title + ' to ' + amt);
            current.rating = amt;
            current.rated = true;
            console.log(current.rating);
            console.log(current.rated);
        }
    }
})
},{}]},{},[1]);
