import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent">
      <div className="text-center">
        <motion.div
          className="relative w-32 h-32 mx-auto mb-8"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 rounded-full border-8 border-white/20"></div>
          <div className="absolute inset-0 rounded-full border-8 border-white border-t-transparent animate-spin"></div>
        </motion.div>
        
        <motion.h1
          className="text-5xl font-display font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Best Event
        </motion.h1>
        
        <motion.p
          className="text-xl text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Hayalinizdeki etkinlik yükleniyor...
        </motion.p>
      </div>
    </div>
  )
}

export default Loading
