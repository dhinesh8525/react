import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import { Link } from "react-router-dom"
import Typography from '@material-ui/core/Typography'
import SummaryIcon from '../../assets/SummaryIcon'
import PerformanceIcon from '../../assets/PerformanceIcon'
import TransactionsIcon from '../../assets/TransactionsIcon'
import ChevronRightIcon from '../../assets/ChevronRightIcon'
import ProfileIcon from '../../assets/ProfileIcon'
import TaxIcon from '../../assets/TaxIcon'
import ConfsIcon from '../../assets/ConfsIcon'
import './Sidebar.css'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
    const selectedRoute = useLocation().pathname;

    const routes = [
        {
          path: "/individual/account-summary",
          displayName: "Account summary",
          logo: <SummaryIcon style={{marginRight: "1.8em"}}/>
        },
        {
          path: "/individual/account-summary/performance",
          displayName: "Performance",
          logo: <PerformanceIcon style={{marginRight: "1.5em"}} />
        },
        {
          path: "/individual/account-summary/transactions",
          displayName: "Transactions",
          logo: <TransactionsIcon style={{marginRight: "1.3em"}} />
        },
        {
          path: "/individual/account-summary/my-profile",
          displayName: "My profile",
          logo: <ProfileIcon style={{marginRight: "1.5em"}} />
        },
        {
          path: "/individual/account-summary/tax-information",
          displayName: "Tax information",
          logo: <TaxIcon style={{marginRight: "1.5em"}} />
        },
        {
          path: "/individual/account-summary/confirmations-statements",
          displayName: "Confirmation & statements",
          logo: <ConfsIcon style={{marginRight: "1.5em"}} />
        }
    ]

    return (
    <div style={{marginBottom: "1.5em"}}>
        <Card style={{padding: "2em"}}>
            <Grid container direction="column">
                { routes.map((route, index) => (
                    <Link 
                        key={ index } 
                        className={(route.path === "/individual/account-summary" ? selectedRoute === "/individual/account-summary" : selectedRoute.includes(route.path)) ? "sidebar-link-selected" : "sidebar-link"} 
                        to={route.path}
                    >
                        <Grid item>
                            <Typography style={(route.path === "/individual/account-summary" ? selectedRoute === "/individual/account-summary" : selectedRoute.includes(route.path)) ? {fontWeight: "bold"} : {}}>
                              <Grid container direction="row" alignItems="center" style={{flexWrap: "nowrap"}}>
                                <Grid item>{route.logo ? route.logo : ""}</Grid>
                                <Grid item>{route.displayName ? route.displayName : ""}</Grid>
                                <Grid item style={{flex: 1}}>
                                  <Grid container direction="row-reverse">
                                    <Grid item>{(route.path === "/individual/account-summary" ? selectedRoute === "/individual/account-summary" : selectedRoute.includes(route.path)) && <ChevronRightIcon/>}</Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Typography>
                        </Grid>
                    </Link>
                )) }
            </Grid>
        </Card>
    </div>
  )
}

export default Sidebar;