import React from "react";
import { Redirect, Route } from "react-router";

export default function ProtectedRoute({ component: Component, ...props }) {
  return props.user ? <Route {...props} render={() => <Component {...props} />} /> : <Redirect to="/" />;
}