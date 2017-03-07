import * as React from 'react';
import * as moment from 'moment';
import {User} from './model/User';
import Message from './model/Message';
import UserList from './components/userComponent/UserList';
import ChatWindow from './components/chatComponent/ChatWindow';
let styles = require('./MessageApp.css');

/***
 *  Aplicacion de mensajes
 */
class MessageApp extends React.Component<null, null> {

    getUsers= (): User[] => {
        return [
                {id: 1, userName: 'Antonio', status: 'Online'},
                {id: 2, userName: 'Pepito', status: 'Online'},
                {id: 3, userName: 'Juan', status: 'Offline'},
                {id: 4, userName: 'Maria', status: 'Online'},
                {id: 10, userName: 'Luis', status: 'Online'}
                ];
    };

    getMessages = (): Message[] => {
        return [
            { id: 1, text: 'hola', idUserTo: 10, idUserFrom: 1, timeSpan: moment('2017-03-04 15:00:00') },
            { id: 2, text: 'hola!!', idUserTo: 1, idUserFrom: 10, timeSpan: moment('2017-03-04 15:05:00') },
            { id: 3, text: 'como estas', idUserTo: 1, idUserFrom: 10, timeSpan: moment('2017-03-04 15:10:00') },
            { id: 4, text: 'Muy bien y tu !!', idUserTo: 10, idUserFrom: 1, timeSpan: moment('2017-03-04 15:15:00') },
        ];
    };

    getMe = (): User => { return this.getUsers().filter((user) => user.id === 1)[0]; };

    getWith = (): User => { return this.getUsers().filter((user) => user.id === 10)[0]; };

    render() {
        return (
          <div className={styles.container}>
            <UserList
                users={this.getUsers()}
            />
            <ChatWindow
                me={this.getMe()}
                with = {this.getWith()}
                messages = {this.getMessages()}
            />
          </div>
        );
    }
}

export default MessageApp;
