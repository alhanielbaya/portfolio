import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'spectre.css';
import './icons.min.css';
import './index.css';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { profileReducer } from './store/profileReducer/profileReducer';
import { projectReducer } from './store/projectReducer/projectReducer';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IProfileState } from './store/profileReducer/profileTypes';
import { IProjectState } from './store/projectReducer/projectTypes';

export interface IRootState {
  profile: IProfileState;
  projects: IProjectState;
}

const rootReducer = combineReducers<IRootState>({
  profile: profileReducer,
  projects: projectReducer
});

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
