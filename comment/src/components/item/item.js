/**
 * Created by Chao Ma on 2017/3/6.
 */
import React,{Component,PropTypes } from 'react'

export default class Item extends Component{

    removeComment = () =>{
        const {index, remove, comment} = this.props

        if (confirm(`确定删除${comment.username}的评论么？`)){
            remove(index)
        }
    }

    render(){
        const {comment} = this.props
        return(
                <li className="list-group-item">
                    <div className="handle">
                        <a href="javascript:;" onClick={this.removeComment}>删除</a>
                    </div>
                    <p className="user"><span >{comment.username}</span><span>说:</span></p>
                    <p className="centence">{comment.content}</p>
                </li>
        )
    }
}

Item.propTypes = {
    comment : PropTypes.object.isRequired,
    remove : PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}