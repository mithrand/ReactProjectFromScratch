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
var ChatMessageProps = (function () {
    function ChatMessageProps() {
    }
    return ChatMessageProps;
}());
exports.ChatMessageProps = ChatMessageProps;
var ChatMessage = (function (_super) {
    __extends(ChatMessage, _super);
    function ChatMessage(props) {
        _super.call(this, props);
        this.props = props;
    }
    ChatMessage.prototype.render = function () {
        return (<div className="message">
                <div className="">
                    <span className="messageDataName">{this.props.from.userName}</span>
                </div>
                <div className="">
                    {this.props.message.text}
                </div>
                <div className="">{this.props.message.timeSpan.format('YYYY-MM-DD hh:mm:ss')}</div>
            </div>);
    };
    return ChatMessage;
}(React.Component));
exports.ChatMessage = ChatMessage;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatMessage;
