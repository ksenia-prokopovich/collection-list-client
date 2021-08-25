import React from 'react';
import './UserCollections.scss';

//import {handleErrors} from "../../utils/error-handler";

class UserCollections extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userCollections: [],
            collectionId: props.match.params.collectionId,
            user: localStorage.getItem("user")
        };
        this.loadUserCollections()
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
                {this.state.user && <button type="button" className="btn btn-secondary -add">Add</button>}
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
                                <div className="actions">
                                    {this.state.user && <button type="button" className="btn btn-danger"
                                                                onClick={() => this.delete(item.id)}>Delete
                                    </button>}
                                    <a href={"/" + item.id + "/edit-items"}>
                                        {this.state.user &&
                                        <button type="button" className="btn btn-link">Edit</button>}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    }
}

export default UserCollections;
