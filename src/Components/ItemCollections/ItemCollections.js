import React from 'react';
import './ItemCollections.scss';

//import {handleErrors} from "../../utils/error-handler";

class ItemCollections extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemCollections: [],
            collection: [],
            collectionId: props.match.params.collectionId,
            user: JSON.parse(localStorage.getItem("user")),
            userId: localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).id,
            users: [],
        };
        this.loadItemCollections();
        this.loadItemCollection();
        this.loadUsers();
    }

    loadUsers() {
        fetch('http://localhost:8000/users')
            .then(response => response.json())
            .then(users => this.setState({ ...this.state, users }))
    }

    loadItemCollection() {
        fetch(`http://localhost:8000/collections/${this.state.collectionId}`)
            .then(response => response.json())
            .then(collection => this.setState({...this.state, collection}))
    }

    loadItemCollections() {
        fetch(`http://localhost:8000/collections/items/${this.state.collectionId}/list`)
            .then(response => response.json())
            .then(itemCollections => this.setState({...this.state, itemCollections}))
    }

    delete(id) {
        fetch('http://localhost:8000/collections/items/delete/' + id, {
            method: 'DELETE',
        })
            .then(() => this.loadItemCollections())
    }

    getUserFirstname(userId) {
        return userId && this.state.users.length && this.state.users.find(item => item.id === userId).firstname;
    }

    render() {
        return <div className="collection-item-list">
            <a href={"/" + this.state.collectionId + "/add"}>
                {this.state.user && this.state.user.id === this.state.collection.userId && <button type="button" className="btn btn-secondary -add">Add</button>}
            </a>
            {this.state.itemCollections.map(item =>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="card-body-list">
                            <div>
                                <div className="card-body">
                                    <a href={process.env.PUBLIC_URL + "/#/" + this.state.collectionId + "/items/" + item.id}><h5
                                        className="card-title" title={item.title}>{item.title}</h5></a>
                                    <img src={item.image}/>
                                    <p className="card-text">{item.description}</p>
                                </div>
                                {this.state.user && this.state.user.id === item.userId && <div className="actions">
                                    <button type="button" className="btn btn-danger"
                                            onClick={() => this.delete(item.id)}>Delete
                                    </button>
                                    <a href={process.env.PUBLIC_URL + "/#/" + item.id + "/edit-items"}>
                                        <button type="button" className="btn btn-link">Edit</button>
                                    </a>
                                    <span className="card-author">Author: {this.getUserFirstname(item.userId)} <a className="bi bi-person-circle"> </a></span>

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
