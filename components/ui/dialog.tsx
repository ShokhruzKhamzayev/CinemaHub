'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SearchInput from './searchInput'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export default function Dialog() {
  const [clicked, setClicked] = useState(false)
  const customPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setClicked(false)
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', (e) => customPress(e))
    return () => {
      window.removeEventListener('keydown', (e) => customPress(e))
    }
  }, [])
  const variation = {
    initial: {
      y: "-100%",
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <>
      <AnimatePresence>
        <button className='cursor-pointer' onClick={() => setClicked(true)}><MagnifyingGlassIcon width={35} height={35} /></button>
        <motion.div className='bg-transparent fixed inset-0 flex justify-center items-center z-[99999] blur-bg' initial={{ display: 'none', opacity: 0 }} animate={clicked ? { display: 'flex', opacity: 1 } : { display: 'none', opacity: 0 }}>
          <motion.div variants={variation} animate={clicked ? 'animate' : ''} transition={{ duration: 0.4, ease: 'backInOut' }} initial='initial' className='absolute bg-slate-500 w-[300px] h-[300px]'>
            <button onClick={() => setClicked(false)}>Close</button>
            <SearchInput setClicked={setClicked} />
          </motion.div>
        </motion.div>
      </AnimatePresence >
    </>
  )
}
