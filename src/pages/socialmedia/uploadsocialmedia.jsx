import { Box, Button, Card, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import farmer from "../../assets/img/farmer.png";
import gallary from "../../assets/img/svg/gallary.svg";
import sliderimg2 from "../../assets/img/sliderimg2.jfif";
import sliderimg3 from "../../assets/img/sliderimg3.jfif";
import sliderimg4 from "../../assets/img/sliderimg4.jfif";
import ourwork from "../../assets/img/ourwork.jfif";
import Vacancyimg from "../../assets/img/Vacancyimg.png";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import "../job/job.scss";
import { toast } from "react-toastify";
import Socialmediapopup from "../../components/socialmediapopup";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch,useSelector } from "react-redux";
import { socialMediaTemplateData } from "../../redux/action/chatbotAction";
const Uploadsocialmedia = () => {
  const defaultImages=[farmer,sliderimg3,sliderimg2,sliderimg4,ourwork,Vacancyimg]
  const [uploadedImage, setUploadedImage] = useState([]);
  const [uploadedImageUrl, setUploadedImageUrl] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [logo, setLogo]=useState(null);
  const [isPopupOpen,setIsPopupOpen]=useState(false);
  const dispatch=useDispatch();
  const {chatbotDataLoading,vacancyText}=useSelector((state)=>state?.jobDescriptionFileUploadReducer);
  //handle opening of popup
  const handleOpenPopup=()=>{
    setIsPopupOpen(true);
    const vacancyTextData=vacancyText[0]?.vacancyText?vacancyText[0]?.vacancyText:{}; 
    handleSocialMediaTemplateData(vacancyTextData);
  }

  //handle closeing of popup
  const handleClosePopup=()=>{
    setIsPopupOpen(false);
  }

  //handle Image Upload
  const handleImageUpload=(event)=>{
   const image=event.target.files[0];
   const imageName=image?.name;
   const imageUrl=URL.createObjectURL(image);
  if(uploadedImage.length+selectedImages.length<4){
    setUploadedImage([...uploadedImage,imageName]);
    setUploadedImageUrl([...uploadedImageUrl,imageUrl])
   }
   else{
    toast.error("At max total of four images can be selected");
   }
  }
  //handle Logo Upload
  const handleLogoUpload=(event)=>{
  const logo=event.target.files[0];
  const logoUrl=URL.createObjectURL(logo);
  setLogo(logoUrl);
  }
  
   // Handle Image Selection
   const toggleImageSelection = (image) => {
    const isSelected = selectedImages.includes(image);

    if (isSelected) {
      setSelectedImages(selectedImages.filter((img) => img !== image));
    } else if (uploadedImage.length+selectedImages.length<4) {
      setSelectedImages([...selectedImages, image]);
    } 
    else {
      toast.error("You can select up to 4 images only.");
    }
  };
 
  // console.log('vacancyTextData36',vacancyText[0]?.vacancyText);
  const handleSocialMediaTemplateData=(vacancyTextData)=>{
    console.log('vacancyTextData123',vacancyTextData)
    // dispatch(socialMediaTemplateData(vacancyTextData));
  }

console.log('selectedImages',selectedImages,uploadedImage,logo);
  return (
    <Box>
      <Header />
      <Box className="py-2 mt-10">
        <Grid container spacing={2} className="px-5">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="py-2">
            <Typography variant="h2" className="fs-32 fw-600 px-4">
              Job Vacancy Text
            </Typography>
            <Typography variant="h4" className="fs-16 fw-600 px-4">
              You can choose 4 images at a time to get the 4 social media
              template{" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="px-0 py-2 mb-40"
          >
            <Divider sx={{ border: "1px solid #D2D2D2" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8} className="px-4 py-2">
            <Box className="gap-20 flex-wrap">
            {
                defaultImages.map((image,index)=>(
                    <Box className="select-img-box" onClick={() => toggleImageSelection(image)}
                  style={{
                    border: selectedImages.includes(image) ? "2px solid #FFA500" : "2px solid #ffffff",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}>
                <img src={image} alt={`image ${index}`}/>
                <Button className="select-img-btn">
                  {/* <CircleOutlinedIcon color={selectedImages.includes(image) ? "primary" : "disabled"}/> */}
                  {selectedImages.includes(image) ? (
                  <CheckCircleIcon color="primary" style={{color:"#FFA500"}}/>
                  ) : (
                    <CircleOutlinedIcon color="disabled" />
                  )}
                </Button>
              </Box>      
                ))
            }
             
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            className="px-0 py-2"
            sx={{background:"#F6F5F5"}}
          >
            <Box  className="text-center mt-30 mx-auto"
                sx={{ padding: "44px 10px", maxWidth: "328px" }}>
            {/* {
                uploadedImage? <><img src={uploadedImage} style={{height:"150px",width:"150px",margin:"20px 80px"}}/>
                <Button className="text-orange capitalize">
                      <input
                        type="file"
                        // accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImageUpload}
                        id="upload-image-2"
                      />
                      <label htmlFor="upload-image-2" style={{ cursor: 'pointer' }}>Change</label>  
                    </Button>
                </>: <Box
                className="text-center bg-white mx-auto"
                sx={{ padding: "44px 10px", maxWidth: "328px" }}
              >
                <img src={gallary} />
                <Typography variant="h4" className="fs-14 fw-500 mt-20">
                  Drop your Image here or{" "}
                  <span>
                    <Button className="text-orange capitalize">
                      <input
                        type="file"
                        //multiple
                        // accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImageUpload}
                        id="upload-image-2"
                      />
                      <label htmlFor="upload-image-2" style={{ cursor: 'pointer' }}>Browse</label>  
                    </Button>
                  </span>
                </Typography>
                <Typography variant="h4" className="fs-14 fw-500 mt-10">
                  Support JPG and PNG
                </Typography>
              </Box>
            } */}
            {/* {uploadedImage ? (
                                <Box
                                    sx={{
                                        position: "relative",
                                        height: "150px",
                                        width: "150px",
                                        margin: "20px auto",
                                        background: `url(${uploadedImage}) center/cover no-repeat`,
                                    }}
                                    className="text-center bg-white mx-auto MuiBox-root css-1c1x2dp"
                                >
                                    <Button
                                        className="text-orange capitalize"
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            opacity: 0,
                                            transition: "opacity 0.3s ease",
                                            "&:hover": {
                                                opacity: 2,
                                            },
                                        }}
                                    >
                                        <input
                                            type="file"
                                            style={{ display: "none" }}
                                            onChange={handleImageUpload}
                                            id="upload-image-2"
                                        />
                                        <label htmlFor="upload-image-2" style={{ cursor: "pointer", color: "#fff" }}>
                                            Change
                                        </label>
                                    </Button>
                                </Box>
                            ) : (
                                <Box
                                    className="text-center bg-white mx-auto"
                                    sx={{ padding: "44px 10px", maxWidth: "328px" }}
                                >
                                    <img src={gallary} alt="gallery icon"/>
                                    <Typography variant="h4" className="fs-14 fw-500 mt-20">
                                        Drop your Image here or{" "}
                                        <span>
                                            <Button className="text-orange capitalize">
                                                <input
                                                    type="file"
                                                    style={{ display: "none" }}
                                                    onChange={handleImageUpload}
                                                    id="upload-image-2"
                                                />
                                                <label htmlFor="upload-image-2" style={{ cursor: "pointer" }}>Browse</label>
                                            </Button>
                                        </span>
                                    </Typography>
                                    <Typography variant="h4" className="fs-14 fw-500 mt-10">
                                        Support JPG and PNG
                                    </Typography>
                                </Box>
                            )} */}
                            {/* {uploadedImage ? (
                <Box
                  sx={{
                    position: "relative",
                    height: "150px",
                    width: "150px",
                    margin: "20px auto",
                    // background: `url(${logo}) center/cover no-repeat`,
                  }}
                  className="text-center bg-white mx-auto MuiBox-root css-1c1x2dp"
                >
                  <Button
                    className="text-orange capitalize"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 2,
                      },
                    }}
                  >
                    <input
                      type="file"
                      // accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageUpload}
                      id="upload-image-3"
                    />
                    <label htmlFor="upload-image-3" style={{ cursor: "pointer", color: "#fff" }}>
                      Change
                    </label>
                  </Button>
                </Box>
              ) : (
                <Box
                  className="text-center bg-white mx-auto"
                  sx={{ padding: "44px 10px", maxWidth: "328px" }}
                >
                  <img src={gallary} />
                  <Typography variant="h4" className="fs-14 fw-500 mt-20">
                    Drop your Image here or{" "}
                    <span>
                      <Button className="text-orange capitalize">
                        <input
                          type="file"
                          //multiple
                          // accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleLogoUpload}
                          id="upload-image-3"
                        />
                        <label htmlFor="upload-image-3" style={{ cursor: "pointer" }}>Browse</label>
                      </Button>
                    </span>
                  </Typography>
                  <Typography variant="h4" className="fs-14 fw-500 mt-10">
                    Support JPG and PNG
                  </Typography>
                </Box>
              )} */}

              {uploadedImage.length > 0 ? (
  <Box
    sx={{
      padding: "44px 10px",
      maxWidth: "328px",
      background: "#ffffff",
      border:"1.7px dashed #B1550E",
    }}
  >
    <Typography variant="h4" className="fs-14 fw-500 mt-10">
      Selected Images:
    </Typography>
    <ul style={{ listStyle: "none", padding: "0" }}>
      {uploadedImage.map((imageName, index) => (
        <li key={index}>{imageName}</li>
      ))}
    </ul>
    <Button className="text-orange capitalize">
      <input
        type="file"
        style={{ display: "none" }}
        onChange={handleImageUpload}
        id="upload-image-2"
      />
      <label htmlFor="upload-image-2" style={{ cursor: 'pointer' }}>Browse</label>
    </Button>
  </Box>
) : (
  <Box
    className="text-center bg-white mx-auto"
    sx={{ padding: "44px 10px", maxWidth: "328px" }}
  >
    <img src={gallary} alt="gallery icon" />
    <Typography variant="h4" className="fs-14 fw-500 mt-20">
      Drop your Image here or{" "}
      <span>
        <Button className="text-orange capitalize">
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleImageUpload}
            id="upload-image-2"
          />
          <label htmlFor="upload-image-2" style={{ cursor: "pointer" }}>Browse</label>
        </Button>
      </span>
    </Typography>
    <Typography variant="h4" className="fs-14 fw-500 mt-10">
      Support JPG and PNG
    </Typography>
  </Box>
)}

             
              <Box
                className="text-center bg-white mt-30 mx-auto"
                sx={{ padding: "44px 10px", maxWidth: "328px" }}
              >
                {/* <img src={gallary} />
                <Typography variant="h4" className="fs-14 fw-500 mt-20">
                  Drop your Image here or{" "}
                  <span>
                    {" "}
                    <Button className="text-orange capitalize">Browse</Button>
                  </span>
                </Typography>
                <Typography variant="h4" className="fs-14 fw-500 mt-10">
                  Support JPG and PNG
                </Typography> */}
                {logo ? (
                <Box
                  sx={{
                    position: "relative",
                    height: "150px",
                    width: "150px",
                    margin: "20px auto",
                    background: `url(${logo}) center/cover no-repeat`,
                  }}
                  className="text-center bg-white mx-auto MuiBox-root css-1c1x2dp"
                >
                  <Button
                    className="text-orange capitalize"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 2,
                      },
                    }}
                  >
                    <input
                      type="file"
                      // accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleLogoUpload}
                      id="upload-image-3"
                    />
                    <label htmlFor="upload-image-3" style={{ cursor: "pointer", color: "#fff" }}>
                      Change
                    </label>
                  </Button>
                </Box>
              ) : (
                <Box
                  className="text-center bg-white mx-auto"
                  sx={{ padding: "44px 10px", maxWidth: "328px" }}
                >
                  <img src={gallary} />
                  <Typography variant="h4" className="fs-14 fw-500 mt-20">
                    Drop your Image here or{" "}
                    <span>
                      <Button className="text-orange capitalize">
                        <input
                          type="file"
                          //multiple
                          // accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleLogoUpload}
                          id="upload-image-3"
                        />
                        <label htmlFor="upload-image-3" style={{ cursor: "pointer" }}>Browse</label>
                      </Button>
                    </span>
                  </Typography>
                  <Typography variant="h4" className="fs-14 fw-500 mt-10">
                    Support JPG and PNG
                  </Typography>
                </Box>
              )}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="px-0 py-2"
          >
            <Box className="flex-wrap justify-content-end gap-10">
              <Button
                className="secondary-btn capitalize"
                sx={{ width: "144px", fontSize: "14px !important" }}
              >
                Skip
              </Button>
                {/* <Link to="/job/socialmediapopup"> */}
                    <Button
                    className="primary-btn capitalize"
                    sx={{ width: "144px", fontSize: "14px !important" }}
                    onClick={handleOpenPopup}
                    >
                    Continue
                    </Button>
                    <Socialmediapopup open={isPopupOpen} onClose={handleClosePopup} uploadedImage={uploadedImageUrl} selectedImages={selectedImages} logo={logo}/>
                {/* </Link> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Uploadsocialmedia;
