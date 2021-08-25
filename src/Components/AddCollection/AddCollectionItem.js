import React from 'react';
import './AddCollectionItem.scss';
import {handleErrors} from "../../utils/error-handler";


class AddCollectionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            collectionId: props.match.params.collectionId,
            id: props.match.params.id
        }
    }

    componentWillMount() {
        if (this.state.id) {
            this.loadCollectionItem()
        }
    }

    add() {
        fetch('http://localhost:8000/collections/items/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                collectionId: this.state.collectionId
            }),
        })
            .then(() => {
                this.props.history.push(`/${this.state.collectionId}/items`)
            });
    }

    edit() {
        fetch('http://localhost:8000/collections/items/edit-items/' + this.state.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
            }),
        })
            .then(response => handleErrors(response))
            .then(() => {
                this.props.history.push(`/${this.state.collectionId}/items`)
            });
    }

    onSave() {
        if (this.state.id) {
            this.edit();
        } else  {
            this.add();
        }
    }


    loadCollectionItem() {
        fetch('http://localhost:8000/collections/items/' + this.state.id)
            .then(response => response.json())
            .then(item => this.setState({...this.state, ...item}))
    }

    titleChange(event) {
        this.setState({
            ...this.state,
            title: event.target.value
        });
    }

    descriptionChange(event) {
        this.setState({
            ...this.state,
            description: event.target.value
        });
    }

    render() {
        return <div className="form-collection container">
                <div className="mb-3">
                    <label htmlFor="exampleInputTitle">Title</label>
                    <input type="text" value={this.state.title} className="form-control" id="exampleInputTitle"
                           name="title" onChange={this.titleChange.bind(this)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputDescription">Description</label>
                    <textarea rows="5" value={this.state.description} className="form-control" id=" exampleInputTitle"
                              name=" content" onChange={this.descriptionChange.bind(this)}/>
                </div>
                <button type="submit" className=" btn btn-secondary" onClick={this.onSave.bind(this)}>Save</button>
        </div>
    }
}

export default AddCollectionItem;
