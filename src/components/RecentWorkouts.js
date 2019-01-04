import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class RecentWorkout extends Component {
    render() {
        const recentWorkoutList = this.props.projects;
        const recentWorkoutListDiv = recentWorkoutList ? recentWorkoutList.map(
            elem => {
                return (
                    <div className="card project-summary" key={elem.id + 'summary'}>
                        <div className="card-content grey-text text-darken-3" key={elem.id + 'content'}>
                            <span className="card-title center" key={elem.id + 'title'}>{elem.workoutName}</span>
                            <p className="center" key={elem.id + 'descripton'}>{elem.workoutDescription}</p>
                            <br key={elem.id + 'br'}></br>
                            <p className="grey-text right" key={elem.id + 'date'}> { 
                                elem.date.toDate().toDateString() }</p>
                        </div>
                    </div>
                )
            }
        ) :
        <div>
           <h3 className="center"> No Recent Workouts </h3>
        </div>
        return (
            <div className="recent container">
                <div className="row">
                    <div className="col s6 m12">
                        <div className="project-list section">
                            {recentWorkoutListDiv}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        projects: state.firestore.ordered.workoutDetails
    }
}

export default compose(
    connect(mapStatetoProps), 
    firestoreConnect([
        {collection: 'workoutDetails'}
    ]))(RecentWorkout);