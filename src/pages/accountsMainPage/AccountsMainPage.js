import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import BreadCrumbBar from '../../components/breadCrumbBar/BreadCrumbBar'
import Grid from '@material-ui/core/Grid'
import Sidebar from '../../components/sidebar/Sidebar'
import ResourcesLinks from '../../components/resourcesLinks/ResourcesLinks'
import TransactionsMainPage from './transactionsMainPage/TransactionsMainPage'

const AccountsMainPage = () => {
  const routes = [
    {
      path: "/individual/account-summary/performance",
      component: () => <div>Products</div>,
      exact: true
    },
    {
      path: "/individual/account-summary/my-profile",
      component: () => <div>Retirement</div>,
      exact: true
    },
    {
      path: "/individual/account-summary/tax-information",
      component: () => <div>College savings</div>,
      exact: true
    },
    {
      path: "/individual/account-summary/confirmations-statements",
      component: () => <div>Perspectives</div>,
      exact: true
    },
    {
      path: "/individual/account-summary",
      component: () => <div>Home</div>,
      exact: true
    },
    {
      path: "/individual/account-summary/transactions",
      component: () => <TransactionsMainPage />,
      exact: false
    }
  ]

  return (
    <div style={{backgroundColor: "#EBEBEB", minHeight: "100vh", paddingBottom: "2em"}}>
      <Router>
        <div className="header-container" style={{marginLeft: "auto", marginRight: "auto"}}>
          <BreadCrumbBar />
          <Grid container direction="row">
            <Grid container direction="column" sm={3}>
              <Sidebar />
              <ResourcesLinks />
            </Grid>
            <Grid item sm={9}>
              <Switch>
                { routes.map((route, index) => (
                  <Route
                  key={ index }
                  path={ route.path }
                  exact={ route.exact }
                  children={ <route.component /> } 
                  />)) }
                  {<Route render={() => <Redirect to='/individual/account-summary' /> }></Route>}
              </Switch>
            </Grid>
          </Grid>
        </div>
      </Router>
    </div>
  )
}

export default AccountsMainPage;