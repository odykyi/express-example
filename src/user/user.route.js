
const express = require('express');
const UserService = require('./user.service');

class UserRoute {
  initRoutes() {

  }

  constructor() {
    const router = express.Router();
    this.userService = new UserService();

    router.post('/create', this.userService.create.bind(this.userService));

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
