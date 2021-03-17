const { createContainer, asClass, asFunction, asValue } = require('awilix');
//app star
const Server = require('./server');
const StartUp = require('./startup');
const config = require('../config/enviroments');
//routes
const Routes = require('../api/routes');
const StudentRouter = require('../api/routes/student.routes');

//dtos
const { StudentDto } = require('./dtos');

//business
const { StudentBusiness } = require('../domain');

//controllers
const { StudentController } = require('../api/controllers');

//services
const { StudentService } = require('../services');

//repository
const { StudentRepository } = require('../dal/repositories')

//config db
const db = require('../dal/models');

const container = createContainer();

container.register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
    router: asFunction(Routes).singleton(),
    StudentController: asClass(StudentController).singleton(),
    StudentRouter: asFunction(StudentRouter).singleton()
}).register({
    config: asValue(config),
    db: asValue(db)
}).register({
    StudentService: asClass(StudentService).singleton()
}).register({
    StudentRepository: asClass(StudentRepository).singleton()
}).register({
    StudentBusiness: asClass(StudentBusiness).singleton()
}).register({
    StudentDto: asClass(StudentDto).singleton()
});

module.exports = container;