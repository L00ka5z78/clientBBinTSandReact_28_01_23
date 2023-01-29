import { ClientEntity } from './client.entity';

export interface ListClientRes {
    childrenList: ClientEntity[];
}

export type CreateClientReq = Omit<ClientEntity, 'id'>;


// export interface SetGiftForChildReq {
//     giftId: string;
//     desc: string;
// }
