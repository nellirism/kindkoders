(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a(299)},137:function(e,t,a){},29:function(e,t,a){},298:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(20),l=a.n(s),o=(a(137),a(21)),r=a(22),c=a(24),m=a(23),d=a(25),h=a(33),u=a(12),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleScroll=function(e){window.scrollY>10?a.setState({isSticky:!0}):a.setState({isSticky:!1})},a.handleClickDocument=function(e){a.state.isOpenSidebar;e.target.classList.contains("site-nav-backdrop")&&a.setState({isOpenSidebar:!1})},a.state={isSticky:!1,isOpenSidebar:!1},a.openSidebar=a.openSidebar.bind(Object(h.a)(a)),a.onHandleClickLink=a.onHandleClickLink.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),document.addEventListener("click",this.handleClickDocument)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),document.removeEventListener("click",this.handleClickDocument)}},{key:"openSidebar",value:function(){this.setState({isOpenSidebar:!0})}},{key:"onHandleClickLink",value:function(){this.setState({isOpenSidebar:!1})}},{key:"render",value:function(){var e=this.state,t=e.isSticky,a=e.isOpenSidebar;return i.a.createElement("header",{className:"site-header ".concat(t?"site-header--sticky":""," ")},i.a.createElement("div",{className:"site-header__wrapper"},i.a.createElement("div",{className:"site-header__brand"},i.a.createElement(u.Link,{className:"site-header__link",activeClass:"site-nav__link--active",to:"home",href:"#home",spy:!0,smooth:!0,offset:0,duration:500})),i.a.createElement("div",{className:"site-header__spacer"}),i.a.createElement("button",{type:"button",className:"site-header__btn-mobile",onClick:this.openSidebar},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18.338",height:"12",viewBox:"0 0 18.338 12",className:"site-header__burger-icon ".concat(t?"site-header__burger-icon--dark":"")},i.a.createElement("g",{id:"Group_6148","data-name":"Group 6148",transform:"translate(-288 -20)"},i.a.createElement("rect",{id:"Rectangle_2400","data-name":"Rectangle 2400",width:"18.338",height:"2",rx:"1",transform:"translate(288 20)",fill:"#fff"}),i.a.createElement("rect",{id:"Rectangle_2401","data-name":"Rectangle 2401",width:"14.94",height:"2",rx:"1",transform:"translate(288 25)",fill:"#fff"}),i.a.createElement("rect",{id:"Rectangle_2402","data-name":"Rectangle 2402",width:"18.338",height:"2",rx:"1",transform:"translate(288 30)",fill:"#fff"})))),a&&i.a.createElement(n.Fragment,null," ",i.a.createElement("div",{className:"site-nav-backdrop"})," "),i.a.createElement("div",{className:"site-sidebar ".concat(a?"is-open":"")}),i.a.createElement("ul",{className:"site-nav site-sidebar  ".concat(a?"is-open":"")},i.a.createElement("li",{className:"site-nav__list"},i.a.createElement(u.Link,{onClick:this.onHandleClickLink,className:"site-nav__link",activeClass:"site-nav__link--active",to:"skills",href:"#skills",spy:!0,smooth:!0,offset:-20,duration:500},"My Story")),i.a.createElement("li",{className:"site-nav__list"},i.a.createElement(u.Link,{onClick:this.onHandleClickLink,className:"site-nav__link",activeClass:"site-nav__link--active",to:"skills",href:"#skills",spy:!0,smooth:!0,offset:-20,duration:500},"My Skills")),i.a.createElement("li",{className:"site-nav__list"},i.a.createElement(u.Link,{onClick:this.onHandleClickLink,href:"#work",className:"site-nav__link",activeClass:"site-nav__link--active",to:"work",spy:!0,smooth:!0,offset:-30,duration:500},"Recommendations")),i.a.createElement("li",{className:"site-nav__list"},i.a.createElement(u.Link,{onClick:this.onHandleClickLink,className:"site-nav__link",activeClass:"site-nav__link--active",to:"project",href:"#project",spy:!0,smooth:!0,offset:-20,duration:500},"My Work")),i.a.createElement("li",{className:"site-nav__list"},i.a.createElement(u.Link,{onClick:this.onHandleClickLink,href:"#contact",className:"site-nav__link",activeClass:"site-nav__link--active",to:"contact",spy:!0,smooth:!0,offset:-30,duration:500},"Contact Me")))))}}]),t}(n.Component),g=a(125),v=a.n(g),k=function(e){var t=e.portfolioData;return i.a.createElement("section",{className:"site-intro site-intro--with-clipmask"},i.a.createElement(v.a,{className:"site-intro__canvas",params:{particles:{number:{value:60,density:{enable:!0,value_area:1500}},line_linked:{enable:!0,opacity:.02},move:{direction:"left",speed:.55},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.5}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"site-intro__wrapper"},i.a.createElement("div",{className:"site-intro__main"},i.a.createElement("div",{className:"site-intro__intro"},i.a.createElement("h2",{className:"site-intro__name"}," Hello! I am ",t.name,". "),i.a.createElement("br",null),i.a.createElement("h2",{className:"site-intro__heading"}," I am a ",t.role," "),i.a.createElement("h1",{className:"site-intro__primary"}," ",t.intro," "),i.a.createElement("div",{className:"site-intro__action"},i.a.createElement("a",{className:"btn btn-outline-white btn-radius btn-lg",href:"https://www.linkedin.com/in/arnel-mateo-medina-b22298101/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn Profile")))),i.a.createElement("div",{className:"site-intro__logo-wrapper"},i.a.createElement("img",{src:"",alt:"",className:"site-intro__logo"})))))},f=function(e){return i.a.createElement("section",{className:"site-section site-standard",id:"project"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"site-heading"}," My Projects "),i.a.createElement("br",null),i.a.createElement("div",{className:"row"},e.children)))},E=function(e){var t=e.handleClickProject,a=e.imageUrl,n=e.title;e.link;return i.a.createElement("div",{className:"col-4"},i.a.createElement("div",{className:"site-project",onClick:t},i.a.createElement("div",{className:"site-project__cover"},i.a.createElement("div",{className:"site-project__img",style:{backgroundImage:'url("'.concat(a,'")')}}),i.a.createElement("div",{className:"site-project__overlay"},i.a.createElement("div",{className:"site-project__info"},i.a.createElement("a",{href:"javascript:void(0)",onClick:t,className:"btn btn-outline-white btn-radius btn-md",type:"button"}," Learn More "))))),i.a.createElement("div",{className:"site-project__name",onClick:t},n," "))},b=(a(29),function(e){e.imageUrl;var t=e.title,a=e.link,n=e.description,s=e.technology,l=e.codeLink,o=e.deploy;return i.a.createElement("div",{className:"project-info"},i.a.createElement("div",{className:"project-info__info"},i.a.createElement("div",{className:"project-info__title"}," ",t," "),i.a.createElement("div",{className:"project-info__desc"}," ",n," "),i.a.createElement("div",{className:"cols"},s.length>0&&i.a.createElement("div",null,i.a.createElement("h2",{className:"project-info__heading"}," Technology used "),i.a.createElement("ul",{className:"project-info__tech"},s.map(function(e,t){return i.a.createElement("li",null," ",e," ")}))),o.length>0&&i.a.createElement("div",null,i.a.createElement("h2",{className:"project-info__heading"}," Deployment "),i.a.createElement("ul",{className:"project-info__tech"},o.map(function(e,t){return i.a.createElement("li",null," ",e," ")})))),i.a.createElement("div",{className:"project-info__action"},""!==a&&i.a.createElement("a",{className:"btn btn-primary  bt-lg",target:"_blank",rel:"noopener noreferrer",href:a}," ","Visit Deployed Application"," "),""!==l&&i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-primary bt-lg",href:l},i.a.createElement("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",className:"btn-icon"},i.a.createElement("path",{d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"})),"View GitHub Repo"))))}),y=a(71),_=(a(147),a(126)),w=a.n(_),N=function(e){var t;return t=e.portfolioData.skills.map(function(e,t){return i.a.createElement("div",{className:"col-2",key:t},i.a.createElement("div",{className:"site-skill"},i.a.createElement("div",{className:"site-skill__canvas-wrapper"},i.a.createElement(w.a,null,function(t){var a=t.isVisible,n=a?e.percentage:0;return a&&e.name,i.a.createElement(y.a,{value:n,text:"".concat(n,"%"),className:"site-skill__canvas",styles:Object(y.b)({textColor:"green",pathColor:"black",trailColor:"gold",textSize:"2rem",pathTransitionDuration:1,strokeLinecap:"butt"})})})),i.a.createElement("div",{className:"site-skill__text"}," ",e.name)))}),i.a.createElement("section",{className:"site-section",id:"skills"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"site-section__icon"}),i.a.createElement("h1",{className:"site-heading"}," My Skills "),i.a.createElement("div",{className:"row"},t)))},S=function(e){var t;return t=e.portfolioData.workExp.map(function(e,t){return i.a.createElement("div",{className:"stepper__list",key:t},i.a.createElement("div",{className:"stepper__item"},i.a.createElement("div",{className:"stepper__body"},i.a.createElement("h3",{className:"stepper__title"}," ",e.company," (",e.title,")"),i.a.createElement("div",{className:"stepper__sub"}," ",e.description," "))))}),i.a.createElement("section",{className:"site-section  site-section--with-background",id:"work"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"site-section__icon stroke-white"}),i.a.createElement("h1",{className:"site-heading text-white"}," Recommendations "),i.a.createElement("div",{className:"stepper"},t)))},j=function(e){return i.a.createElement("section",{className:"site-section",id:"skills"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"site-section__icon"},i.a.createElement("hr",{className:"progress"})),i.a.createElement("h1",{className:"site-heading"}," My Story "),i.a.createElement("div",{className:"cols"},i.a.createElement("b",null,"A Genuine Smile Is Human Nature."),i.a.createElement("p",{align:"justify"},"A beginner coder with a mission of reaching out to other coders out there to build an application that could bring the world together. I am always willing to learn new things, new skills and new knowledge in order to share it with others and encourage others to contribute to a more ethical and secure coding experience."),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",null,i.a.createElement("b",null,"My Story")),i.a.createElement("p",{align:"justify"},"I love learning new skills. I am also happy to meet other people who are exploring and challenging the limits of what they can do. I believe that there is no limit to learning. I have an old background in software development. I used to code using Visual Basic. It was the only programming language I know when I graduated college since we used it heavily on our thesis. I remember how eager I was to solve a logical problem when I am dealing with programs. I was also given the chance to teach it and help students get through their thesis in college. I migrated to the United States in 2009 and it took me a while to get my feet back into the IT industry. I worked in the Consulting Industry for over 5 years, working in IT and Security Compliance."," "),i.a.createElement("br",null),i.a.createElement("p",{align:"justify"},"Aside from wanting to just learn new skills or updating my old skills, my passion is also to create things. Coding allows you to do such that. I believe that any person who would like to learn coding can also incorporate their other interest into building something that is useful to others. I know that we all have the capacity to learn coding and other things that we put our dedication into. We should never stop learning. We should always have the propensity to reach out to others not only for help but also to collaborate. Creating something usable and coming up with new and amazing ideas can always be fun when you work with other talented people. This is why i am here, doing my best to code and take on the challenges of it as a very difficult skill to learn. And of course, I remind myself at all times, that everything is possible, even the impossible."," "),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",null,i.a.createElement("b",null,"My Occupation")),i.a.createElement("p",{align:"justify"},"I am currently working as a Cybersecurity Analyst at a retail company. I am enjoying this job and I would like to expand my skills in the software development in order to combine it with my current skills therefore strengthening my aspirations of creating things that would provide protection of human data and privacy. My goal is to continue learning programming as much as I can. I always love to be a beginner. I treat myself as a beginner at all times in order for me to transfer the knowledge and skills to anyone with much more patience and eagerness. Aside from computing, I also have a passion for art. I love drawing, painting with mediums such as gouache, oil paint and colored pencil. I am also an aspiring artist. I do have a long way to go in this industry. However, I only do it as a hobby."," "))))},C=a(127),M=a.n(C),I=a(131),L=a(34),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e,t){var n=t.resetForm,i=a.state;i.isShowMsg,i.isSending;a.setState({isSending:!0}),M.a.post("https://formcarry.com/s/pDNgV7JpwdC5",e,{headers:{Accept:"application/json"}}).then(function(e){"success"===e.data.status&&(a.setState({isSending:!1,isShowMsg:!0}),n())}).catch(function(e){console.log(e)})},a.state={isShowMsg:!1,isSending:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSending,a=e.isShowMsg;return i.a.createElement("section",{className:"site-section",id:"contact"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"site-section__icon"},i.a.createElement("hr",{className:"progress"})),i.a.createElement("h1",{className:"site-heading"}," Contact Me "),i.a.createElement("br",null),i.a.createElement(I.a,{className:"site-form",initialValues:{name:"",email:"",message:""},validate:function(e){var t={};return e.name||(t.name="Name is required"),e.email||(t.email="Email is required"),e.message||(t.message="Message is required"),t},validationSchema:L.object().shape({name:L.string().required(),email:L.string().email().required(),message:L.string().required()}),onSubmit:this.onSubmit,render:function(e){var s=e.handleChange,l=e.handleBlur,o=e.values,r=e.errors,c=e.handleSubmit,m=e.touched;return i.a.createElement(n.Fragment,null,i.a.createElement("form",{className:"site-form",onSubmit:c},a&&i.a.createElement("div",{class:"alert alert-success"},"Thank you for your message!"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"site-form__form-group"},i.a.createElement("label",{htmlFor:"input-name",className:"site-form__label"}," ","Name"," "),i.a.createElement("input",{type:"text",name:"name",onBlur:l,onChange:s,className:"site-form__input ".concat(r.name&&m.name?"site-form__input-error":""),id:"input-name",value:o.name}),r.name&&m.name&&i.a.createElement("div",{className:"site-form__error"}," ",r.name," "))),i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"site-form__form-group"},i.a.createElement("label",{htmlFor:"input-email",className:"site-form__label"}," ","Email"," "),i.a.createElement("input",{type:"email",name:"email",onChange:s,className:"site-form__input ".concat(r.email&&m.email?"site-form__input-error":""),id:"input-email",value:o.email}),r.email&&m.email&&i.a.createElement("div",{className:"site-form__error"}," ",r.email," ")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"site-form__form-group"},i.a.createElement("label",{htmlFor:"input-message",className:"site-form__label"}," ","Message"," "),i.a.createElement("textarea",{type:"text",name:"message",onChange:s,className:"site-form__textarea ".concat(r.message&&m.message?"site-form__input-error":""),rows:"8",id:"input-message",value:o.message}),r.message&&m.message&&i.a.createElement("div",{className:"site-form__error"}," ",r.message," ")))),i.a.createElement("div",{className:"site-form__action"},i.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-radius",disabled:t},t?i.a.createElement("span",{className:"loading-icon"}," "):"Submit"))))}})))}}]),t}(n.Component),x=function(){return i.a.createElement("footer",{className:"site-footer site-footer--with-clipmask"},i.a.createElement("div",{className:"site-footer__quote"},'"I am glad to see you here"'),i.a.createElement("div",{className:"site-social"},i.a.createElement("div",{className:"site-social__list"},i.a.createElement("a",{href:"",className:"site-social__link"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"})))),i.a.createElement("div",{className:"site-social__list"},i.a.createElement("a",{href:"https://github.com/nellirism",className:"site-social__link"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))),i.a.createElement("div",{className:"site-social__list"},i.a.createElement("a",{href:"https://www.linkedin.com/in/arnel-mateo-medina-b22298101/",className:"site-social__link"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"}))))),i.a.createElement("div",{className:"site-footer__copyright"}," Copyright \xa9 2021 "))},O={imageUrl:"http://localhost:3000/",logo:"images/app-logo.svg",logoWhite:"images/app-logo-white.svg",name:"Nell-e",role:"Full-Stack Developer and a Cyber Security Professional",intro:"Welcome to my Portfolio!",projects:[{id:0,title:"Run Buddy",imageUrl:"images/portfolio/runbuddy.jpg",link:"https://nellirism.github.io/runbuddy/",codeLink:"https://github.com/nellirism/runbuddy",description:"Health & Fitness",technology:["HTML/CSS"],deploy:["git","GitHub"]},{id:1,title:"Horiseon Social Media & Marketing Website",imageUrl:"images/portfolio/horiseon.jpg",link:"https://nellirism.github.io/cerebreo-code/",codeLink:"https://github.com/nellirism/cerebreo-code",description:"Social Media & Marketing",technology:["HTML/CSS","Javascript"],deploy:["git","GitHub"]},{id:2,title:"Gjerenuk Password Generator",imageUrl:"images/portfolio/gjerenuk.png",link:"https://nellirism.github.io/gjerenuk/",codeLink:"https://github.com/nellirism/gjerenuk",description:"Password Generator",technology:["HTML/CSS","Javascript","jQuery"],deploy:["git","GitHub"]},{id:3,title:"Project Aqua Nauticus",imageUrl:"images/portfolio/pan.jpg",link:"https://patricklago21.github.io/ucberk-project-1/",codeLink:"https://github.com/patricklago21/ucberk-project-1",description:"PAN Marine Health Information",technology:["HTML/CSS","Javascript","Sequelize","Express","Chart.js","Leaflet.js"],deploy:["git","GitHub"]},{id:4,title:"Stenographist Note Taker",imageUrl:"images/portfolio/stenographist.jpg",link:"https://nelle898steno.herokuapp.com/",codeLink:"https://github.com/nellirism/stenographist",description:"Basic Note Taker",technology:["HTML/CSS","JavaScript","Bootstrap"],deploy:["git","GitHub","Heroku"]},{id:5,title:"Hauskeepr",imageUrl:"images/portfolio/bookhauskeepr.png",link:"https://hauskeepr-mvp.herokuapp.com/",codeLink:"https://github.com/patricklago21/hauskeepr",description:"Hauskeepr Community Application",technology:["HTML/CSS","Bootstrap","Javascript/jQuery","Express","Node.js","Mysql2","Sendgrid/Email"],deploy:["git","GitHub","Heroku"]},{id:6,title:"Alloculator Budget Tracker",imageUrl:"images/portfolio/alloculator.jpg",link:"https://alloculator.herokuapp.com/",codeLink:"https://github.com/nellirism/alloculator",description:"Budget Tracker PWA",technology:["Node.js","Express","MongoDB"],deploy:["GitHub","Heroku"]},{id:7,title:"Challenge 21",imageUrl:"images/portfolio/comingsoonorange.jpg",link:"",codeLink:"",description:"Coming Very Soon",technology:["HTML/CSS","Javascript","jQuery"],deploy:["git","GitHub"]},{id:8,title:"Challenge 22",imageUrl:"images/portfolio/comingsoongreen.jpg",link:"",codeLink:"",description:"Coming Very Soon",technology:["HTML/CSS","Javascript","jQuery"],deploy:["git","GitHub"]}],skills:[{name:"HTML/CSS",percentage:95},{name:"JavaScript",percentage:95},{name:"React",percentage:90},{name:"Node.js / Express",percentage:95},{name:"MongoDB",percentage:95},{name:"AWS",percentage:850},{name:"Azure",percentage:90},{name:"Vulnerability Assessment",percentage:95},{name:"Project Management",percentage:100},{name:"Penetration Testing",percentage:95},{name:"Governance, Risk and Compliance",percentage:95},{name:"Audit & Reporting",percentage:95}],workExp:[{title:"Senior Software Engineer at Gapinc",date:"May 2021",description:"Nell-e is amazing! I have only worked with him for 6 months but his contribution to the entire internal security team is phenomenal.",company:"Saoirse Caoimhe Ronan"},{title:"Software Developer at Moss Adams",date:"May 2021",description:"Nell-e is kind and a wonderful human being. He is always fun to work with. He provided guidance to those who are new to the company. He is always willing to help.",company:"Jack Sparrogush"},{title:"Data Analyst at Mateo Kind",date:"June 2021",company:"Natasha Lovowitz",description:"Nell-e never ceases to amuse and make me laugh. I had an opportunity to work with him on a project and we had a blast!"},{title:"Cyber Engineer at Lolabuy Consulting",date:"May 2021",company:"Aisling McDonnell",description:"I would not have a great internship experience in the consulting field if not for his guidance and friendhsip. Nell-e tends to acknowledge everyone around him and knows how to make people feel comfortable. "},{title:"Ambassador at BuildOn",date:"August 2021",company:"Raymond Ruiz",description:"Nell-e and I were both ambassadors to BuildOn where we were given an opportunity to reach out to two remote communities in West Africa. Nell-e's compassion for others is remarkable and just his genuine concern to others is something you don't see everyday. He is easy to be friends with and I have learned a lot from him through this endeavor."}]},D=function(e){return i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-body"},e.children)))},A=(a(298),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleClickDocument=function(e){e.target.classList.contains("modal")&&(a.setState({isOpenModal:!1}),document.querySelector("body").classList.remove("no-scroll"))},a.handleClick=function(e){a.setState({isOpenModal:!0}),document.querySelector("body").classList.add("no-scroll"),a.getInfo(e)},a.getInfo=function(e){var t=O.projects.filter(function(t){return t.id===e});a.setState({projectInfo:t})},a.state={isOpenModal:!1,projectInfo:[]},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClickDocument)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClickDocument)}},{key:"render",value:function(){var e,t,a=this,s=O,l=this.state,o=l.projectInfo,r=l.isOpenModal;return e=s.projects.map(function(e,t){return i.a.createElement(E,Object.assign({key:e.id},e,{handleClickProject:a.handleClick.bind(a,e.id)}))}),t=o.map(function(e,t){return i.a.createElement(b,Object.assign({key:t},e))}),i.a.createElement(n.Fragment,null,i.a.createElement(p,{portfolioData:O}),i.a.createElement("main",{className:"site-main",id:"home"},i.a.createElement(k,{portfolioData:O,id:"home"}),i.a.createElement(j,null),i.a.createElement(N,{portfolioData:O}),i.a.createElement(S,{portfolioData:O}),i.a.createElement(f,null,e),i.a.createElement(H,null),r&&i.a.createElement(D,null,t)),i.a.createElement(x,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[132,1,2]]]);
//# sourceMappingURL=main.afe23e71.chunk.js.map