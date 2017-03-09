import React, {Component} from 'react'
export default class Repo extends Component {
    render() {
        return (
            <div>用户名：{this.props.params.username}，仓库名：{this.props.params.repoName}</div>
        )
    }
}
