/**
 * Created by Antonio on 04/03/2017.
 */

import Message from '../../model/Message';
import User from '../../model/User';
import * as React from 'react';
import ChatHeader from './ChatHeader';
import {ChatMessage, ChatMessageProps} from './ChatMessage';

export interface ChatWindowProps {
    messages: Message[];
    with: User;
    me: User;
}

export class ChatWindow extends React.Component<ChatWindowProps, {}> {

    props: ChatWindowProps;

    static orderBy(a: Message, b: Message): number {
        if (a.timeSpan.isBefore(b.timeSpan)) {
            return -1;
        }else {
            if (a.timeSpan.isAfter(b.timeSpan)) {
                return 1;
            }else {
                return 0;
            }
        }
    }

    constructor(props: ChatWindowProps) {
        super(props);
        this.props = props;
    }

    toChatMessageProps = (message: Message): ChatMessageProps => {
        let chatMessage: ChatMessageProps = new ChatMessageProps();

        chatMessage.message = message;

        if (message.idUserTo === this.props.me.id) {
            chatMessage.to = this.props.me;
            chatMessage.from = this.props.with;
        }else {
            chatMessage.to = this.props.with;
            chatMessage.from = this.props.me;
        }

        return chatMessage;
    };

    render() {
        return (
            <div className="chat">
                <ChatHeader
                    key={this.props.with.id}
                    {...this.props.with}
                />
                {
                    this.props.messages
                        .sort((a: Message, b: Message) => ChatWindow.orderBy(a, b))
                        .map((m: Message) => {
                            let chatMessageProp = this.toChatMessageProps(m);
                            return (< ChatMessage key={chatMessageProp.message.id} {...chatMessageProp} />);
                        })
                }
            </div>
        );
    }

}

export default ChatWindow;