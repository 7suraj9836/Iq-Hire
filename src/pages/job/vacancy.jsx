import { Box, Button, Divider, FormControl, Grid, InputLabel, List, ListItem, Menu, MenuItem, Select, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useDispatch, useSelector } from 'react-redux';
import '../job/job.scss';
import editsvg from '../../assets/img/svg/edit.svg';
import copysvg from '../../assets/img/svg/copy.svg';
import downloadsvg from '../../assets/img/svg/download.svg';
import sharesvg from '../../assets/img/svg/share.svg';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import JobTitle from '../../assets/img/svg/JobTitle.svg';
import ToneofVoice from '../../assets/img/svg/ToneofVoice.svg';
import Neuromarketing from '../../assets/img/svg/Neuromarketing.svg';
import ElementsofValue from '../../assets/img/svg/ElementsofValue.svg';   
import addsvg from '../../assets/img/svg/add.svg';
import sparksvg from '../../assets/img/svg/spark.svg';
import  Loader  from '../../components/Loader';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Otherpopup from './otherpopup';
import { editedVacancyTextData, toneOfVoice } from '../../redux/action/chatbotAction';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Utils from '../../utils/reduxUtils';
import CancellationPopup from '../../common/CancellationPopup';
import { PDFDownloadLink } from '@react-pdf/renderer';
import {PdfTemplate} from './pdfTemplate';
const Vacancy = () => {
    const [customTone, setCustomTone]=useState("");
    const [openToneDialog, setOpenToneDialog] = useState(false);
    const [parsedText, setParsedText] = useState(null);
    const [isEditEnabled, setIsEditEnabled]=useState(false);
    const [editedVacancyText,setEditedVacancyText]=useState(null);
    const {chatbotDataLoading,vacancyText} = useSelector((state) => state?.jobDescriptionFileUploadReducer);
    // let newVacancyText=vacancyText;
    const dispatch=useDispatch();
    const contentRef1 = useRef(null);
    const contentRef2 = useRef(null);
    const contentRef = useRef(null);
    const [isCancellationPopupOpen, setIsCancellationPopupOpen] = useState(false);
    const vacancyTextId=vacancyText[0]?._id;
    console.log('vacancyTextId12',vacancyTextId[0]._id);
    const vacancyTextData=vacancyText[0]?.vacancyText?vacancyText[0]?.vacancyText:vacancyText[0];
    const [aboutTheFunction , setAboutTheFunction]=useState({});
    const [criteria , setCriteria]=useState({});
    const [employmentConditions , setEmploymentConditions]=useState({});
    const [trendingTitles , setTrendingTitles]=useState([]);
    const [trendingTitlesTooltipValue , setTrendingTitlesTooltipValue]=useState("");
    const [elementOfValues , setElementOfValues]=useState([]);
    const [elementOfTooltipValues , setElementOfTooltipValues]=useState({});
    const [neuromarketingValues , setNeuroMarketingValues]=useState([]);
    const [neuromarketingTooltipValues , setNeuromarketingTooltipValues]=useState([]);
    console.log('parsedText',vacancyTextData)
    console.log('chatbotDataLoading',chatbotDataLoading);
    
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
        setOpenToneDialog(false);
        setCustomTone('');
      };
      const handleChange = (value) => {
        if(value==="others"){
            setOpenToneDialog(true);
         }
      };

      const handleToneOfVoice=(tov)=>{
        const payload={
            "structured_output":JSON.stringify(vacancyTextData),
            "tone_of_voice":""
        }
         switch(tov){
            case "friendlyTone": dispatch(toneOfVoice({...payload,"tone_of_voice":"Friendly"}));
            handleClose();
                    break;
            case 'innovativeTone': dispatch(toneOfVoice({...payload,"tone_of_voice":'innovative'})); 
            handleClose();
                    break;  
            case 'professionalTone':dispatch(toneOfVoice({...payload,"tone_of_voice":'professional'}));
            handleClose();
                    break;    
            case "inspirationalTone":dispatch(toneOfVoice({...payload,"tone_of_voice":'inspirational'}));
            handleClose();
                    break;
            case "informativeTone": dispatch(toneOfVoice({...payload,"tone_of_voice":'informative'}));
            handleClose();
                     break;  
            default: break;                            
         }         
      }
    console.log('vacancyText',vacancyTextData);
  
    const handleOpenPopup = () => {
        setIsCancellationPopupOpen(true);
      };
    
      const handleClosePopup = () => {
        setIsCancellationPopupOpen(false);
      };

      const handleOption1Click = () => {
        // Perform action for Option 1
        console.log("Option 1 clicked");
        setEditedVacancyText(null);
        setIsEditEnabled(false);
        handleClosePopup();
      };
    
      const handleOption2Click = () => {
        // Perform action for Option 2
        console.log("Option 2 clicked");
        handleClosePopup();
      };

  const handleCopyContent = () => {
        let contentToCopy = '';
    
        for (const [key, value] of Object.entries(vacancyTextData)) {
            if (key === 'Job_Title') {
                contentToCopy += `Job Title: ${value}\n\n`;
            }  
            else if (key === 'Trending_Titles') {
                contentToCopy += `Trending Titles:\n`;
                value.forEach((item) => {
                    for (const [title, description] of Object.entries(item)) {
                        contentToCopy += `  - ${title}: ${description}\n`;
                    }
                });
                contentToCopy += '\n';
            }
            else if (key === 'Elements_of_values' || key === 'neuromarketing_principles') {
                contentToCopy += `${key.replace(/_/g, ' ')}:\n`;
                value.forEach((item) => {
                    for (const [subKey, subValue] of Object.entries(item)) {
                        contentToCopy += `  - ${subKey}: ${subValue}\n`;
                    }
                });
                contentToCopy += '\n';
            } else if (key === 'Tone_of_voice') {
                continue; 
            } else if (typeof value === 'object' && !Array.isArray(value)) {
                contentToCopy += `${key.replace(/_/g, ' ')}:\n`;
                for (const [subKey, subValue] of Object.entries(value)) {
                    contentToCopy += `  - ${subKey}:\n`;
                    subValue.forEach((item) => {
                        contentToCopy += `    * ${item}\n`;
                    });
                }
                contentToCopy += '\n';
            } else if (Array.isArray(value)) {
                contentToCopy += `${key.replace(/_/g, ' ')}:\n`;
                value.forEach((item) => {
                    contentToCopy += `  - ${item}\n`;
                });
                contentToCopy += '\n';
            } else {
                contentToCopy += `${key.replace(/_/g, ' ')}: ${value}\n\n`;
            }
        }
    
        const content2 = contentRef2.current.innerText; 
        const combinedContent = `${contentToCopy}\n${content2}`;
    
        navigator.clipboard.writeText(combinedContent)
            .then(() => {
                toast.success("Copied to clipboard");
                console.log('Content copied to clipboard successfully!');
            })
            .catch(err => {
                console.error('Failed to copy content: ', err);
            });
    };
    

    const handleEditData=(key,value)=>{
       setEditedVacancyText(prevstate=>({
        ...prevstate,
        [key]:value
       }))
    }

    const handleFunctionEditData = (key, value) => {
        console.log('key12',key)
        setEditedVacancyText(prevState => ({
            ...prevState,
            'About_The_Function': {
                ...prevState['About_The_Function'],
                [key]: value 
            }
        }));
    };
    
    const handleCriteriaEditData = (key, value) => {
        console.log('key12',key)
        setEditedVacancyText(prevState => ({
            ...prevState,
            'Criteria': {
                ...prevState['Criteria'],
                [key]: value 
            }
        }));
    };
    const handleEmploymentEditData = (key, value) => {
        console.log('key12',key)
        setEditedVacancyText(prevState => ({
            ...prevState,
            'Employment_Condition': {
                ...prevState['Employment_Condition'],
                [key]: value  
            }
        }));
    };


    //Save Edited Data
    const handleSubmit=()=>{
        const payload={
            "id":vacancyTextId,
            "vacancyText":editedVacancyText
        }
        console.log('payload',payload)
        // dispatch({ type: Utils.ActionName.CHATBOTDATA, payload:editedVacancyText });
        dispatch(editedVacancyTextData(payload,setEditedVacancyText,setIsEditEnabled));
        // newVacancyText=editedVacancyText;
        setIsEditEnabled(false);
        // toast.success("Text Edited Successfully");
        console.log('editedVacancyText',editedVacancyText);
        // dispatch(editedVacancyTextData(payload,setEditedVacancyText))
    }
    //handle Edit Mode
    const handleEditMode=()=>{
    setEditedVacancyText(vacancyTextData);
    setIsEditEnabled(true);
    }
  
    console.log("Job_Title",vacancyTextData?.['Job_Title']);
    const handleShareEmail = () => {
        const id=12;
        const subject = "Job Vacancy Information";
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const baseUrl = url.origin;
        const jobDetailUrl = `${baseUrl}/sharejob/${id}`;
    
        let body = `
            Job Title: ${vacancyTextData?.['Job_Title']}\n
            We have an exciting opportunity for you!\n\n
            Please copy and paste the following link into your browser to read the full job description: ${jobDetailUrl}
        `;
    
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);
    
        const mailtoLink = `mailto:?subject=${encodedSubject}&body=${encodedBody}`;
    
        window.location.href = mailtoLink;
    };
    
   
    let maxKey = null;
