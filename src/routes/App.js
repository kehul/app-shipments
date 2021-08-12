import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Layout from '../components/Layout';
import UserLayout from '../components/UserLayout';
import Login from '../containers/Login';
import Alert from '../containers/Alert';
import Location from '../containers/Location';
import Packs from '../containers/Packs';
import Send from '../containers/Send';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/"><Redirect to="/login" /></Route>
            <Layout exact path="/login" component={Login} />
            <UserLayout exact path="/alert" component={Alert} />
            <UserLayout exact path="/location" component={Location} />
            <UserLayout exact path="/packs" component={Packs} />
            <UserLayout exact path="/send" component={Send} />
        </Switch>
    </Router>
);

export default App;