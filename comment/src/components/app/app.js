import React, {Component} from 'react'
import Add from '../add/add'
import List from '../list/list'


export default class App extends Component{
    constructor (props) {
        super(props)
        this.state = {
            comments : []
        }
    }
    componentDidMount () {
        const comments = [
            {username : 'ckn', content: 'alone'},
            {username: 'mc', content: 'like u'}
        ]
        //更新状态
        this.setState ({comments})
    }

    //将add组件添加的对象 添加到comments的数组中
    add = (comment) =>{ //使用箭头函数 不需要绑定this this此时是组件对象
        const comments = this.state.comments
        comments.unshift(comment)
        //再次更新数组
        this.setState ({comments})
    }
    //删除
    remove = (index) =>{ //使用箭头函数 不需要绑定this this此时是组件对象
        const comments = this.state.comments
        //删除对象
        comments.splice(index, 1)
        //再次更新数组
        this.setState ({comments})
    }


    render(){
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add add={this.add}/>
                    <List comments={this.state.comments} remove={this.remove}/>
                </div>
            </div>
        )
    }
}



