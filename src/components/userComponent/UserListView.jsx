/**
 * Created by Antonio on 03/03/2017.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var UserListView = (function (_super) {
    __extends(UserListView, _super);
    function UserListView(props) {
        _super.call(this, props);
        this.props = props;
    }
    ;
    UserListView.prototype.render = function () {
        var props = this.props;
        var statusTag = ['fa', 'fa-circle', props.status === 'Online' ? 'Online' : 'Offline'].join(' ');
        var lastConnectionString = props.lastConnection ? props.lastConnection.format('yyyy-MM-dd hh:mm:ss') : 'undefined';
        return (<li>
                    <img src={props.avatar} className="avatar" alt={props.userName}/>
                    <div className="about">
                        <div className="name">{props.userName}</div>
                        <div className="status">
                            <i className={statusTag}/>
                            {props.status === 'Online' ? 'online' : lastConnectionString}
                        </div>
                    </div>
                </li>);
    };
    ;
    return UserListView;
}(React.Component));
exports.UserListView = UserListView;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserListView;
