const portfolioData = {
  imageUrl: "http://localhost:3000/",
  logo: "images/app-logo.svg",
  logoWhite: "images/app-logo-white.svg",
  name: "Nell-e",
  role: "Full-Stack Developer and a Cyber Security Professional",
  intro: "Welcome to my Portfolio!",
  projects: [
    {
      id: 0,
      title: "Run Buddy",
      imageUrl: "images/portfolio/runbuddy.jpg",
      link: "https://nellirism.github.io/runbuddy/",
      codeLink: "https://github.com/nellirism/runbuddy",
      description: "Health & Fitness",
      technology: ["HTML/CSS"],
      deploy: ["git", "GitHub"],
    },
    {
      id: 1,
      title: "Horiseon Social Media & Marketing Website",
      imageUrl: "images/portfolio/horiseon.jpg",
      link: "https://nellirism.github.io/cerebreo-code/",
      codeLink: "https://github.com/nellirism/cerebreo-code",
      description: "Social Media & Marketing",
      technology: ["HTML/CSS", "Javascript"],
      deploy: ["git", "GitHub"],
    },
    {
      id: 2,
      title: "Gjerenuk Password Generator",
      imageUrl: "images/portfolio/gjerenuk.png",
      link: "https://nellirism.github.io/gjerenuk/",
      codeLink: "https://github.com/nellirism/gjerenuk",
      description: "Password Generator",
      technology: ["HTML/CSS", "Javascript", "jQuery"],
      deploy: ["git", "GitHub"],
    },
    {
      id: 3,
      title: "Project Aqua Nauticus",
      imageUrl: "images/portfolio/pan.jpg",
      link: "https://patricklago21.github.io/ucberk-project-1/",
      codeLink: "https://github.com/patricklago21/ucberk-project-1",
      description: "PAN Marine Health Information",
      technology: [
        "HTML/CSS",
        "Javascript",
        "Sequelize",
        "Express",
        "Chart.js",
        "Leaflet.js",
      ],
      deploy: ["git", "GitHub"],
    },
    {
      id: 4,
      title: "Stenographist Note Taker",
      imageUrl: "images/portfolio/stenographist.jpg",
      link: "https://nelle898steno.herokuapp.com/",
      codeLink: "https://github.com/nellirism/stenographist",
      description: "Basic Note Taker",
      technology: ["HTML/CSS", "JavaScript", "Bootstrap"],
      deploy: ["git", "GitHub", "Heroku"],
    },
    {
      id: 5,
      title: "Hauskeepr",
      imageUrl: "images/portfolio/bookhauskeepr.png",
      link: "https://hauskeepr-mvp.herokuapp.com/",
      codeLink: "https://github.com/patricklago21/hauskeepr",
      description: "Hauskeepr Community Application",
      technology: [
        "HTML/CSS",
        "Bootstrap",
        "Javascript/jQuery",
        "Express",
        "Node.js",
        "Mysql2",
        "Sendgrid/Email",
      ],
      deploy: ["git", "GitHub", "Heroku"],
    },
    {
      id: 6,
      title: "Alloculator Budget Tracker",
      imageUrl: "images/portfolio/alloculator.jpg",
      link: "https://alloculator.herokuapp.com/",
      codeLink: "https://github.com/nellirism/alloculator",
      description: "Budget Tracker PWA",
      technology: ["Node.js", "Express", "MongoDB"],
      deploy: ["GitHub", "Heroku"],
    },
    {
      id: 7,
      title: "Challenge 21",
      imageUrl: "images/portfolio/comingsoonorange.jpg",
      link: "",
      codeLink: "",
      description: "Coming Very Soon",
      technology: ["HTML/CSS", "Javascript", "jQuery"],
      deploy: ["git", "GitHub"],
    },
    {
      id: 8,
      title: "Challenge 22",
      imageUrl: "images/portfolio/comingsoongreen.jpg",
      link: "",
      codeLink: "",
      description: "Coming Very Soon",
      technology: ["HTML/CSS", "Javascript", "jQuery"],
      deploy: ["git", "GitHub"],
    },
  ],
  skills: [
    {
      name: "HTML/CSS",
      percentage: 95,
    },
    {
      name: "JavaScript",
      percentage: 95,
    },
    {
      name: "React",
      percentage: 90,
    },
    {
      name: "Node.js / Express",
      percentage: 95,
    },
    {
      name: "MongoDB",
      percentage: 95,
    },
    {
      name: "AWS",
      percentage: 850,
    },
    {
      name: "Azure",
      percentage: 90,
    },
    {
      name: "Linux / Windows / Mac",
      percentage: 95,
    },
    {
      name: "Project Management",
      percentage: 95,
    },
    {
      name: "Metasploit",
      percentage: 95,
    },
    {
      name: "Governance, Risk and Compliance",
      percentage: 95,
    },
    {
      name: "Audit",
      percentage: 95,
    },
  ],

  workExp: [
    {
      title: "Senior Software Engineer at Gapinc",
      date: "May 2021",
      description:
        "Nell-e is amazing! I have only worked with him for 6 months but his contribution to the entire internal security team is phenomenal.",
      company: "Saoirse Caoimhe Ronan",
    },
    {
      title: "Software Developer at Moss Adams",
      date: "May 2021",
      description:
        "Nell-e is kind and a wonderful human being. He is always fun to work with. He provided guidance to those who are new to the company. He is always willing to help.",
      company: "Jack Sparrogush",
    },
    {
      title: "Data Analyst at Mateo Kind",
      date: "June 2021",
      company: "Natasha Lovowitz",
      description:
        "Nell-e never ceases to amuse and make me laugh. I had an opportunity to work with him on a project and we had a blast!",
    },
    {
      title: "Cyber Engineer at Lolabuy Consulting",
      date: "May 2021",
      company: "Aisling McDonnell",
      description:
        "I would not have a great internship experience in the consulting field if not for his guidance and friendhsip. Nell-e tends to acknowledge everyone around him and knows how to make people feel comfortable. ",
    },
    {
      title: "Ambassador at BuildOn",
      date: "August 2021",
      company: "Raymond Ruiz",
      description:
        "Nell-e and I were both ambassadors to BuildOn where we were given an opportunity to reach out to two remote communities in West Africa. Nell-e's compassion for others is remarkable and just his genuine concern to others is something you don't see everyday. He is easy to be friends with and I have learned a lot from him through this endeavor.",
    },
  ],
};

export default portfolioData;
