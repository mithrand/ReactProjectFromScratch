/**
 * Created by Antonio on 03/03/2017.
 */

import * as React from 'react';
import User from '../../model/User';
import UserListView from './UserListView';
const styles = require('../../MessageApp.css');

/***
 *  Descripcion interface UserList
 */
interface UserListProps {
    users: User[];
}

/***
 *  Descripcion clase UserList
 */
export class UserList extends React.Component<UserListProps, {}> {

    constructor(props: UserListProps) {
        super(props);
        this.props = props;
    }

    render() {

        return(
            <div className={styles.threadList}>
                <ul className={styles.list}>
                    {this.props.users.map((user) => <UserListView key={user.id} {...user}/> )}
                </ul>
            </div>
        );
    }
}

export default UserList;