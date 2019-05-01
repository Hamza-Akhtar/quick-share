import React, { Component } from "react";
import { createWorkout } from "../store/actions/projectActions";
import { connect } from "react-redux";
import './CreateWorkout.css'

class CreateWorkout extends Component {
  state = {
    idGenDays: 0,
    workoutName: "Workout Name",
    workoutDescription: "A quick description about the workout",
    days: [
      {
        dayID: 0,
        idGenExcercise: 0,
        excercise: [
          {
            name: "Workout Name",
            sets: 0,
            reps: 0,
            id: 0
          }
        ]
      }
    ]
  };

  deleteDay(val) {
    var arr = this.state.days;
    arr = arr.filter(day => {
      return day.dayID !== val;
    });

    for (var k = val; k < arr.length; k++) {
      arr[k].dayID -= 1;
    }

    var newId = this.state.idGenDays - 1;
    this.setState({
      idGenDays: newId,
      days: arr
    });

    console.log(this.state);
  }

  changeWorkout = (e, val) => {
    var arr = e.target.id.split("-");
    var id = parseInt(arr[0]);
    var type = arr[1];
    const newArray = this.state.days[val].excercise.slice();

    for (var i = 0; i < newArray.length; i++) {
      if (newArray[i].id === id) {
        if (type === "name") {
          newArray[i].name = e.target.value;
        } else if (type === "sets") {
          newArray[i].sets = e.target.value;
        } else if (type === "reps") {
          newArray[i].reps = e.target.value;
        }
      }
    }

    var dayArray = this.state.days;

    dayArray[val].excercise = newArray;
    this.setState({
      days: dayArray
    });
  };

  changeNameOrDescription = e => {
    if (e.target.id === "workoutname") {
      this.setState({
        workoutName: this.refs.workoutname.innerText
      });
    } else {
      this.setState({
        workoutDescription: this.refs.workoutdescription.innerText
      });
    }
  };

  addRow = val => {
    var count = this.state.days[val].idGenExcercise + 1;

    var arr = this.state.days;

    arr[val].idGenExcercise = count;
    arr[val].excercise = [
      ...arr[val].excercise,
      {
        name: "name",
        sets: 0,
        reps: 0,
        id: count
      }
    ];

    this.setState({
      days: arr
    });
  };

  addDay = e => {
    var count = this.state.idGenDays + 1;
    this.setState({
      idGenDays: count,
      days: [
        ...this.state.days,
        {
          dayID: count,
          idGenExcercise: 0,
          excercise: [
            {
              name: "Workout Name",
              sets: 0,
              reps: 0,
              id: 0
            }
          ]
        }
      ]
    });
  };

  submit = () => {
    this.props.createWorkout(this.state);
  };

  deleteRow = (id, val) => {
    var arr = this.state.days;
    arr[val].excercise = arr[val].excercise.filter(excercise => {
      return excercise.id !== id;
    });

    this.setState({
      days: arr
    });
  };


  func(val) {
    const table = this.state.days[val].excercise.map(row => {
      return this.state.days[val].excercise.length === 1 ? (
        <tr key={row.id}>
          <td key={row.id + "name"}>
            {" "}
            <input
              id={row.id + "-name"}
              type="text"
              placeholder="excercise name"
              className="col m7 center"
              onChange={e => this.changeWorkout(e, val)}
            />
          </td>
          <td key={row.id + "sets"}>
            <input
              id={row.id + "-sets"}
              type="number"
              placeholder="0"
              min="0"
              className="col m3 center"
              onChange={e => this.changeWorkout(e, val)}
            />
          </td>
          <td key={row.id + "reps"}>
            <input
              id={row.id + "-reps"}
              type="number"
              placeholder="0"
              min="0"
              className="col m3 center"
              onChange={e => this.changeWorkout(e, val)}
            />
          </td>
          <td key={row.id}>
            <button disabled={true} className="btn" key={row.id}>
              del
            </button>
          </td>
        </tr>
      ) : (
        <tr key={row.id}>
          <td key={row.id + "name"}>
            {" "}
            <input
              id={row.id + "-name"}
              type="text"
              placeholder="excercise name"
              className="col m7 center"
              onChange={e => this.changeWorkout(e, val)}
            />{" "}
          </td>
          <td key={row.id + "sets"}>
            <input
              id={row.id + "-sets"}
              type="number"
              placeholder="0"
              min="0"
              className="col m3 center"
              onChange={e => this.changeWorkout(e, val)}
            />
          </td>
          <td key={row.id + "reps"}>
            <input
              id={row.id + "-reps"}
              type="number"
              placeholder="0"
              min="0"
              className="col m3 center"
              onChange={e => this.changeWorkout(e, val)}
            />
          </td>
          <td key={row.id}>
            <button
              onClick={() => this.deleteRow(row.id, val)}
              className="btn"
              key={row.id}
            >
              del
            </button>
          </td>
        </tr>
      );
    });
    return table;
  }

  render() {
    const outer = this.state.days.map(day => {
      return (
        <div className="row col-md-6 col-md-offset-2 custyle">
          <div className="row">
          <h5 >Day {day.dayID + 1}</h5>
          { this.state.days.length > 1 ? <button className="newButton"  onClick={() => this.deleteDay(day.dayID)}>Remove</button> : null }
          </div>
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
          <button onClick={() => this.addRow(day.dayID)} className="btn right">
            add excercise
          </button>
        </div>
      );
    });

    return (
      <div>
        <div className="container">
          <h2
            id="workoutname"
            ref="workoutname"
            onBlur={this.changeNameOrDescription}
            suppressContentEditableWarning="true"
            contentEditable={true}
            className="center"
          >
            Workout Name
          </h2>
          <p
            id="workoutdescription"
            ref="workoutdescription"
            onBlur={this.changeNameOrDescription}
            suppressContentEditableWarning="true"
            contentEditable={true}
            className="center"
          >
            A quick description about the workout
          </p>
          <p className="center">
            <i>click workout name or description to change them</i>
          </p>
          <br />
          {outer}
          <br />
          <div className="display">
          <button onClick={this.addDay} className="addDay btn orange right">
            Add Day
          </button>
          <button disabled={this.state.days[0].excercise[0].name == "Workout Name" ||
          this.state.days[0].excercise[0].name == ""} onClick={this.submit} className="addDay btn red right">
            Create Workout
          </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createWorkout: project => dispatch(createWorkout(project))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateWorkout);
