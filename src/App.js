import React from 'react';
import './App.scss';
import { HashRouter as Router } from 'react-router-dom'
//import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import CollectionList from "./Components/CollectionList/CollectionList";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import NotFound from "./Components/Not-found/Not-found";
import AddCollectionItem from "./Components/AddCollection/AddCollectionItem";
import UserCollections from "./Components/UserCollections/UserCollections";
import CreateCollections from "./Components/CreateCollections/CreateCollections";


class App extends React.Component {
    constructor() {
        super();
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
                    <Route path="/sing-up" component={Registration} />
                    <Route path="/sing-in" component={Login}/>
                    <Route path="/:id/add" component={AddCollectionItem}/>
                    <Route path="/:id/items" component={UserCollections}/>
                    <Route path="/create-collections" component={CreateCollections}/>
                    <Route path="/edit-collection/:id" component={CreateCollections}/>
                    <Route path="/:id/edit-items" component={AddCollectionItem}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    };
}

export default App;
