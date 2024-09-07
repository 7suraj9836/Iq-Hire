import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.scss';
import { Box, Button } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import gallary from '../../assets/img/svg/gallary.svg';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
const TestChatbot = ({preDefinedAnswer,handleContinue, lastQuestion, questions, onSendMessage, botLoadingMessage,currentQuestionIndex,setCurrentQuestionIndex, currentQuestion, messages, setMessages, inputType}) => {
  const [message, setMessage] = useState();
  const [file, setFile] = useState(null);
  const [botTyping, setBotTyping] = useState(false);
  const [processing,setProcessing] = useState(false);
  const [multiMessage, setMultiMessage] = useState('');
  const sendBtn = useRef(null);
  useEffect(() => {
    if(preDefinedAnswer) {
      setMessage(preDefinedAnswer);
    }
  },[preDefinedAnswer])
  console.log('preDefinedAnswer12',preDefinedAnswer);

  const handleMessageExport = async(message,file) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, text: message, sender: 'user' },
    ]);
     await onSendMessage(file,message);
    
  };


  const handleSendMessage = async () => {
    console.log("entered");
    setProcessing(true);
    if (message?.trim() || file) {
      setBotTyping(true);
      await handleMessageExport(message, file);
      setMessage('');
      setFile(null);

       }
    setProcessing(false);
  };
  const handleTextMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSelectChange = async(option) => {
    if(option.includes('Custom...')) {
      inputType = 'multi-text';
      setMessage(["Custom..."]);
      return;
    }
    if(processing) return;
    setProcessing(true);
    if (option?.trim() || file) {
      setBotTyping(true);
      await handleMessageExport(option, file);
      setFile(null);
    }
    setProcessing(false);
  };
  const handleMultiSelectChange = (option) => {
    // Split the message into an array of options
    if(message.includes(option)) {
      const tempArr = message.split(', ');
      const index = tempArr.indexOf(option);
      if(index > -1) {
        tempArr.splice(index, 1);
      }
      setMessage(tempArr.join(', '));
      return
    }
    if(message) {
      const tempMesage = message+', '+option;
      setMessage(tempMesage);
      const options = tempMesage.split(', ');
      if(options.length === currentQuestion.maxSelects) {

      }
    } else {
      setMessage(option);
    }
    
    
  
  
  };

  const handleFileChange = async(e) => {
    console.log(processing);
    if(processing) return;
    const selectedFile = e.target.files[0];
    setFile(e.target.files[0]);
    setMessage(e.target.files[0].name);

    setProcessing(true);
    if (message?.trim() || selectedFile) {
      setBotTyping(true);
      await handleMessageExport(e.target.files[0].name, selectedFile);
      setMessage('');
      setFile(null);
    }
    setProcessing(false);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        sendBtn.current.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

  useEffect(() => {
    
  },[])
   const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log("clicked",sendBtn);
      sendBtn.current.click();
    }
   }
   const handleMultiTextMessage = (e) => {
     setMultiMessage(e.target.value);
   }
   const handleCustomSelect = async(e) => {
    console.log("test",inputType);
    if(inputType === 'select') {
      setProcessing(true);
      if (multiMessage?.trim() || file) {
        setBotTyping(true);
        await handleMessageExport(multiMessage, file);
        setFile(null);
        setMultiMessage('');
        setMessage();
      }
      setProcessing(false);
    } else if(inputType === 'multi-select') {
      setProcessing(true);
      const tempMessages = message.split(', ');
      const index = tempMessages.findIndex(item => item === 'Custom...');
      tempMessages[index] = multiMessage;
      const options = tempMessages.join(', ');
      // setMessage(options);
      setBotTyping(true);
      await handleMessageExport(options, file);
      setFile(null);
      setMultiMessage('');
      setMessage();
      setProcessing(false);

    }
     
   }
   console.log(messages);
  return (
    <Box className="chatbot">
      <Box className="messages">
        {messages?.map((msg) => (
          <Box key={msg.id} className={`message ${msg.sender}-message`}>
            <Box className="message-content">
              <Box className="message-header">
                <img src={`https://cdn-icons-png.flaticon.com/512/21/21104.png`} alt={msg.sender} className="message-avatar" />
                <span className="message-username">{msg.sender === 'user' ? 'User' : 'ChatBot'}</span>
              </Box>
              <p className="message-text">{msg?.text}</p>
        {currentQuestion.inputType === 'select' && msg.sender === 'bot' && msg.text === currentQuestion['Q' + (currentQuestionIndex + 1)] && (
          <Box>
            {currentQuestion.options.map((option, index) => (
                <Box key={`option-${index}`} onClick={()=>handleSelectChange(option)} className={`select-option ${message?.includes(option) ? 'selected' : ''}`}>
                    {option}
                </Box>
            ))}
            
          </Box>
        )}


        {currentQuestion.inputType === 'multi-select' && msg.sender === 'bot' && msg.text === currentQuestion['Q' + (currentQuestionIndex + 1)] && (
         <Box onKeyDown={(e)=>handleKeyDown(e)}>
         {currentQuestion.options.map((option, index) => (
             <Box key={`option-${index}`} onClick={()=>handleMultiSelectChange(option)} className={`select-option ${message?.includes(option) ? 'selected' : ''}`}>
                 {option}
             </Box>
         ))}
         
       </Box>
        )}
            </Box>
          </Box>
        ))}
        {/* {botTyping && (
          <Box className="message bot-message">
            <Box className="message-content">
              <Box className="message-header">
                <img src={`https://cdn-icons-png.flaticon.com/512/21/21104.png`} alt="ChatBot" className="message-avatar" />
                <span className="message-username">ChatBot</span>
              </Box>
              <p className="message-text"> {botLoadingMessage ? botLoadingMessage : "Typing..."}</p>
            </Box>
          </Box>
        )} */}
        {lastQuestion && (
          <div className="message user-message">
          <div className="message-content">
            
          <button className="continue-button primary-btn primary-btn-outline" onClick={handleContinue}>Continue</button>
          </div>
        </div>
        )}
      </Box>
      <Box className="input-container">
        {console.log(inputType,"inputType",message)}
        <Box className="file-input-container">

        <input
            type="file"
            title=''
            onChange={handleFileChange}
            className="file-input"
            disabled = {(inputType === 'file')? false : true}
          />
          <PhotoLibraryIcon/>
        </Box>
        {
          (inputType === 'select' || inputType === 'multi-select') && message?.includes("Custom...") ?
            <input
            type="text"
            value={multiMessage}
            onChange={handleMultiTextMessage}
            placeholder="Type your message..."
            onKeyDown={handleKeyDown}
            className="message-input"
          />
          :
          <input
          type="text"
          value={inputType === 'text' ? message: ''}
          onChange={handleTextMessage}
          placeholder="Type your message..."
          onKeyDown={handleKeyDown}
          className="message-input"
          disabled = {(inputType === 'text' && !processing)? false : true}
        />
        }
     
        
   
        <Button ref={sendBtn} onClick={(inputType === 'select' || inputType === 'multi-select') ? handleCustomSelect : handleSendMessage} disabled = {processing} className="send-button p-0 text-orange bg-none" sx={{minWidth:"Fit-content"}}><SendOutlinedIcon/></Button>
      </Box>
    </Box>
  );
};

export default TestChatbot;
