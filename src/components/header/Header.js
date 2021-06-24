import React from 'react'
import Grid from '@material-ui/core/Grid'
import PutnamLogo from '../../assets/PutnamLogo'
import Typography from '@material-ui/core/Typography'
import './Header.css'

const Header = () => {

  return (
    <div>
      <div className="header-container" style={{marginLeft: "auto", marginRight: "auto"}}>
        <Grid
          style={{paddingTop: "2em", paddingBottom: "2em"}}
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item>
            <Grid container>
              <PutnamLogo />
              <div style={{borderLeft: "1px solid #D0D0D0", marginLeft: "1em", marginRight: "1em"}}></div>
              <Typography style={{color: "#4A4A4A", fontSize: "1.5rem", alignSelf: "center"}}>INVESTORS</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              spacing={3}
            >
              <Grid item><Typography>Welcome Sean Lewis</Typography></Grid>
              <Grid item><Typography>About Putnam</Typography></Grid>
              <Grid item><Typography>Careers</Typography></Grid>
              <Grid item><Typography>Contact us</Typography></Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Header;