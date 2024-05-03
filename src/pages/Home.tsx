import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import { useState } from 'react'

interface exercisesList {
  id: string;
  name: string;
  gifUrl: string;
  target: string;
  equipment: string;
  bodyPart: string;
}[]

const Home: React.FC = () => {
  const [bodyPart, setBodyPart] = useState<string>("all")
  const [exercises, setExercises] = useState<exercisesList[]>([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home