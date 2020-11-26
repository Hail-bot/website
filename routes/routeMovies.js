"use strict"

const moviedb = require("../Models/MovieDB");

var moviesDBObject = new moviedb();

function routeMovies(app)
{
    app.route("/movies")
        .get(moviesDBObject.getAllMovies);
}
module.exports = {routeMovies};