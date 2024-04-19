import React from 'react'
import { bodyPartType, exerciseList } from '../types'

type ExercisesProps = {
  setExercises: exerciseList[];
  bodyPart: bodyPartType;
  setBodyPart: bodyPartType;
}

const Exercises = ({ setExercises, bodyPart, setBodyPart }) => {
  return (
    <div>Exercises</div>
  )
}

export default Exercises