import React from 'react';

const Footer = () => {
  // All links in footer lead to home until other pages are built out
  return (
    <div className="Footer">
      <a href="/">Home</a> | <a href="/">Services</a> | <a href="/">Contact</a>{' '}
      | <a href="/">About</a>
      <p>&copy;{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
