import React,{useState} from 'react';
import {FormControl,FormGroup,TextField,Button} from '@material-ui/core';

import './FormSendTweet.scss';

export default function FormSendTweet(props) {
    const{sendTweet}=props;
    const[formValue,setFormValue]= useState({
        name:"",
        tweet:""
    });

const  onFormChange=(event)=>{

    setFormValue({
        ...formValue,
        [event.target.name]:event.target.value
    })

}

    return(
        <div className="form-send-tweet">
            <h2 className="form-send-tweet__title">Enviar Tweet</h2>
            <form className="form-send-tweet__form"  onSubmit={(event)=>sendTweet(event,formValue)} onChange={onFormChange}>
            <FormControl>
                <FormGroup>
                    <TextField className="from_send_tweet__form-name" 
                    type="text"  name="name" placeholder="Nombre de usuario" margin="normal"/>
                </FormGroup>
                <FormGroup>
                    <TextField className="form-SendTweet__form-text-area" 
                    name="tweet" multiline  rows="6" placeholder="Escribre tu Tweet" margin="nomal">

                    </TextField>
                </FormGroup>
                <FormGroup>
                    <button type="submit">Enviar Tweet</button>
                </FormGroup>
            </FormControl>


            </form>
        </div>
    );
}