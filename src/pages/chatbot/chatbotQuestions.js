import React, { useState } from "react";
import Chatbot from "./chatbot";
import {
  chatbotData,
  jobDescriptionFileUpload,
} from "../../redux/action/chatbotAction";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import Header from "../../components/header";
import { useNavigate } from "react-router";
import Loader from "../../components/Loader";

const questionsList = [
  {
    id: 1,
    Q1: "Welcome back! Let's start creating a new job vacancy",
    A1: "",
    inputType: "text",
    key: "Greet",
  },
  {
    id: 2,
    Q2: `Could you please provide your company website URL? This will help us extract the tone
         of voice from your company's online presence and will also help us to get information regarding about us section. Additionally, after providing the URL, you'll
         be given the option to make the job vacancy anonymous`,
    A2: "",
    inputType: "text",
    key: "website_url",
  },
  {
    id: 3,
    Q3: "would you like this job vacancy to be posted anonymously?",
    A3: "",
    inputType: "select",
    options: [
      "Yes, I prefer to keep the job vacancy anonymous",
      "No, it's okay to disclose the company's identity.",
    ],
    key: "job_vacancy",
  },
  {
    id: 4,
    Q4: "Do you have a job description available?",
    A4: "",
    inputType: "select",
    options: [
      "Yes, Please upload or paste the job description",
      "No, Do not worry, we are here to help you craft one",
    ],
    key: "job_description",
  },
  {
    id: 5,
    Q5: "Please upload the job description file.",
    A5: "",
    inputType: "file",
    key: "upload_file",
  },
  {
    id: 6,
    Q6: "What will be the job title?",
    A6: "",
    inputType: "text",
    key: "Job_Title",
  },
  {
    id: 7,
    Q7: "Could you provide a brief overview of the role's purpose? Example: Answer to this question will help us to generate detailed description of the role overview which is required in one of the sub-sections within the vacancy text",
    A7: "",
    inputType: "text",
    key: "Role_Overview",
  },
  {
    id: 8,
    Q8: "What is the job level required for this vacancy?",
    A8: "",
    inputType: "select",
    options: [
      "Internship",
      "Starting professional",
      "Mid-career professional",
      "Senior professional",
      "C-level (CEO, CFO, etc.)",
      "Custom...",
    ],
    key: "Job_level",
  },
  {
    id: 9,
    Q9: "What tasks and duties will the employee need to perform regularly?",
    A9: "",
    inputType: "text",
    // options: [
    //   "Managing projects",
    //   "Client interaction",
    //   "Data analysis",
    //   "Team collaboration",
    //   "Custom...",
    // ],
    key: "Tasks_and_Duties",
  },
  {
    id: 10,
    Q10: "What relevant experience are you seeking?",
    A10: "",
    inputType: "text",
    // options: [
    //   "Project management",
    //   "Sales experience",
    //   "Technical expertise",
    //   "Customer service",
    //   "Custom...",
    // ],
    key: "Relevant_Experience",
  },
  {
    id: 11,
    Q11: "What is the total years of experience required for this role?",
    A11: "",
    inputType: "select",
    options: ["0 to 5 years", "5 to 10 years", "More than 10 years", "None"],
    key: "Years_of_Experience_Required",
  },
  {
    id: 12,
    Q12: "What is the minimum education background required, and which field?",
    A12: "",
    inputType: "select",
    options: [
      "High school diploma",
      "Associate degree",
      "Bachelor's degree",
      "Master's degree",
      "PhD",
      "Professional education",
    ],
    key: "Min_education_background",
  },
  {
    id: 13,
    Q13: "What are the fields of study?",
    A13: "",
    inputType: "select",
    options: ["Custom..."],
    key: "Options_for_field_of_study",
  },
  {
    id: 14,
    Q14: "What specific skills are required for the job?",
    A14: "",
    inputType: "select",
    options: ["Custom..."],
    key: "Skills",
  },
  {
    id: 15,
    Q15: "What specific certifications are required for the job?",
    A15: "",
    inputType: "select",
    options: ["Custom..."],
    key: "Skills_and_Certifications",
  },
  {
    id: 16,
    Q16: "What are the top 3 competencies for this position?",
    A16: "",
    inputType: "multi-select",
    maxSelects: 3,
    options: [
      "Leadership",
      "Communication",
      "Problem-solving",
      "Teamwork",
      "Innovation",
      "Custom...",
    ],
    key: "Top_Competencies",
  },
  {
    id: 17,
    Q17: `What does first competency look like within your company?`,
    A17: "",
    inputType: "text",
    key: "Competency_Details",
  },
  {
    id: 18,
    Q18: "What does Second Compentency look like within your company?",
    A18: "",
    inputType: "text",
    key: "Competency_Details",
  },
  {
    id: 19,
    Q19: "What does Third Compentency look like within your company?",
    A19: "",
    inputType: "text",
    key: "Competency_Details",
  },
  // {
  //   id: 20,
  //   Q20: "Who will the employee report to, and will they work independently or as part of a team?",
  //   A20: "",
  //   inputType: "select",
  //   options: [
  //     "Report to Manager",
  //     "Report to Team Lead",
  //     "Work independently",
  //     "Work as part of a team",
  //     "Custom...",
  //   ],
  //   key: "Reporting_Structure",
  // },
  {
    id: 20,
    Q20: "What are the main goals for this position?",
    A20: "",
    inputType: "select",
    options: ["Custom..."],
    key: "Goals_Evaluations",
  },
  {
    id: 21,
    Q21: "Can you describe the company culture and any specific values important for this role?",
    A21: "",
    inputType: "text",
    key: "company_highlights",
  },
  {
    id: 22,
    Q22: "Are there opportunities for career advancement or professional development?",
    A22: "",
    inputType: "select",
    options: [
      "Promotion opportunities",
      "Training programs",
      "Mentorship programs",
      "Custom...",
    ],
    key: "Key_Selling_Point",
  },
  {
    id: 23,
    Q23: "Will this job be office-based, remote, or a mix of both??",
    A23: "",
    inputType: "select",
    options: ["Office-based", "Remote", "Hybrid"],
    key: "Work_environment",
  },
  {
    id: 24,
    Q24: "Where is the job offering based?",
    A24: "",
    inputType: "text",
    key: "Job_Location",
  },
  {
    id: 25,
    Q25: "Are you looking for permanent, temporary, or intern/freelance employment?",
    A25: "",
    inputType: "select",
    options: ["Permanent", "Temporary", "Intern", "Freelance"],
    key: "Employment_Type",
  },
  {
    id: 26,
    Q26: "Please select the currency.",
    A26: "",
    inputType: "select",
    options: ["EUR", "USD", "GBP", "Custom..."],
    key: "currency",
  },
  {
    id: 27,
    Q27: "Please select the salary type.",
    A27: "",
    inputType: "select",
    options: ["Monthly", "Yearly"],
    key: "salary_type",
  },

  {
    id: 28,
    Q28: `please select the salary range.`,
    A28: "",
    inputType: "select",
    // options: salaryTypeSelectedAnswer && salaryTypeSelectedAnswer==="Monthly"?["0-2,500", "2,500-3,750","3,750-5,000","5,000-7,000","7,000-10,000","10,000+","Custom... (please specify)"]:["0-30,000","30,000-45,000","45,000-60,000","60,000-84,000","84,000-120,000","120,000+","Custom... (please specify)"],
    options: [
      "0-2,500",
      "2,500-3,750",
      "3,750-5,000",
      "5,000-7,000",
      "7,000-10,000",
      "10,000+",
      "Don't Want To Mention",
      "Custom...",
    ],
    key: "salary_range",
  },
  {
    id: 29,
    Q29: `please select the salary range.`,
    A29: "",
    inputType: "select",
    // options: salaryTypeSelectedAnswer && salaryTypeSelectedAnswer==="Monthly"?["0-2,500", "2,500-3,750","3,750-5,000","5,000-7,000","7,000-10,000","10,000+","Custom... (please specify)"]:["0-30,000","30,000-45,000","45,000-60,000","60,000-84,000","84,000-120,000","120,000+","Custom... (please specify)"],
    options: [
      "0-30,000",
      "30,000-45,000",
      "45,000-60,000",
      "60,000-84,000",
      "84,000-120,000",
      "120,000+",
      "Don't Want To Mention",
      "Custom...",
    ],
    key: "salary_range",
  },
  {
    id: 30,
    Q30: "Please specify any additional benefits offered.",
    A30: "",
    inputType: "text",
    key: "additional_benefits",
  },
  {
    id: 31,
    Q31: "What are the expected hours of work for this position?",
    A31: "",
    inputType: "text",
    key: "working_hours",
  },
  {
    id: 32,
    Q32: "When is the application deadline?",
    A32: "",
    inputType: "text",
    key: "app_deadline",
  },
  {
    id: 33,
    Q33: "How should candidates apply?",
    A33: "",
    inputType: "text",
    key: "application_platform",
  },
  {
    id: 34,
    Q34: "Do you want to make more special, answer few more questions",
    A34: "",
    options: ["Yes", "No"],
    inputType: "select",
    key: "special_questions",
  },
  {
    id: 35,
    Q35: "What makes this job opportunity unique or valuable to potential candidates?",
    A35: "",
    inputType: "select",
    options: [
      "Innovative work environment",
      "Career growth opportunities",
      "Competitive salary",
      "Great team culture",
      "Custom...",
    ],
    key: "value_proposition",
  },
  {
    id: 36,
    Q36: "What feelings do you want candidates to associate with this job opportunity?",
    A36: "",
    inputType: "select",
    options: ["Excitement", "Fulfillment", "Challenge", "Growth", "Stability"],
    key: "emotional_connection",
  },
  {
    id: 37,
    Q37: "What specific benefits or perks would appeal most to potential candidates?",
    A37: "",
    inputType: "select",
    options: [
      "Flexible working hours",
      "Health benefits",
      "Paid time off",
      "Professional development",
    ],
    key: "key_selling_points",
  },
  {
    id: 38,
    Q38: "How can we make the job vacancy text more engaging and memorable?",
    A38: "",
    inputType: "select",
    options: [
      "Pose a question for candidates to ponder",
      "Share a brief success story from a current employee",
      "Highlight an interesting project or initiative the successful candidate will be involved in",
    ],
    key: "engagement_strategy",
  },
  {
    id: 39,
    Q39: "What tone or voice would best reflect the company culture and appeal to potential candidates?",
    A39: "",
    inputType: "select",
    options: [
      "Achievement",
      "Collaboration",
      "Opportunity",
      "Impact",
      "Growth",
    ],
    key: "Tone_of_Voice",
  },
  {
    id: 40,
    Q40: "Which words or phrases do you think will resonate most with potential candidates?",
    A40: "",
    inputType: "select",
    options: [
      "Achievement",
      "Collaboration",
      "Opportunity",
      "Impact",
      "Growth",
    ],
    key: "language_and_phrasing",
  },
  {
    id: 41,
    Q41: "What makes our company great?",
    A41: "",
    inputType: "select",
    options: [
      "Our commitment to innovation and creativity.",
      "Our inclusive and supportive company culture.",
      "Our dedication to continuous learning and growth.",
      "Our focus on making a positive impact on society and the environment.",
      "Custom...",
    ],
    key: "what_makes_the_company_great",
  },
  {
    id: 42,
    Q42: "What current trends or challenges do you see impacting this job opportunity? This could include industry shifts, societal changes, or global events. Example of Answer: With the rise of remote work and increasing focus on sustainability, this job opportunity offers a blendof flexibility and purpose-driven work aligned with evolving industry and societal needs. How can we tailor the job vacancy text to reflect these trends and emphasize the unique value proposition?",
    A42: "",
    inputType: "text",
    key: "Context",
  },
  {
    id: 43,
    Q43: "We have reached to the end of the questions",
    A43: "",
    inputType: "text",
    key: "end",
  },
];
const ChatbotQuestions = () => {
  const [loading, setLoading] = useState(false);
  const { chatbotDataLoading } = useSelector(
    (state) => state.jobDescriptionFileUploadReducer
  );
  const navigate = useNavigate();
  console.log("chatbotDataLoading12", chatbotDataLoading);
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState(questionsList);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(questions[0]);
  const [messages, setMessages] = useState([
    { id: 1, text: questions[0]["Q1"], sender: "bot" },
  ]);
  const [predefinedAnswers, setPredefinedAnswers] = useState(
    questions[0]["A1"]
  );
  const [sortedPdfAnswers, setSortedPdfAnswers] = useState({});
  const [salaryTypeSelectedAnswer, setSalaryTypeSelectedAnswer] = useState("");
  const [updatedAnswers, setUpdatedAnswers] = useState([]);
  const [isPdfUploading, setPdfUploading] = useState(false);
  const handleOnSendMessage = async (file, msg) => {
    // Simulate an API call to get bot response
    const tempQuestions = [...questions];
    console.log("tempQuestions", tempQuestions);
    tempQuestions[currentQuestionIndex][
      "A" + questions[currentQuestionIndex].id
    ] = msg;
    setQuestions(tempQuestions);
    if (currentQuestionIndex === 3) {
      if (msg.includes("Yes")) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: prevMessages.length + 1,
            text: questions[4]["Q5"],
            sender: "bot",
          },
        ]);
        setCurrentQuestionIndex(4);
        setQuestion(questions[4]);
        const tempAnswers = questions[4]["A" + questions[4].id];
        if (tempAnswers.length > 0) {
          setPredefinedAnswers(tempAnswers);
        } else {
          setPredefinedAnswers("");
        }
        return;
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: prevMessages.length + 1,
            text: questions[5]["Q6"],
            sender: "bot",
          },
        ]);
        setCurrentQuestionIndex(5);
        setQuestion(questions[5]);
        const tempAnswers = questions[5]["A" + questions[5].id];
        console.log("tempAnswers1234", tempAnswers);
        if (tempAnswers.length > 0) {
          setPredefinedAnswers(tempAnswers);
        } else {
          setPredefinedAnswers("");
        }
        return;
      }
    } else if (currentQuestionIndex === 33) {
      if (msg === "Yes") {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: prevMessages.length + 1,
            text: questions[34]["Q35"],
            sender: "bot",
          },
        ]);
        setCurrentQuestionIndex(34);
        setQuestion(questions[34]);
        const tempAnswers = questions[34]["A" + questions[34].id];
        console.log("tempAnswers80", tempAnswers);
        if (tempAnswers.length > 0) {
          setPredefinedAnswers(tempAnswers);
        } else {
          setPredefinedAnswers("");
        }
        return;
      } else if (msg === "No") {
        handleQuestionPayload();
        return;
      }
    } else if (currentQuestionIndex === 26) {
      if (msg === "Monthly") {
        console.log("Monthly");
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: prevMessages.length + 1,
            text: questions[27]["Q28"],
            sender: "bot",
          },
        ]);
        setCurrentQuestionIndex(27);
        setQuestion(questions[27]);
        const tempAnswers = questions[27]["A" + questions[27].id];
        console.log("tempAnswers80", tempAnswers);
        if (tempAnswers.length > 0) {
          setPredefinedAnswers(tempAnswers);
        } else {
          setPredefinedAnswers("");
        }
        return;
      } else if (msg === "Yearly") {
        console.log("Yearly");
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: prevMessages?.length + 1,
            text: questions[28]["Q29"],
            sender: "bot",
          },
        ]);
        // else
        setCurrentQuestionIndex(28);
        setQuestion(questions[28]);
        const tempAnswers = questions[28]["A" + questions[28].id];
        console.log("tempAnswers1234", tempAnswers);
        if (tempAnswers?.length > 0) {
          setPredefinedAnswers(tempAnswers);
        } else {
          setPredefinedAnswers("");
        }
        return;
      }
    } else if (currentQuestionIndex === 27) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages?.length + 1,
          text: questions[29]["Q30"],
          sender: "bot",
        },
      ]);
      setCurrentQuestionIndex(29);
      setQuestion(questions[29]);
      console.log("tempAnswers79");
      const tempAnswers = questions[29]["A" + questions[29].id];
      console.log("tempAnswers1234", tempAnswers);
      if (tempAnswers?.length > 0) {
        setPredefinedAnswers(tempAnswers);
      } else {
        setPredefinedAnswers("");
      }
      return;
    }

    // else if (currentQuestionIndex === 26) { // Salary Type Question
    //   setSalaryTypeSelectedAnswer(msg); // Update salary type
    // }
    // else if (currentQuestionIndex === 28) { // Before Salary Range Question
    //   const updatedQuestions = [...questions];
    //   const salaryOptions = salaryTypeSelectedAnswer === "Monthly" ?
    //     ["0-2,500", "2,500-3,750", "3,750-5,000", "5,000-7,000", "7,000-10,000", "10,000+", "Custom... (please specify)"] :
    //     ["0-30,000", "30,000-45,000", "45,000-60,000", "60,000-84,000", "84,000-120,000", "120,000+", "Custom... (please specify)"];

    //   updatedQuestions[28].options = salaryOptions; // Update options dynamically
    //   setQuestions(updatedQuestions);
    // }
    else if (file) {
      await uploadFile(file);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages?.length + 1,
          text: questions[currentQuestionIndex + 1][
            "Q" + questions[currentQuestionIndex + 1].id
          ],
          sender: "bot",
        },
      ]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuestion(questions[currentQuestionIndex + 1]);
      const tempAnswers =
        questions[currentQuestionIndex + 1][
          "A" + questions[currentQuestionIndex + 1].id
        ];
      console.log("tempAnswers1234", tempAnswers);
      return;
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages?.length + 1,
          text: questions[currentQuestionIndex + 1][
            "Q" + questions[currentQuestionIndex + 1].id
          ],
          sender: "bot",
        },
      ]);
      if (currentQuestionIndex === 27) {
        if (msg === "Monthly") {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setQuestion(questions[currentQuestionIndex + 1]);
          const tempAnswers =
            questions[currentQuestionIndex + 1][
              "A" + questions[currentQuestionIndex + 1].id
            ];
          if (tempAnswers?.length > 0) {
            setPredefinedAnswers(tempAnswers);
          } else {
            setPredefinedAnswers("");
          }
        } else {
          setCurrentQuestionIndex(currentQuestionIndex + 2);
          setQuestion(questions[currentQuestionIndex + 2]);
          const tempAnswers =
            questions[currentQuestionIndex + 2][
              "A" + questions[currentQuestionIndex + 2].id
            ];
          if (tempAnswers?.length > 0) {
            setPredefinedAnswers(tempAnswers);
          } else {
            setPredefinedAnswers("");
          }
        }
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setQuestion(questions[currentQuestionIndex + 1]);
        const tempAnswers =
          questions[currentQuestionIndex + 1][
            "A" + questions[currentQuestionIndex + 1].id
          ];
        if (tempAnswers?.length > 0) {
          setPredefinedAnswers(tempAnswers);
        } else {
          setPredefinedAnswers("");
        }
      }

      // console.log('tempAnswers12',tempAnswers);

      return;
    }
  };

  console.log("question12", question);
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    console.log("formData", formData);
    setPdfUploading(true);
    const response = await fetch(
      "https://iqhirepdf.dev.vinove.com/get_answers",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      console.log("responseData", responseData);
      // const sortedEntries=Object?.entries(responseData).sort((a, b) => a[0].localeCompare(b[0]));
      const entries = Object.entries(responseData);
      const sortedEntries = entries.sort((a, b) => {
        const keyA = a[0].match(/\d+/);
        const keyB = b[0].match(/\d+/);
        return parseInt(keyA) - parseInt(keyB);
      });
      const sortedResponse = Object.fromEntries(sortedEntries);
      // Update the questions array with sorted response values starting from A6
      let updatedQuestions = questions.map((question, index) => {
        const responseKey = `A${index - 5 + 1}`;
        if (index >= 5 && sortedResponse[responseKey]) {
          const answerKey = `A${index + 1}`;
          return { ...question, [answerKey]: sortedResponse[responseKey] };
        }
        return question;
      });
      setUpdatedAnswers(updatedQuestions);
      console.log("updatedQuestions", updatedQuestions);

      console.log("sortedResponse", sortedResponse);
      setSortedPdfAnswers(sortedResponse);
      setPdfUploading(false);
      return responseData.message;
    } else {
      return "Error uploading file.";
    }
  };
  console.log("sortedPdfAnswers", predefinedAnswers);
  const handleQuestionPayload = () => {
    const payload = {
      Benefits_and_Perks: "",
      Company_Culture_and_Values: "",
      Responsibilities: "",
      Compensation: "",
      Compensation_Currency: "",
      Salary_Range_yearly: "",
      Application_deadline: "",
      unique_value: "",
    };
    console.log("clicked", questions);
    for (const que of questions) {
      console.log("que", que);
      payload[que.key] = que["A" + que.id];
    }
    console.log("payload12", payload);

    dispatch(chatbotData(payload, setLoading));
    navigate("/job/vacancy", { state: { loading } });

    // return payload;
  };
  // const salaryTypeSelected=questions.find(obj=>obj.Q27==="Please select the salary type.");
  // salaryTypeSelectedAnswer=salaryTypeSelected?.A27;
  // console.log('salaryTypeSelected',salaryTypeSelectedAnswer)

  return (
    <>
      {isPdfUploading ? (
        <Loader />
      ) : (
        <>
          <Header></Header>
          <Box>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className="mb-40 mt-40"
              >
                <Typography
                  variant="h2"
                  className="fs-38 fw-600 text-center text-orange"
                >
                  Generate Job Vacancy Text
                </Typography>
                <Typography
                  variant="h2"
                  className="fs-16 fw-400 text-center m-auto"
                  sx={{ maxWidth: "720px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magn{" "}
                  {loading ? <CircularProgress /> : ""}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Chatbot
                  updatedAnswers={updatedAnswers}
                  sortedPdfAnswers={sortedPdfAnswers}
                  handleContinue={handleQuestionPayload}
                  lastQuestion={questions.length - 1 === currentQuestionIndex}
                  preDefinedAnswer={predefinedAnswers}
                  inputType={question.inputType ? question.inputType : "text"}
                  messages={messages}
                  setMessages={setMessages}
                  currentQuestion={question}
                  questions={questions}
                  onSendMessage={handleOnSendMessage}
                  botLoadingMessage="Bot is typing..."
                  currentQuestionIndex={currentQuestionIndex}
                  setCurrentQuestionIndex={setCurrentQuestionIndex}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default ChatbotQuestions;
