import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.scss';
import { Box, Button } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import gallary from '../../assets/img/svg/gallary.svg';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
const Chatbot = ({sortedPdfAnswers,updatedAnswers,handleContinue,lastQuestion, questions, onSendMessage, botLoadingMessage,currentQuestionIndex,setCurrentQuestionIndex, currentQuestion, messages, setMessages, inputType}) => {
  const [message, setMessage] = useState('');
  const sendBtn = useRef(null);
  const chatEndRef = useRef(null);
  const [file, setFile] = useState(null);
  const [botTyping, setBotTyping] = useState(false);
  const [processing,setProcessing] = useState(false);
  const [multiMessage, setMultiMessage] = useState('');
  const [isOptionPresent,setIsOptionPresent]=useState(false);
  console.log('preDefinedAnswer12',sortedPdfAnswers);
  const pdfAnswers={
    A1: "Dummy Value 1",
    A2: "Dummy Value 2",
    A3: "Starting professional",
    A4: "Dummy Value 4",
    A5: "Dummy Value 5",
    A6: "Dummy Value 6",
    A7: "Dummy Value 7",
    A8: "Dummy Value 8",
    A9: "Dummy Value 9",
    A10: "Dummy Value 10"
  };
  console.log('currentQuestionIndex12',currentQuestion);


  
  useEffect(() => {
    if(sortedPdfAnswers && currentQuestionIndex>4) {
      if(currentQuestion?.inputType==='text' && sortedPdfAnswers[`A${currentQuestion?.id-5}`]!==undefined){
        console.log("currentQuestion65",sortedPdfAnswers[`A${currentQuestion?.id-5}`]);
        setMessage(sortedPdfAnswers[`A${currentQuestion?.id-5}`]);
      }
      else if(currentQuestion?.inputType==='select'){
        currentQuestion?.options?.forEach((data) => {
          console.log('data35',data); 
          if(data===sortedPdfAnswers[`A${currentQuestion?.id-5}`]){
             setMessage(data);
             setIsOptionPresent(true);
          }
        
           
        })
       if(!isOptionPresent){
         setMessage('Custom...');
         setMultiMessage(sortedPdfAnswers[`A${currentQuestion?.id-5}`]);
        }
       
      }
    }
   
  },[sortedPdfAnswers,currentQuestion,currentQuestionIndex])
  console.log('preDefinedAnswers',pdfAnswers[`A${currentQuestion?.id-5}`]);
  console.log('preDefinedAnswers358',currentQuestion);
  useEffect(()=>{
  console.log('processing12',messages)
  },[processing])

  console.log('processing36',currentQuestionIndex)
  console.log('processing45',currentQuestion)

  console.log('preDefinedAnswer12',sortedPdfAnswers);
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleMessageExport = async(message,file) => {
    console.log("message123",message);
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, text: message, sender: 'user' },
    ]);
     await onSendMessage(file,message);
    scrollToBottom();
  };


  const handleSendMessage = async () => {
    console.log("entered",message);
    setProcessing(true);
    if (message?.trim() || file) {
      setBotTyping(true);
      await handleMessageExport(message, file);
      if(!sortedPdfAnswers["A1"]){
        setMessage('');
        setMultiMessage("");
        setFile(null);
}
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
      if(!sortedPdfAnswers["A1"]){
        setMessage('');
        setMultiMessage("");
        setFile(null);
      }
    }
    setProcessing(false);
  };
  const handleMultiSelectChange = (option) => {
    // Split the message into an array of options
    // console.log('message12',message.length,option)
    if(message?.includes(option)) {
      // console.log("entered if")
      const tempArr = message?.split(', ');
      const index = tempArr?.indexOf(option);
      if(index > -1) {
        tempArr?.splice(index, 1);
      }
      setMessage(tempArr.join(', '));
      return;
    }
    if(message) {
      console.log("entered if",option)
      const mesarray=[];
      mesarray.push(option);
      const tempMesage = message+', '+option;
      const options = tempMesage.split(', ');
     
      if(options.length<=3) {
        setMessage(tempMesage);

      }
      console.log('options',options.length)
      
    } else {
      // console.log("entered else")
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
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     // console.log("entered handleKeyDown")
  //     if (event.key === 'Enter') {
  //       console.log("entered handleKeyDown")
  //       sendBtn?.current?.click();
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyDown);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

  // useEffect(() => {
    
  // },[])
   const handleKeyDown = (event) => {
    // console.log("entered handleKeyDown")
    if (event.key === 'Enter') {
      // if(inputType === 'multi-select')
      sendBtn.current?.click();
    }
   }
   const handleMultiTextMessage = (e) => {
     setMultiMessage(e.target.value);
   }
   console.log('multiMessage',multiMessage);
   const handleCustomSelect = async(e) => {
    console.log("test",inputType);
    if(inputType === 'select') {
      setProcessing(true);
      if (multiMessage?.trim() || file) {
        setBotTyping(true);
        await handleMessageExport(multiMessage, file);
        if(!sortedPdfAnswers["A1"]){
          setFile(null);
          setMultiMessage('');
          setMessage('');

        }
      }
      setProcessing(false);
    } else if(inputType === 'multi-select') {
      setProcessing(true);
      const tempMessages = message?.split(', ');
      const index = tempMessages?.findIndex(item => item === 'Custom...');
      if(tempMessages){
      tempMessages[index] = multiMessage;
      console.log('tempMessages',tempMessages);
      const options = tempMessages.join(', '); 
      // setMessage(options);
      setBotTyping(true);
      await handleMessageExport(options, file);}
      setFile(null);
      setMultiMessage('');
      setMessage('');
      setProcessing(false);
       console.log("entered multiselect else");
       
    }
     
   }
   console.log('messages21',messages);
  return (
    <Box className="chatbot">
      <Box className="messages">
        {messages?.map((msg) => (
          <Box key={msg.id} className={`message ${msg.sender}-message`} ref={chatEndRef}>
            <Box className="message-content">
              <Box className="message-header">
                <img src={`https://cdn-icons-png.flaticon.com/512/21/21104.png`} alt={msg.sender} className="message-avatar" />
                <span className="message-username">{msg.sender === 'user' ? 'User' : 'ChatBot'}</span>
              </Box>
              <p className="message-text" ref={chatEndRef}>{msg?.text}</p>
        {currentQuestion.inputType === 'select' && msg.sender === 'bot' && msg.text === currentQuestion['Q' + (currentQuestionIndex + 1)] && (
          <Box>
  {currentQuestion.options.map((option, index) => {
    console.log(`Option: ${option}, Message: ${message}`);
    return (
      <Box
        key={`option-${index}`}
        onClick={() => handleSelectChange(option)}
        className={`select-option ${message?.includes(option) ? 'selected' : ''}`}
      >
        {option}
      </Box>
    );
  })}
</Box>
          
        )}


        {currentQuestion.inputType === 'multi-select' && msg.sender === 'bot' && msg.text === currentQuestion['Q' + (currentQuestionIndex + 1)] && (
         
         <Box>
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
        {/* <div ref={chatEndRef}></div> */}
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
            
          <button className="continue-button primary-btn primary-btn-outline" onClick={()=>{handleContinue()}}>Continue</button>
          </div>
        </div>
        )}
      </Box>
      <Box className="input-container">
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
            // onKeyDown={handleKeyDown}
            className="message-input"
          />
          :
          <textarea
          type="text"
          value={inputType === 'text' ? message: ''}
          onChange={handleTextMessage}
          placeholder="Type your message..."
          // onKeyDown={handleKeyDown}
          className="message-input"
          disabled = {(inputType === 'text' && !processing)? false : true}
        />
        }
     
        
   
        <Button ref={sendBtn} onClick={(inputType === 'select' || inputType === 'multi-select') ? handleCustomSelect : handleSendMessage} disabled = {processing} className="send-button p-0 text-orange bg-none" sx={{minWidth:"Fit-content"}}><SendOutlinedIcon/></Button>
      </Box>
    </Box>
  );
};

export default Chatbot;
