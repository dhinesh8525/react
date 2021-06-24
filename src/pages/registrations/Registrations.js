import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import BankService from '../../services/BankService'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import RegistrationCard from '../../components/RegistrationCard/RegistrationCard';

const Registrations = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const [accounts, setAccounts] = useState([])

    useEffect( () => {
        BankService.getAccountSummary()
        .then( res => setAccounts(res.data.accounts))
        .catch( err => console.log(err) )
    }, [])

    return (
        <div style={{paddingLeft: "2em"}}>
            <Card style={{padding: "2em"}}>
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography 
                            style={{
                                color: "#4A4A4A", 
                                fontSize: "1.5rem",
                                fontWeight: "bold", 
                                marginBottom: "1.3em"
                            }}
                        >
                            Registrations
                        </Typography>
                    </Grid>
                </Grid>
                {/* <Typography style={{color: "#4A4A4A", marginBottom: "2em"}}>
                    To add a bank account, select the Add Bank Account option below.  To rename, delete or make an additional investment from an existing bank account, use the drop down menu for that account.
                </Typography> */}
                <Grid direction="column" container style={{flexWrap: "nowrap"}}>{/*No wrap makes it not stack but removes extra margin at bottom*/}
                    {accounts && accounts.map( (elem, index) =>
                        <RegistrationCard registrationData={elem} key={index}/>
                    )}
                </Grid>
            </Card>
        </div>
    )
}

export default Registrations;