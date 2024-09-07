import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../job/job.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toneOfVoice } from '../../redux/action/chatbotAction';

const Otherpopup = ({open,customTone,setCustomTone,handleClose}) => {
  const {chatbotDataLoading,vacancyText} = useSelector((state) => state?.jobDescriptionFileUploadReducer);
  const vacancyTextData=vacancyText[0];
  // const vacancyTextData=vacancyText?.[0]?.vacancyText?vacancyText?.[0]?.vacancyText:vacancyText[0];
  const dispatch=useDispatch();
  const handleToneOfVoiceContent=(value)=>{

    const payload={
      "structured_output":JSON.stringify(vacancyTextData),
      "tone_of_voice":value
    }
    console.log("structure_order",payload)
    if(value!==""){
      dispatch(toneOfVoice(payload));
      handleClose();
      setCustomTone("");
     }
    //  handleClose();
  }
  const handleCustomTov=(event)=>{
    setCustomTone(event.target.value);
    console.log("custom",event.target.value);
  }
  console.log('customTone',customTone);
  return (
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    className='otherpopup'
  >
    {/* <DialogTitle id="alert-dialog-title">
      {"Custom Tone "}
    </DialogTitle> */}
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        <Typography variant='h4' className='fs-14 fw-500 mb-10 text-black'>Custom Tone </Typography>
        <TextField className='inputfield' placeholder='Enter your tone' value={customTone} onChange={handleCustomTov} id="outlined-basic" variant="outlined" />
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button className='primary-btn-outline' onClick={handleClose}>Cancel</Button>
      <Button className='primary-btn' onClick={()=>handleToneOfVoiceContent(customTone)} autoFocus>
        Regenerate Content
      </Button>
    </DialogActions>
    </Dialog>
  )
}

export default Otherpopup
