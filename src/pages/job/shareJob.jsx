import {Box,Button,Grid,List,ListItem, Menu,Tooltip,Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import { useDispatch,useSelector } from "react-redux";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import JobTitle from "../../assets/img/svg/JobTitle.svg";
import Neuromarketing from "../../assets/img/svg/Neuromarketing.svg";
import ElementsofValue from "../../assets/img/svg/ElementsofValue.svg";
import ToneofVoice from "../../assets/img/svg/ToneofVoice.svg";
import Footer from "../../components/footer";
import { getVacancyTextDataForShare } from "../../redux/action/chatbotAction";
const ShareJob = () => {
  const { vacancyText } = useSelector((state) => state?.jobDescriptionFileUploadReducer);
  const dispatch=useDispatch();
  const {shareVacancyText}=useSelector((state)=>state?.jobDescriptionFileUploadReducer); 
  const vacancyTextData = vacancyText[0]?.vacancyText
    ? vacancyText[0]?.vacancyText
    : vacancyText[0];
  const [aboutTheFunction, setAboutTheFunction] = useState({});
  const [criteria, setCriteria] = useState({});
  const [employmentConditions, setEmploymentConditions] = useState({});
  const [trendingTitles, setTrendingTitles] = useState([]);
  const [trendingTitlesTooltipValue, setTrendingTitlesTooltipValue] = useState(
    {}
  );
  const [elementOfValues, setElementOfValues] = useState([]);
  const [elementOfTooltipValues, setElementOfTooltipValues] = useState({});
  const [neuromarketingValues, setNeuroMarketingValues] = useState([]);
  const [neuromarketingTooltipValues, setNeuromarketingTooltipValues] =
    useState([]);

  useEffect(() => {
    if (vacancyTextData) {
      setAboutTheFunction(vacancyTextData?.About_The_Function);
      setCriteria(vacancyTextData?.Criteria);
      setEmploymentConditions(vacancyTextData?.Employment_Condition);
      const Keys = Object.keys(vacancyTextData?.Trending_Titles);
      setTrendingTitles(Keys.join(", "));
      // Initializing an array to store the tooltip values
      const trendingTitlesTooltipValue = [];

      // Iterating over the keys to extract and append values
      Keys.forEach((ele) => {
        // Access the value associated with the current key and store it in an array
        trendingTitlesTooltipValue.push(vacancyTextData?.Trending_Titles[ele]);
      });
      setTrendingTitlesTooltipValue(trendingTitlesTooltipValue.join("\n"));

      const elements = vacancyTextData?.Elements_of_values || [];
      const keysArray = [];
      const valuesArray = [];

      elements.forEach((item) => {
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

      neuromarketing.forEach((item) => {
        Object.entries(item).forEach(([key, value]) => {
          neuromarketingArray.push(key);
          neuromarketingValuesArray.push(value);
        });
      });
      setNeuroMarketingValues(neuromarketingArray.join(", "));
      setNeuromarketingTooltipValues(neuromarketingValuesArray.join("\n"));
    }
  }, [vacancyTextData]);

  //get vacancyTextData from API
  useEffect(()=>{
   dispatch(getVacancyTextDataForShare(2));
  },[])
  return (
    <>
      <Header />
      <Box className="py-2 mt-10">
        <Grid container spacing={2} className="px-5">
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className=" py-2">
            <Typography variant="h2" className="fs-32 fw-600 px-4">
              Job Vacancy Text
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={9} className="">
            <Box className="vacancy-content">
              <Typography
                className="fs-18 text-color-c1 fw-700 mt-20"
                variant="h3"
              >
                Job Title
              </Typography>
              <Typography
                className="fs-16 text-gray-c1 fw-500 mt-10 no-border job"
                variant="h3"
              >
                {vacancyTextData?.["Job_Title"]}{" "}
              </Typography>
              <Typography
                className="fs-18 text-color-c1 fw-700 mt-20"
                variant="h3"
              >
                Story Telling
              </Typography>
              <Typography
                className="fs-16 text-gray-c1 fw-500 mt-10 no-border job"
                variant="h3"
              >
                {vacancyTextData?.Storytelling}
              </Typography>
              {Object.keys(aboutTheFunction).map((maxKey) => (
                <div key={maxKey}>
                  <Typography
                    className="fs-18 text-color-c1 fw-700 mt-20"
                    variant="h3"
                  >
                    {maxKey}
                  </Typography>
                  <List>
                    {aboutTheFunction[maxKey].map((item, index) => (
                      <ListItem
                        key={index}
                        className="fs-16 text-gray-c1 fw-500 mt-10 no-border job"
                      >
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </div>
              ))}

              {Object.keys(criteria).map((criteriaKey) => (
                <div key={criteriaKey}>
                  <Typography
                    className="fs-18 text-color-c1 fw-700 mt-20"
                    variant="h3"
                  >
                    {criteriaKey}
                  </Typography>
                  <List>
                    {criteria[criteriaKey]?.map((item, index) => (
                      <ListItem
                        key={index}
                        className="fs-16 text-gray-c1 fw-500 mt-10 no-border job"
                      >
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </div>
              ))}

              {Object.keys(employmentConditions).map((employmentKey) => (
                <div key={employmentKey}>
                  <Typography
                    className="fs-18 text-color-c1 fw-700 mt-20"
                    variant="h3"
                  >
                    {employmentKey}
                  </Typography>
                  <List>
                    {employmentConditions[employmentKey]?.map((item, index) => (
                      <ListItem
                        key={index}
                        className="fs-16 text-gray-c1 fw-500 mt-10 no-border job"
                      >
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </div>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
            <Box
              sx={{
                background: "#FFF3E9",
                height: "100%",
                padding: "28px 24px ",
              }}
            >
              <Box>
                <Box className="d-flex justify-content-between">
                  <Typography
                    variant="h4"
                    className="fs-18 text-color-c1 fw-600 text-start"
                  >
                    <img width={24} height={24} src={JobTitle} />
                    &nbsp; Job Title
                  </Typography>
                  <Tooltip
                    className="text-orange"
                    title={trendingTitlesTooltipValue}
                  >
                    <InfoOutlinedIcon />
                  </Tooltip>
                </Box>
                <Box
                  className="bg-white mt-10 mb-10"
                  sx={{ padding: "12px 14px" }}
                >
                  <Typography className="fs-16 fw-500 color-primary">
                    {trendingTitles}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box className="d-flex justify-content-between">
                  <Typography
                    variant="h4"
                    className="fs-18 text-color-c1 fw-600 text-start"
                  >
                    <img width={24} height={24} src={ElementsofValue} />
                    &nbsp; Elements of Value
                  </Typography>
                  <Tooltip
                    className="text-orange"
                    title={elementOfTooltipValues}
                  >
                    <InfoOutlinedIcon />
                  </Tooltip>
                </Box>
                <Box
                  className="bg-white mt-10 mb-10"
                  sx={{ padding: "12px 14px" }}
                >
                  <Typography className="fs-16 fw-500 color-primary">
                    {elementOfValues}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box className="d-flex justify-content-between">
                  <Typography
                    variant="h4"
                    className="fs-18 text-color-c1 fw-600 text-start"
                  >
                    <img width={24} height={24} src={Neuromarketing} />
                    &nbsp; Neuromarketing{" "}
                  </Typography>
                  <Tooltip
                    className="text-orange"
                    title={neuromarketingTooltipValues}
                  >
                    <InfoOutlinedIcon />
                  </Tooltip>
                </Box>
                <Box
                  className="bg-white mt-10 mb-10"
                  sx={{ padding: "12px 14px" }}
                >
                  <Typography className="fs-16 fw-500 color-primary">
                    {neuromarketingValues}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box className="d-flex justify-content-between">
                  <Typography
                    variant="h4"
                    className="fs-18 text-color-c1 fw-600 text-start"
                  >
                    <img width={24} height={24} src={ToneofVoice} />
                    &nbsp; Tone of Voice{" "}
                  </Typography>
                  <Tooltip
                    className="text-orange"
                    title={vacancyTextData?.Tone_of_voice}
                  >
                    <InfoOutlinedIcon />
                  </Tooltip>
                </Box>
                <Box
                  className="bg-white mt-10 mb-10"
                  sx={{ padding: "12px 14px" }}
                >
                  <Typography className="fs-16 fw-500 color-primary">
                    {vacancyTextData?.Tone_of_voice}{" "}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default ShareJob;
