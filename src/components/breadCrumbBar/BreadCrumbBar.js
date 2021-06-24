import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Search from '../search/Search.js'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumbBar = () => {
    const [location, setLocation] = useState([])
    const routerLocation = useLocation()

    useEffect( () => {
        setLocation(window.location.pathname.split("/").slice(2))
    }, [routerLocation])

    return (
        <div style={{paddingTop: "1em", paddingBottom: "1em"}}>
            <Grid 
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item>
                    <Grid container>
                        {location.map( (elem, index) => <>
                            <Grid item>
                                <Link to={"/individual/" + location.slice(0,index+1).join("/")} style={{textDecoration: "none", color: "#111111"}}>
                                    <Typography style={{fontWeight: "bold"}}>{(elem.charAt(0).toUpperCase() + elem.slice(1)).replaceAll("-"," ")}</Typography>
                                </Link>
                            </Grid>
                            {index !== location.length - 1 && <Grid item>
                                <Typography style={{marginLeft: "0.5em", marginRight: "0.5em", fontWeight: "bold", color: "#111111"}}>/</Typography>
                            </Grid>}
                        </>)}
                    </Grid>
                </Grid>
                <Grid item>
                    <Search />
                </Grid>
            </Grid>
        </div>
    )
}

export default BreadCrumbBar;