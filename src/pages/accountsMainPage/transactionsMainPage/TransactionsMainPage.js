import React from 'react'
import { Route, Redirect } from "react-router-dom"
import ManageBankAccounts from '../../manageBankAccounts/ManageBankAccounts'
import AdditionalInvestments from '../../additionalInvestments/AdditionalInvestments'
import Registrations from '../../registrations/Registrations'
import PendingInvestments from '../../pendingInvestments/PendingInvestments'


const TransactionsMainPage = () => {
  const routes = [
    {
      path: "/individual/account-summary/transactions/manage-bank-accounts",
      component: () => <ManageBankAccounts />,
      exact: true
    },
    {
      path: "/individual/account-summary/transactions/additional-investments",
      component: () => <AdditionalInvestments />,
      exact: true
    },
    {
      path: "/individual/account-summary/transactions/pending",
      component: () => <PendingInvestments />,
      exact: true
    },
    {
      path: "/individual/account-summary/transactions",
      component: () => <Registrations />,
      exact: true
    },
  ]

  return (
    <div style={{backgroundColor: "#EBEBEB"}}>
        { routes.map((route, index) => (
            <Route
            key={ index }
            path={ route.path }
            exact={ route.exact }
            children={ <route.component /> } 
            />)) }
            {/*<Route render={() => <Redirect to='/individual/account-summary/transactions' /> }></Route>*/}
    </div>
  )
}

export default TransactionsMainPage;