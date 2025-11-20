import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQItem({ pregunta, respuesta }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <div className="faq-header">
        <h4>{pregunta}</h4>
        <span className="faq-icon">{open ? "−" : "+"}</span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="faq-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <p>{respuesta}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}