let maxLength = 0;
let maxKeyValue="";
// Iterate through the object to find the array with the maximum length
for (let key in vacancyTextData) {
    if (Array.isArray(vacancyTextData[key]) && vacancyTextData[key].length > maxLength) {
        maxKey = key;
        maxLength = vacancyTextData[key].length;
        maxKeyValue=vacancyTextData[maxKey];
    }
}
//let criteriaKey,employmentKey;
 console.log('editedVacancyText12',vacancyText);
const[criteriaKey,setCriteriaKey]=useState("")
const[employmentKey,setEmploymentKey]=useState("")

useEffect(()=>{
 
    if(vacancyTextData){
        setAboutTheFunction(vacancyTextData?.About_The_Function);
        setCriteria(vacancyTextData?.Criteria);
        setEmploymentConditions(vacancyTextData?.Employment_Condition);
        const Keys=Object.keys(vacancyTextData?.Trending_Titles);
        // setTrendingTitles(Keys.join(', '));
        const trendingTitles=vacancyTextData?.Trending_Titles;
        const datas=trendingTitles.map((data)=>(Object.keys(data).join(',')));
        console.log('datas',datas);
        setTrendingTitles(datas.join(', '));
        const trendingValues=trendingTitles?.map(data=>Object.values(data)).flat().join(' ');
        console.log('trendingValues',trendingValues);
        setTrendingTitlesTooltipValue(trendingValues);
        // Initializing an array to store the tooltip values
const trendingTitlesTooltipValue = [];

// Iterating over the keys to extract and append values
Keys.forEach((ele) => {
    // Access the value associated with the current key and store it in an array
    trendingTitlesTooltipValue.push(vacancyTextData?.Trending_Titles[ele]);
});

      const elements = vacancyTextData?.Elements_of_values || [];
        const keysArray = [];
        const valuesArray = [];
        
        elements.forEach(item => {
            Object.entries(item).forEach(([key, value]) => {
                keysArray.push(key);
                valuesArray.push(value);
            });
        });
        setElementOfValues(keysArray);
        setElementOfTooltipValues(valuesArray);
        
        const neuromarketing = vacancyTextData?.neuromarketing_principles || [];
        const neuromarketingArray = [];
        const neuromarketingValuesArray = [];
        
        neuromarketing.forEach(item => {
            Object.entries(item).forEach(([key, value]) => {
                neuromarketingArray.push(key);
                neuromarketingValuesArray.push(value);
            });
        });
        setNeuroMarketingValues(neuromarketingArray.join(", "));
        setNeuromarketingTooltipValues(neuromarketingValuesArray.join("\n"));
       
    }
   

},[vacancyTextData])
console.log("elementOfTooltipValues",trendingTitlesTooltipValue);




