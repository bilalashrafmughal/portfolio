export const contactIcons = [
  {
    name: "github",
    heading: "Github",
    icon: "/assets/icons/github.png",
  },
  {
    name: "twitter",
    heading: "Twitter",
    icon: "/assets/icons/twitter.png",
  },
  {
    name: "linkedin",
    heading: "LinkedIn",
    icon: "/assets/icons/linkedin.png",
  },
];

export const getContactIcons = () => {
  const mode = window.localStorage.getItem("mode");
  if (mode === "light") {
    return [
      {
        name: "github",
        heading: "Github",
        icon: "/assets/icons/github.png",
        link: "https://github.com/bilalashrafmughal",
      },
      // {
      //   name: "twitter",
      //   heading: "Twitter",
      //   icon: "/assets/icons/twitter.png",
      // },
      {
        name: "linkedin",
        heading: "LinkedIn",
        icon: "/assets/icons/linkedin.png",
        link: "https://www.linkedin.com/in/bilal-ashraf-317453223/",
      },
    ];
  }
  return [
    {
      name: "github",
      heading: "Github",
      icon: "/assets/icons/github-d.png",
      link: "https://github.com/bilalashrafmughal",
    },
    // {
    //   name: "twitter",
    //   heading: "Twitter",
    //   icon: "/assets/icons/twitter-d.png",
    // },
    {
      name: "linkedin",
      heading: "LinkedIn",
      icon: "/assets/icons/linkedin-d.png",
      link: "https://www.linkedin.com/in/bilal-ashraf-317453223/",
    },
  ];
};
export const projectsList = [
  {
    project: "afterlib",
    images: [1, 2, 3, 4, 5],
    title: "Afterlib",
    preview: null,
    description:
      "This is very famous advertisement library which offers huge amount of ads which will really help to analysis about your new business. ",
    tech: "React js, MUI, Tailwind CSS, Redux toolkit, Node js, postgres DB",
  },
  {
    project: "strada",
    images: [1, 2, 3, 4],
    title: "Strada",
    preview: "https://www.strada.ai/",
    description:
      "This is enterprise property manager system which was built in CodeFulcurm team. This system consist of modules like budget calender, handling unpaid charges, invoices, and Cois.",
    tech: "React js, Node js, Express js, MongoDB",
  },
  {
    project: "codefulcrum",
    images: [1, 2, 3, 4, 5],
    title: "Codefulcrum",
    preview: "https://codefulcrum.com/",
    description:
      "This is portfolio website which displays projects, products and services of Codefulcrum Company. Furthermore it consist of blogs and technology stack of that company.",
    tech: "Gatsby, Python",
  },
  {
    project: "meezamimpex",
    images: [1, 2, 3, 4, 5, 6, 7, 8],
    title: "Meezam Impex",
    preview: "https://meezamimpex.netlify.app/",
    description:
      "This web application is B2C garments store which offers different kind of garments and sportswear. For bulk quantity it offers quotation of customers order.",
    tech: "React js, Tailwind CSS, Styled-components",
  },
  {
    project: "laltechnologies",
    images: [1, 2, 3, 4, 5, 6],
    title: "Lal Technologies",
    preview: "https://laltechnologies.com/",
    description:
      "This app belongs to medical billing and EMR, EHR and other medical services and salt products. I had build website and enterprise app also.",
    tech: "React js, C#",
  },
  {
    project: "ahd-alabrar",
    images: [1, 2, 3, 4],
    title: "AHD Alabrar",
    preview: "https://www.ahdalabrar.com/",
    description:
      "AHD is a website which offers glass and aluminum products and services to his customers. It displays portfolio of the business and about the services.",
    tech: "React js, Material UI, Styled Components",
  },
  {
    project: "stylecrafts",
    images: [1, 2, 3, 4, 5],
    title: "Style Crafts",
    preview: "https://stylecrafts.netlify.app/",
    description:
      "Stylecrafts is a website which offers glass and aluminum products and services to his customers. It displays portfolio of the business and about the services.",
    tech: "HTML, CSS, Javascript, Bootsrap",
  },
  {
    project: "socialapp",
    images: [1, 2, 3, 4, 5],
    title: "Social App",
    preview: "https://portfolio-social-app.netlify.app/",
    description:
      "This is full stack social app. This project covers authentication, singup, create posts, update posts, delete posts and view list of posts.Further more follow and unfollow and like and comments on any post.",
    tech: "React js, Bootstraps, Node js, Express js, MongoDB",
  },
];
