import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Card from '@material-ui/core/Card';
import BuyIcon from '../../assets/BuyIcon'
import WithIcon from '../../assets/WithIcon'
import AmountIcon from '../../assets/AmountIcon'
import TransferIcon from '../../assets/TransferIcon'
import DateIcon from '../../assets/DateIcon'
import UserIcon from '../../assets/UserIcon'
import { currencyFormat, dateToYMD } from '../../common/Functions'
import InvestmentSelect from '../../components/investmentSelect/InvestmentSelect'
import { Link, useLocation } from "react-router-dom"
import BankService from '../../services/BankService'
import './additionalInvestments.css'
import { useSelector } from 'react-redux'

const recurringOptions = [
    {
        name: "MONTHLY",
        value: "monthly"
    },
    {
        name: "YEARLY",
        value: "yearly"
    }
]

const AdditionalInvestments = () => {
    const location = useLocation()
    const [investment, setInvestment] = useState("default")
    const [bankAccount, setBankAccount] = useState( (location.state && location.state.bankId) ? location.state.bankId : "default" )
    const [amount, setAmount] = useState(0)
    const [selectedButton, setSelectedButton] = useState("oneTime")
    const [recurringTime, setRecurringTime] = useState("monthly")
    const [form, setForm] = useState(true)
    const [summary, setSummary] = useState(false)
    const [confirmation, setConfirmation] = useState(false)
    const [registration, setRegistration] = useState([])
    const [buyOptions, setBuyOptions] = useState([])
    const [withOptions, setWithOptions] = useState([])
    const selectedRegistration = useSelector(state => state.user.selectedRegistration)

    useEffect( () => {
        // BankService.getAccountBalance(selectedRegistration.accountId, dateToYMD(new Date()))
        // .then( res => {
            setRegistration([{
                name: selectedRegistration.registration.detail[0],
                value: "default",
                code: "(" + selectedRegistration.accountNumber + ")",
                moneyValue: "BALANCE " + currencyFormat(selectedRegistration.accountValue, "$") + " AS OF " + new Date().toLocaleDateString("en-US")
            }])
        // })
        // .catch( err => console.log(err) )

        BankService.getPositionSummary()
        .then( res => {
            let positions = res.data.positions
            let newPositions = [...buyOptions]
            positions.forEach( elem => {
                newPositions.push({
                    name: elem.fundName,
                    code: "(" + elem.tickerSymbol + ")",
                    moneyValue: currencyFormat(elem.positionValue, "$"),
                    value: elem.fundId,
                    positionId: elem.positionId,
                    isFiduciary: elem.isFiduciary
                })
            })
            setBuyOptions(newPositions)
        })
        .catch( err => console.log(err) )

        BankService.getAccountBankinstruction(selectedRegistration.accountId)
        .then( res => {
            let banks = res.data.bankInstructions
            let newBanks = [...withOptions]
            banks.forEach( elem => {
                newBanks.push({
                    name: elem.bank.name,
                    code: "(ENDING " + elem.bankAccount.displayNumberUnedited.replaceAll("*", "") + ")",
                    moneyValue: "STATUS: ACTIVE",
                    value: elem.bankInstructionId
                })
            })
            setWithOptions(newBanks)
        })
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
                        {form ? "Additional Investments" : summary ? "Summary" : "Confirmation"}
                    </Typography>
                </Grid>
                <Grid item>
                    <Link className="resources-links">
                        <Typography style={{fontWeight: 600}}>Help</Typography>
                    </Link>
                </Grid>
            </Grid>
            <Typography style={{color: "#4A4A4A", marginBottom: "2em"}}>
                    {confirmation && "Successfully submitted!. "}Investments will take place using the next closing price.
            </Typography>
            <Card style={{padding: "2em"}} elevation={1}>
                <Grid container direction="row" style={{flexWrap: "nowrap"}}>
                    <Grid item style={{paddingRight: "8em", paddingLeft: "4em", paddingTop: "1em"}}>
                        <TransferIcon />
                        {form && <Typography style={{fontSize: "1.1rem", color: "#4A4A4A", fontWeight: "bold", marginTop: "1em"}}>
                            Get started
                        </Typography>}
                    </Grid>
                    <Grid item style={{width: "100%"}}>
                        <Grid container direction="column">
                            { form && <form>
                            <InvestmentSelect 
                                disabled={true}
                                label="REGISTRATION"
                                icon={<UserIcon />}
                                value={'default'}
                                options={registration}
                            />
                            <InvestmentSelect 
                                id="buyField"
                                required
                                value={investment}
                                setValue={setInvestment}
                                label="BUY"
                                button="ADD A NEW FUND"
                                defaultOption="SELECT INVESTMENT"
                                icon={<BuyIcon />}
                                options={buyOptions}
                            />
                            <InvestmentSelect 
                                id="withField"
                                required
                                disabled={bankAccount ? true: false}
                                value={bankAccount}
                                setValue={setBankAccount}
                                label="WITH"
                                button="ADD A NEW ACCOUNT"
                                defaultOption="SELECT BANK ACCOUNT"
                                icon={<WithIcon />}
                                options={withOptions}
                            />
                            <TextField 
                                required
                                id="amount-field"
                                variant="outlined"
                                value={amount}
                                type="text"
                                fullWidth
                                inputProps={{
                                    min: 0
                                }}
                                onChange={ (event) => {
                                    if (event.currentTarget.value.match("^[0-9,.]*$")) {
                                        setAmount(event.currentTarget.value)
                                    }
                                }}
                                onBlur={ (event) => {
                                    if (currencyFormat(event.currentTarget.value).match("^[0-9,.]*$")) {
                                        setAmount(currencyFormat(event.currentTarget.value))
                                    }
                                }}
                                onFocus={ (event) => {
                                    setAmount(event.currentTarget.value.replaceAll(",",""))
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AmountIcon style={{paddingRight: "0.1em", paddingLeft: "0.5em"}}/>
                                        </InputAdornment>
                                    ),
                                    style: {
                                        paddingTop: "0.5rem", 
                                        paddingBottom: "0.5rem",
                                        color: "#312A42",
                                        fontSize: "1.2rem"
                                    }
                                }}
                                label="AMOUNT"
                            />
                            <Grid container direction="row" style={{borderRadius: 8, border: "solid 2px #CACACA", marginTop: "1.5em", marginBottom: "1.5em"}}>
                                <Button 
                                    className={selectedButton === "oneTime" ? "investment-button-selected" : "investment-button"} 
                                    style={{flex: 1}}
                                    onClick={ () => {
                                        setSelectedButton("oneTime")
                                    }}
                                >
                                    ONE TIME
                                </Button>
                                <Button 
                                    className={selectedButton === "recurring" ? "investment-button-selected" : "investment-button"}  
                                    style={{flex: 1}}
                                    // onClick={ () => {
                                    //     setSelectedButton("recurring")
                                    // }}
                                >
                                    RECURRING
                                </Button>
                            </Grid>
                            {selectedButton === "recurring" && 
                                <InvestmentSelect 
                                    icon={<DateIcon />}
                                    options={recurringOptions}
                                    label="FREQUENCY"
                                    value={recurringTime}
                                    setValue={setRecurringTime}
                                />
                            }
                            </form>}
                            {(summary || confirmation) && <>
                                <Grid item style={{paddingTop: "1em", paddingBottom: "1em"}}>
                                    <Grid container justify="space-between">
                                        <Grid item>
                                            <Typography>REGISTRATION</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="row">
                                                <Typography style={{fontWeight: "bold"}}>
                                                {registration[0].name}
                                                </Typography>
                                                <Typography style={{marginLeft: "0.4em"}}>
                                                {registration[0].code}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid item style={{paddingTop: "1em", paddingBottom: "1em"}}>
                                    <Grid container justify="space-between">
                                        <Grid item>
                                            <Typography>BUY</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="row">
                                                <Typography>
                                                {buyOptions.find( elem => elem.value === investment).name}
                                                </Typography>
                                                <Typography style={{marginLeft: "0.4em"}}>
                                                {buyOptions.find( elem => elem.value === investment).code}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid item style={{paddingTop: "1em", paddingBottom: "1em"}}>
                                    <Grid container justify="space-between">
                                        <Grid item>
                                            <Typography>WITH</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="row">
                                                <Typography>
                                                {withOptions.find( elem => elem.value === bankAccount).name}
                                                </Typography>
                                                <Typography style={{marginLeft: "0.4em"}}>
                                                {withOptions.find( elem => elem.value === bankAccount).code}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid item style={{paddingTop: "1em", paddingBottom: "1em"}}>
                                    <Grid container justify="space-between">
                                        <Grid item>
                                            <Typography>AMOUNT</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography>
                                            {"$" + amount}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid item style={{paddingTop: "1em", paddingBottom: "1em"}}>
                                    <Grid container justify="space-between">
                                        <Grid item>
                                            <Typography>FREQUENCY</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography>
                                            {selectedButton === "oneTime" ? "One time" : recurringOptions.find( elem => elem.value === recurringTime).name}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                </>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
            {(summary && !confirmation) && 
                <Card className="modified-scroll" style={{color: "#9B9B9B", marginTop: "1.5em", padding: "2em", maxHeight: 200, overflowY: "scroll", boxSizing: "border-box"}}>
                    <Typography>
                        If I/we have completed the bank account information section, I/we authorize my/our bank/credit union to accept credit entries initiated by Putnam Investor Services,
                        Inc., to my/our account and to credit, as requested, the same to my account, without responsibility for correctness thereof or for the existence of any further authorization relating thereto. I/we also authorize my/our bank/credit union to accept debit entries initiated by Putnam Investor Services, Inc., to reverse or otherwise correct
                        any erroneous credit to my/our bank/credit union account. I/we agree to indemnify and hold harmless my/our bank/credit union, the Putnam funds, and Putnam
                        Investor Services, Inc. for any loss, liability, or expense incurred from acting on these instructions. I/we also agree to waive any right under the NACHA Rules to
                        rescind any instruction for ACH transactions that have already occurred at the time of the attempt to rescind. This waiver of the rescission right applies to both ACH
                        investments in and ACH redemptions from the Putnam funds. This authorization may be terminated by me/us at any time by written notification to Putnam Investor
                        Services, Inc., with reasonable time given to implement my/our request. Putnam Investor Services, Inc. may amend or terminate this agreement at any time. You will
                        be notified before any such changes go into effect. For bank account information, Putnam does not assess a fee for federal bank wire and/or ACH transactions on
                        your account(s). Some banks/credit unions may not offer ACH transactions or may charge a fee to conduct such transactions. Please check with your financial institution for information regarding eligibility, fees and applicable routing number(s) for federal bank wire and/or ACH transactions.
                        With this application, I/we authorize Putnam Investor Services, Inc. to exchange, as requested, on my account, without responsibility for correctness thereof or for the
                        existence of any further authorization relating thereto. I/We agree to indemnify and hold harmless the Putnam funds, and Putnam Investor Services, Inc. for any loss,
                        liability, or expense incurred from acting on these instructions. This authorization may be terminated by me at any time by written notification to Putnam Investor
                        Services, Inc., with reasonable time given to implement my request.
                    </Typography>
                </Card>
            }
            {form && <Grid container direction="row-reverse" style={{marginTop: "2em"}}>
                <Grid item sm={3}>
                    <Button 
                        style={{backgroundColor: "#3F8DD5", color: "#FFFFFF", borderRadius: 2, width: "100%"}}
                        onClick={ () => {
                            if (investment !== "default" && bankAccount !== "default" && amount !== 0 && amount !== "0.00") {
                                setForm(false)
                                setSummary(true)
                            }
                        }}
                    >
                            CONTINUE
                    </Button>
                </Grid>
            </Grid>}
            {summary && <Grid container direction="row" justify="space-between" style={{marginTop: "2em"}}>
                <Grid item sm={3}>
                    <Button 
                        style={{backgroundColor: "#3F8DD5", color: "#FFFFFF", borderRadius: 2, width: "100%"}}
                        onClick={ () => {
                            setForm(true)
                            setSummary(false)
                        }}
                    >
                            BACK
                    </Button>
                </Grid>
                <Grid item sm={3}>
                    <Button 
                        style={{backgroundColor: "#3F8DD5", color: "#FFFFFF", borderRadius: 2, width: "100%"}}
                        onClick={ () => {
                            BankService.additionalInvestment({
                                "purchaseRequests":
                                [
                                    {
                                        "positionId": buyOptions.find(elem => elem.value === investment).positionId,
                                        "isFiduciaryAccount": buyOptions.find(elem => elem.value === investment).isFiduciary,
                                        "type": "ACH",
                                        "amount": amount.replaceAll(",",""),
                                        "bankInstructionId": bankAccount.bankInstructionId,
                                        "contribution": {
                                            "yearIndicator": buyOptions.find(elem => elem.value === investment).isFiduciary ? "fiduciary" : "non-fiduciary",
                                            "type":"Not Applicable"
                                        }
                                    }
                                ]
                            })
                            .then( res => {
                                console.log(res)
                                setSummary(false)
                                setConfirmation(true)
                            })
                            .catch( err => console.log(err))
                        }}
                    >
                            AGREE AND SUBMIT
                    </Button>
                </Grid>
            </Grid>}
            {confirmation && <Grid container direction="row-reverse" style={{marginTop: "2em"}}>
                <Grid item sm={4}>
                    <Button 
                        style={{backgroundColor: "#3F8DD5", color: "#FFFFFF", borderRadius: 2, width: "100%"}}
                        onClick={ () => {
                            setInvestment("default")
                            setBankAccount("default")
                            setAmount(0)
                            setSelectedButton("oneTime")
                            setRecurringTime("monthly")
                            setForm(true)
                            setSummary(false)
                            setConfirmation(false)
                        }}
                    >
                            MAKE ADDITIONAL INVESTMENTS
                    </Button>
                </Grid>
            </Grid>}
        </Card>
    </div>
  )
}

export default AdditionalInvestments;