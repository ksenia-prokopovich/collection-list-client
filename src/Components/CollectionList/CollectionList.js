import React from 'react';
import './CollectionList.scss';


class CollectionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: [],
            users: [],
            user: JSON.parse(localStorage.getItem("user")),
        };
        this.loadCollections();
        this.loadUsers()
    }

    loadUsers() {
        fetch('http://localhost:8000/users')
            .then(response => response.json())
            .then(users => this.setState({ ...this.state, users }))
    }

    loadCollections() {
        fetch('http://localhost:8000/collections')
            .then(response => response.json())
            .then(collections => this.setState({...this.state, collections}))
    }

    collectionsChange(event) {
        this.setState({
            ...this.collections,
            collections: event.target.value
        });
    }

    delete(id) {
        fetch('http://localhost:8000/collections/delete/' + id, {
            method: 'DELETE',
        })
            .then(() => this.loadCollections())
    }

    add() {
        fetch('http://localhost:8000/collections/add', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: this.state.title, description: this.state.description}),
        })
            .then(() => {
                window.open(process.env.PUBLIC_URL + "/#/create-collections", '_self')
            });
    }

    getUserFirstname(userId) {
        return userId && this.state.users.length && this.state.users.find(collection => collection.id === userId).firstname;
    }

    render() {
        return <div className="collection-list container">
            {this.state.user &&
            <button type="button" className="btn btn-secondary" onClick={this.add.bind(this)}>Create...</button>}
            {this.state.collections.map(collection => (
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{collection.title}</h5>
                            <img src={collection.image}/>
                            <p className="card-text">{collection.description}</p>
                            <span className="card-author">Author: {this.getUserFirstname(collection.userId)} <a className="bi bi-person-circle"> </a></span>
                            <div className="actions">
                                {this.state.user && this.state.user.id === collection.userId && <button type="button" className="btn btn-danger"
                                                            onClick={() => this.delete(collection.id)}>Delete</button>}
                                <a href={process.env.PUBLIC_URL + "/#/" + collection.id + "/edit-collection"}>
                                    {this.state.user && this.state.user.id === collection.userId && <button type="button" className="btn btn-link">Edit</button>}
                                </a>
                                <a className="card-link list-link" href={process.env.PUBLIC_URL + "/#/" + collection.id + "/items"}>All
                                    collection...</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    }
}

export default CollectionList;



