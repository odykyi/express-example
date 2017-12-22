
const express = require('express');
const userDI = require('./user.di');

class UserRoute {
  initRoutes() {

  }

  constructor() {
    const router = express.Router();

    router.get('/create', userDI.service.user.create.bind(userDI.service.user));

    // router.post('/create', function(req, res) {
    //   models.User.create({
    //     username: req.body.username
    //   }).then(function() {
    //     res.redirect('/');
    //   });
    // });
    //
    // router.get('/:user_id/destroy', function(req, res) {
    //   models.User.destroy({
    //     where: {
    //       id: req.params.user_id
    //     }
    //   }).then(function() {
    //     res.redirect('/');
    //   });
    // });
    //
    // router.post('/:user_id/tasks/create', function (req, res) {
    //   models.Task.create({
    //     title: req.body.title,
    //     UserId: req.params.user_id
    //   }).then(function() {
    //     res.redirect('/');
    //   });
    // });
    //
    // router.get('/:user_id/tasks/:task_id/destroy', function (req, res) {
    //   models.Task.destroy({
    //     where: {
    //       id: req.params.task_id
    //     }
    //   }).then(function() {
    //     res.redirect('/');
    //   });
    // });

    return router;
  }
}

module.exports = new UserRoute();
