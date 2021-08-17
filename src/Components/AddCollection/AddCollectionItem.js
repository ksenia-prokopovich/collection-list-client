import React from 'react';
import './AddCollectionItem.scss';
import {handleErrors} from "../../utils/error-handler";


class AddCollectionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            collectionId: props.match.params.id
        }
        if (this.state.collectionId) {
            this.loadCollectionItem()
        }
    }

    add() {
        fetch('http://localhost:8000/collections/items/create', {
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
                window.open(process.env.PUBLIC_URL + "/#/items", '_self')
                // document.location.reload();
            });
    }

    edit() {
        fetch('http://localhost:8000/collections/items/edit-items/' + this.state.collectionId, {
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
                this.props.history.push(process.env.PUBLIC_URL + "/#/items")
            });
    }

    onSave() {
        if (this.state.collectionId) {
            this.edit();
        } else  {
            this.add();
        }
    }


    loadCollectionItem() {
        fetch('http://localhost:8000/collections/items/' + this.state.collectionId)
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
            <form>
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
                <button type="submit" className=" btn btn-dark" onClick={this.onSave.bind(this)}>Save</button>
            </form>
        </div>
    }
}

export default AddCollectionItem;
