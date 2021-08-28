import React from 'react';
import './App.scss';
import { HashRouter as Router } from 'react-router-dom'
import Header from './Components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import CollectionList from "./Components/CollectionList/CollectionList";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import NotFound from "./Components/Not-found/Not-found";
import AddCollectionItem from "./Components/AddCollection/AddCollectionItem";
import ItemCollections from "./Components/ItemCollections/ItemCollections";
import CreateCollections from "./Components/CreateCollections/CreateCollections";
import ItemView from "./Components/ItemView/ItemView";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: localStorage.getItem('user')
        }
    }

    render() {
        return <div className="content">
            <Header/>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={CollectionList}/>
                    <Route exact path="/:collectionId/items" component={ItemCollections}/>
                    {!this.state.user && <Route path="/sing-up" component={Registration}/>}
                    {!this.state.user && <Route path="/sing-in" component={Login}/>}
                    {this.state.user && <Route path="/:collectionId/add" component={AddCollectionItem}/>}
                    <Route path="/:collectionId/items/:id" component={ItemView}/>
                    {this.state.user && <Route path="/create-collections" component={CreateCollections}/>}
                    {this.state.user && <Route path="/:id/edit-collection" component={CreateCollections}/>}
                    {this.state.user && <Route path="/:id/edit-items" component={AddCollectionItem}/>}
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    };
}

export default App;
