// NAVIGATION BAR STYLE
window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if (this.scrollY <= 160) nav.className = 'navigation';
  else nav.className = 'scroll-navigation';
};
