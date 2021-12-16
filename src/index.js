import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
      <Provider store={store}>
          <App />
      </Provider>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
