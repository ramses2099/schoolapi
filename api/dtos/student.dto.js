class StudentDto {
    constructor() {
        id = 0;
        name = '';
        lastname = '';
        birthdate = new Date();
        email = '';
        status = '';
        createdAt = new Date();
        updatedAt = new Date();
    }
}

module.exports = StudentDto;