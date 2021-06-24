import React, { useState, useEffect } from 'react'
import { Typography, Button } from '@material-ui/core';
import RoutingIcon from '../../../assets/RoutingIcon'
import AccountIcon from '../../../assets/AccountIcon'
import LoadingShieldIcon from '../../../assets/LoadingShieldIcon'
import SuccessShieldIcon from '../../../assets/SuccessShieldIcon'
import FailShieldIcon from '../../../assets/FailShieldIcon'
import ChevronDownIcon from '../../../assets/ChevronDownIcon'
import TextField from '@material-ui/core/TextField';
import routingNumberImg from '../../../assets/checkRoutingNumber.png'
import accountNumberImg from '../../../assets/checkAccountNumber.png'
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedDiv from '../../../components/outlinedDiv/OutlinedDiv'
import CustomModal from '../../../components/customModal/CustomModal'
import AddBankStatus from '../../../components/addBankStatus/AddBankStatus'
import OutlinedAnimationInput from '../../../components/outlinedAnimationInput/OutlinedAnimationInput'
import './AddBankModal.css'
import BankService from '../../../services/BankService'
import { useSelector } from 'react-redux'

const AddBankModal = ({setOpen, setReload, reload}) => {
    const optionsAccountType = [
        {
            value: "default",
            label: "SELECT",
            disabled: true
        },
        {
            value: "Checking",
            label: "CHECKING ACCOUNT"
        },
        {
            value: "Savings",
            label: "SAVINGS ACCOUNT"
        }
    ]

    const [bankDetails, setBankDetails] = useState({
        accountType: "default",
    })
    const [routingNumber, setRoutingNumber] = useState(["","","","","","","","",""])
    const [accountNumber, setAccountNumber] = useState(["","","","","","","","","",""])
    const [accountNickname, setAccountNickname] = useState("");
    const [showingRouting, setShowingRouting] = useState(true)
    const [showingAccount, setShowingAccount] = useState(true)
    const [form, setForm] = useState(true)
    const [loading, setLoading] = useState(false)
    const [failed, setFailed] = useState(false)
    const [success, setSuccess] = useState(false)
    const selectedRegistration = useSelector(state => state.user.selectedRegistration)

    useEffect( () => {
        if (success) {
            setAccountNickname(bankDetails.accountType === "checkingAccount" ? "Joint Bank of America Checking" : "Joint Bank of America Savings")
        }
    }, [success])

    return (
    <CustomModal 
        setOpen={setOpen} 
        title={form ? "Add bank account" : loading ? "Confirming Account" : failed ? "Problem adding account" : success ? "Account confirmed!" : ""}
        subtitle={form ? "Please provide the bank account details below." : ""}
        closeable
    >
        {form && <form>
            <TextField
                InputProps={{style:{color: "#312A42", padding: "0.4em", fontWeight: "bold"}}}
                className="bankModalSelect"
                fullWidth
                select
                label="TYPE"
                value={bankDetails.accountType}
                variant="outlined"
                onChange={ (event) => {
                    setBankDetails({...bankDetails, accountType: event.target.value})
                }}
                SelectProps={{
                    IconComponent: ChevronDownIcon
                }}
            >
                {optionsAccountType.map( (elem, index) => 
                    <MenuItem key={index} value={elem.value} disabled={elem.disabled}>
                        {elem.label}
                    </MenuItem>
                )}
            </TextField>
            {(bankDetails.accountType !== "default" && showingRouting) ?
                <OutlinedAnimationInput 
                    animation={<img src={routingNumberImg} width="101%" height="100%" style={{transform: "translate(-3px, -5px)"}}/>}
                    onBlur={ () => {
                        if (routingNumber.length === 9 && routingNumber.every(elem => elem !== "")) {
                            setShowingRouting(false)
                        }
                    }}
                    value={routingNumber} 
                    setValue={setRoutingNumber} 
                    label="ENTER YOUR ROUTING NUMBER" 
                    length={9}
                    startIcon={<RoutingIcon />} 
                    endIcon={<RoutingIcon />}
                /> :  (bankDetails.accountType !== "default" && !showingRouting) &&
                <OutlinedDiv 
                    onClick={() => {
                        setRoutingNumber(["","","","","","","","",""])
                        setShowingRouting(true)
                    }}
                    label="ROUTING NUMBER" 
                    style={{width: "100%", marginTop: "2em"}}
                    inputProps={{style:{color: "#312A42", fontSize: "1.1rem", padding: "0.4em"}}}
                >
                    {routingNumber.map( elem => elem + " ")} (BANK OF AMERICA)
                </OutlinedDiv>
            }
            {(!showingRouting && showingAccount) ?
                <OutlinedAnimationInput 
                    animation={<img src={accountNumberImg} width="101%" height="100%" style={{transform: "translate(-3px, -5px)"}}/>}
                    onBlur={ () => {
                        if (accountNumber.length === 10 && accountNumber.every(elem => elem !== "")) {
                            setShowingAccount(false)
                        }
                    }}
                    value={accountNumber} 
                    setValue={setAccountNumber} 
                    label="ENTER YOUR ACCOUNT NUMBER" 
                    length={10}
                    endIcon={<AccountIcon />} 
                    startIcon={<div style={{width: 22, height: 18}}></div>}
                /> : (!showingRouting && !showingAccount && (accountNumber.length === 10 && accountNumber.every(elem => elem !== ""))) &&
                <OutlinedDiv
                    onClick={() => {
                        setAccountNumber(["","","","","","","","",""])
                        setShowingAccount(true)
                    }}
                    label="ACCOUNT NUMBER" 
                    style={{width: "100%", marginTop: "2em"}}
                    inputProps={{style:{color: "#312A42", fontSize: "1.1rem", padding: "0.4em"}}}
                >
                    {accountNumber.map( elem => elem + " ")}
                </OutlinedDiv>
            }
            {(!showingRouting && !showingAccount && (accountNumber.length === 10 && accountNumber.every(elem => elem !== ""))) &&
                <Button 
                    fullWidth 
                    style={{marginTop: "2em", padding: "1em", backgroundColor: "#3F8DD5", color: "#FFFFFF"}} 
                    disableElevation
                    onClick={ () => {
                        setLoading(true);
                        setForm(false);
                        BankService.bankVerification({
                            "bankMicrId": routingNumber.join(''),
                            "bankAccountNumber": accountNumber.join(''),
                            "bankAccountOwnerType": "PERSON",
                            "firstName": "Jane",
                            "middleName": "",
                            "lastName": "Doe",
                            "addressLine1": "5805 BLUE SPRUCE LN",
                            "addressLine2": "",
                            "city": "MCKINNEY",
                            "state": "",
                            "zipCode": "75070",
                            "phoneNumber": "9725551212",
                            "birthDate": "1972-08-04",
                            "taxId": "123456777",
                            "callingApplication": "TRACWEB",
                            "businessChannel": "RETIREMENT",
                            "clientName": "testClient",
                            "icuTaxId": "228",
                            "externalPlanId": "ROCN"
                        })
                        .then( res => {
                            console.log(res)
                            setLoading(false);
	                        setSuccess(true);
                            BankService.addBankAccount(selectedRegistration.accountId,{
                                "bankMicrId":routingNumber.join(''),
                                "bankAccount":
                                {
                                    "numberEdited":accountNumber.join(''),
                                    "type":bankDetails.accountType,
                                    "registration":{
                                        "isFormatted":true,
                                        "isEntity":false,
                                        "formatted":
                                        [
                                            {
                                                "firstName":"Ichabod",
                                                "lastName":"Hughes",
                                                "middleInitial":"J"
                                            },
                                            {
                                                "firstName":"Izzy",
                                                "lastName":"Hughes",
                                                "middleInitial":"C"
                                            }
                                        ]
                                    }
                                },
                                "achSpecialRedemption":"Yes",
                                "achSpecialPurchase":"Yes",
                                "hasAchDividend":false,
                                "wireRedemption":"Yes"
                            }).then( res => {
                                setReload(!reload)
                            });
                        })
                        .catch( err => {
                            setLoading(false);
                            setSuccess(false);
                            console.log(err)
                        })
                    }}
                >
                    <Typography>ADD BANK ACCOUNT</Typography>
                </Button>
            }
        </form>}
        {loading && 
            <AddBankStatus 
                icon={<LoadingShieldIcon width={107} height={152}/>}
                title="PROCESSING PLEASE WAIT"
                accountType={bankDetails.accountType === "checkingAccount" ? "CHECKING" : "SAVINGS"}
                bank="BANK OF AMERICA"
                accountNumber={accountNumber.map( elem => elem )}
            />
        }
        {success && 
            <AddBankStatus 
                icon={<SuccessShieldIcon width={107} height={152}/>}
                title="YOU ARE ALL SET!"
                accountType={bankDetails.accountType === "checkingAccount" ? "CHECKING" : "SAVINGS"}
                bank="BANK OF AMERICA"
                accountNumber={accountNumber.map( elem => elem )}
                buttonTitle="FINISH"
                onClick={ () => {
                    setOpen(false)
                }}
            >
            <TextField 
                fullWidth 
                value={accountNickname}
                onChange={ (event) => {
                    setAccountNickname(event.currentTarget.value)
                }}
                variant="outlined" 
                label="WOULD YOU LIKE TO GIVE THIS ACCOUNT A NICKNAME?"
                style={{marginTop: "1.5em"}}
                InputProps={{style:{color: "#312A42", fontSize: "1.1rem", padding: "0.2em", fontWeight: "bold"}}}
            />
            </AddBankStatus>
        }
        {failed && 
            <AddBankStatus 
                icon={<FailShieldIcon width={107} height={152}/>}
                title="WE NEED SOME ADDITIONAL DETAILS"
                subtitle="before you can use this account please call"
                number="1-800-225-1581"
                accountType={bankDetails.accountType === "checkingAccount" ? "CHECKING" : "SAVINGS"}
                bank="BANK OF AMERICA"
                accountNumber={accountNumber.map( elem => elem )}
                buttonTitle="FINISH"
                onClick={ () => {
                    setOpen(false)
                }}
            />
        }
    </CustomModal>
    )
}

export default AddBankModal;