import {Redirect, Route} from "react-router-dom";
import * as React from 'react';

function PrivateRoute({ children, ...rest  }) {
    const {currentUser} =  true;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                Boolean(currentUser) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/sign_in",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
