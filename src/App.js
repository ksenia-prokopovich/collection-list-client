import React from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom'
//import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import CollectionList from "./Components/CollectionList/CollectionList";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import NotFound from "./Components/Not-found/Not-found";
import AddCollection from "./Components/AddCollection/AddCollection";
import UserCollections from "./Components/UserCollections/UserCollections";
import CreateCollections from "./Components/CreateCollections/CreateCollections";


class App extends React.Component {

    render() {
        return <div>
            <Header/>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={CollectionList}/>
                    <Route path="/sing-up" component={Registration} />
                    <Route path="/sing-in" component={Login}/>
                    <Route path="/:id/add" component={AddCollection}/>
                    <Route path="/:id/items" component={UserCollections}/>
                    <Route path="/create-collections" component={CreateCollections}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    };
}

export default App;
