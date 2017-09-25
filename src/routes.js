const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

class Route {
  initDir(app) {
    const isDirectory = source => lstatSync(source).isDirectory();

    const getDirectories = source => readdirSync(source)
      .map(name => join(source, name))
      .filter(isDirectory);

    const oneRouteStr = getDirectories(`${__dirname}/`)
      .map(x => x.split('/')[x.split('/').length - 1]);

    const allDirs = getDirectories(`${__dirname}/`);

    const allModules = allDirs
      .map((x, index) => ({
        routeName: oneRouteStr[index],
        routePath: `${x}/${oneRouteStr[index]}.route.js`,
      }));

    allModules.forEach(({ routeName, routePath }) => {
      app.use(`/${routeName}`, require(routePath));
    });
  }
}

module.exports = new Route();
