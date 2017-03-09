/**
 * Created by Chao Ma on 2017/3/6.
 */
import React,{Component, PropTypes} from 'react'


export default  class Add extends React.Component{
    constructor (props){
        super(props)
        this.addComment = this.addComment.bind(this)
    }
    //添加数据
    addComment (){
        //收集数据成为对象
        const comment = {
            username : this.refs.username.value,
            content: this.refs.content.value
        }

        //添加到comments
        this.props.add(comment)
        this.refs.username.value = ''
        this.refs.content.value = ''

    }


  render(){
      return(
          <div className="col-md-4">
              <form className="form-horizontal">
                  <div className="form-group">
                      <label>用户名</label>
                      <input type="text" className="form-control" placeholder="用户名" ref='username'/>
                  </div>
                  <div className="form-group">
                      <label>评论内容</label>
                      <textarea className="form-control" rows="6" placeholder="评论内容" ref='content'></textarea>
                  </div>
                  <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                          <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
                      </div>
                  </div>
              </form>
          </div>
      )
  }
}
Add.propTypes = {
    add : PropTypes.func.isRequired
}