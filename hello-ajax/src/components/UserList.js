import React, { Component, PropTypes } from 'react';

import axios from 'axios'

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstView: true,
      loading: false,
      users: null,
      errorMsg: null
    };
  }
  componentWillReceiveProps (nextProps){//app 组件更新传来了新的数据（属性）
    this.setState ({firstView:false,loading:true,})


    const {searchName} = nextProps
    //发送ajax请求
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
        .then(response =>{
          const items = response.data.items
          const users = items.map(user => {
            return {html_url:user.html_url, avatar_url: user.avatar_url,login:user.login}
          })
          //再次更新成功的状态
          this.setState({loading:false,users})
        })
        .catch(error => {
          //更新失败的状态
          this.setState({
            loading:false,
            errorMsg: error.message
          })
        })
  }

  render (){

  const {firstView, users, loading, errorMsg} = this.state

  if (firstView) {
    return <h2>Enter name to search</h2>;
  } else if (loading) {
    return <h2>Loading result...</h2>;
  } else if (errorMsg) {
    return <h2>{errorMsg}</h2>;
  } else {
    const userList = users.map((user,index) =>(
        <div className="card">
          <a href={user.html_url} target="_blank">
            <img src={user.avatar_url} style={{width: '100px'}}/>
          </a>
          <p className="card-text">{user.login}</p>
        </div>
      ))
    return (
        <div className="row">{userList}</div>
      )
    }
  }
}


export default UserList;
