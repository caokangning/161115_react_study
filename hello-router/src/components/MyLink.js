import React,{Component} from 'react'
import {Link} from 'react-router'

export default class MyLink extends Component {
    render(){
        return(
            <Link {...this.props} activeClassName='active'></Link>
        )
    }

}
