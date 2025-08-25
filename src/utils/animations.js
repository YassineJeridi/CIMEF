// Framer Motion animation variants for CIMEF website

export const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
        scale: 0.98
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.98,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

export const fadeInVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

export const slideVariants = {
    left: {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },
    right: {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },
    up: {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },
    down: {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }
}

export const scaleVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
            duration: 0.6
        }
    }
}

export const cardHoverVariants = {
    rest: {
        scale: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.02,
        y: -8,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
}

export const buttonHoverVariants = {
    rest: {
        scale: 1,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    },
    tap: {
        scale: 0.95,
        transition: {
            duration: 0.1,
            ease: "easeOut"
        }
    }
}

export const spinnerVariants = {
    animate: {
        rotate: 360,
        transition: {
            duration: 1,
            ease: "linear",
            repeat: Infinity
        }
    }
}

export const pulseVariants = {
    animate: {
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7],
        transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
        }
    }
}

export const floatVariants = {
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity
        }
    }
}

export const textRevealVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    })
}

export const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 50
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        y: 50,
        transition: {
            duration: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

export const backdropVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
}

export const navVariants = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

export const mobileMenuVariants = {
    closed: {
        x: "100%",
        transition: {
            duration: 0.3
        }
    },
    open: {
        x: 0,
        transition: {
            duration: 0.3
        }
    }
}
