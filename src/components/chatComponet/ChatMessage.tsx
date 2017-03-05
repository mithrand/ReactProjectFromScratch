/**
 * Created by Antonio on 04/03/2017.
 */

import * as React from 'react';
import Message from '../../model/Message';
import User from '../../model/User';

export class ChatMessageProps {
    message: Message;
    to: User;
    from: User;
}

export class ChatMessage extends React.Component< ChatMessageProps, {}> {

    props: ChatMessageProps;

    constructor(props: ChatMessageProps) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="message">
                <div className="">
                    <span className="messageDataName">{this.props.from.userName}</span>
                </div>
                <div className="">
                    {this.props.message.text}
                </div>
                <div className="">{this.props.message.timeSpan.format('YYYY-MM-DD hh:mm:ss')}</div>
            </div>
        );
    }

}

export default ChatMessage;
