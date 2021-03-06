/**
 * Created by Antonio on 03/03/2017.
 */

import User from '../../model/User';
import * as React from 'react';
const styles = require('../../MessageApp.css');

/***
 *  Descripcion clase UserListView
 */
export class UserListView extends React.Component<User, {}> {

    props: User;

    constructor(props: User) {
        super(props);
        this.props = props;
    };

    render() {
        let props = this.props;
        let statusTag = ['fa', 'fa-circle', props.status === 'Online' ? 'Online' : 'Offline'].join(' ');
        let lastConnectionString = props.lastConnection ? props.lastConnection.format('yyyy-MM-dd hh:mm:ss') : 'undefined';
        return(
                <li className={styles.userListing}>
                    <img src={props.avatar} className={styles.avatar} alt={props.userName} />
                    <div className={styles.about}>
                        <div className={styles.name}>{props.userName}</div>
                        <div className={styles.status}>
                            <i className={statusTag}/>
                            {props.status === 'Online' ? 'online' : lastConnectionString}
                        </div>
                    </div>
                </li>

        );
    };
}

export default UserListView;