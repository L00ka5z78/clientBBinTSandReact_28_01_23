import * as express from 'express';
import {Router, Request, Response} from 'express';
import { pool } from '../utils/db';
import { ClientRecord } from '../records/client-records';
import {NotFoundError} from "../utils/error";
import {CreateClientReq, ListClientRes} from '../types';

import { ValidationError} from "../utils/error";

export const clientRouter = express.Router();

clientRouter
    // disply all clients

    .get('/', async (req, res) => {
        const clients = await ClientRecord.listAll();

        res.json({
            clients,
        });
    })

    // create new Client

    .post('/', async (req, res) => {
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
        res.render('Client/one.hbs', {
            client,
        });
    })

    //update one Client

    .put('/:id', async (req, res) => {
        const client = await ClientRecord.getOne(req.params.id);
        client.name = req.body.name;
        client.mail = req.body.mail;
        client.nextContactAt = req.body.nextContactAt;
        client.notes = req.body.notes
        await client.update()

        res.render('Client/modified.hbs', {
            client
        });
    })


    .get('/form/edit/:id', async (req, res) => {
        const client = await ClientRecord.getOne(req.params.id);
        if (!client) {
            throw new NotFoundError();
        }

        res.render('Client/forms/edit.hbs', {
            client,
        });
    })

    // delete one Client

    .delete('/:id', async (req, res) => {
        const client = await ClientRecord.getOne(req.params.id);
        if (!client) {
            throw new NotFoundError();
        }
        await client.delete()

        res.render('Client/deleted.hbs', {
            client,
        });
    })

