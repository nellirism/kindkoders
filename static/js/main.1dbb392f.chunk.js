(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a(299)},137:function(e,t,a){},29:function(e,t,a){},298:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(20),s=a.n(o),r=(a(137),a(21)),l=a(22),c=a(24),m=a(23),d=a(25),p=a(33),h=a(12),u=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleScroll=function(e){window.scrollY>10?a.setState({isSticky:!0}):a.setState({isSticky:!1})},a.handleClickDocument=function(e){a.state.isOpenSidebar;e.target.classList.contains("site-nav-backdrop")&&a.setState({isOpenSidebar:!1})},a.state={isSticky:!1,isOpenSidebar:!1},a.openSidebar=a.openSidebar.bind(Object(p.a)(a)),a.onHandleClickLink=a.onHandleClickLink.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),document.addEventListener("click",this.handleClickDocument)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),document.removeEventListener("click",this.handleClickDocument)}},{key:"openSidebar",value:function(){this.setState({isOpenSidebar:!0})}},{key:"onHandleClickLink",value:function(){this.setState({isOpenSidebar:!1})}},{key:"render",value:function(){var e=this.state,t=e.isSticky,a=e.isOpenSidebar;return n.a.createElement("header",{className:"site-header ".concat(t?"site-header--sticky":""," ")},n.a.createElement("div",{className:"site-header__wrapper"},n.a.createElement("div",{className:"site-header__brand"},n.a.createElement(h.Link,{className:"site-header__link",activeClass:"site-nav__link--active",to:"home",href:"#home",spy:!0,smooth:!0,offset:0,duration:500})),n.a.createElement("div",{className:"site-header__spacer"}),n.a.createElement("button",{type:"button",className:"site-header__btn-mobile",onClick:this.openSidebar},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18.338",height:"12",viewBox:"0 0 18.338 12",className:"site-header__burger-icon ".concat(t?"site-header__burger-icon--dark":"")},n.a.createElement("g",{id:"Group_6148","data-name":"Group 6148",transform:"translate(-288 -20)"},n.a.createElement("rect",{id:"Rectangle_2400","data-name":"Rectangle 2400",width:"18.338",height:"2",rx:"1",transform:"translate(288 20)",fill:"#fff"}),n.a.createElement("rect",{id:"Rectangle_2401","data-name":"Rectangle 2401",width:"14.94",height:"2",rx:"1",transform:"translate(288 25)",fill:"#fff"}),n.a.createElement("rect",{id:"Rectangle_2402","data-name":"Rectangle 2402",width:"18.338",height:"2",rx:"1",transform:"translate(288 30)",fill:"#fff"})))),a&&n.a.createElement(i.Fragment,null," ",n.a.createElement("div",{className:"site-nav-backdrop"})," "),n.a.createElement("div",{className:"site-sidebar ".concat(a?"is-open":"")}),n.a.createElement("ul",{className:"site-nav site-sidebar  ".concat(a?"is-open":"")},n.a.createElement("li",{className:"site-nav__list"},n.a.createElement(h.Link,{onClick:this.onHandleClickLink,className:"site-nav__link",activeClass:"site-nav__link--active",to:"skills",href:"#skills",spy:!0,smooth:!0,offset:-20,duration:500},"My Story")),n.a.createElement("li",{className:"site-nav__list"},n.a.createElement(h.Link,{onClick:this.onHandleClickLink,className:"site-nav__link",activeClass:"site-nav__link--active",to:"skills",href:"#skills",spy:!0,smooth:!0,offset:-20,duration:500},"My Skills")),n.a.createElement("li",{className:"site-nav__list"},n.a.createElement(h.Link,{onClick:this.onHandleClickLink,href:"#work",className:"site-nav__link",activeClass:"site-nav__link--active",to:"work",spy:!0,smooth:!0,offset:-30,duration:500},"Recommendations")),n.a.createElement("li",{className:"site-nav__list"},n.a.createElement(h.Link,{onClick:this.onHandleClickLink,className:"site-nav__link",activeClass:"site-nav__link--active",to:"project",href:"#project",spy:!0,smooth:!0,offset:-20,duration:500},"My Work")),n.a.createElement("li",{className:"site-nav__list"},n.a.createElement(h.Link,{onClick:this.onHandleClickLink,href:"#contact",className:"site-nav__link",activeClass:"site-nav__link--active",to:"contact",spy:!0,smooth:!0,offset:-30,duration:500},"Contact Me")))))}}]),t}(i.Component),g=a(125),y=a.n(g),v=function(e){var t=e.portfolioData;return n.a.createElement("section",{className:"site-intro site-intro--with-clipmask"},n.a.createElement(y.a,{className:"site-intro__canvas",params:{particles:{number:{value:60,density:{enable:!0,value_area:1500}},line_linked:{enable:!0,opacity:.02},move:{direction:"right",speed:.05},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"site-intro__wrapper"},n.a.createElement("div",{className:"site-intro__main"},n.a.createElement("div",{className:"site-intro__intro"},n.a.createElement("h2",{className:"site-intro__name"}," Hello! I am ",t.name,". "),n.a.createElement("br",null),n.a.createElement("h2",{className:"site-intro__heading"}," I am a ",t.role," "),n.a.createElement("h1",{className:"site-intro__primary"}," ",t.intro," "),n.a.createElement("div",{className:"site-intro__action"},n.a.createElement("a",{className:"btn btn-outline-white btn-radius btn-lg",href:"https://www.linkedin.com/in/arnel-mateo-medina-b22298101/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn Profile")))),n.a.createElement("div",{className:"site-intro__logo-wrapper"},n.a.createElement("img",{src:"",alt:"",className:"site-intro__logo"})))))},b=function(e){return n.a.createElement("section",{className:"site-section site-standard",id:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"site-heading"}," My Projects "),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},e.children)))},f=function(e){var t=e.handleClickProject,a=e.imageUrl,i=e.title;e.link;return n.a.createElement("div",{className:"col-4"},n.a.createElement("div",{className:"site-project",onClick:t},n.a.createElement("div",{className:"site-project__cover"},n.a.createElement("div",{className:"site-project__img",style:{backgroundImage:'url("'.concat(a,'")')}}),n.a.createElement("div",{className:"site-project__overlay"},n.a.createElement("div",{className:"site-project__info"},n.a.createElement("a",{href:"javascript:void(0)",onClick:t,className:"btn btn-outline-white btn-radius btn-md",type:"button"}," Learn More "))))),n.a.createElement("div",{className:"site-project__name",onClick:t},i," "))},k=(a(29),function(e){e.imageUrl;var t=e.title,a=e.link,i=e.description,o=e.technology,s=e.codeLink,r=e.deploy;return n.a.createElement("div",{className:"project-info"},n.a.createElement("div",{className:"project-info__info"},n.a.createElement("div",{className:"project-info__title"}," ",t," "),n.a.createElement("div",{className:"project-info__desc"}," ",i," "),n.a.createElement("div",{className:"cols"},o.length>0&&n.a.createElement("div",null,n.a.createElement("h2",{className:"project-info__heading"}," Technology used "),n.a.createElement("ul",{className:"project-info__tech"},o.map(function(e,t){return n.a.createElement("li",null," ",e," ")}))),r.length>0&&n.a.createElement("div",null,n.a.createElement("h2",{className:"project-info__heading"}," Deployment "),n.a.createElement("ul",{className:"project-info__tech"},r.map(function(e,t){return n.a.createElement("li",null," ",e," ")})))),n.a.createElement("div",{className:"project-info__action"},""!==a&&n.a.createElement("a",{className:"btn btn-primary  bt-lg",target:"_blank",rel:"noopener noreferrer",href:a}," Please visit my website. "),""!==s&&n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-primary bt-lg",href:s},n.a.createElement("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",className:"btn-icon"},n.a.createElement("path",{d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"})),"View GitHub Repo"))))}),E=a(71),w=(a(147),a(126)),_=a.n(w),N=function(e){var t;return t=e.portfolioData.skills.map(function(e,t){return n.a.createElement("div",{className:"col-2",key:t},n.a.createElement("div",{className:"site-skill"},n.a.createElement("div",{className:"site-skill__canvas-wrapper"},n.a.createElement(_.a,null,function(t){var a=t.isVisible,i=a?e.percentage:0;return a&&e.name,n.a.createElement(E.a,{value:i,text:"".concat(i,"%"),className:"site-skill__canvas",styles:Object(E.b)({textColor:"green",pathColor:"black",trailColor:"gold",textSize:"2rem",pathTransitionDuration:1,strokeLinecap:"butt"})})})),n.a.createElement("div",{className:"site-skill__text"}," ",e.name)))}),n.a.createElement("section",{className:"site-section",id:"skills"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"site-section__icon"}),n.a.createElement("h1",{className:"site-heading"}," My Skills "),n.a.createElement("div",{className:"row"},t)))},S=function(e){var t;return t=e.portfolioData.workExp.map(function(e,t){return n.a.createElement("div",{className:"stepper__list",key:t},n.a.createElement("div",{className:"stepper__item"},n.a.createElement("div",{className:"stepper__body"},n.a.createElement("h3",{className:"stepper__title"}," ",e.company,"  (",e.title,")"),n.a.createElement("div",{className:"stepper__sub"}," ",e.description," "))))}),n.a.createElement("section",{className:"site-section  site-section--with-background",id:"work"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"site-section__icon stroke-white"}),n.a.createElement("h1",{className:"site-heading text-white"}," Recommendations "),n.a.createElement("div",{className:"stepper"},t)))},j=function(e){return n.a.createElement("section",{className:"site-section",id:"skills"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"site-section__icon"},n.a.createElement("hr",{className:"progress"})),n.a.createElement("h1",{className:"site-heading"}," My Story "),n.a.createElement("div",{className:"cols"},n.a.createElement("b",null,"A Genuine Smile Is Human Nature."),n.a.createElement("p",null,"A beginner coder with a mission of reaching out to other coders out there to build an application that could bring the world together. I am always willing to learn new things, new skills and new knowledge in order to share it with others and encourage others to contribute to a more ethical and secure coding experience."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,n.a.createElement("b",null,"My Story")),n.a.createElement("p",null,"I love learning new skills. I am also happy to meet other people who are exploring and challenging the limits of what they can do. I believe that there is no limit to learning. I have an old background in software development. I used to code using Visual Basic. It was the only programming language I know when I graduated college since we used it heavily on our thesis. I remember how eager I was to solve a logical problem when I am dealing with programs. I was also given the chance to teach it and help students get through their thesis in college. I migrated to the United States in 2009 and it took me a while to get my feet back into the IT industry. I worked in the Consulting Industry for over 5 years, working in IT and Security Compliance."," "),n.a.createElement("br",null),n.a.createElement("p",null,"Aside from wanting to just learn new skills or updating my old skills, my passion is also to create things. Coding allows you to do such that. I believe that any person who would like to learn coding can also incorporate their other interest into building something that is useful to others. I know that we all have the capacity to learn coding and other things that we put our dedication into. We should never stop learning. And we should always have the propensity to reach out to others not only for help but also to collaborate. Creating something usable and coming up with new and amazing ideas can always be fun when you brainstorm with others. This is why i am here, doing my best to code and take on the challenges of it as a very difficult skill to learn. And of course, I remind myself at all times, that everything is possible, even the impossible."," "),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,n.a.createElement("b",null,"My Occupation")),n.a.createElement("p",null,"I am currently working as a Cybersecurity Analyst at a retail corporation. I am enjoying this job and I would like to expand my skills in the software development in order to combine it with my current skills therefore strengthening my aspirations of creating things that would provide protection of human data and privacy. My goal is to continue learning programming as much as I can. I always love to be a beginner. I treat myself as a beginner at all times in order for me to transfer the knowledge and skills to anyone with much more patience and eagerness. Aside from computing, I also have a passion for art. I love drawing, painting with mediums such as watercolor and oil paint. I am also an aspiring artist. I do have a long way to go in this industry. However, I only do it as a hobby."," "))))},L=a(127),C=a.n(L),M=a(131),I=a(34),R=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e,t){var i=t.resetForm,n=a.state;n.isShowMsg,n.isSending;a.setState({isSending:!0}),C.a.post("https://formcarry.com/s/pDNgV7JpwdC5",e,{headers:{Accept:"application/json"}}).then(function(e){"success"===e.data.status&&(a.setState({isSending:!1,isShowMsg:!0}),i())}).catch(function(e){console.log(e)})},a.state={isShowMsg:!1,isSending:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSending,a=e.isShowMsg;return n.a.createElement("section",{className:"site-section",id:"contact"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"site-section__icon"},n.a.createElement("hr",{className:"progress"})),n.a.createElement("h1",{className:"site-heading"}," Contact Me "),n.a.createElement("br",null),n.a.createElement(M.a,{className:"site-form",initialValues:{name:"",email:"",message:""},validate:function(e){var t={};return e.name||(t.name="Name is required"),e.email||(t.email="Email is required"),e.message||(t.message="Message is required"),t},validationSchema:I.object().shape({name:I.string().required(),email:I.string().email().required(),message:I.string().required()}),onSubmit:this.onSubmit,render:function(e){var o=e.handleChange,s=e.handleBlur,r=e.values,l=e.errors,c=e.handleSubmit,m=e.touched;return n.a.createElement(i.Fragment,null,n.a.createElement("form",{className:"site-form",onSubmit:c},a&&n.a.createElement("div",{class:"alert alert-success"},"Thank you for your message!"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"site-form__form-group"},n.a.createElement("label",{htmlFor:"input-name",className:"site-form__label"}," ","Name"," "),n.a.createElement("input",{type:"text",name:"name",onBlur:s,onChange:o,className:"site-form__input ".concat(l.name&&m.name?"site-form__input-error":""),id:"input-name",value:r.name}),l.name&&m.name&&n.a.createElement("div",{className:"site-form__error"}," ",l.name," "))),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"site-form__form-group"},n.a.createElement("label",{htmlFor:"input-email",className:"site-form__label"}," ","Email"," "),n.a.createElement("input",{type:"email",name:"email",onChange:o,className:"site-form__input ".concat(l.email&&m.email?"site-form__input-error":""),id:"input-email",value:r.email}),l.email&&m.email&&n.a.createElement("div",{className:"site-form__error"}," ",l.email," ")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"site-form__form-group"},n.a.createElement("label",{htmlFor:"input-message",className:"site-form__label"}," ","Message"," "),n.a.createElement("textarea",{type:"text",name:"message",onChange:o,className:"site-form__textarea ".concat(l.message&&m.message?"site-form__input-error":""),rows:"8",id:"input-message",value:r.message}),l.message&&m.message&&n.a.createElement("div",{className:"site-form__error"}," ",l.message," ")))),n.a.createElement("div",{className:"site-form__action"},n.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-radius",disabled:t},t?n.a.createElement("span",{className:"loading-icon"}," "):"Submit"))))}})))}}]),t}(i.Component),H=function(){return n.a.createElement("footer",{className:"site-footer site-footer--with-clipmask"},n.a.createElement("div",{className:"site-footer__quote"},'"I am glad to see you here"'),n.a.createElement("div",{className:"site-social"},n.a.createElement("div",{className:"site-social__list"},n.a.createElement("a",{href:"",className:"site-social__link"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"})))),n.a.createElement("div",{className:"site-social__list"},n.a.createElement("a",{href:"https://github.com/nellirism",className:"site-social__link"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))),n.a.createElement("div",{className:"site-social__list"},n.a.createElement("a",{href:"https://www.linkedin.com/in/arnel-mateo-medina-b22298101/",className:"site-social__link"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"}))))),n.a.createElement("div",{className:"site-footer__copyright"}," Copyright \xa9 2021 "))},T={imageUrl:"http://localhost:3000/",logo:"images/app-logo.svg",logoWhite:"images/app-logo-white.svg",name:"Nell-e",role:"Full-Stack Developer and a Cyber Security Professional",intro:"Welcome to my Portfolio!",projects:[{id:0,title:"Employee Directory using React",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://nellirism.github.io/runbuddy/",codeLink:"https://github.com/nellirism/runbuddy",description:"This application uses React that enables the user to quickly see and organize a list of employees by birthday, or search for a specific employee by name.",technology:["HTML/CSS","Bootstrap","Node.js","React","API","Webpack"],deploy:["git","GitHub","mLab","Heroku"]},{id:1,title:"Donationally using React",imageUrl:"images/portfolio/gjerenuk.jpg",link:"https://nellirism.github.io/gjerenuk/",codeLink:"https://github.com/nellirism/gjerenuk",description:"Donationally is a charity search navigator, helping users in multiple ways to stay informed about world events and opportunities to give back to those in need. Our mission is to create lasting change one donation at a time. We envision a world everyone has the opportunity to live a better life",technology:["HTML/CSS","Javascript","React","React Hooks","React-Bootstrap","Ant Design","Formik","Yup","axios","Google API","Express","MongoDB","Mongoose","Node.js"],deploy:["git","GitHub","mLab","Heroku"]},{id:2,title:"Budget Tracker using PWA",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://lloyd-budget-tracker-pwa.herokuapp.com/",codeLink:"https://github.com/Ethanlloyd21/Budget-Tracker",description:"Using Progressive Web Application (PWA) this application enables the user to add expenses and deposits to their budget with or without an online connection. When entering transactions offline, data should populate the total when connected back online.",technology:["HTML/CSS","Javascript","jQuery","Express","Bootstrap","Chart.js","MongoDB","Mongoose","IndexedDB","Webpack"],deploy:["git","GitHub","mLab","Heroku"]},{id:3,title:"React Sneaker Inventory",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://agile-headland-04774.herokuapp.com/",codeLink:"https://github.com/nellirism/",description:"The JLR Shoes CRM is used by the JLR Shoe company to track inventory, supplier info, and vendor info. It gives JLR Shoe company an advantage over the competition by having the most important company information accurately displayed in one place. This CRM was created using React, Sequelize, and MySQL.",technology:["HTML/CSS","Javascript","React","Sequalize","Express","Chart.js","MySQL"],deploy:["git","GitHub","JawsDB","Heroku"]},{id:4,title:"Portfolio using React",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://nell-ewebsite.com",codeLink:"https://github.com/nellirism/",description:"My Professional Portfolio",technology:["HTML/CSS","SASS","JavaScript","Bootstrap","React"],deploy:["git","GitHub","AWS S3","AWS Route 53","GoDaddy (domain)"]},{id:5,title:"React Fitness Tracker",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://workout-tracker-mongodb.herokuapp.com/",codeLink:"https://github.com/Ethanlloyd21/Workout-Tracker",description:"Workout-Tracker application tracks the user's exercise routine and outputs the result using charts (graphs). This application is build with Mongo database, a Mongoose schema and handle routes with Express using HTML, CSS, JavaScript and jQuery.",technology:["HTML/CSS","Bootstrap","Javascript/jQuery","Chart.js","Express","Node.js","MongoDB","Mongoose","Webpack"],deploy:["git","GitHub","mLab","Heroku"]},{id:6,title:"React Google Book Search",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://google-books-search-lloyd.herokuapp.com/",codeLink:"https://github.com/Ethanlloyd21/Google-Book-Search",description:"React-based Google Books Search application requires a creation of a React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. This can be achieve using Node, Express and MongoDB so that users can save books to review or purchase later.",technology:["React","Node.js","Express","MongoDB","Google API"],deploy:["GitHub","Heroku"]},{id:7,title:"Trivia QUIZ challenge",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://ethanlloyd21.github.io/Code-Quiz/",codeLink:"https://github.com/Ethanlloyd21/Code-Quiz",description:"In this project, the challenge is to build a trivia quiz with multiple-choice questions.",technology:["HTML/CSS","Javascript","jQuery"],deploy:["git","GitHub"]},{id:8,title:"ROXANNE",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://w.amazon.com/bin/view/ROXANNE",codeLink:"https://github.com/Ethanlloyd21/ROXANNE",description:"Roxanne is JAVA application created for a GSOC team. Users access the app to get information (contacts, emails, etc.), ping panels, create / edit trouble tickets, view procedures, etc. ROXANNE helps the productivity of a team by creating a simple way to manage data. Roxanne is under a non-disclosure agreement because it contains confidential material and proprietary information. Due to security issue, ROXANNE's code is not available to public view.",technology:["Java","Java GUI","Java Window Builder"],deploy:["Java GUI"]},{id:9,title:"Weather Dashboard",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://ethanlloyd21.github.io/Weather-Dashboard/",codeLink:"https://github.com/Ethanlloyd21/Weather-Dashboard",description:"This app uses OpenWeather API to retrieve weather data for cities. An AJAX is used to hook into the API and retrieve data in JSON format. The app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.",technology:["HTML/CSS","Bootstrap","Javascript/Jquery","API"],deploy:["git","GitHub"]},{id:10,title:"Password Generator",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://ethanlloyd21.github.io/Password-Generator/",codeLink:"https://github.com/Ethanlloyd21/Password-Generator",description:"This application generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by a JavaScript code.",technology:["JavaScrip","HTML","CSS"],deploy:["GitHub","git"]},{id:11,title:"Restaurant Reservation",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://reserve-restaurant.herokuapp.com/",codeLink:"https://github.com/Ethanlloyd21/Restaurant-Reservation",description:"Basic app demonstrating Node and Express with jQuery. Overall purpose is to help schedule reservation requests. Restaurant has just 5 tables available. First five requests get a reservation, every request after that is sent to the waiting list.",technology:["JavaScript","jQuery","Node.js","Express"],deploy:["GitHub","git"]},{id:12,title:"MySQL Employee Tracker",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://drive.google.com/file/d/1YR7YOwPlGoaFdIdoFeKc9-ysnnY5sM2P/view",codeLink:"https://github.com/Ethanlloyd21/MySQL-Employee-Tracker",description:"MySQL- Employee-Tracker is an interface command program that make it easy for non-developers to view and interact with information stored in databases. This interface is a good example of a Content Management Systems; a command line application for managing a company's employees using node, inquirer, and MySQL. This application is also a good example of data manipulation using tables and columns on MySQL. ",technology:["JavaScript","jQuery","Node.js","ES6+","MySQL","MySQL Workbench"],deploy:["GitHub","git","command-line"]},{id:13,title:"Employee Template Engine",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://drive.google.com/file/d/1yO4M8pAAFzpijVdGRg2FCFMybQKnfhEi/view",codeLink:"https://github.com/Ethanlloyd21/Template-Engine-Employee-Summary",description:"This project is a Software Engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. A test using 'jest' is used to ensure that all unit tests pass.",technology:["JavaScript","HTML","CSS","jest"],deploy:["GitHub","git"]},{id:14,title:"Profile Generator using GitHub API",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://drive.google.com/file/d/1S2UGT1OmhEsEEWPQHaLFJIaxe4lV0tjT/view",codeLink:"https://github.com/Ethanlloyd21/Developer-Profile-Generator",description:"A command-line application that dynamically generates a PDF profile from a GitHub username.",technology:["JavaScript","HTML","CSS","Node.js","GitHub API"],deploy:["GitHub","git","command-line"]},{id:15,title:"Login System using Node.js",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://drive.google.com/file/d/1yJHvVf1gL9gX1j8Ito8YC36e7MRB58zN/view",codeLink:"https://github.com/Ethanlloyd21/Login-Register-Validation",description:"A simple application that creates and validates user name and password. The application also restores the session so the user won't log in again if the browser is accidentally closed. The password are encrypted on the database for security purposes..",technology:["JavaScript","Pug","Node.js","Express","bcrypt","MySQL"],deploy:["GitHub","git"]},{id:16,title:"Login Authentication using React",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://drive.google.com/file/d/16a7xBDngn1zJm_vv_ZVdRjvJUYIy957t/view",codeLink:"https://github.com/Ethanlloyd21/Username-Password-Authentication-React",description:" This is a simple application of a username and password authentication using React with OKLA integration. A sign-in experience is one of the most important user experiences any app developer needs to consider. To provide a seamless and attractive, yet secure authentication experience is not a trivial task. Typically, the sign-in logic accompanies other features such as password reset and registration. More importantly, enhanced security in the form of strong and adaptive authentication during the sign-in process is often critical to many implementations.",technology:["React","CSS","OKTA"],deploy:["GitHub","git"]},{id:17,title:"PayPal Payment System using React",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://paypal-payment.s3-us-west-1.amazonaws.com/paypal.webm",codeLink:"https://github.com/Ethanlloyd21/React_PayPal_payment",description:"The intent of this application is to build a service which require the user to get payment from the customers. This application is best to use in an e-commerce site. For this purpose a dependable payment gateway is the goal. Using React with an integration of PayPal Checkout system is best solution.",technology:["JavaScrip","React","PayPal API"],deploy:["GitHub","git"]}],skills:[{name:"HTML/CSS",percentage:95},{name:"JavaScript",percentage:95},{name:"React",percentage:95},{name:"Node.js / Express",percentage:85},{name:"MongoDB",percentage:85},{name:"AWS",percentage:80},{name:"Azure",percentage:95},{name:"Linux / Windows / Mac",percentage:95},{name:"Project Management",percentage:95},{name:"Metasploit",percentage:85},{name:"Governance, Risk and Compliance",percentage:85},{name:"Auditing",percentage:95}],workExp:[{title:"Senior Software Engineer at Gapinc",date:"May 2021",description:"Nell-e is amazing!",company:"Saoirse Caoimhe Ronan"},{title:"Software Developer at Moss Adams",date:"May 2021",description:"Nell-e is kind and a wonderful human being",company:"Jack Sparrogush"},{title:"Data Analyst at Mateo Kind",date:"June 2021",company:"Natasha Lovowitz",description:"Nell-e never ceases to amuse and make me laugh"},{title:"Cyber Engineer at Lolabuy Consulting",date:"May 2021",company:"Aisling McDonnell",description:"He is a work of art."}]},x=function(e){return n.a.createElement("div",{className:"modal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-body"},e.children)))},A=(a(298),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleClickDocument=function(e){e.target.classList.contains("modal")&&(a.setState({isOpenModal:!1}),document.querySelector("body").classList.remove("no-scroll"))},a.handleClick=function(e){a.setState({isOpenModal:!0}),document.querySelector("body").classList.add("no-scroll"),a.getInfo(e)},a.getInfo=function(e){var t=T.projects.filter(function(t){return t.id===e});a.setState({projectInfo:t})},a.state={isOpenModal:!1,projectInfo:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClickDocument)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClickDocument)}},{key:"render",value:function(){var e,t,a=this,o=T,s=this.state,r=s.projectInfo,l=s.isOpenModal;return e=o.projects.map(function(e,t){return n.a.createElement(f,Object.assign({key:e.id},e,{handleClickProject:a.handleClick.bind(a,e.id)}))}),t=r.map(function(e,t){return n.a.createElement(k,Object.assign({key:t},e))}),n.a.createElement(i.Fragment,null,n.a.createElement(u,{portfolioData:T}),n.a.createElement("main",{className:"site-main",id:"home"},n.a.createElement(v,{portfolioData:T,id:"home"}),n.a.createElement(j,null),n.a.createElement(N,{portfolioData:T}),n.a.createElement(S,{portfolioData:T}),n.a.createElement(b,null,e),n.a.createElement(R,null),l&&n.a.createElement(x,null,t)),n.a.createElement(H,null))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[132,1,2]]]);
//# sourceMappingURL=main.1dbb392f.chunk.js.map