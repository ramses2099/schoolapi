
module.exports = {
    PORT: process.env.PORT,
    DB: {
        database: process.env.DB,
        username: process.env.DB_USER,
        password: process.env.DB_PWD,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
};