import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./store/reducer";


const logger = store => {
    return next => {
        return action => {
            console.log("[Middleware] Dispatching functions", action)
            const check = next(action)
            console.log("[Middleware] next state", store.getState())
            return check
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render( <
    React.StrictMode >
    <
    Provider store = { store } >
    <
    App / >
    <
    /Provider>{" "} < /
    React.StrictMode > ,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();