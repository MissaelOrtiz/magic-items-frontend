import React, { Component } from 'react'
import { createItem, getAllTypes } from './utils'

export default class CreatePage extends Component {
    state = {
        name: '',
        type: '',
        allTypes: [],
        level: 0,
        cursed: '',
        effect: ''
    }

    componentDidMount = async () => {
        const types = await getAllTypes();

        this.setState({
            allTypes: types
        })
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleTypeChange = e => {
        this.setState({ type_id: e.target.value });
    }

    handleLevelChange = e => {
        this.setState({ level: e.target.value });
    }

    handleCursedChange = e => {
        this.setState({ cursed: e.target.value });
    }

    handleEffectChange = e => {
        this.setState({ effect: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();
        await createItem({
            name: this.state.name,
            type: this.state.type,
            level: this.state.level,
            cursed: this.state.cursed,
            effect: this.state.effect,
        });
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="create-container">
                <h2>Create Item</h2>
                <form onSubmit={this.handleSubmit}>
                    <label className="input-card" >
                        Name
                        <input value={this.state.name} onChange={this.handleNameChange} className="entry"/>
                    </label>
                    <label className="input-card" >
                        Type
                        <select onChange={this.handleTypeChange} className="entry">
                            <option value="" key="-1">Select Type</option>
                            {this.state.allTypes.map((type, i) =>
                                <option value={type.id} key={i}>{type.name}</option>
                                )}
                        </select>
                    </label>
                    <label className="input-card" >
                        Level
                        <input type="number" value={this.state.level} onChange={this.handleLevelChange} className="entry"/>
                    </label>
                    <label className="input-card">
                        Cursed
                        <select onChange={this.handleCursedChange} className="entry">
                            <option value="" key="defa">Select Option</option>
                            <option value={false} key="fals">False</option>
                            <option value={true} key="tru">True</option>
                        </select>
                    </label>
                    <label className="input-card" >
                        Effect
                        <textarea value={this.state.effect} onChange={this.handleEffectChange} className="effect-input entry"/>
                    </label>
                    <button>Update Item</button>
                </form>
            </div>
        )
    }
}
