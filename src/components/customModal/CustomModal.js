import React from 'react'
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import CloseIcon from '../../assets/CloseIcon'

const CustomModal = ({title, subtitle, setOpen, children, closeable}) => {

    return (
        <Modal
            open={true}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Grid container style={{height: "100%"}} alignContent="center">
                <Card style={{padding: "2em", height: "fit-content", width: 550, margin: "auto"}}>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography style={{fontSize: "1.5rem", color: "#4A4A4A", fontWeight: "bold"}}>
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item style={{alignSelf: "center"}} className="closeModalIcon">
                            {closeable && <CloseIcon onClick={ () => setOpen(false) }/>}
                        </Grid>
                    </Grid>
                    <Grid item style={{marginTop: "2em", marginBottom: "2em"}}>
                        <Typography>
                            {subtitle ? subtitle : ""}
                        </Typography>
                    </Grid>
                    {children}
                </Card>
            </Grid>
        </Modal>
    )
}

export default CustomModal;