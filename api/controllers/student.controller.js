const mapper = require('mapper.js');
const BaseController = require('./base.controller');

const StudentSchema = require('../dtos/student.schema');

class StudentController extends BaseController {
    constructor({ StudentService }) {
        super(StudentService, StudentSchema);
        this._studentService = StudentService;
    }

    async getStudents(req, res) {
        let entities = await this._studentService.getAll();

        entities = entities.map(entity => mapper(entity, StudentSchema));

        return res.send({
            payload: entities
        });
    }
}

module.exports = StudentController;