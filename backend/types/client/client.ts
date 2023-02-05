import { ClientEntity } from './client.entity';

export interface ListClientRes {
    clientsList: ClientEntity[];

}

export type CreateClientReq = Omit<ClientEntity, 'id'>;
export interface GetSingleClientRes {
    client: ClientEntity;
}

