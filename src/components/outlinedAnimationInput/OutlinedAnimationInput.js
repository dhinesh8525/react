import React, { useEffect, useState } from "react";
import OutlinedDiv from "../outlinedDiv/OutlinedDiv";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import './OutlinedAnimationInput.css'

const OutlinedAnimationInput = ({ label, style, length, animation, startIcon, endIcon, value, setValue, onBlur }) => {
    const [numberInputs, setNumberInputs] = useState([])
    
    useEffect( () => {
        let inputs = []
        for (let i = 0; i<length; i++) {
            inputs.push(
                <Grid item>
                    <TextField 
                        value={value[i]}
                        type="number" 
                        id={i === 0 ? "first-input" : "animation-input"} 
                        inputProps={{size: 1, maxlength: 1, min: 0, max: 9}} variant="outlined"
                        onChange={ (event) => {
                            let oldValue = [...value]
                            oldValue[i] = event.currentTarget.value.slice(0, 1)
                            setValue(oldValue)   
                        }}
                    />
                </Grid>
            )
        }
        setNumberInputs([...inputs])
    }, [length, setValue, value])

    useEffect( () => {
        if (numberInputs.length !== 0 && value.every( elem => elem === "")) {
            document.getElementById("first-input").focus()
        }
    }, [numberInputs])

  return (
    <OutlinedDiv 
        id="animation-input-parent"
        onBlur={onBlur}
        onClick={ () => { 
            let input = document.getElementById("first-input")
            if (!document.activeElement.id.includes("input")) {
                input.focus() 
            }
        } } 
        label={label} 
        style={{width: "100%", marginTop: "2em", ...style}}
    >
        <div style={{border: "1px solid #979797", minHeight: 130, maxHeight: 160, borderRadius: 8, overflow: "hidden"}}>
            {animation}
        </div>
        <Grid container justify="space-evenly" style={{marginTop: "2em"}} alignItems="center">
            {startIcon && <Grid item>{startIcon}</Grid>}
            {numberInputs.map( elem => elem )}
            {endIcon && <Grid item>{endIcon}</Grid>}
        </Grid>
    </OutlinedDiv>
  );
};
export default OutlinedAnimationInput;