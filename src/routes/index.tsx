import React from 'react';
import routeList from './routeList';
import { Switch, Route } from 'react-router-dom';

const MainRoute = () => {
    return (
        <Switch>
            {
                routeList.map((route: any, key: any) => 
                    <Route
                        path={`${route.path}`}
                        name={route.name}
                        component={route.component}
                        exact={route.exact}
                        key={key}
                    />
                )
            }
        </Switch>
    )
}

export default MainRoute;