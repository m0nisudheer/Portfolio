"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MailOpen } from "lucide-react";

declare module "framer-motion" {
  interface MotionProps {
    className?: string;
    onClick?: React.MouseEventHandler<any>;
    id?: string;
  }
}

export default function ContactUs() {
  const [open, setOpen] = useState(false);

  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      transformOrigin: "bottom right",
    },
    visible: {
      opacity: 1,
      scale: 1,
      transformOrigin: "bottom right",
    },
    exit: {
      opacity: 0,
      scale: 0,
      transformOrigin: "bottom right",
    },
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-xl hover:bg-gray-800 transition flex items-center justify-center"
      >
        <MailOpen className="text-2xl text-white" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Black Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Popup */}
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed bottom-20 right-12 w-[320px] bg-white p-5 rounded-xl shadow-2xl z-50 border border-black"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-gray-700 hover:text-black"
              >
                ✕
              </button>

              <div className="flex flex-col items-center mb-3">
                <Mail className="text-4xl text-black mb-2 animate-bounce" />
                <h2 className="text-xl font-semibold text-black">Contact Us</h2>
              </div>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-black rounded-lg px-3 py-2 mb-3 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-black rounded-lg px-3 py-2 mb-3 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                className="w-full border border-black rounded-lg px-3 py-2 h-20 mb-3 focus:outline-none"
              />

              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Send Message
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
