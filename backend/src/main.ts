import { mainRoutes } from "./routes";
import { ExpressServer, AppDataSource } from "./utilities";


async function bootstrap(): Promise<void> {
    // Crear servidor de express con la clase homologada.
    try {
        await AppDataSource.initialize()
        const expressServer = new ExpressServer()
        mainRoutes(expressServer.getApplication())
        expressServer.listen()

    } catch (error) {
        console.error(error)
    }
}

bootstrap()