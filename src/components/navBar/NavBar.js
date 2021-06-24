import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '../../assets/SearchIcon'
import HomeIcon from '../../assets/HomeIcon'
import LockIcon from '../../assets/LockIcon'
import { Link } from "react-router-dom"
import Typography from '@material-ui/core/Typography'
import './NavBar.css'

const NavBar = () => {
    const [selectedRoute, setSelectedRoute] = useState(window.location.pathname);

    const routes = [
        {
          path: "/individual",
          logo: <HomeIcon />,
        },
        {
          path: "/individual/products",
          displayName: "Products",
        },
        {
          path: "/individual/how-we-invest",
          displayName: "How we invest",
        },
        {
          path: "/individual/retirement",
          displayName: "Retirement",
        },
        {
          path: "/individual/college-savings",
          displayName: "College savings",
        },
        {
          path: "/individual/perspectives",
          displayName: "Perspectives",
        },
        {
          path: "/individual/forms",
          displayName: "Forms",
        },
        {
          path: "/individual/tax-center",
          displayName: "Tax center",
        },
        {
          path: "/individual/account-summary",
          displayName: "My accounts",
          logo: <LockIcon style={{marginRight: "0.5em"}}/>
        },
    ]

    return (
    <div style={{backgroundColor: "#373A3C"}}>
      <div className="header-container" style={{marginLeft: "auto", marginRight: "auto"}}>
        <Grid 
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
        >
            <Grid item>
                <Grid container>
                    { routes.map((route, index) => (
                        <Link 
                          key={ index } 
                          className={selectedRoute === route.path ? `navbar-link-selected ${route.logo ? "logo-link" : ""}` : `navbar-link ${route.path.includes("account") ? "account-link" : ""} ${route.logo ? "logo-link" : ""}`} 
                          to={route.path}
                          onClick={ () => setSelectedRoute(route.path)}
                        >
                            <Grid item>
                              <Typography>{route.logo ? route.logo : ""}{route.displayName ? route.displayName : ""}</Typography>
                            </Grid>
                        </Link>
                    )) }
                </Grid>
            </Grid>
            <Grid item style={{alignSelf: "center"}}>
                <SearchIcon />
            </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default NavBar;