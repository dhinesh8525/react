import React, { useState, useRef } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem'
import InputAdornment from '@material-ui/core/InputAdornment'
import ChevronDownIcon from '../../assets/ChevronDownIcon'

const AdditionalInvestments = ({ value, setValue, label, icon, defaultOption, options, button, onClick, disabled, required, id}) => {

    return(
        <TextField 
            id={id}
            required={required}
            disabled={disabled ? true : false}
            style={{marginBottom: "1.5em"}}
            select
            fullWidth
            variant="outlined"
            label={label}
            value={value}
            SelectProps={{
                IconComponent: ChevronDownIcon
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    {icon ? icon : ""}
                    </InputAdornment>
                )
            }}
            onChange={ (event) => {
                if (event.target.value !== "button") {
                    setValue(event.target.value)
                }
            }}
        >
            {defaultOption && <MenuItem value="default" style={{display: "none"}}>
            <Typography style={{paddingTop: "0.5rem", paddingBottom: "0.5rem"}}>{defaultOption}</Typography>
            </MenuItem>}
            {options.map( (elem) => 
                <MenuItem value={elem.value} style={{paddingTop: "1em", paddingBottom: "1em"}}>
                <Grid container direction="column">
                    <Grid container direction="row">
                        <Typography style={{fontWeight: "bold", color: "#312A42"}}>{elem.name}</Typography>
                        <Typography style={{marginLeft: "0.5rem", color: "#312A42"}}>{elem.code}</Typography>
                    </Grid>
                    <Typography style={{color: "#312A42"}}>{elem.moneyValue}</Typography>
                </Grid>
                </MenuItem>
                //<Divider />
            )}
            {button && <MenuItem style={{paddingTop: "1em", paddingBottom: "1em"}} value="button">
                <div onClick={onClick}>
                    <Typography style={{fontWeight: "bold", color: "#312A42"}}>{button}</Typography>
                </div>
            </MenuItem>}
        </TextField>
  )
}

export default AdditionalInvestments;