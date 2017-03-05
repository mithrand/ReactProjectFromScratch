/**
 * Created by Antonio on 03/03/2017.
 */
import * as Moment from 'moment';

type UserStatus = 'Online'|'Offline';

/***
 *  Descripcion modelo User
 */
export interface User {

    userName: string;
    status: UserStatus;
    lastConnection?: Moment.Moment;
    avatar?: string;
    id: number;
}

export default User;