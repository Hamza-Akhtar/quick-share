import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const WorkoutDetails = props => {
  const workout = props.workout;
  const table = workout
    ? workout.excercise.map(row => {
        return (
          <tr key={row.id}>
            <td key={row.id + "name"}>
              {" "}
              <p className="col m3 center">{row.name}</p>
            </td>
            <td key={row.id + "sets"}>
              {" "}
              <p className="col m3 center">{row.sets}</p>
            </td>
            <td key={row.id + "reps"}>
              {" "}
              <p className="col m3 center">{row.reps}</p>
            </td>
          </tr>
        );
      })
    : null;

  return workout ? (
    <div>
      <div className="container">
        <h2 id="workoutname" className="center">
          {workout.workoutName}
        </h2>
        <p id="workoutdescription" className="center">
          {workout.workoutDescription}
        </p>
        <br />
        <div className="row col-md-6 col-md-offset-2 custyle">
          <table className="table table-striped custab">
            <thead>
              <tr>
                <th>&emsp;&emsp;Exercise</th>
                <th>&emsp;Sets</th>
                <th>&emsp;Reps</th>
              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        </div>
        <br />
        <p className="right">
          <i>{"Created: " + workout.created.toDate().toDateString()}</i>
        </p>
      </div>
    </div>
  ) : (
    <div className="center">Workout not found</div>
  );
};

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const workout = state.firestore.data.workoutPlan;
  const workoutFilter = workout ? workout[id] : null;
  return {
    workout: workoutFilter
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "workoutPlan"
    }
  ])
)(WorkoutDetails);
