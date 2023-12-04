let mydiv = document.getElementById("GridBox");
let projectDiv = document.getElementById("project-grid");

function Skills() {
  const mySkill = [
    {
      title: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      title: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    },
    {
      title: "JAVASCRIPT",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      title: "REACT",
      img: "https://ionicframework.com/docs/icons/logo-react-icon.png",
    },
    {
      title: "REDUX",
      img: "https://images.opencollective.com/redux-devtools-extension/965cbe9/logo/256.png",
    },
    {
      title: "CHAKRA-UI",
      img: "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
    },
    {
      title: "TAILWIND CSS",
      img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
  ];
  let skill = mySkill
    .map((ele) => {
      return `<div class="grid-div">
        <img src=${ele.img} alt="" />
          <p>${ele.title}</p>
    </div>`;
    })
    .join(" ");
  mydiv.innerHTML = skill;
}
Skills();

function Projects() {
  const myProjects = [
    {
      name: "Purplle",
      discription:
        "Purplle.com is an online store that sells cosmetics, fragrances, skin, and hair care products.It was founded in 2011 and is headquartered in Mumbai, Maharashtra. Purplle has over 1,000 brands, 60,000 products, and 7 million monthly active users. The company uses a mix of organic and paid marketing techniques to reach its target audience",

      Techstack: "HTML,CSS,React,Redux,ChakraUi...",
      repo: "Git Repo",
      LiveSite: "Live Site",
      img: "https://miro.medium.com/v2/resize:fit:1200/1*MVJ9c0M3O6XgtXixCeATZQ.png",
      livelink: "https://purple-clone-4uck.vercel.app/",
      gitlink:
        "https://github.com/shilpabijalwan/purpleClone/tree/main/purple-clone",
    },
    {
      name: "AutoZone",
      discription:
        "AutoZone is the nation's leading retailer and a leading distributor of automotive replacement parts and accessories with more than 7,000 stores in the US, Mexico, Brazil and Puerto Rico. Each store carries an extensive line for cars, sport utility vehicles, vans and light trucks, including new and remanufactured hard parts, maintenance items and accessories.",

      Techstack: "HTML,CSS,JavaScript...",
      repo: "Git Repo",
      LiveSite: "Live Site",
      img: "https://www.retailtouchpoints.com/wp-content/uploads/2021/11/AutoZone-960x514.png",
      livelink: "https://darling-yeot-95e7b2.netlify.app/",
      gitlink: "https://github.com/bharat24862486/prized-beef-1928?search=1",
    },
  ];
  const allprojects = myProjects
    .map((ele) => {
      return `<div class="project-div">
        <img src=${ele.img} alt="" />
            <h1>${ele.name}</h1>
            <p class="Paragraph">${ele.discription}</p>
            <p class="Tech">TechStack:-  ${ele.Techstack}</p>
            <div class="Buttons">

            <a href=${ele.livelink}><button class="btn">${ele.LiveSite}</button></a>

            <a href=${ele.gitlink}><button class="btn">${ele.repo}</button></a>
            </div>

          
    </div>`;
    })
    .join(" ");
  projectDiv.innerHTML = allprojects;
}
Projects();

const links = document.querySelectorAll("a");

// Loop through each link and add an event listener

