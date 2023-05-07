import React, { Component } from 'react'

export class UserItem extends Component {
    render() {

        const { name, age } = this.props
        return (
            <div>
                <h1>User name : {name}</h1>
                <p>User age : {age}</p>
            </div>
        )
    }
}

export default UserItem