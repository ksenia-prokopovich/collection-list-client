import React from 'react';
import './Comments.scss';

//import {handleErrors} from "../../utils/error-handler";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            message: '',
            comments: [],
            users: [],
            userId: localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).id,
            user: JSON.parse(localStorage.getItem("user"))
        }
        this.loadComments();
        this.loadUsers();
    }

    loadComments() {
        fetch(`http://localhost:8000/collections/items/comments/${this.state.id}`)
            .then(response => response.json())
            .then(comments => this.setState({...this.state, comments}))
    }

    addComment() {
        fetch(`http://localhost:8000/collections/items/comments/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: this.state.message,
                itemId: this.state.id,
                userId: JSON.parse(localStorage.getItem('user')).id,
            }),
        })
            //.then((response => handleErrors(response)))
            .then(() => {
                this.setState({ message: ''});
                this.loadComments();
            });
    }

    messageChange(event) {
        this.setState({
            ...this.state,
            message: event.target.value
        });
    }

    delete(id) {
        fetch('http://localhost:8000/collections/items/comments/delete/' + id, {
            method: 'DELETE',
        })
            .then(() => this.loadComments())
    }

    loadUsers() {
        fetch('http://localhost:8000/users')
            .then(response => response.json())
            .then(users => this.setState({ ...this.state, users }))
    }

    getUserName(userId) {
        return userId && this.state.users.length && this.state.users.find(item => item.id === userId).firstname;
    }

    render() {
        return <div className="collection-comment">
            <div>
                <div className="mb-3-comment">
                    <label htmlFor="formGroupExampleInput" className="form-label">Comments</label>
                    <input type="text" value={this.state.message} className="form-control" placeholder="Enter your comment" onChange={this.messageChange.bind(this)}/>
                </div>
                <div className="actions-comment">
                    <button type="button" className="btn btn-secondary" onClick={this.addComment.bind(this)}>Send</button>
                </div>
            </div>
            {this.state.comments.map(item =>
                <div className="card-body-comment">
                    <h5 className="card-title">
                        {this.state.user && this.state.user.id === item.userId && <button type="button" className="btn btn-outline-danger trash" onClick={() => this.delete(item.id)}>
                            <i className="bi bi-trash"> </i>
                        </button>}
                        <span className="user-name">{this.getUserName(item.userId)}</span>
                    </h5>
                    <p className="card-text">{item.message}</p>
                </div>
            )}
        </div>
    }
}


export default Comments;
