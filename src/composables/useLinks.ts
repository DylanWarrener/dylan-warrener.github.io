export const useNavLinks = () =>
  useState<{ text: string; link: string }[]>("nav-links", () => [
    {
      text: "Pojects",
      link: "/projects",
    },
    {
      text: "Skills",
      link: "/skills",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Contact",
      link: "/contact",
    },
    {
      text: "CV",
      link: "",
    },
  ])
