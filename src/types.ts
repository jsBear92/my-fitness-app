// type bodyPartsList = {
//   type: string;
// };

// type exerciseData = {
//   name: string;
//   target: string;
//   equipment: string;
//   bodyPart: string;
// };

// type bodyPartType = string;

// type exerciseList = {
//     exercise: string;
// }


type bodyPart = string;

type exercisesList = {
  name: string;
  target: string;
  equipment: string;
  bodyPart: string;
}

type bodyPartsList = {
  type: string;
};

type fitness = {
  bodyPart: bodyPart;
  setBodyPart: React.Dispatch<React.SetStateAction<bodyPart>>;
  exercises: exercisesList[];
  setExercises: React.Dispatch<React.SetStateAction<exercisesList[]>>;
}

export type { bodyPart, exercisesList, bodyPartsList, fitness };
