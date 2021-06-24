import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'
import AccountsMainPage from '../accountsMainPage/AccountsMainPage'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getToken, getBankToken } from '../../store/userSlice'

const IndividualMainPage = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.user.token)
  const bankToken = useSelector(state => state.user.bankToken)

  useEffect( () => {
    if (token === null) {
      dispatch(getToken())
    }
    if (bankToken === null) {
      dispatch(getBankToken())
    }
  }, [])

  const routes = [
    {
      path: "/individual",
      component: () => <div>Home</div>,
      exact: true
    },
    {
      path: "/individual/products",
      component: () => <div>Products</div>,
      exact: true
    },
    {
      path: "/individual/how-we-invest",
      component: () => <div>How we invest</div>,
      exact: true
    },
    {
      path: "/individual/retirement",
      component: () => <div>Retirement</div>,
      exact: true
    },
    {
      path: "/individual/college-savings",
      component: () => <div>College savings</div>,
      exact: true
    },
    {
      path: "/individual/perspectives",
      component: () => <div>Perspectives</div>,
      exact: true
    },
    {
      path: "/individual/forms",
      component: () => <div>Forms</div>,
      exact: true
    },
    {
      path: "/individual/tax-center",
      component: () => <div>Tax center</div>,
      exact: true
    },
    {
      path: "/individual/account-summary",
      component: () => <AccountsMainPage />,
      exact: false
    }
  ]

  return (
    <div>
      <Router>
        <Header />
        <NavBar />
        <Switch>
          { routes.map((route, index) => (
            <Route
              key={ index }
              path={ route.path }
              exact={ route.exact }
              children={ <route.component /> } 
            />)) }
          {<Route render={() => <Redirect to='/individual' /> }></Route>}
        </Switch>
      </Router>
    </div>
  )
}

export default IndividualMainPage;

