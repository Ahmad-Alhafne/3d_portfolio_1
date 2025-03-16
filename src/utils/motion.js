export const textVariant = (delay) => {
  return {
    hidden: {
      y: window.innerWidth < 768 ? -20 : -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration:  window.innerWidth < 768 ? 0.75 : 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ?  (window.innerWidth < 768 ? 50 : 100)  : direction === "right" ? (window.innerWidth < 768 ? -50 : -100) : 0,
      y: direction === "up" ?(window.innerWidth < 768 ? 50 : 100) : direction === "down" ? (window.innerWidth < 768 ? -50 : -100)  : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: window.innerWidth < 768 ? 0.5 :duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: window.innerWidth < 768 ? 0.8 : 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: window.innerWidth < 768 ? 0.5 : duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? (window.innerWidth < 768 ? "-50%" : "-100%") 
        : direction === "right" ? (window.innerWidth < 768 ? "50%" : "100%") 
        : 0,
      y: direction === "up" ? (window.innerWidth < 768 ? "50%" : "100%") 
        : direction === "down" ? (window.innerWidth < 768 ? "50%" : "100%") 
        : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: window.innerWidth < 768 ? 0.5 : duration, // Reduce duration for mobile
        ease: "easeOut",
      },
    },
  };
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
