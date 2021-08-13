import React from 'react';
import './CreateCollections.scss';

class CreateCollections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            collectionId: props.match.params.id
        }
    }

    add() {
        fetch('http://localhost:8000/collections/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
            }),
        })
            .then(() => {
                window.open(process.env.PUBLIC_URL + "/#/items", '_self')
                document.location.reload();
            });
    };

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
                <div  className="mb-3">
                    <label htmlFor="exampleInputTitle">Title</label>
                    <input type="text" value={this.state.title} className="form-control" id="exampleInputTitle" name="title" onChange={this.titleChange.bind(this)}/>
                </div>
                <div  className="mb-3">
                    <label for="exampleInputDescription">Description</label>
                    <textarea rows="5" value={this.state.description} class=" form-control" id=" exampleInputTitle" name=" content" onChange={this.descriptionChange.bind(this)}/>
                </div>
                <button type="submit" class=" btn btn-dark" onClick={this.add.bind(this)}>Save</button>
            </form>
        </div>
    }
}


export default CreateCollections;
