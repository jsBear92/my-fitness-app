import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import { useState } from 'react'
import { bodyPart, exercisesList, fitness } from '../types'

const Home: React.FC<fitness> = () => {
  const [bodyPart, setBodyPart] = useState<bodyPart>("all")
  const [exercises, setExercises] = useState<exercisesList[]>([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
  )
}

export default Home