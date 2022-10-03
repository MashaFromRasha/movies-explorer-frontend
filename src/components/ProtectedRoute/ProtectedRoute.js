import React from "react";
import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/store';

function ProtectedRoute({ component: Component, path }) {
    const { userState } = useContext(CurrentUserContext);
    if (!userState.loggedIn) {
        return <Redirect to="/" />;
    }
    return (
        <Route path={path}>
            <Component />
        </Route>
    );
}

export default ProtectedRoute;