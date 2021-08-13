import React from 'react';
import './UserCollections.css';

class UserCollections extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userCollections: [],
            collectionId: props.match.params.id,
        };
        this.loadUserCollections()
    }

    loadUserCollections() {
        fetch(`http://localhost:8000/collections/items/${this.state.collectionId}`)
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
        return <div>
            <a href={"/#/" + this.state.collectionId + "/add"}>
                <button type="button" className="btn btn-secondary">Add</button>
            </a>
            {this.state.userCollections.map(userCollections =>
            <div className="card mb-3">
                <div className="row g-0">
                        <div>
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{userCollections.title}</h5>
                                    <p className="card-text">{userCollections.description}</p>
                                    <button type="button" className="btn btn-danger" onClick={(id) => this.delete(userCollections.id)}>Delete</button>
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
