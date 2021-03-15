const container = require('./api/container');

const app = container.resolve("app");
const db = container.resolve("db");

app.start().then(
    async () =>{
        await db.sequelize.sync();
    }
).catch((err)=>{
    console.log(err);
    process.exit();
});