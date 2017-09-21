let DI = require('./map');


/**
 * set dao and services (not routes)
 */
class DependencyInjection {
  constructor() {
    this.DI = DI;
    this.setServices();

    DI = this.DI;
  }

  // setDAO() {
  //   var aa = require('./users/user.dao');
  //   this.DI.set('UserDAO', new aa());
  // }

  setServices() {
    const ss = require('./users/user.service');
    this.DI.set('UserService', new ss(this.DI));
  }

  get(a) {
    console.log('a', a);
    // console.log('b', this.DI);
    // console.log('c', this.DI.get(a));
    // return this.DI.get(a);
  }
}

new DependencyInjection();
module.exports = DI;
