import React,{Component} from 'react'
import MyLink  from  './MyLink'

class App extends Component{
    render (){
        return(
            <div>
                <h2>Hello, React Router!</h2>
                <ul>
                    <li>
                        <MyLink to='/about' >About</MyLink>
                    </li>
                    <li>
                        <MyLink to='/repos' >Reops</MyLink>
                    </li>
                </ul>
                {/*children是当前子组件*/}
                {this.props.children}
            </div>
        )

    }
}

export default App