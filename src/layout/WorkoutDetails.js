import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class WorkoutDetails extends Component {


  func(val) {
    const table = this.props.workout.days[val].excercise.map(row => {
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

      return table;
  }


  render() {

  const workout = this.props.workout;

  const outer = 
  workout
    ? workout.days.map(day => {
    return (
      <div className="row col-md-6 col-md-offset-2 custyle">
        <h5>Day {day.dayID + 1}</h5>
        <table className="table table-striped custab">
          <thead>
            <tr>
              <th>&emsp;&emsp;Exercise</th>
              <th>&emsp;Sets</th>
              <th>&emsp;Reps</th>
              <th className="text-center" />
            </tr>
          </thead>
          <tbody>{this.func(day.dayID)}</tbody>
        </table>
        <br></br>
      </div>
    );
  }) : null;

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
        {outer}
        <br />
        <p className="right">
          <i>{"Created: " + workout.created.toDate().toDateString()}</i>
        </p>
      </div>
    </div>
  ) : (
    <div className="center">Workout not found</div>
  );
}
}

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
