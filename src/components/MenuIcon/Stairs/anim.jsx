export const mountAnim = { initial: "initial", animate: "enter", exit: "exit" };

export const height = {
  initial: {
    height: 0,
  },

  enter: (i) => ({
    height: "100%",

    transition: { duration: 0.5, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] },
  }),

  exit: (i) => ({
    height: 0,

    transition: { duration: 0.3, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const background = {
  initial: {
    opacity: 0,
  },

  enter: {
    opacity: 0.5,

    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },

  exit: {
    opacity: 0,

    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};
