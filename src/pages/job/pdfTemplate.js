import React from 'react';
import { PDFViewer, Document, Page } from '@react-pdf/renderer';
import Html from 'react-pdf-html';
import image from "../../assets/img/farmer.png"
import leftTop from '../../assets/pdf/lefttop.png';
import rightTop from '../../assets/pdf/righttop.png';
import logo from '../../assets/pdf/logo.png';
import template from '../../assets/pdf/template.png';
import arrow from '../../assets/pdf/arrow.png'

const PdfTemplate = () => {
  const htmlContent = `
   <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body{
        margin: 0px;
    }
    .header{
        background-image: url('${leftTop}'), url('${rightTop}');
        background-position: left top, right top;
        background-repeat: no-repeat, no-repeat;
        background-size: auto 100% , auto 100% ;
        /* height: 370px; */
        padding: 61px 0px 58px 0;
    }
    .header img{
        width: 126px;
        height: 48px;
    }
    .header h1{
        /* color: #000000; */
        font-size: 38px;
        font-weight: 700;
        text-align: center;
        margin: 30px 0px 0px 0px;
    }
    section h1{
        /* background: rgb(185, 55, 249 , 7%); */
        /* color: #05164D; */
        font-size: 32px;
        font-weight: 700;
        text-align: left;
        padding: 37px 50px;
        margin: 0px;
    }
    .section-content{
        padding: 0px 60px;
    }
    .arrow-content{
        display: flex;
        margin-top: 44px;
        margin-bottom: 38px;
    }
    .arrow-content img.arrow {
        height: 12px;
        width: 12px;
        padding: 3px 12px 3px 0px;
    }
    .arrow-content h5{
       
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        margin: 0px;
    }
</style>
<body>
    <div class="header">
        <div style="text-align: center;">
            <img src="${logo}"/>
            <h1 style="color: #000000;">Job Vacancy Text </h1>
        </div>
    </div>
    <section>
        <h1 style="background: rgb(185, 55, 249 , 7%);color: #05164D; ">
            Introduction 
        </h1>
        <div class="section-content">
            <div class="arrow-content">
                <img class="arrow" src="${rightTop}" />
                <div>
                    <h5 style="color: #7D7A7A;">Have you worked with us before? Then most of what is in this document is already familiar to you. You can then skip ahead to 3.4 Proposed recruitment text. We would like to receive a response to this as soon as possible so that the recruitment campaign can begin. Thanks in advance!  </h5>
                    <h5 style="color: #7D7A7A;">The recruitment profile is an important element of the recruitment campaign, which takes place mainly online. After all:</h5>
                </div>
            </div>
            <div class="arrow-content">
                <img class="arrow" src="arrow.png" />
                <div>
                    <h5 style="color: #7D7A7A;">Have you worked with us before? Then most of what is in this document is already familiar to you. You can then skip ahead to 3.4 Proposed recruitment text. We would like to receive a response to this as soon as possible so that the recruitment campaign can begin. Thanks in advance!  </h5>
                    <h5 style="color: #7D7A7A;">The recruitment profile is an important element of the recruitment campaign, which takes place mainly online. After all:</h5>
                </div>
            </div>
        </div>
    </section>
    <section>
        <h1 style="background: rgb(185, 55, 249 , 7%);color: #05164D; ">
            Social media template 
        </h1>
        <div class="section-content">
            <div class="arrow-content">
                <img style="width: 440px;" src="${template}" />
            </div>
        </div>
    </section>
</body>
</html>
  `;

//  <style>
//     body{
//         margin: 0px;
//     }
//     .header{
//         background-image: url('${leftTop}'), url('${rightTop};
//         background-position: left top, right top;
//         background-repeat: no-repeat, no-repeat;
//         background-size: auto 100% , auto 100% ;
//         /* height: 370px; */
//         padding: 61px 0px 58px 0;
//     }
//     .header img{
//         width: 126px;
//         height: 48px;
//     }
//     .header h1{
//         /* color: #000000; */
//         font-size: 38px;
//         font-weight: 700;
//         text-align: center;
//         margin: 30px 0px 0px 0px;
//     }
//     section h1{
//         /* background: rgb(185, 55, 249 , 7%); */
//         /* color: #05164D; */
//         font-size: 32px;
//         font-weight: 700;
//         text-align: left;
//         padding: 37px 50px;
//         margin: 0px;
//     }
//     .section-content{
//         padding: 0px 60px;
//     }
//     .arrow-content{
//         display: flex;
//         margin-top: 44px;
//         margin-bottom: 38px;
//     }
//     .arrow-content img.arrow {
//         height: 12px;
//         width: 12px;
//         padding: 3px 12px 3px 0px;
//     }
//     .arrow-content h5{
       
//         font-size: 16px;
//         font-weight: 500;
//         text-align: left;
//         margin: 0px;
//     }
// </style>
//    <div class="header">
//         <div style="text-align: center;">
//             <img src='${logo}'/>
//             <h1 style="color: #000000;">Job Vacancy Text </h1>
//         </div>
//     </div>
//     <section>
//         <h1 style="background: rgb(185, 55, 249 , 7%);color: #05164D; ">
//             Introduction 
//         </h1>
//         <div class="section-content">
//             <div class="arrow-content">
//                 <img class="arrow" src="${arrow}" />
//                 <div>
//                     <h5 style="color: #7D7A7A;">Have you worked with us before? Then most of what is in this document is already familiar to you. You can then skip ahead to 3.4 Proposed recruitment text. We would like to receive a response to this as soon as possible so that the recruitment campaign can begin. Thanks in advance!  </h5>
//                     <h5 style="color: #7D7A7A;">The recruitment profile is an important element of the recruitment campaign, which takes place mainly online. After all:</h5>
//                 </div>
//             </div>
//             <div class="arrow-content">
//                 <img class="arrow" src="arrow.png" />
//                 <div>
//                     <h5 style="color: #7D7A7A;">Have you worked with us before? Then most of what is in this document is already familiar to you. You can then skip ahead to 3.4 Proposed recruitment text. We would like to receive a response to this as soon as possible so that the recruitment campaign can begin. Thanks in advance!  </h5>
//                     <h5 style="color: #7D7A7A;">The recruitment profile is an important element of the recruitment campaign, which takes place mainly online. After all:</h5>
//                 </div>
//             </div>
//         </div>
//     </section>
//     <section>
//         <h1 style="background: rgb(185, 55, 249 , 7%);color: #05164D; ">
//             Social media template 
//         </h1>
//         <div class="section-content">
//             <div class="arrow-content">
//                 <img style="width: 440px;" src="${template}" />
//             </div>
//         </div>
//     </section>
// `;
 return (
    <div>
      <h2>PDF Viewer</h2>
      <PDFViewer width="100%" height="600">
        <Document>
          <Page>
            <Html>{htmlContent}</Html>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default PdfTemplate;