const functionArray = editedVacancyText?.[maxKey] || vacancyTextData?.[maxKey] || [];
const criteriaArray=editedVacancyText?.[criteriaKey]?editedVacancyText?.[criteriaKey]:vacancyTextData?.[criteriaKey];
const employmentConditionsArray=editedVacancyText?.[employmentKey]?editedVacancyText?.[employmentKey]:vacancyTextData?.[employmentKey];

console.log('responseKeys',criteriaKey,employmentKey);
console.log('editedVacancyText1',vacancyText,editedVacancyText)

  return (
   
    <Box>
     {chatbotDataLoading  ? <Loader/>:
     <>
     <Otherpopup open={openToneDialog} customTone={customTone} setCustomTone={setCustomTone} handleClose={handleClose}></Otherpopup>
     <CancellationPopup  open={isCancellationPopupOpen}  handleClose={handleClosePopup} title={'Confirmation Popup'} question={'Are You Sure You Want To Discard?'} option1={'Yes'} option2={'No'} onOption1Click={handleOption1Click} onOption2Click={handleOption2Click}/>
        <Header/>
            <Box className='py-2 mt-10'>
                <Grid container spacing={2} className='px-5'>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className=' py-2'>
                        <Typography variant='h2' className='fs-32 fw-600 px-4'>Job Vacancy Text</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8} className=' py-2 flex-wrap justify-content-end'>
                        <Box className='gap-10 flex-wrap'>
                            <Box className="flex-wrap justify-content-end">
                                <img className={`my-auto ${isEditEnabled ? 'edit-mode-enabled' : 'edit-mode-disabled'}`} width={27} height={27} src={editsvg} onClick={handleEditMode}
                                    style={{cursor:"pointer",borderRadius:"5px"}}
                                />
                                <Divider className='mx-2' orientation="vertical" flexItem sx={{border:"1px solid black"}} />
                                <img className='my-auto' width={27} height={27} src={copysvg} onClick={handleCopyContent} style={{cursor:"pointer"}}/>
                                <Divider className='mx-2' orientation="vertical" flexItem sx={{border:"1px solid black"}} />
                                {/* <img className='my-auto' width={27} height={27} src={downloadsvg} style={{cursor:"pointer"}}/> */}
                                
     
                                    <img 
                                        className='my-auto' 
                                        width={27} 
                                        height={27} 
                                        src={downloadsvg} 
                                        style={{cursor:"pointer"}} 
                                        alt="Download PDF"
                                        title="Download PDF"
                                    />
       
                                <Divider className='mx-2' orientation="vertical" flexItem sx={{border:"1px solid black"}}  />
                                <img className='my-auto' width={27} height={27} src={sharesvg} style={{cursor:"pointer"}}  onClick={handleShareEmail} />
                                <Divider className='mx-2' orientation="vertical" flexItem sx={{border:"1px solid black"}}  />
                                <Box className='flex-wrap gap-10'>
                                    {/* <Button className='primary-btn-outline gap-10' sx={{minWidth:"fit-content"}}><img src={sparksvg} />Tone of Voice</Button> */}

                                        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                        <div>
                                        <Button className='primary-btn-outline gap-10' sx={{minWidth:"fit-content"}}
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        ><img src={sparksvg} />Tone of Voice <KeyboardArrowDownIcon/></Button>

                                        {/* <Button
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                            Dashboard
                                        </Button> */}
                                        <Menu
                                            className='toneofvoice'
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <MenuItem onClick={()=>handleToneOfVoice("friendlyTone")}>Friendly Tone</MenuItem>
                                            <MenuItem onClick={()=>handleToneOfVoice("innovativeTone")}>Innovative Tone</MenuItem>
                                            <MenuItem onClick={()=>handleToneOfVoice("professionalTone")}>Professional Tone</MenuItem>
                                            <MenuItem onClick={()=>handleToneOfVoice("inspirationalTone")}>Inspirational Tone</MenuItem>
                                            <MenuItem onClick={()=>handleToneOfVoice("informativeTone")}>Informative Tone</MenuItem>
                                            <MenuItem onClick={()=>handleChange("others")}>Others</MenuItem>
                                        </Menu>
                                        </div>
                      
                                  <Link to="/job/upload">  <Button className='primary-btn-outline gap-10' sx={{minWidth:"fit-content"}}><img src={addsvg} />Generate the Social Media Template  </Button></Link>
                                </Box>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={9} className=''>
                        <Box className='vacancy-content' ref={contentRef1}>
                            <Typography className='fs-18 text-color-c1 fw-700 mt-20' variant='h3'>Job Title</Typography>
                            <TextareaAutosize
                                className='fs-16 text-gray-c1 fw-500 mt-10 no-border job'
                                aria-label="minimum height"
                                minRows={1}
                                placeholder="Enter Job Title"
                                style={{ width: "100% "}}
                               value={editedVacancyText?.['Job_Title'] !== undefined ? editedVacancyText?.['Job_Title'] : vacancyTextData?.['Job_Title']}
                                disabled={!isEditEnabled}
                                // value={vacancyTextData?.job_title}
                                onChange={(e) => handleEditData('Job_Title', e.target.value)}
                                // value={vacancyTextData?.job_title}
                                // onChange={handleEditData((e)=>editedVacancyText?.job_title,e.target.value)}
                             />
                          
                        
                            {/* <Typography className='fs-16 text-black fw-500 mt-10' variant='h3'>{vacancyTextData?.job_title} </Typography> */}
                            <Typography className='fs-18 text-color-c1 fw-700 mt-20' variant='h3'>Story Telling</Typography>
                            <TextareaAutosize
                                className='fs-16 text-gray-c1 fw-500 mt-10 no-border job'
                                aria-label="minimum height"
                                minRows={1}
                                placeholder="Enter Story Telling"
                                style={{ width: "100% "}}
                                disabled={!isEditEnabled}
                                value={editedVacancyText?.Storytelling!==undefined?editedVacancyText?.Storytelling:vacancyTextData?.Storytelling}
                                onChange={(e) => handleEditData('Storytelling', e.target.value)}
                            />
                          
                             
                                {
                            Object.keys(aboutTheFunction).map((maxKey) => (
                                <div key={maxKey}>
                                    <Typography className='fs-18 text-color-c1 fw-700 mt-20' variant='h3'>{maxKey}</Typography>
                                    
                                    {isEditEnabled ? (
                                        <TextareaAutosize
                                            className='fs-16 text-gray-c1 fw-500 mt-10 no-border job'
                                            aria-label="minimum height"
                                            minRows={1}
                                            placeholder="Enter About The Function"
                                            style={{ width: "100%" }}
                                            // value={aboutTheFunction[maxKey]?.join('\n')} // Join array items with newlines for editing
                                            // value={editedVacancyText?.['About_The_Function']?editedVacancyText?.['About_The_Function']:vacancyTextData?.['About_The_Function']}
                                            value={
                
                        (editedVacancyText?.['About_The_Function']?.[maxKey] || vacancyTextData?.['About_The_Function']?.[maxKey])?.join('\n') || ''
                    } 
                    onChange={(e) => handleFunctionEditData(maxKey, e.target.value.split('\n'))}
                                            // onChange={(e) => handleEditData(maxKey, e.target.value.split('\n'))} // Split by newlines when editing
                                        />
                                    ) : (
                                        <List>
                                            {aboutTheFunction[maxKey].map((item, index) => (
                                                <ListItem key={index} className='fs-16 text-gray-c1 fw-500 mt-10 no-border job'>
                                                    {item}
                                                </ListItem>
                                            ))}
                                        </List>
                                    )}
                                </div>
                            ))
                        } 


                                    {
                            Object.keys(criteria).map((criteriaKey) => (
                                <div key={criteriaKey}>
                                    <Typography className='fs-18 text-color-c1 fw-700 mt-20' variant='h3'>{criteriaKey}</Typography>
                        
                                    {isEditEnabled ? (
                                        <TextareaAutosize
                                            className='fs-16 text-gray-c1 fw-500 mt-10 no-border job'
                                            aria-label="minimum height"
                                            minRows={1}
                                            placeholder="Enter Job Criteria"
                                            style={{ width: "100%" }}
                                            value={
                
                (editedVacancyText?.['Criteria']?.[criteriaKey] || vacancyTextData?.['Criteria']?.[criteriaKey])?.join('\n') || ''
            } 
                                            onChange={(e) => handleCriteriaEditData(criteriaKey, e.target.value.split('\n'))} // Split by newlines when editing
                                        />
                                    ) : (
                                        <List>
                                            {criteria[criteriaKey]?.map((item, index) => (
                                                <ListItem key={index} className='fs-16 text-gray-c1 fw-500 mt-10 no-border job'>
                                                    {item}
                                                </ListItem>
                                            ))}
                                        </List>
                                    )}
                                </div>
                            ))
                        }



                        {
    Object.keys(employmentConditions).map((employmentKey) => (
        <div key={employmentKey}>
            <Typography className='fs-18 text-color-c1 fw-700 mt-20' variant='h3'>{employmentKey}</Typography>

            {isEditEnabled ? (
                <TextareaAutosize
                    className='fs-16 text-gray-c1 fw-500 mt-10 no-border job'
                    aria-label="minimum height"
                    minRows={1}
                    placeholder="Enter Employment Conditions"
                    style={{ width: "100%" }}
                    value={
                
                (editedVacancyText?.['Employment_Condition']?.[employmentKey] || vacancyTextData?.['Employment_Condition']?.[employmentKey])?.join('\n') || ''
            } 
                    onChange={(e) => handleEmploymentEditData(employmentKey, e.target.value.split('\n'))} // Split by newlines when editing
                />
            ) : (
                <List>
                    {employmentConditions[employmentKey]?.map((item, index) => (
                        <ListItem key={index} className='fs-16 text-gray-c1 fw-500 mt-10 no-border job'>
                            {item}
                        </ListItem>
                    ))}
                </List>
            )}
        </div>
    ))
}

                        </Box>
                        <Box className='flex-wrap justify-content-between my-30'>
                            <Button className='primary-btn '>Beautify Template </Button>
                            <Box>
                                <Button onClick={()=>{handleOpenPopup()}} className='primary-btn-outline mr-10' sx={{minWidth:"144px"}}>Discard</Button>
                                <Button disabled={!isEditEnabled} onClick={handleSubmit} className='primary-btn' sx={{minWidth:"144px"}}>Save</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={3} >
                        <Box sx={{background:"#FFF3E9",height:"100%",padding:"28px 24px "}} ref={contentRef2}>
                            <Box>
                                <Box  className="d-flex justify-content-between">
                                    <Typography variant='h4' className='fs-18 text-color-c1 fw-600 text-start'>
                                        <img width={24} height={24} src={JobTitle}/>&nbsp;
                                        Job Title
                                    </Typography>
                                    <Tooltip className='text-orange' title={trendingTitlesTooltipValue}><InfoOutlinedIcon/></Tooltip>
                                </Box>
                                <Box className="bg-white mt-10 mb-10" sx={{padding:"12px 14px"}}>
                                    <Typography className='fs-16 fw-500 color-primary'>{trendingTitles}</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box  className="d-flex justify-content-between">
                                    <Typography variant='h4' className='fs-18 text-color-c1 fw-600 text-start'>
                                    <img width={24} height={24} src={ElementsofValue}/>&nbsp;
                                    Elements of Value</Typography>
                                    <Tooltip className='text-orange' title={elementOfTooltipValues}><InfoOutlinedIcon/></Tooltip>
                                </Box>
                                <Box className="bg-white mt-10 mb-10" sx={{padding:"12px 14px"}}>
                                    <Typography className='fs-16 fw-500 color-primary'>{elementOfValues}</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box  className="d-flex justify-content-between">
                                    <Typography variant='h4' className='fs-18 text-color-c1 fw-600 text-start'>
                                    <img width={24} height={24} src={Neuromarketing}/>&nbsp;
                                    Neuromarketing </Typography>
                                    <Tooltip className='text-orange' title={neuromarketingTooltipValues}><InfoOutlinedIcon/></Tooltip>
                                </Box>
                                <Box className="bg-white mt-10 mb-10" sx={{padding:"12px 14px"}}>
                                    <Typography className='fs-16 fw-500 color-primary'>{neuromarketingValues}</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box  className="d-flex justify-content-between">
                                    <Typography variant='h4' className='fs-18 text-color-c1 fw-600 text-start'>
                                    <img width={24} height={24} src={ToneofVoice}/>&nbsp;
                                    Tone of Voice </Typography>
                                    <Tooltip className='text-orange' title={vacancyTextData?.Tone_of_voice}><InfoOutlinedIcon/></Tooltip>
                                </Box>
                                <Box className="bg-white mt-10 mb-10" sx={{padding:"12px 14px"}}>
                                    <Typography className='fs-16 fw-500 color-primary'>{vacancyTextData?.Tone_of_voice} </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        <Footer/>
        </>
}
    </Box>
  )
}

export default Vacancy;
