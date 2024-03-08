const UseMoveToSection = () => {
  const clickHeaderButton = (id, offset = 80) => {
    const section = document.getElementById(id);

    if (section) {
      const sectionPosition = section.offsetTop;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth",
      });
      console.log(sectionPosition);
    }
  };

  return { clickHeaderButton };
};

export default UseMoveToSection;
