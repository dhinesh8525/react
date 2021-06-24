import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const AddBankModal = ({ icon, title, subtitle, number, subtitle2, accountType, bank, accountNumber, buttonTitle, children, onClick }) => {

    return (
        <>
            <Grid container direction="column" style={{border: "2px solid #C4C4C4", padding: "3em"}}>
                <Grid item style={{margin: "auto"}}>
                    {icon}
                </Grid>
                <Grid item style={{ marginTop: "1.5em", marginBottom: "1.5em", textAlign: "center"}}>
                    <Typography style={{color: "#312A42", fontSize: "1.1rem"}}>{title}</Typography>
                    <Typography style={{color: "#312A42", fontSize: "0.9rem"}}>{subtitle}</Typography>
                    <Typography style={{color: "#3F8DD5", fontSize: "2rem", fontWeight: "bold"}}>{number}</Typography>
                    <Typography style={{color: "#312A42", fontSize: "0.9rem"}}>{subtitle2}</Typography>
                </Grid>
                <Grid item style={{textAlign: "center"}}>
                    <Typography style={{color: "#312A42", fontSize: "0.9rem"}}>{accountType}</Typography>
                    <Typography style={{color: "#312A42", fontSize: "0.9rem", fontWeight: "bold"}}>{bank}</Typography>
                    <Typography style={{color: "#312A42", fontSize: "0.9rem"}}>{accountNumber}</Typography>
                </Grid>
            </Grid>
            {children}
            {buttonTitle && <Button 
                fullWidth 
                style={{marginTop: "2em", padding: "1em", backgroundColor: "#3F8DD5", color: "#FFFFFF"}} 
                disableElevation
                onClick={onClick}
            >
                <Typography>{buttonTitle}</Typography>
            </Button>}
        </>
    )
}

export default AddBankModal