const DI = require('../dependencyInjection');

const express = require('express');

const router = express.Router();


console.log('------------');
console.log('------------', DI);
console.log('------------', DI);
console.log('------------', DI.get('UserService'));
console.log('------------', DI.get('UserService').init());
console.log('------------', DI.get('UserService').init());
console.log('------------', DI.get('UserService').init());
console.log('------------', DI.get('UserService').init());
console.log('------------', DI.get('UserService').init());
// DI.get('UserService').init()
//
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


module.exports = router;
