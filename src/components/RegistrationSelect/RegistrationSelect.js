import React, { useState } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChevronDownIcon from '../../assets/ChevronDownIcon'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setRegistration } from '../../store/userSlice'

const RegistrationSelect = ({Registration}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <div style={{width: "100%"}} className="bank-select">
            <Grid 
                container
                justify="space-between"
                style={{border: "solid 1px #C4C4C4", padding: "0.55em 1em 0.55em 1em", borderRadius: 2}}
                aria-controls="simple-menu" 
                aria-haspopup="true" 
                onClick={handleClick}
            >
                <Grid item>
                    <Typography style={{color: "#4B4B4B"}}>I want to...</Typography>
                </Grid>
                <Grid container style={{flex: 1, flexDirection: "row-reverse", alignItems: "center" }}>
                    <ChevronDownIcon />
                </Grid>
            </Grid>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem 
                    onClick={ () => {
                        dispatch(setRegistration(Registration))
                        history.push("/individual/account-summary/transactions/manage-bank-accounts")
                    }}
                >
                    <Typography style={{color: "#4B4B4B"}}>Manage bank accounts</Typography>
                </MenuItem>
                <MenuItem 
                    onClick={ () => {
                        dispatch(setRegistration(Registration))
                        history.push("/individual/account-summary/transactions/additional-investments")
                    }}
                >
                    <Typography style={{color: "#4B4B4B"}}>Make additional investments</Typography>
                </MenuItem>
                <MenuItem 
                    onClick={ () => {
                        dispatch(setRegistration(Registration))
                        history.push("/individual/account-summary/transactions/pending")
                    }}
                >
                    <Typography style={{color: "#4B4B4B"}}>Pending transactions</Typography>
                </MenuItem>
                <MenuItem disabled={true}><Typography style={{color: "#4B4B4B"}}>Exchanges</Typography></MenuItem>
                <MenuItem disabled={true}><Typography style={{color: "#4B4B4B"}}>Redemptions</Typography></MenuItem>
            </Menu>
        </div>
    )
}

export default RegistrationSelect;