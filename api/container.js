const { createContainer, asClass, asFunction, asValue } = require('awilix')
const Server = require('./server');
const StartUp = require('./startup');

const Routes = require('../api/routes');
const config = require('../config/enviroments');
const UserRouter = require('../api/routes/user.routes');
const db = require('../dal/entities');

const { UserController } = require('../api/controllers');
const { UserService } = require('../services');
const { UserRepository } = require('../dal/repositories')

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
}).register({
    UserService: asClass(UserService).singleton()
}).register({
    UserRepository: asClass(UserRepository).singleton()
}).register({
    db: asValue(db)
});

module.exports = container;