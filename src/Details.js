// Enter all your detials in this file
// Logo images
import logogradient from "./assets/RAKHA_LOGO.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import nextjs from "./assets/techstack/nextjs.svg";
// Porject Images
import projectImage1 from "./assets/projects/utconnect-app.png"; //utconnect
import projectImage2 from "./assets/projects/utportal-web.png"; //utportal
import projectImage3 from "./assets/projects/mysimba-app.png"; //simba app
import projectImage4 from "./assets/projects/simba-web.png"; //simba web
import projectImage5 from "./assets/projects/edot-app.png"; //edot app
import projectImage6 from "./assets/projects/edot-web.png"; //edot web

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Rakha Hidayat Wakid",
  tagline: "I build things for web & application",
  img: profile,
  about: `I am a skilled Frontend Developer with over five years of professional experience across various industries. I began my career at United Tractors Tbk., where I contributed to developing mobile and web applications for internal monitoring systems. After gaining valuable experience, I moved on to PT. Nagendra Kreasi Indonesia and later joined Simba Telecom PTE. LTD. SG, where I worked on apps focused on managing internet quotas and user subscriptions.`,
  about2: `Currently, I work at PT. EDOT, where I play a key role in building a SuperApp that integrates social media, eCommerce, messaging, and food delivery functionalities. My expertise lies in technologies like React Native, JavaScript, React.JS, TypeScript, Angular, and Next.JS, which I have applied in projects such as UT Connect, My SIMBA, and eDOT.`,
  about3: `I hold a degree in Computer and Network Engineering from Vocational High School 8 Malang and a Bachelor of Information Technology from the Polytechnic State of Malang. My strong technical background helps me create dynamic user experiences across both mobile and web platforms.`
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/rakha-hidayat-4064b81a0/",
  github: "https://www.github.com/rakhahidayat",
  // twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/rhw23",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Developer",
    Company: `United Tractors Tbk.`,
    Location: "Jakarta",
    Type: "Full Time",
    Duration: "Aug 2019 - Feb 2021",
  },
  {
    Position: "Frontend Developer",
    Company: `PT. Nagendra Kreasi Indonesia`,
    Location: "Jakarta",
    Type: "Full Time",
    Duration: "Feb 2021 - Nov 2021",
  },
  {
    Position: "Frontend Developer",
    Company: `Simba Telecom PTE. LTD. SG`,
    Location: "Singapore (WFA)",
    Type: "Full Time",
    Duration: "Nov 2021 - Nov 2022",
  },
  {
    Position: "Frontend Developer",
    Company: `PT. EDOT`,
    Location: "Bandung (WFA)",
    Type: "Full Time",
    Duration: "Nov 2022 - Present",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Computer and Network Engineering",
    Company: "Vocational High School 8 Malang",
    Location: "Malang",
    Type: "Graduated",
    Duration: "2012 - 2015",
  },
  {
    Position: "Bachelor of Information Technology",
    Company: `Polytechnic State of Malang`,
    Location: "Malang",
    Type: "Graduated",
    Duration: "2015 - 2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  nextjs: nextjs,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "UT Connect",
    image: projectImage1,
    description: `A monitoring application to detect total number of heavy equipment units that have been held by consumers to find out what fuel has been used and location of the unit.`,
    techstack: "React-Native, JavaScript",
    previewLink: "https://play.google.com/store/apps/details?id=com.unitedtractors.customer_portal",
  },
  {
    title: "UTPORTAL.UNITEDTRACTORS.COM",
    image: projectImage2,
    description: `Website for internal user to handle and monitoring user from mobile app "UT Connect"`,
    techstack: "HTML/CSS, React.JS, JavaScript",
    previewLink: "https://utportal.unitedtractors.com/",
  },
  {
    title: "My SIMBA",
    image: projectImage3,
    description: `Mobile App for user to see their detail Internet Quota and to subscribe or purchase another Plan for their Internet Quotas in Singapore`,
    techstack: "React-Native, JavaScript",
    previewLink: "https://play.google.com/store/apps/details?id=com.tpg_sg",
  },
  {
    title: "SIMBA.SG",
    image: projectImage4,
    description: `Website landing page using React for customer to choose Plan for their Internet Quotas. Registration page using Angular.`,
    techstack: "React.JS, React-Native, JavaScript",
    previewLink: "https://simba.sg",
  },
  {
    title: "eDOT",
    image: projectImage5,
    description: `Mobile application React-Native this apps have a Social Media, eCommerce, Messaging and Food Delivery or we usually call it SuperApp.`,
    techstack: "React-Native, TypeScript",
    previewLink: "https://play.google.com/store/apps/details?id=com.pmaapp.ehashtag",
  },
  {
    title: "EDOT.ID",
    image: projectImage6,
    description: `Website landing page using Next.JS for customer to offer PoS feature from eDOT. Any other web can redirect from this web that call name eSuite, eWork, etc`,
    techstack: "Next.JS, TypeScript",
    previewLink: "https://edot.id/",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "rakhahidayatwakid23@gmail.com",
  phone: "+62 8233 2684 007",
};
