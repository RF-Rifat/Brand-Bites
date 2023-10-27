import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100%",
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
