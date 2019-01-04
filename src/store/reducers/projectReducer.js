const initState = {
  projects: [
    {
      id: 0,
      workoutName: "PPLR",
      workoutDescription: "Push Pull, Legs, Rest",
      excercise: [
        {
          name: "pushups",
          sets: 5,
          reps: 5,
          id: 0
        },
        {
          name: "pushups",
          sets: 5,
          reps: 5,
          id: 1
        }
      ]
    },
    {
      id: 1,
      workoutName: "U/L",
      workoutDescription: "Upper, Lower, Rest",
      excercise: [
        {
          name: "pushups",
          sets: 5,
          reps: 5,
          id: 1
        }
      ]
    },
    {
      id: 2,
      workoutName: "Full Body",
      workoutDescription: "Full Body, Rest",
      excercise: [
        {
          name: "pushups",
          sets: 5,
          reps: 5,
          id: 2
        }
      ]
    }
  ]
};

const projectReducer = (state = initState, action) => {

  switch (action.type) {
    case 'CREATE_WORKOUT':
      console.log('created', action.project);
      return state;

    case 'CREATE_WORKOUT_ERROR':
      console.log('error', action.err);
      return state;

    default:
      return state;
  }
};

export default projectReducer;