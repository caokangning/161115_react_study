/**
 * Created by Chao Ma on 2017/3/6.
 */
import React, {Component, PropTypes} from 'react'
import Item from '../item/item'


export default class List extends Component{

    render(){
        const  {comments, remove} = this.props
        const display = comments.length ===0 ? 'block':'none'

       const Items = comments.map((comment, index) =>{
           const itemProps = {
               key: index,
               comment,
               remove,
               index
           }
           // ( <Item  key={index} comment={comment}
           //          remove={remove} index={index}/>))
          return <Item {...itemProps}/>
       })
        return(
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {Items}

                </ul>
            </div>
        )
    }
}

List.propTypes = {
    comments : PropTypes.array.isRequired ,
    remove : PropTypes.func.isRequired
}