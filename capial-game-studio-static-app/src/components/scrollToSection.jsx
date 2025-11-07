export const scrollToSection = (id, topOffset) => {
  const section = document.getElementById(id);
  if (section) {
    const offset = section.offsetTop - 80; // ajusta se quiser espaço por causa do menu
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  }
};