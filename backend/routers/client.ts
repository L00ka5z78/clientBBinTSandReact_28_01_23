import * as express from 'express';
import {Router, Request, Response} from 'express';
import {pool} from '../utils/db';
import {ClientRecord} from '../records/client-records';
import {NotFoundError} from "../utils/error";
import {CreateClientReq, GetSingleClientRes, ListClientRes} from '../types';
import {ValidationError} from "../utils/error";

export const clientRouter = express.Router();

clientRouter
    // disply all clients

    .get('/', async (req, res): Promise<void> => {
        const clients = await ClientRecord.listAll();
        res.json({
            clients,
        });
    })

    // create new Client

    .post('/', async (req, res): Promise<void> => {
        // console.log(req.body)
        // const newClient = new ClientRecord(Client);
        const newClient = new ClientRecord(req.body as CreateClientReq);
        await newClient.insert();
        res.json(newClient)
    })

    //display one Client

    .get('/:id', async (req, res) => {
        const client = await ClientRecord.getOne(req.params.id);

        if (!client) {
            throw new NotFoundError();
        }
        res.json({
            client,
        } as GetSingleClientRes);   //dodane niepotrzebne?
    })

    //update one Client

    .put('/:id', async (req, res) => {
        const client = await ClientRecord.getOne(req.params.id);
        client.name = req.body.name;
        client.mail = req.body.mail;
        client.nextContactAt = req.body.nextContactAt;
        client.notes = req.body.notes
        await client.update()
        res.json( {
            client
        });
    })

    // delete one Client

    .delete('/:id', async (req, res) => {
        const client = await ClientRecord.getOne(req.params.id);
        if (!client) {
            throw new NotFoundError();
        }
        await client.delete()
        res.json({
            client,
        });
    })

