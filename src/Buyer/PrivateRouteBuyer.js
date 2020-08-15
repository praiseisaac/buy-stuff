import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {buyerAuthService} from './services/buyerAuthService';

export const PrivateRouteBuyer = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentBuyer = buyerAuthService.currentBuyerValue;
        if (!currentBuyer) {
          console.log("redirect from buyer");
            // not logged in so redirect to login page with the return url
            // pathname: '/login',
            window.location.href = "/login";
            return <Redirect to={{ state: { from: props.location } }} />

        }
        console.log("logged in as buyer");
        // authorised so return component
        return <Component {...props} />
    }} />
)
