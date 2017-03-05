/**
 * Created by Antonio on 04/03/2017.
 */

import * as React from 'react';
import User from '../../model/User';

export class ChatHeader extends React.Component<User, {}> {

    props: User;

    constructor(props: User) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <div className="chatHeader">
                <img src={this.props.avatar} className="avatar" alt={this.props.userName} />
                <div className="chatAbout">
                    <div className="chatWith">Chat with {this.props.userName}</div>
                </div>
                <div />
            </div>
        );
    }
}

export default ChatHeader;