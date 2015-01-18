'use strict';
var router       = require('express').Router(),
    movie        = require('node-movie'),
    randomMovie  = require('random-movie');

router.use(function(req, res, next) {
    console.log('New Request');
    next(); // visit next routes
});

// default route
router.get('/', function(req, res) {
  res.render('public/index.html');
});

// get movie by title
router.route('/moviebytitle/:title')
  .get(function(req, res) {

    var title= req.params.title;

    movie({title:title}, function(data) {
      if(data !== null && data.Error) {
        res.jsonp({error: "Error occured!"});
      }
      res.jsonp(data);
    });

  });

// get movie by id
router.route('/moviebyid/:id')
  .get(function(req, res) {

    var imdbID= req.params.id;

    movie({id:imdbID}, function(data) {
      if(data !== null && data.Error) {
        res.jsonp({error: "Error occured!"});
      }
      res.jsonp(data);
    });

  });

// get random movie
router.route('/random')
  .get(function(req, res) {

    randomMovie(function (data) {
      if(data !== null && data.Error) {
        res.jsonp({error: "Error occured!"});
      }
      res.jsonp(data);
    });

  });

module.exports.router = router;
