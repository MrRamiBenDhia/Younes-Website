import imgHeist from "./assets/images/The-Heist.png";
import imgYounes from "./assets/images/younesImg.png"
import imgEsMod from "./assets/images/IMG-0642.jpg"
import imgFleshPit from './assets/images/Fleshpit.png'
import imgJenjoun from './assets/images/jenjoon.png'
import imgUnreal from './assets/images/Sci-Fi-Game-Kit-Unreal-Editor-2023-12-06-21-00-32-00-00-02-19-Still001.gif'



const logotext = "YOON";
const meta = {
    title: "Younes Sallami",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Younes Sallami",
    animated: {
        first: "Tech Engineer & Artist",
        second: "Visual Art Creator",
        third: " Game Developer & Innovator",
    },
    description: "Passionate about crafting immersive gaming experiences, I bring a unique blend of technical expertise and artistic creativity. Specializing in seamlessly integrating cutting-edge technology with captivating visuals, I consistently elevate game aesthetics. As a dedicated Game Developer & Innovator, I thrive on pushing boundaries, ensuring each project is a testament to innovation in the gaming world.",
    your_img_url: imgYounes,
};

const dataabout = {
    title: "About My Self",
    aboutme: "Hello, I'm Younes Sallami, fueled by a lifelong passion for video games and visual art. From childhood, I immersed myself in the intricate world of game development, driven by a fascination with the entire creative process. Beyond playing masterpieces, my journey began with editing shaders and crafting artistic video clips, contributing to various events. After obtaining my bachelor's degree in mechanical engineering, I made a decisive shift, pursuing my primary hobby with a dedicated engineering course in computer science, specializing in gaming development and graphical design at The Private Higher School of Engineering and Technology.",
};


const skills = [{
    name: "C#",
    value: 90,
},
{
    name: "Blueprint",
    value: 85,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "C + +",
    value: 60,
},
{
    name: "Dart",
    value: 70,
},
];

const services = [{
    title: "Adope",
    description: "I specialize in creating captivating visual stories with Adobe Premiere, offering video editing services that enhance your content, from cinematic storytelling to polished promotional videos.",
},
{
    title: "Games & Simulations & Virtual reality",
    description: "Unlocking immersive experiences: Leveraging Unreal Engine and Unity, I craft cutting-edge virtual worlds and interactive simulations, offering services that bring your ideas to life in the realms of gaming, simulations, and virtual reality.",
},
{
    title: "Web & Mobile Application",
    description: "Specializing in Flutter, Node.js, and Symphony, I offer comprehensive services to develop high-performance applications, ensuring a harmonious blend of efficiency and innovation in your digital ventures.",
},
];

const dataportfolio = [{
    img: imgHeist,
    description: "Bank heist is a VR Desktop game that involves around robbing a bank ",
    link: "https://www.youtube.com/watch?v=8O1NvM041e0",
},
{
    img: imgFleshPit,
    description: "Fleshpit is a third person perspective mobile mul-tiplayer.",
    link: "https://www.youtube.com/watch?v=ha9QjYkZ-2k",
},
{
    img: imgEsMod,
    description: "Esmod project directed by younes sallami",
    link: "https://www.instagram.com/p/CfcD9KhA-ZW/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
},
{
    img: imgJenjoun,
    description: "Behind the scenes and making of with Production company SMURFS production  .",
    link: "#https://www.instagram.com/reel/Chkf-L1jvaY/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
},

{
    img: imgUnreal,
    description: "AudioReactive Simulation RealTime Work This is an Exemple I will import athor's later .",
    link: "https://drive.google.com/file/d/1xZ9NX4n6UAAzFMBdvpi0O7k4INcc9nPb/view?usp=sharing",
}
];

const contactConfig = {
    YOUR_EMAIL: "younes.sallami@esprit.tn",
    YOUR_FONE: "(216)560-66956",
    description: "Thank you for entrusting me with your projects . it's been a pleasure working together to bring ideas to life and achieve shared success . ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Younessallami",
    facebook: "https://www.facebook.com/profile.php?id=100004350934826",
    linkedin: "https://www.linkedin.com/in/younes-sallami-b07743257/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,

    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};