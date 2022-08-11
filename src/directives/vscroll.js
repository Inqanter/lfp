export const vScroll = {
  mounted: (el) => {
    if (document.documentElement.clientWidth <= 1280) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
      });
    }
  }
};
