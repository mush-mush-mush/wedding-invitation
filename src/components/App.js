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

// https://api.mapbox.com/styles/v1/mushmushmush/cktpeon7j25vn17o4b45n6wiv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXVzaG11c2htdXNoIiwiYSI6ImNrdHBlcjN0NjBtNzEzMG1waHZwNXdkdGYifQ.H3Ys3dq8x9IUJzYAogX1nA
// mapbox://styles/mushmushmush/cktpeon7j25vn17o4b45n6wiv

export default App;
