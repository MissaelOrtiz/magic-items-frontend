import React, { Component } from 'react'
import { getAllItems } from './utils'
import { Link } from 'react-router-dom'

export default class ListPage extends Component {
    state = {
        magicItems: []
    }

    componentDidMount = async () => {
        const items = await getAllItems();
        this.setState({ magicItems: items })
    }
    render() {
        return (
            <div className="item-container">
                {
                    this.state.magicItems.map(item => <Link to={`/magicItems/${item.id}`}>
                    <div className="item-card">
                        <p>{item.name}</p>
                        <p>Type: {item.type}</p>
                        <p>Level: {item.level}</p>
                        <p>Effect: {item.effect}</p>
                    </div>
                    </Link>)
                }
            </div>
        )
    }
}
