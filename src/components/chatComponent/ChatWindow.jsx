/**
 * Created by Antonio on 04/03/2017.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ChatHeader_1 = require('./ChatHeader');
var ChatMessage_1 = require('./ChatMessage');
var ChatWindow = (function (_super) {
    __extends(ChatWindow, _super);
    function ChatWindow(props) {
        var _this = this;
        _super.call(this, props);
        this.toChatMessageProps = function (message) {
            var chatMessage = new ChatMessage_1.ChatMessageProps();
            chatMessage.message = message;
            if (message.idUserTo === _this.props.me.id) {
                chatMessage.to = _this.props.me;
                chatMessage.from = _this.props.with;
            }
            else {
                chatMessage.to = _this.props.with;
                chatMessage.from = _this.props.me;
            }
            return chatMessage;
        };
        this.props = props;
    }
    ChatWindow.orderBy = function (a, b) {
        if (a.timeSpan.isBefore(b.timeSpan)) {
            return -1;
        }
        else {
            if (a.timeSpan.isAfter(b.timeSpan)) {
                return 1;
            }
            else {
                return 0;
            }
        }
    };
    ChatWindow.prototype.render = function () {
        var _this = this;
        return (<div className="chat">
                <ChatHeader_1.default key={this.props.with.id} {...this.props.with}/>
                {this.props.messages
            .sort(function (a, b) { return ChatWindow.orderBy(a, b); })
            .map(function (m) {
            var chatMessageProp = _this.toChatMessageProps(m);
            return (<ChatMessage_1.ChatMessage key={chatMessageProp.message.id} {...chatMessageProp}/>);
        })}
            </div>);
    };
    return ChatWindow;
}(React.Component));
exports.ChatWindow = ChatWindow;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatWindow;
