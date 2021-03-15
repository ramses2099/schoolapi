const express = require('express');

class Server {

    constructor({ config, router, }) {
        this._config = config;
        this._express = express();
        this._express.use(router);
    }

    start() {
        return new Promise((resolve, reject) => {
            const http = this._express.listen(
                this._config.PORT, () => {
                    console.log(`Application Running http://localhost:${this._config.PORT}`);

                });
            
                resolve();
        });
    }
}

module.exports = Server;