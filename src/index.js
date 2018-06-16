import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReduxPromise from 'redux-promise'

import reducers from './reducers';
import MenuBar from './components/menu-bar';
import KeywordsIndex from './containers/keywords-index';
import KeywordNew from './containers/keyword-new';
import keywordShow from './containers/keyword-show';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>  
        <MenuBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={KeywordsIndex} />
            <Route path="/keywords/new" component={KeywordNew} />
            <Route path="/keywords/show/:id" component={keywordShow} />
            <Route path='*' component={KeywordsIndex} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-content'));
