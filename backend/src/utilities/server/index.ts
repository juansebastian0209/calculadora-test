import express, { Application } from 'express'
import * as bodyParser from 'body-parser'
import cors from 'cors'

export class ExpressServer {

    private readonly application: Application

    constructor() {
        this.application = express();

        this.application.use(bodyParser.urlencoded({ extended: true }))
        this.application.use(bodyParser.json())
        this.application.use(cors())
    }

    getApplication(): Application {
        return this.application;
    }

    listen(): void {
        this.application.listen(5600, () => {
            console.log("Esta aplicacion esta corriendo por el puerto 5600")
        });
    }

}