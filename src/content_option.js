const meta = {
  title: "Oshen Dikkumbura",
  description: "I’m Oshen Dikkumbura - Full stack developer",
};

const introData = {
  title: "I’m Oshen Dikkumbura",
  animated: {
    first: "Love to code",
    second: "Love to build Web Apps",
    third: "Love to build Mobile Apps",
  },
  description:
    "Skilled in Angular | ReactJs | NodeJS | ExpressJS | NestJS | JavaScript | TypeScript | I bring a wealth of experience in full-stack development to every project.",
};

const dataAbout = {
  title: "More About Me",
  aboutMe:
    "l am a goal-oriented individual with the ability to cope up with any responsibility and duty given to me. Ihave the capability of interacting with various types of people and working together as a team with having a good team spirit. Iam able to handle multiple tasks on a daily basis.",
};
const workTimeLine = [
  {
    jobTitle: "Trainee Software Engineer",
    where: "Echonlabs (Pvt) Ltd.",
    date: "2020",
  },
  {
    jobTitle: "Associate Software Engineer",
    where: "Echonlabs (Pvt) Ltd.",
    date: "2021 - Present",
  },
];

const skills = [
  {
    name: "Javascript",
    value: 60,
  },
  {
    name: "Typescript",
    value: 60,
  },
  {
    name: "React",
    value: 60,
  },
  {
    name: "Angular",
    value: 70,
  },
  {
    name: "React Native",
    value: 60,
  },
];

const services = [
  {
    title: "Web Developments",
    description:
      "CUSTOM WEB DEVELOPMENTS | WEB APPLICATION DEVELOPMENT | E-COMMERCE APP DEVELOPMENT | API DEVELOPMENT AND INTEGRATION",
  },
  {
    title: "Mobile App Developments",
    description:
      "CROSS PLATFORM APP DEVELOPMENTS | APP MAINTENANCE SUPPORT | API DEVELOPMENT AND INTEGRATION | CUSTOM APP DEVELOPMENT",
  },
];

const dataPortfolio = [
  {
    img: require("../src/assets/Projects/digi/digi_1.png"),
    description: "Protech | Powered By Janashakthi",
    key: "EL_DIGI",
    popup_img_1: require('../src/assets/Projects/digi/digi_4.png'),
    popup_img_2: require('../src/assets/Projects/digi/digi_3.png'),
    link: "https://digi.janashakthi.com/",
    details: [
      'A platform to explore, customize, and purchase insurance policies.',
      'Worked as a front-end developer while engaging with clients.',
      'Followed CSS methodologies such as BEM and ITCSS.',
      'Angular, Material UI, Sass',
    ]
  },
  {
    img: require("../src/assets/Projects/ncpa/ncpa1.png"),
    description: "NCPA | Government Project",
    key: "NCPA",
    popup_img_1: require('../src/assets/Projects/ncpa/ncpa1.png'),
    popup_img_2: require('../src/assets/Projects/ncpa/ncpa2.png'),
    link: "",
    details: [
      'Guide the junior batch complete to this project.',
      'Developed the system for automate the recruitment process.',
      'API integration for authentication and authorization using JWT.',
      'Angular, ExpressJs, NodeJs, MongoDB',
    ],
  },
  {
    img: require("../src/assets/Projects/lolc/m1.png"),
    description: "LOLC INSURANCE OneClick |  Powered By LOLC",
    key: 'LOLC_ONE_CLICK',
    popup_img_1: require('../src/assets/Projects/lolc/m2.png'),
    popup_img_2: require('../src/assets/Projects/lolc/m1.png'),
    link: "https://appagg.com/android/finance/lolc-insurance-oneclick-38797427.html?hl=en?hl=ko",
    details: [
      'Developed the Dynamic forms for customer services and claims Module.',
      'Developed the shared components.',
      'React Native, Redux, Redux-Saga, Firebase',
    ]
  },
  {
    img: require("../src/assets/Projects/ncc/ncc2.png"),
    description: "NCC | Government Project",
    key: 'LAKSHILPA',
    popup_img_1: require('../src/assets/Projects/ncc/ncc1.png'),
    popup_img_2: require('../src/assets/Projects/ncc/ncc2.png'),
    link: "https://reg.lakshilpa.com/app/login",
    details: [
      'Developed the system for Registering the HandCraft Artists.',
      'Angular, ExpressJs/ NodeJs, MongoDB',
    ]
  },
  {
    img: require("../src/assets/Projects/neo/neo_2.png"),
    description: "EL BaseNeo | EchonLabs",
    key: "BASE_NEO",
    popup_img_1: require('../src/assets/Projects/neo/neo_1.png'),
    popup_img_2: require('../src/assets/Projects/neo/neo_3.png'),
    link: "https://dev.neo.base.echonlabs.com/",
    details: [
      'Company Base System many of the systems are depends on that platform.',
      'Developed the knowledgebase module, both frontend and backend',
      'Angular, ExpressJs, NodeJs, MongoDB',
    ]
  },
  {
    img: require("../src/assets/Projects/aicore/aicore1.png"),
    description: "EL AiCore | EchonLabs",
    key: "Ai_Core",
    popup_img_1: require('../src/assets/Projects/aicore/aicore1.png'),
    popup_img_2: require('../src/assets/Projects/aicore/aicore2.png'),
    link: "https://aicore.echonlabs.com/",
    details: [
      'Ai based system for recognized the blurryNIC.',
      'Developed the three modules with both frontend and backend (Keys module, Customers Module, Product module)',
      'Angular, ExpressJs, NodeJs, MongoDB',
    ]
  },
];

const contactConfig = {
  YOUR_EMAIL: "dikkumburao@gmail.com",
  YOUR_FONE: "+94-715787181",
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialAccounts = {
  github: "https://github.com/Oshen1998",
  facebook: "https://web.facebook.com/oshen.dikkumbura.3",
  linkedin: "https://www.linkedin.com/in/oshen-dikkumbura-98b067175/",
  medium: "https://medium.com/@dikkumburao",
};
export {
  meta,
  dataAbout,
  dataPortfolio,
  workTimeLine,
  skills,
  services,
  introData,
  contactConfig,
  socialAccounts,
};
