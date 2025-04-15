// import React from 'react'
// import { Button } from '@/components/ui/button'
// import Typewriter from './TypeWriter'
// const Main = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-svh">
//         <h1>Type in the Username to be serched </h1>
//         <div className="">
//         <Typewriter
       
//         textArray={["Welcome to College Space!", "Chat. Organize. Excel."]}
//         typingSpeed={100}
//         pauseDuration={1500}
//         loop={true}
//       />
//         </div>
//          <Button>Click me</Button>
        
//        </div>
//   )
// }

// export default Main

// import React from 'react';
// import { Button } from '@/components/ui/button';
// import Typewriter from './TypeWriter';
// import { motion } from 'framer-motion';

// const Main = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-svh bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-gray-900 dark:to-black transition-colors duration-700 px-4">
      
//       <motion.h1
//         className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         Type in the Username to be searched
//       </motion.h1>

//       <motion.div
//         className="mb-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.8, duration: 0.8 }}
//       >
//         <Typewriter
//           textArray={["Welcome to College Space!", "Chat. Organize. Excel."]}
//           typingSpeed={100}
//           pauseDuration={1500}
//           loop={true}
//         />
//       </motion.div>

//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 1.2, duration: 0.6 }}
//       >
//         <Button className="shadow-md hover:shadow-xl transition-all duration-300">
//           Click me
//         </Button>
//       </motion.div>

//     </div>
//   );
// };

// export default Main;



// import React from 'react';
// import { Button } from '@/components/ui/button';
// import Typewriter from './TypeWriter';
// import { motion } from 'framer-motion';

// const Main = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-gray-900 dark:to-black transition-colors duration-700 px-4">
      

    
     



//       {/* Heading Animation */}
//       <motion.h1
//         className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Type in the Username to be searched
//       </motion.h1>

//       {/* Typewriter Text Animation */}
//       <motion.div
//         className="mb-6 text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6, duration: 0.8 }}
//       >
//         <Typewriter
//           textArray={["Welcome to College Space!", "Chat. Organize. Excel."]}
//           typingSpeed={100}
//           pauseDuration={1500}
//           loop={true}
//         />
//       </motion.div>

//       {/* Button Animation */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1, duration: 0.6 }}
//       >
//         <Button className="shadow-md hover:shadow-xl transition-all duration-300">
//           Click me
//         </Button>
//       </motion.div>
//     </div>
//   );
// };

// export default Main;


import React from 'react';
import { Button } from '@/components/ui/button';
import Typewriter from './TypeWriter';
import { motion } from 'framer-motion';
import { DialogDemo } from './DialogDemo';
import {useState} from 'react'

const Main = () => {
    
    

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] transition-colors duration-700">

      {/* Animated Floating Circles */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-pink-400 opacity-30 blur-3xl rounded-full"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 opacity-30 blur-3xl rounded-full"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Main Heading */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Visualize Any GitHub Profile in Seconds
      </motion.h1>

      {/* Typewriter Text */}
      <motion.div
        className="mb-6 text-center text-xl text-gray-600 dark:text-gray-200 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Typewriter
          textArray={["Welcome to GitHub Profile Viewer !", 
             "Explore.Analyze.Discover."
            ,"Insights at a Glance.",
            "Visualize. Analyze. Learn."
          ]}
          typingSpeed={100}
          pauseDuration={1500}
          loop={true}
        />
      </motion.div>

      {/* Button */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {/* <Button className="shadow-lg hover:shadow-xl transition-all duration-300">
          Click me
        </Button> */}
        <DialogDemo></DialogDemo>
      </motion.div>
    </div>
  );
};

export default Main;
