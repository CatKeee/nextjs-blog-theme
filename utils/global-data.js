export const getGlobalData = () => {
  const name = "JXDN's Blog";
  const blogTitle = "JXDN's Blog";
  const footerText = 'All rights reserved.';
  const navList = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  return {
    name,
    blogTitle,
    footerText,
    navList
  };
};
