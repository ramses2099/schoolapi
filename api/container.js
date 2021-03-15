const { createContainer, asClass, asFunction, asValue } = require('awilix');
//app star
const Server = require('./server');
const StartUp = require('./startup');
const config = require('../config/enviroments');
//routes
const Routes = require('../api/routes');
const UserRouter = require('../api/routes/user.routes');

//business
const { UserBusiness } = require('../domain');

//controllers
const { UserController } = require('../api/controllers');
//services
const { UserService } = require('../services');
//repository
const { UserRepository } = require('../dal/repositories')
//config db
const db = require('../dal/entities');

const container = createContainer();

container.register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
    router: asFunction(Routes).singleton(),
    UserController: asClass(UserController).singleton(),
    UserRouter: asFunction(UserRouter).singleton()
}).register({
    config: asValue(config),
    db: asValue(db)
}).register({
    UserService: asClass(UserService).singleton()
}).register({
    UserRepository: asClass(UserRepository).singleton()
}).register({
    UserBusiness: asClass(UserBusiness).singleton()
});

module.exports = container;