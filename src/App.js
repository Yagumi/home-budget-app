import React from 'react'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Account } from './components/Account'
import { Categories } from './components/Categories'
import { Category } from './components/Category'
import { Page404 } from './components/Page404'

function App() {
  return (
    <section>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path='/account' component={Account} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/:categoryId" component={Category} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </section>
  );
}

export default App;
