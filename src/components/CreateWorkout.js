import React, { Component } from 'react'
import { createWorkout } from '../store/actions/projectActions'
import { connect } from 'react-redux';

class CreateWorkout extends Component {

    state = {
        idGen: 0,
        workoutName: "Workout Name",
        workoutDescription: "A quick description about the workout",
        excercise: [
            {
                name: "name",
                sets: 0,
                reps: 0,
                id: 0
            },
        ]
    }

    deleteRow = (id) => {
        this.setState({
            excercise: this.state.excercise.filter(excercise => {
                return excercise.id !== id;
            })
        });
    }

    addRow = (e) => {
        var count = this.state.idGen + 1;
        this.setState({
            idGen: count,
            excercise: [
                ...this.state.excercise,
                {
                    name: "name",
                    sets: 0,
                    reps: 0,
                    id: count
                }
            ]
        });
    }

    changeWorkout = (e) => {
        var arr = e.target.id.split('-');
        var id = parseInt(arr[0]);
        var type = arr[1];
        const newArray = this.state.excercise.slice();

        for (var i = 0; i < newArray.length; i++) {
            if (newArray[i].id === id) {
                if (type === "name") {
                    newArray[i].name = e.target.value;
                }
                else if (type === "sets") {
                    newArray[i].sets = e.target.value;
                }
                else if (type === "reps") {
                    newArray[i].reps = e.target.value;
                }
            }
        }

        this.setState({
            excercise: newArray
        });
    }

    changeNameOrDescription = (e) => {
        if (e.target.id === "workoutname") {
            this.setState({
                workoutName: this.refs.workoutname.innerText
            });
        }
        else {
            this.setState({
                workoutDescription: this.refs.workoutdescription.innerText
            });
        }
    }

    submit = () => {
        this.props.createWorkout(this.state)
    }

    render() {
        const table = this.state.excercise.map(row => {
            return this.state.excercise.length === 1 ?
                <tr key={row.id}>
                    <td key={row.id + 'name'}> <input id={row.id + '-name'} type="text" placeholder="excercise name" className="col m7 center" onChange={this.changeWorkout} /></td>
                    <td key={row.id + 'sets'}><input id={row.id + '-sets'} type="number" placeholder="0" min="0" className="col m3 center" onChange={this.changeWorkout} /></td>
                    <td key={row.id + 'reps'}><input id={row.id + '-reps'} type="number" placeholder="0" min="0" className="col m3 center" onChange={this.changeWorkout} /></td>
                    <td key={row.id}><button disabled={true} className="btn" key={row.id}>del</button></td>
                </tr>
                :
                <tr key={row.id}>
                    <td key={row.id + 'name'}> <input id={row.id + '-name'} type="text" placeholder="excercise name" className="col m7 center" onChange={this.changeWorkout} />  </td>
                    <td key={row.id + 'sets'}><input id={row.id + '-sets'} type="number" placeholder="0" min="0" className="col m3 center" onChange={this.changeWorkout} /></td>
                    <td key={row.id + 'reps'}><input id={row.id + '-reps'} type="number" placeholder="0" min="0" className="col m3 center" onChange={this.changeWorkout} /></td>
                    <td key={row.id}><button onClick={() => this.deleteRow(row.id)} className="btn" key={row.id}>del</button></td>
                </tr>
        })
        return <div>
            <div className="container">
                <h2 id="workoutname" ref="workoutname" onBlur={this.changeNameOrDescription} suppressContentEditableWarning="true" contentEditable={true} className="center">
                    Workout Name
              </h2>
                <p id="workoutdescription" ref="workoutdescription" onBlur={this.changeNameOrDescription} suppressContentEditableWarning="true" contentEditable={true} className="center">
                    A quick description about the workout
              </p>
                <p className="center"><i>click workout name or description to change them</i></p>
                <br />
                <div className="row col-md-6 col-md-offset-2 custyle">
                    <table className="table table-striped custab">
                        <thead>
                            <tr>
                                <th>&emsp;&emsp;Exercise</th>
                                <th>&emsp;Sets</th>
                                <th>&emsp;Reps</th>
                                <th className="text-center" />
                            </tr>
                        </thead>
                        <tbody>{table}</tbody>
                    </table>
                    <button onClick={this.addRow} className="btn right">
                        add excercise
                </button>
                </div>
                <br></br>
                <button onClick={this.submit} className="btn red right">
                    Create Workout
                </button>
            </div>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createWorkout: (project) => dispatch(createWorkout(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateWorkout);
