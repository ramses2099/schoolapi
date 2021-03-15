const { createContainer, asClass, asFunction, asValue } = require('awilix')
const Server = require('./server');
const StartUp = require('./startup');

const { UserController } = require('../api/controllers');
const Routes = require('../api/routes');
const config = require('../config/enviroments');
const UserRouter = require('../api/routes/user.routes');

const container = createContainer();

container.register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton()
}).register({
    UserController: asClass(UserController).singleton()
}).register({
    router: asFunction(Routes).singleton()
}).register({
    config: asValue(config)
}).register({
    UserRouter: asFunction(UserRouter).singleton()
})

module.exports = container;