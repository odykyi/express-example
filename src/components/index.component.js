const UserComponent = require('./user.component');

/**
 * set dao and services (not routes)
 */
class ComponentDependencyInjection {
  constructor() {
    this.DI = new Map();
    this.setServices();

    return this.DI;
  }

  // setDAO() {
  //   var aa = require('./users/user.dao');
  //   this.DI.set('UserDAO', new aa());
  // }

  setServices() {
    this.DI.set('UserComponent', new UserComponent(this.DI));
  }

  // get(a) {
  //   console.log('a', a);
  //   // console.log('b', this.DI);
  //   // console.log('c', this.DI.get(a));
  //   // return this.DI.get(a);
  // }
}


module.exports = new ComponentDependencyInjection();
