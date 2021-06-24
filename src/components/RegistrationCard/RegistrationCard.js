import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import RegistrationSelect from '../RegistrationSelect/RegistrationSelect'
import UserIcon from '../../assets/UserIcon'

const RegistrationCard = ({registrationData}) => {

  return (
    <Card variant="outlined" style={{padding: "2em", marginBottom: "1.6em"}} >
        <Grid container direction="row" justify="space-between" >
            <Grid item>
                <Grid container direction="row" alignItems="center">
                    <Grid item style={{marginRight: "1.7em"}}>
                        <UserIcon width={58} height={58} color={"#994DAD"}/>
                    </Grid>
                    <Grid item>
                        <Typography style={{color: "#4A4A4A", fontSize: "1rem", fontWeight: "bold"}}>
                            {registrationData.registration.detail[0]}
                        </Typography>
                        <Typography style={{color: "#4A4A4A"}}>
                            Account Number: {registrationData.accountNumber} 
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{alignSelf: "center"}} sm={3}>
                <RegistrationSelect Registration={registrationData}/>
            </Grid>
        </Grid>
    </Card>
  )
}

export default RegistrationCard;