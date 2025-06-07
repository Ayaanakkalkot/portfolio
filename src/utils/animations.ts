import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const scaleOnHover: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
};

export const slideInFromLeft: Variants = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const slideInFromRight: Variants = {
  hidden: {
    x: 100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const pulseAnimation: Variants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const rotateInFromLeft: Variants = {
  hidden: {
    x: -100,
    opacity: 0,
    rotate: -10
  },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}; 