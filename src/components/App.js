import React from 'react';
import '../style/App.css';
import Home from './pages/Home';
import Navbar from '../components/section/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => {
    return (

        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/"><Home /></Route>
            </Switch>
        </Router>
    );
};

export default App;