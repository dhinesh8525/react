import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import BankCard from '../../components/bankCard/BankCard'
import AddBankModal from './addBankModal/AddBankModal'
import BankService from '../../services/BankService'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const ManageBankAccounts = () => {
    const [creatingBank, setCreatingBank] = useState(false)
    const [bankData, setBankData] = useState([])
    const [success, setSuccess] = useState(false)
    const selectedRegistration = useSelector( state => state.user.selectedRegistration)

    useEffect( () => {
        BankService.getAccountBankinstruction(selectedRegistration.accountId)
        .then( res => {
            let banks = res.data.bankInstructions
            let newBanks = []
            banks.forEach( elem => {
                newBanks.push({
                    title: elem.bank.name + " " + elem.bankAccount.type,
                    ending: elem.bankAccount.displayNumberUnedited.replaceAll("*",""),
                    status: "Active",
                    id: elem.bankInstructionId,
                    moreData: {
                        accountType: elem.bankAccount.type,
                        nickName: elem.bank.name + " " + elem.bankAccount.type,
                        accountNumber: elem.bankAccount.displayNumberUnedited,
                        inUse: "Yes, see transactions",
                    }
                })
            })
            setBankData(newBanks)
        })
        .catch( err => console.log(err) )
    }, [success])

  return (
    <div style={{paddingLeft: "2em"}}>
        {creatingBank && <AddBankModal setOpen={setCreatingBank} setReload={setSuccess} reload={success} />}
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
                        Manage bank accounts
                    </Typography>
                </Grid>
                <Grid item>
                    <Link className="resources-links">
                        <Typography style={{fontWeight: 600}}>Help</Typography>
                    </Link>
                </Grid>
            </Grid>
            <Typography style={{color: "#4A4A4A", marginBottom: "1em"}}>
                To add a bank account, select the Add Bank Account option below.  To rename, delete or make an additional investment from an existing bank account, use the drop down menu for that account.
            </Typography>
            <Typography style={{color: "#4A4A4A", marginBottom: "2em"}}>
               These bank accounts are linked to <span style={{fontWeight: "bold"}}>{selectedRegistration.registration.detail[0]}</span>
            </Typography>
            <Grid direction="column" container style={{flexWrap: "nowrap"}}>{/*No wrap makes it not stack but removes extra margin at bottom*/}
                {bankData.map( elem =>
                    <BankCard bankData={elem} moreData={elem.moreData}/>
                )}
            </Grid>
            <Grid container direction="row-reverse">
                <Grid item sm={4}>
                    <Button 
                        onClick={ () => setCreatingBank(true) }
                        disableElevation 
                        style={{width: "100%", padding: "0.9em", backgroundColor: "#3F8DD5", color: "#FFFFFF"}}
                    >
                        <Typography>ADD BANK ACCOUNT</Typography>
                    </Button>
                </Grid>
            </Grid>
        </Card>
    </div>
  )
}

export default ManageBankAccounts;