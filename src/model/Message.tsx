/**
 * Created by Antonio on 04/03/2017.
 */

import * as Moment from 'moment';

/***
 *  Descripcion modelo Message
 */
interface Message {
    id: number;
    text: string;
    idUserTo: number;
    idUserFrom: number;
    timeSpan: Moment.Moment;
}

export default Message;