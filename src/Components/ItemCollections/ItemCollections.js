import React from 'react';
import './ItemCollections.scss';

//import {handleErrors} from "../../utils/error-handler";

class ItemCollections extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userCollections: [],
            collection: [],
            collectionId: props.match.params.collectionId,
            user: JSON.parse(localStorage.getItem("user")),
        };
        this.loadUserCollections();
        this.loadUserCollection()
    }

    loadUserCollection() {
        fetch(`http://localhost:8000/collections/${this.state.collectionId}`)
            .then(response => response.json())
            .then(collection => this.setState({...this.state, collection}))
    }

    loadUserCollections() {
        fetch(`http://localhost:8000/collections/items/${this.state.collectionId}/list`)
            .then(response => response.json())
            .then(userCollections => this.setState({...this.state, userCollections}))
    }

    delete(id) {
        fetch('http://localhost:8000/collections/items/delete/' + id, {
            method: 'DELETE',
        })
            .then(() => this.loadUserCollections())
    }

    render() {
        return <div className="collection-item-list">
            <a href={"/" + this.state.collectionId + "/add"}>
                {this.state.user && this.state.user.id === this.state.collection.userId && <button type="button" className="btn btn-secondary -add">Add</button>}
            </a>
            {this.state.userCollections.map(item =>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="card-body-list">
                            <div>
                                <div className="card-body">
                                    <a href={"/" + this.state.collectionId + "/items/" + item.id}><h5
                                        className="card-title">{item.title}</h5></a>
                                    <p className="card-text">{item.description}</p>
                                </div>
                                {this.state.user && this.state.user.id === item.userId && <div className="actions">
                                    <button type="button" className="btn btn-danger"
                                            onClick={() => this.delete(item.id)}>Delete
                                    </button>
                                    <a href={"/" + item.id + "/edit-items"}>
                                        <button type="button" className="btn btn-link">Edit</button>
                                    </a>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    }
}

export default ItemCollections;
