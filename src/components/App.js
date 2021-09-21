import { motion } from "framer-motion";
import React from "react";
import Couple from "./couple";
import Footer from "./footer";
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
      <Footer />
    </motion.div>
  );
}

export default App;
