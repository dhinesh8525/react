import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import BankService from '../../services/BankService'
import { useSelector } from 'react-redux'
import { currencyFormat } from '../../common/Functions'
import './PendingInvestments.css'

const PendingInvestments = () => {
    const selectedRegistration = useSelector( state => state.user.selectedRegistration)
    const [pending, setPending] = useState([])

    useEffect( () => {
        BankService.getPendingRequest(selectedRegistration.accountId)
        .then( res => setPending(res.data.transactions.reverse()))
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
                            Pending transactions
                        </Typography>
                    </Grid>
                </Grid>
                {/* <Typography style={{color: "#4A4A4A", marginBottom: "2em"}}>
                    To add a bank account, select the Add Bank Account option below.  To rename, delete or make an additional investment from an existing bank account, use the drop down menu for that account.
                </Typography> */}
                <Typography style={{color: "#4A4A4A", marginBottom: "2em"}}>
                    These pending transactions belong to <span style={{fontWeight: "bold"}}>{selectedRegistration.registration.detail[0]}</span>
                </Typography>
                <Grid direction="column" container>
                    <Grid item>
                        <table className="pending-table">
                            <thead>
                                <th><Typography>DATE</Typography></th>
                                <th><Typography>TRANSACTION ID</Typography></th>
                                <th><Typography>ACTIVITY TYPE</Typography></th>
                                <th><Typography>FUND ID</Typography></th>
                                <th><Typography>AMOUNT</Typography></th>
                                <th><Typography>RECURRING</Typography></th>
                            </thead>
                            <tbody>
                            {pending && pending.map(elem => 
                                <tr>
                                    <td><Typography>{elem.tradeDate}</Typography></td>
                                    <td><Typography>{elem.transactionIdentification.transactionId1}</Typography></td>
                                    <td><Typography>Additional investment</Typography></td>
                                    <td><Typography>{elem.positionId}</Typography></td>
                                    <td><Typography>{currencyFormat(elem.amount, "$")}</Typography></td>
                                    <td><Typography>NO</Typography></td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default PendingInvestments;