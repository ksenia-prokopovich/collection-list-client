import React from 'react';
import './CreateCollections.scss';
import {handleErrors} from "../../utils/error-handler";

class CreateCollections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            title: '',
            description: '',
            fileInput: React.createRef(),
        }

        if (this.state.id) {
            this.loadItem()
        }
    }

    onSave() {
        if (this.state.id) {
            this.edit();
        } else {
            this.add();
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
                image: this.state.image,
                userId: JSON.parse(localStorage.getItem('user')).id
            }),
        })
            .then(() => {
                this.props.history.push(process.env.PUBLIC_URL + `/#/`);
            });
    };

    edit() {
        fetch('http://localhost:8000/collections/edit-collection/' + this.state.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                image: this.state.image,
            }),
        })
            .then(response => handleErrors(response))
            .then(() => {
                this.props.history.push(process.env.PUBLIC_URL + "/#/")
            });
    }

    loadItem() {
        fetch('http://localhost:8000/collections/' + this.state.id)
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

    imageChange() {
        let reader = new FileReader();
        reader.readAsDataURL(this.state.fileInput.current.files[0]);
        reader.onload = () => {
            this.setState({
                image: reader.result
            });
        }
    };

    render() {
        return <div className="form-collection container">
            <div className="mb-3">
                <label htmlFor="exampleInputTitle">Title</label>
                <input type="text" value={this.state.title} className="form-control" id="exampleInputTitle"
                       name="title" onChange={this.titleChange.bind(this)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputDescription">Description</label>
                <textarea rows="5" value={this.state.description} className=" form-control" id=" exampleInputTitle"
                          name=" content" onChange={this.descriptionChange.bind(this)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputDescription">Description</label>
                <input ref={this.state.fileInput} type="file" className="form-control"
                       name="title" onChange={this.imageChange.bind(this)}/>
            </div>
            <button type="submit" className="btn btn-secondary" onClick={this.onSave.bind(this)}>Save</button>
        </div>
    }
}


export default CreateCollections;
