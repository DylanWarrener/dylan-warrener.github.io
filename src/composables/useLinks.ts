export const useNavLinks = () =>
  useState<{ prependIcon: string; text: string; link: string }[]>('nav-links', () => [
    {
      prependIcon: 'fa-solid:project-diagram',
      text: 'Pojects',
      link: '/projects',
    },
    {
      prependIcon: 'carbon:skill-level-advanced',
      text: 'Skills',
      link: '/skills',
    },
    {
      prependIcon: 'ix:about-filled',
      text: 'About',
      link: '/about',
    },
    {
      prependIcon: 'weui:contacts-filled',
      text: 'Contact',
      link: '/contact',
    },
  ])
