import { motion } from "framer-motion";
import React from "react";
import Couple from "./couple";
import Header from "./header";
import Location from "./location";
import Quote from "./quote";
import Wish from "./wish";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <Header />
      <Quote />
      <Couple />
      <Location />
      <Wish />
    </motion.div>
  );
}

export default App;
