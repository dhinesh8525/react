import React, { useState } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChevronDownIcon from '../../assets/ChevronDownIcon'
import { Link, useHistory } from 'react-router-dom'
import "./BankCardSelect.css"

const BankCardSelect = ({bankId}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                        history.push({
                            pathname: "/individual/account-summary/transactions/additional-investments",
                            state: {
                                bankId: bankId,
                            }
                        })
                    }}
                >
                    <Typography style={{color: "#4B4B4B"}}>Make additional investments using this account</Typography>
                </MenuItem>
                {/* <MenuItem><Typography style={{color: "#4B4B4B"}}>See more details</Typography></MenuItem> */}
                <MenuItem disabled={true}><Typography style={{color: "#4B4B4B"}}>Rename</Typography></MenuItem>
                <MenuItem disabled={true}><Typography style={{color: "#4B4B4B"}}>Delete</Typography></MenuItem>
            </Menu>
        </div>
    )
}

export default BankCardSelect;