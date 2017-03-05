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
var ChatHeader = (function (_super) {
    __extends(ChatHeader, _super);
    function ChatHeader(props) {
        _super.call(this, props);
        this.props = props;
    }
    ChatHeader.prototype.render = function () {
        return (<div className="chatHeader">
                <img src={this.props.avatar} className="avatar" alt={this.props.userName}/>
                <div className="chatAbout">
                    <div className="chatWith">Chat with {this.props.userName}</div>
                </div>
                <div />
            </div>);
    };
    return ChatHeader;
}(React.Component));
exports.ChatHeader = ChatHeader;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatHeader;
