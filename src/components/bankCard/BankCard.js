import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import BankIcon from '../../assets/BankIcon'
import Divider from '@material-ui/core/Divider';
import BankCardSelect from '../bankCardSelect/BankCardSelect.js'
import './BankCard.css'

const BankCard = ({bankData, moreData}) => {
    const [seeMore, setSeeMore] = useState(false)

    const titles= {
        accountType: "ACCOUNT TYPE",
        nickName: "NICKNAME",
        accountNumber: "BANK ACCOUNT NUMBER",
        inUse: "IN USE"
    }

  return (
    <Card variant="outlined" style={{padding: "2em", marginBottom: "1.6em"}} >
        <Grid container direction="row" justify="space-between" >
            <Grid item>
                <Grid container direction="row" alignItems="center">
                    <Grid item style={{marginRight: "1.7em"}}>
                        <BankIcon />
                    </Grid>
                    <Grid item>
                        <Typography style={{color: "#4A4A4A", fontSize: "1rem", fontWeight: "bold"}}>
                            {bankData.title} <Typography style={{color: "#4A4A4A", fontSize: "1rem", display: "inline"}}>
                                            (ending {bankData.ending})
                                            </Typography> 
                        </Typography>
                        <Typography style={{color: "#4A4A4A"}}>
                            Status: {bankData.status} <Typography className="see-more" onClick={ () => setSeeMore(!seeMore)}>
                                                        see more
                                                    </Typography> 
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{alignSelf: "center"}} sm={3}>
                <BankCardSelect bankId={bankData.id}/>
            </Grid>
        </Grid>
        {seeMore && <Grid container direction="row-reverse" style={{marginTop: "2em"}}>
            <Grid item sm={8}>
                {Object.entries(moreData).map( (elem, index) => 
                <>
                <Grid container justify="space-between">
                    <Grid>
                    <Typography>{titles[elem[0]]}</Typography>
                    </Grid>
                    <Grid>
                    <Typography>{elem[1]}</Typography>
                    </Grid>
                </Grid>
                {index !== Object.entries(moreData).length-1 && <Divider style={{marginTop: "1em", marginBottom: "1em"}} />}</>)}
            </Grid>
        </Grid>}
    </Card>
  )
}

export default BankCard;