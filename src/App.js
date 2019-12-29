import React from 'react';
import CardListing from './components/CardListing';
import ProductDetail from './components/ProductDetail';
import ErrorPage from './components/ErrorPage';
import './assets/style/listing.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h1 className="page-heading">Buy Insurance</h1>
      <Switch>
        <Route path='/' exact component={CardListing} />
        <Route path='/detail/:id' exact component={ProductDetail} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
