import { createBrowserHistory } from 'history';

export const createWorkout = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        var id = null;

        firestore.collection('workoutPlan').add({
            ...project,
            created: new Date()
        }).then((docRef) => {
            id = docRef.id;
            firestore.collection('workoutDetails').add({
                workoutName: project.workoutName,
                workoutDescription: project.workoutDescription,
                id: id,
                date: new Date()
            });
            dispatch({ type: 'CREATE_WORKOUT', project });
            const history = createBrowserHistory({
                forceRefresh: true
              });
            history.push('/workout/' + id);
        }).catch((err) => {
            dispatch({ type: 'CREATE_WORKOUT_ERROR', err });
        })
    }
};