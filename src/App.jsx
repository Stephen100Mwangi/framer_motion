import React from 'react'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <div>

      <motion.div
          //  Props
          animate={{y: 100}}
       style={{background:"red", height:"120px", width:"120px"}}></motion.div>
      
    </div>
  )
}

export default App
