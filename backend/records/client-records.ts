import { pool } from '../utils/db';
import { ValidationError } from '../utils/error';
import { v4 as uuid } from 'uuid';
import { FieldPacket } from 'mysql2';
import {ClientEntity} from "../types";

type ClientRecordResult = [ClientRecord[], FieldPacket[]]

export class ClientRecord implements ClientEntity {
    id?: string;
    name: string;
    mail: string;
    nextContactAt: string;
    notes: string;

    constructor(obj: ClientEntity) {
        const { id, name, mail, nextContactAt, notes } = obj;


        if (!obj.name || typeof obj.name !== 'string' || obj.name.length < 3 || obj.name.length > 55) {
            throw new ValidationError('Name has to be text at least 3 and less than 55 characters long')
        }
        if (!mail || typeof mail !== 'string' || mail.indexOf('@') === -1) {
            throw new ValidationError('Invalid E-mail')
        }
        this.id = obj.id;
        this.name = obj.name;
        this.mail = obj.mail;
        this.nextContactAt = obj.nextContactAt;
        this.notes = obj.notes;

    }
    // Create

    async insert(): Promise<string> {

        if (!this.id) {
            this.id = uuid();
        }
        await pool.execute("INSERT INTO `clients` VALUES(:id, :name, :mail, :nextContactAt, :notes)", {
            id: this.id,
            name: this.name,
            mail: this.mail,
            nextContactAt: this.nextContactAt,
            notes: this.notes,
        });
        return this.id;
    }
    // Read

    static async listAll(): Promise<ClientRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `clients`") as ClientRecordResult;
        return results.map((obj) => new ClientRecord(obj));
    }

    static async getOne(id: string):Promise<ClientRecord | null> {
        const [results] = await pool.execute("SELECT * FROM `clients` WHERE `id` = :id", {
            id,
        }) as ClientRecordResult;
        return results.length === 0 ? null : new ClientRecord(results[0])
    }
    // Update

    async update() {
        await pool.execute("UPDATE `clients` SET `name` = :name,  `mail` = :mail, `nextContactAt` = :nextContactAt, `notes` = :notes WHERE  `id` = :id", {
            id: this.id,
            name: this.name,
            mail: this.mail,
            nextContactAt: this.nextContactAt,
            notes: this.notes,
        });
    }

    // Delete

    async delete(): Promise<void> {
        await pool.execute("DELETE FROM `clients` WHERE `id` = :id", {
            id: this.id,
        })
    }
}











   // constructor(obj) { //it will be added at the end !!************************************
    //     const { id, name, mail, nextContactAt, notes } = obj;
    //     if (!id || typeof id !== "string") {
    //         throw new ValidationError("Invalid or none ID")
    //     }

    //     if (typeof nextContactAt !== 'string') {
    //         throw new ValidationError('Next contact date has to be text')
    //     }

    //     if (typeof notes !== 'string') {
    //         throw new ValidationError('Notes has to be text')
    //     }
