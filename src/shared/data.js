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
  }
  return [
    {
      name: "github",
      heading: "Github",
      icon: "/assets/icons/github-d.png",
    },
    {
      name: "twitter",
      heading: "Twitter",
      icon: "/assets/icons/twitter-d.png",
    },
    {
      name: "linkedin",
      heading: "LinkedIn",
      icon: "/assets/icons/linkedin-d.png",
    },
  ];
};
