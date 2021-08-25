import React from 'react';
import './ItemView.scss';
import Comments from "../Comments/Comments";

//import {handleErrors} from "../../utils/error-handler";


class ItemView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            createdAt: '',
            userId: localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).id,
            id: props.match.params.id,
            collectionId: props.match.params.collectionId,
            likes: [],
            user: localStorage.getItem("user")
        };
    }

    componentWillMount() {
        if (this.state.id) {
            this.loadItem();
            this.loadLikes();
        }
    }

    loadItem() {
        fetch(`http://localhost:8000/collections/items/${this.state.id}`)
            .then(response => response.json())
            .then(item => this.setState({...this.state, ...item}));
    }

    delete(id) {
        fetch('http://localhost:8000/collections/items/delete/' + id, {
            method: 'DELETE',
        })
            .then(() => {
                this.props.history.push(`/${this.state.collectionId}/items`);
            })
    }

    like() {
        fetch('http://localhost:8000/collections/items/like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: this.state.userId,
                itemId: this.state.id
            })
        })
            .then(() => this.loadLikes());
    }

    hasLike(userId) {
        return userId && this.state.likes.length && this.state.likes.find(item => item.userId === userId);
    }

    loadLikes() {
        fetch(`http://localhost:8000/collections/items/likes/${this.state.id}`)
            .then(response => response.json())
            .then(likes => this.setState({ likes }))
    }

    render() {
        return <div className="collection-item-view">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">{this.state.description}</p>
                        <p className="card-text-date">{new Date(this.state.createdAt).toDateString()}</p>
                        {this.state.user && <div className="actions">
                            <div className="actions2">
                                <a href={"/" + this.state.id + "/edit-items"}><i className="bi bi-gear-fill"> </i></a>
                                <i className="bi bi-trash" onClick={() => this.delete(this.state.id)}> </i>
                            </div>
                            <i className={this.hasLike(this.state.userId) ? 'bi bi-heart-fill -active' : 'bi bi-heart-fill'}
                               onClick={this.like.bind(this)}>{this.state.likes.length}</i>
                        </div>}
                    </div>
                </div>
            </div>
            {this.state.user && <Comments id={this.state.id}/>}
        </div>
    }
}

export default ItemView;
