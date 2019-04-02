import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from '../Components/Movies';

 function Routes(props) {
    const { pause } = props
    return (
    <Router>
        <Switch>
            <Route path="/" render={() => !pause && <Movies {...props} />} />
            {/* <Route path="/login" exact component={Login} /> */}
            {/* <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} /> */}
        </Switch>
    </Router>
    )
}

export default Routes