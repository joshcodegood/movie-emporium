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
    $scope.movies = MovieService.getMovies()
    
    $scope.changeStars = function (selected, stars) {
        console.log('star clicked!');
        console.log(selected.title + "'s current rating is: " + stars);
        MovieService.rating(selected, stars);
    }
});

app.factory('MovieService', function ($http) {
    let movies = [];

    $http.get('https://api.themoviedb.org/3/discover/movie?api_key=c109e02fab988ec80c61139213d78523').then(function (response) {
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