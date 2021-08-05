import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './component/Home.js'
import Gallery from './component/Gallery.js'
import Nav from './component/Nav.js'

const App = () => {
  return (
    <>
      
      <Router >
        <Nav />
<Switch>
  <Route exact path="/" >
<Home />
</Route>
<Route exact path="/Gallery">
<Gallery />
</Route>
</Switch>
      </Router>




    </>
  )
}

export default App
