export const scrollToSection = (id, topOffset) => {
  const section = document.getElementById(id);
  if (section) {
    const offset = section.offsetTop - topOffset; 
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  }
};