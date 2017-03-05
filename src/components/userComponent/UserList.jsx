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
var UserListView_1 = require('./UserListView');
var UserList = (function (_super) {
    __extends(UserList, _super);
    function UserList(props) {
        _super.call(this, props);
        this.props = props;
    }
    UserList.prototype.render = function () {
        return (<div className="threadList">
                <ul className="list">
                    {this.props.users.map(function (user) { return <UserListView_1.default key={user.id} {...user}/>; })}
                </ul>
            </div>);
    };
    return UserList;
}(React.Component));
exports.UserList = UserList;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserList;
