import { Box, Button, Dialog, DialogTitle, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import './popup.scss'
const Popup = ({ visible, setVisible}) => {
    const handleClose = () => {
        setVisible(false);
      };
      const handleAccept = (value) => {
        localStorage.setItem('acceptCookies', value);
        setVisible(false);
      }
  return (
    
  

       <Dialog onClose={handleClose} open={visible} className='cookiespopup'>
        {/* <DialogTitle>Set backup account</DialogTitle> */}
        <Typography variant='h4' className='text-black fs-24 fw-600 mb-25'>The Website Uses cookies </Typography>
        <Typography variant='h4' className='text-black fs-22 fw-500 mb-25'>What Are Cookies?</Typography>
        <Typography variant='h4' className='text-gray fs-14 fw-500 mb-30'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
        <Box className='text-end justify-content-end flex-wrap gap-10'>
            <Button onClick={()=>handleAccept("Rejected")} className='primary-btn-outline' sx={{width:"144px"}}>Reject</Button>
            <Button onClick={()=>handleAccept("Accepted")} className='primary-btn' sx={{width:"144px"}}>Accept All</Button>
        </Box>
      </Dialog>
    
  
  )
}

export default Popup
