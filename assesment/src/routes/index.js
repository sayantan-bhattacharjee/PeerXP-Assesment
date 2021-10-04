import { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { ROUTES } from "./routesConfig";

const RouteWithSubRoutes = ({
  isPrivate,
  isEager,
  path,
  exact,
  routes,
  component: Component,
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routerProps) => {
        if (isPrivate) {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: routerProps.location,
                },
              }}
            />
          );
        }
        return isEager ? (
          <Component routes={routes} {...routerProps} />
        ) : (
          <Suspense fallback={<p>Loading...</p>}>
            <Component routes={routes} {...routerProps} />
          </Suspense>
        );
      }}
    />
  );
};

const RoutesWrapper = () => {
  return (
    <Switch>
      {ROUTES.map((route) => (
        <RouteWithSubRoutes {...route} key={route.path} />
      ))}
    </Switch>
  );
};

export default RoutesWrapper;
