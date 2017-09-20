const DI = require('./map');


/**
 * set dao and services (not routes)
 */
class DependencyInjection {
  constructor() {
    this.DI = DI || new Map();

    this.setDAO();
    this.setServices();

    return this.DI;
  }

  setDAO() {
    var aa = require('./users/user.dao');
    this.DI.set('UserDAO', new aa());
  }

  setServices() {
    var ss = require('./users/user.service');
    this.DI.set('UserService', new ss());
  }

  get(a) {
    console.log('-=========')
    console.log('a', a)
    console.log('b',  this.DI)
    console.log('c',  this.DI.get(a))
    return this.DI.get(a);
  }
}

module.exports = new DependencyInjection();