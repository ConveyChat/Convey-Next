import * as express from 'express'
import * as cors from 'cors'
import ServerConfig from './models/ServerConfig'

const config: ServerConfig = {
    port: 5000,
}

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req: express.Request, res: express.Response) => {
    res.send({
        hello: 'world',
    })
})

app.listen(config.port, () => {
    console.log(`[API] HTTP server started listening at port ${config.port}`)
})
