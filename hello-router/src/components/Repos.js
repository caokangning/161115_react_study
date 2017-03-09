import React, {Component} from 'react'
import {Link} from 'react-router'
import MyLink from './MyLink'

export default class Repos extends Component {
    constructor(props){
        super(props)
        this.state ={
            repos : [
                {username: 'faceback', repoName: 'react'},
                {username: 'faceback', repoName: 'react-router'},
                {username: 'Angular', repoName: 'angular'},
                {username: 'Angular', repoName: 'angular-cli'}
            ]
        }
    }


    render() {
        return (
            <div>
                <h3>Repos</h3>
                <ul>
                    {
                        this.state.repos.map((repo,index) => {
                            {/*const to =`/repos/${repo.username}/${repo.repoName}`*/}
                            return(
                                    <li key={index} >
                                        <MyLink to={`/repos/${repo.username}/${repo.repoName}`}>{repo.repoName}
                                    </MyLink></li>
                                )
                            })
                    }
                </ul>
                {this.props.children}
            </div>

        )
    }
}