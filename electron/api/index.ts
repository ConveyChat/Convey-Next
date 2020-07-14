import * as express from 'express'
import * as cors from 'cors'
import { request as graphRequest } from 'graphql-request'
import ServerConfig from './models/ServerConfig'
import { FetchRequest } from './models/FetchRequest'

const config: ServerConfig = {
    port: 5000,
    theGraphNodeURL:
        'https://api.thegraph.com/subgraphs/name/haardikk21/convey-chat',
}

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req: express.Request, res: express.Response) => {
    res.send({
        hello: 'world',
    })
})

app.post('/messages', async (req: express.Request, res: express.Response) => {
    const fetchRequest = req.body as FetchRequest
    const graphQuery = buildGraphQLMessagesQuery(fetchRequest)
    console.log({
        query: graphQuery,
    })
    graphRequest(config.theGraphNodeURL, graphQuery)
        .then((response) => {
            console.log('res: ', response)
            res.send(response)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
})

function buildGraphQLMessagesQuery(fetchRequest: FetchRequest): any {
    let whereQuery = '{'
    if (fetchRequest.id) {
        whereQuery += `id: "${fetchRequest.id}"`
    }

    if (fetchRequest.mid) {
        if (whereQuery.length > 1) {
            whereQuery += `, mid: "${fetchRequest.mid}"`
        } else {
            whereQuery += `mid: "${fetchRequest.mid}"`
        }
    }

    if (fetchRequest.receiver) {
        if (whereQuery.length > 1) {
            whereQuery += `, receiver: "${fetchRequest.receiver}"`
        } else {
            whereQuery += `receiver: "${fetchRequest.receiver}"`
        }
    }

    if (fetchRequest.sender) {
        if (whereQuery.length > 1) {
            whereQuery += `, sender: "${fetchRequest.sender}"`
        } else {
            whereQuery += `sender: "${fetchRequest.sender}"`
        }
    }

    whereQuery += '}'

    const graphQuery = `{
        messageEntities(where: ${whereQuery}) {
            id
            sender
            receiver
            mid
        }
    }`

    return graphQuery
}

app.listen(config.port, () => {
    console.log(`[API] HTTP server started listening at port ${config.port}`)
})
