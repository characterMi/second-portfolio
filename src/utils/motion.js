export const heroHeadTextAnimation = {
  initial: {
    scaleY: 0,
    opacity: 0,
  },
  start: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      delay: 0.5,
    },
  },
};

export const heroSubTextAnimation = {
  initial: {
    paddingTop: "50px",
  },
  start: (index) => ({
    paddingTop: "0px",
    transition: {
      duration: 0.75,
      type: "spring",
      delay: 1.5 + index * 0.1,
    },
  }),
};

export const zoomIn = {
  initial: {
    scale: 0,
  },
  start: (delay) => ({
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      delay,
    },
  }),
  exit: {
    scale: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export const increaseHeight = {
  initial: {
    opacity: 0,
    scaleY: 0,
  },
  start: (delay) => ({
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.75,
      type: "spring",
      delay: delay || 0.3,
    },
  }),
  exit: (delay) => ({
    opacity: 0,
    scaleY: 0,
    transition: {
      duration: 0.75,
      type: "spring",
      delay: delay || 0.3,
    },
  }),
};

export const serviceCardsAnimation = {
  initial: {
    opacity: 0,
    rotateZ: 90,
    scaleX: 0,
  },
  enter: (delay) => ({
    opacity: 1,
    rotateZ: 0,
    scaleX: 1,
    transition: {
      duration: 0.75,
      type: "spring",
      delay,
    },
  }),
  exit: {
    opacity: 0,
    rotateZ: 90,
    scaleX: 0,
  },
};

export const textVariantHidden = {
  opacity: 0,
  y: -50,
};

export const textVariantVisible = (delay) => ({
  y: 0,
  opacity: 1,
  transition: {
    type: "spring",
    duration: 1.25,
    delay: delay || 0,
  },
});

export const fadeInHidden = (direction) => ({
  x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
  y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
  opacity: 0,
});

export const fadeInVisible = (type, delay, duration) => ({
  x: 0,
  y: 0,
  opacity: 1,
  transition: {
    type: type,
    delay: delay,
    duration: duration,
    ease: "easeOut",
  },
});

export const rotateIn = {
  initial: {
    opacity: 0,
    rotateX: 120,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "tween",
      delay: i * 0.05,
      ease: "easeOut",
      duration: 0.5,
    },
  }),
  exit: (i) => ({
    opacity: 0,
    rotateX: 120,
    transition: {
      type: "tween",
      delay: i * 0.05,
      ease: "easeOut",
      duration: 0.5,
    },
  }),
};

export const slideInHidden = (direction) => ({
  x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
  y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
});

export const slideInVisible = (type, delay, duration) => ({
  x: 0,
  y: 0,
  transition: {
    type: type,
    delay: delay,
    duration: duration,
    ease: "easeOut",
  },
});

export const navBarSlideIn = {
  initial: {
    y: "-100%",
  },
  enter: {
    y: "0%",
    transition: {
      duration: 0.75,
      type: "spring",
      delay: 2.7,
      stiffness: 350,
      damping: 10,
      mass: 0.5,
    },
  },
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

// Menu
export const menuSlide = {
  initial: {
    x: "calc(100% + 100px)",
  },
  enter: {
    x: "0",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide = {
  initial: {
    x: "80px",
  },
  enter: (index) => ({
    x: "0px",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * index,
    },
  }),
  exit: (index) => ({
    x: "80px",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * index,
    },
  }),
};
