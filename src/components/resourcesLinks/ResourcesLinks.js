import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import { Link } from "react-router-dom"
import Typography from '@material-ui/core/Typography'
import './ResourcesLinks.css'

const ResourcesLinks = () => {
    const routes = [
        {
          path: "",
          displayName: "What's new",
        },
        {
          path: "",
          displayName: "Videos & tutorials",
        },
        {
          path: "",
          displayName: "How do i?",
        },
        {
          path: "",
          displayName: "FAQ",
        }
    ]

    return (
    <div>
        <Card style={{padding: "2em"}}>
            <Grid container direction="column">
                <Typography className="resources-title">RESOURCES</Typography>
                { routes.map((route, index) => (
                    <Link 
                        key={ index } 
                        className={"resources-links"} 
                        to={route.path}
                    >
                        <Grid item>
                            <Typography>{route.logo ? route.logo : ""}{route.displayName ? route.displayName : ""}</Typography>
                        </Grid>
                    </Link>
                )) }
            </Grid>
        </Card>
    </div>
  )
}

export default ResourcesLinks;