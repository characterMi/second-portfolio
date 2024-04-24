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

export const zoomInHidden = {
  scale: 0,
  opacity: 0,
};

export const zoomInVisible = (delay, duration) => ({
  scale: 1,
  opacity: 1,
  transition: {
    type: "tween",
    delay: delay,
    duration: duration,
    ease: "easeOut",
  },
});

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
