import React from 'react'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import { StoreProvider } from './store/store'

import { Dashboard } from './pages/Dashboard'
import { Account } from './pages/Account'
import { Categories } from './pages/Categories'
import { Category } from './pages/Category'
import { Page404 } from './pages/Page404'

function App() {
  return (
    <section>
      <StoreProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path='/account' component={Account} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/categories/:categoryId" component={Category} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </StoreProvider>
    </section>
  );
}

export default App;
