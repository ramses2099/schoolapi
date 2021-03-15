const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

//create function anonymus
module.exports = function ({ UserRouter }) {
    const router = Router();
    const apiRoute = Router();

    apiRoute
        .use(cors())
        .use(bodyParser.json())
        .use(compression());

    apiRoute.use("/user", UserRouter);
    router.use("/api", apiRoute);

    return router;

}