import React from 'react';
import './CollectionList.scss';


class CollectionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: []
        };
        this.loadCollections()
    }

    loadCollections() {
        fetch('http://localhost:8000/collections')
            .then(response => response.json())
            .then(collections => this.setState({ ...this.state, collections }))
    }

    collectionsChange(event) {
        this.setState({
            ...this.collections,
            collections: event.target.value
        });
    }

    delete(id) {
        fetch('http://localhost:8000/collections/delete/' + id, {
            method: 'DELETE',})
            .then(() => this.loadCollections())
    }

    add(){
        fetch('http://localhost:8000/collections/add', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: this.state.title, description: this.state.description}),
        })
            .then(() => {
                window.open(process.env.PUBLIC_URL + "/#/create-collections", '_self')
                document.location.reload();
            });
    }


    render() {
        return <div className="collection-list container">
            <button type="button" className="btn btn-secondary" onClick={this.add.bind(this)}>Create...</button>
                <div className="col">
                    {this.state.collections.map(collection =>(
                    <div className="card">
                        {/*<img src="..." className="card-img-top" alt="..."/>*/}
                            <div className="card-body">
                                        <h5 className="card-title">{collection.title}</h5>
                                        <p className="card-text">{collection.description}</p>
                                <a className="card-link" href={"/#/" + collection.id + "/items"}>All collection...</a>
                                <button type="button" className="btn btn-danger" onClick={(id) => this.delete(collection.id)}>Delete</button>
                            </div>
                    </div>
                    ))}
                </div>
            </div>
    }
}

export default CollectionList;



