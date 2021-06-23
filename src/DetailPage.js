import React, { Component } from 'react'
import { getAllTypes, getOneItem, updateItem, deleteItem } from './utils'

export default class DetailPage extends Component {
    state = {
        name: '',
        type: '',
        type_id: 0,
        allTypes: [],
        level: 0,
        cursed: '',
        effect: ''
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;
        const item = await getOneItem(id);
        const types = await getAllTypes();

        this.setState({
            name: item.name,
            type: item.type,
            type_id: item.type_id,
            allTypes: types,
            level: item.level,
            cursed: item.cursed,
            effect: item.effect,
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

    handleDelete = async e => {
        await deleteItem(this.params.id);
        this.props.history.push('/')
    }

    handleSubmit = async e => {
        e.preventDefault();
        await updateItem(this.props.match.params.id, {
            name: this.state.name,
            type: this.state.type,
            type_id: this.state.type_id,
            level: this.state.level,
            cursed: this.state.cursed,
            effect: this.state.effect,
        });
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="update-container">
                <h2>Update Item</h2>
                <form onSubmit={this.handleSubmit}>
                    <label className="input-card" >
                        Name
                        <input value={this.state.name} onChange={this.handleNameChange} className="entry"/>
                    </label>
                    <label className="input-card" >
                        Type
                        <select onChange={this.handleTypeChange} className="entry">
                            {this.state.allTypes.map((type, i) =>
                                <option selected={type.id === this.state.type_id} value={type.id} key={i}>{type.name}</option>
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
                            <option value={false} key="fals">False</option>
                            <option selected={this.state.cursed} value={true} key="tru">True</option>
                        </select>
                    </label>
                    <label className="input-card" >
                        Effect
                        <textarea value={this.state.effect} onChange={this.handleEffectChange} className="effect-input entry"/>
                    </label>
                    <div className="finalize-buttons">
                        <button>Update Item</button>
                        <button onClick={this.handleDelete}>Delete Item</button>
                    </div>
                </form>
            </div>
        )
    }
}
