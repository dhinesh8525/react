import React from 'react'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '../../assets/SearchIcon'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import HelpIcon from '../../assets/HelpIcon'
import './Search.css'

const Search = () => {

    return (
        <Grid container direction="row">
            <Paper component="form" elevation={0} style={{borderRadius: 2}}>
                <Grid container direction="row" alignItems="center">
                    <Grid item className="input-search-icon">
                        <SearchIcon width="15px" height="15px" />
                    </Grid>
                    <Grid item>
                        <InputBase placeholder="Search" />
                    </Grid>    
                    <Grid item style={{display: "flex"}}>
                        <HelpIcon style={{padding: "0.6em"}}/>
                    </Grid>
                    <Grid item>
                        <Button variant="container" style={{backgroundColor: "#0E68B6", color: "#FFFFFF", textTransform: "none", minWidth: 0, borderRadius: 2, width: 40, height: 40}}>
                            Go
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Search;