import { Button } from "./ui/button";
import { motion } from "motion/react";
import emmanuelPhoto from "figma:asset/eb859c61b3216966db925853d82b6991fe3cee9b.png";

export function Hero() {
  return (
    <section
      id="home"
      className="h-screen min-[700px]:h-screen max-[699px]:h-auto max-[699px]:min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-15 bg-blue-200 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-16 h-16 bg-indigo-200 rounded-full opacity-50"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-40"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-6 py-12 min-[700px]:py-12 max-[699px]:py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center min-[700px]:justify-between gap-12">
          <motion.div
            className="w-full min-[700px]:w-1/2 mb-8 md:mb-0 text-center min-[700px]:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="mb-4 text-5xl font-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <motion.span
                className="text-blue-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Emmanuel Opiyo
              </motion.span>
            </motion.h1>
            <motion.h2
              className="mb-6 text-gray-600 text-2xl font-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Junior Developer, Full Stack
            </motion.h2>
            <motion.p
              className="mb-8 text-gray-700 max-w-lg text-lg font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I build complete web applications from frontend to backend,
              specializing in modern technologies like React, Node.js, and
              databases. Passionate about clean code, responsive design, and
              creating seamless user experiences.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-200 font-black text-lg px-8 py-4"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-200 font-black text-lg px-8 py-4 border-2"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center hidden min-[700px]:flex"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-80 h-80 rounded-full overflow-hidden shadow-2xl relative z-10"
                animate={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={emmanuelPhoto}
                  alt="Emmanuel Opiyo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative ring */}
              <motion.div
                className="absolute inset-0 w-80 h-80 rounded-full border-4 border-blue-200 opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
