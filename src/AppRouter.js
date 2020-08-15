import React from 'react';
import { history } from './helpers/history';
import { PrivateRouteBuyer } from './Buyer/PrivateRouteBuyer';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import BuyerPage from './Buyer/BuyerPage';
import BuyerLogin from './Buyer/BuyerLogin';
import Landing from './components/Landing';

class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <div style={{ display: "flex", justifyContent: "center"}}>
                    <Switch>
                        <Route path="/login" component={BuyerLogin} />
                        <PrivateRouteBuyer path="/buyers" component={BuyerPage} />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/search/:a(name=.+)" component={Landing} />

                    </Switch>

                </div>
            </Router>
        );
    }
}
export default AppRouter;
