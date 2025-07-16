export const useNavLinks = () =>
  useState<{ prependIcon: string; text: string; link: string }[]>(
    "nav-links",
    () => [
      {
        prependIcon: "ix:project-duplicate",
        text: "Pojects",
        link: "/projects",
      },
      {
        prependIcon: "",
        text: "Skills",
        link: "/skills",
      },
      {
        prependIcon: "",
        text: "About",
        link: "/about",
      },
      {
        prependIcon: "",
        text: "Contact",
        link: "/contact",
      },
    ],
  )
