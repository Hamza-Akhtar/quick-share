import React from 'react';

const WorkoutDetails = (props) => {

    const id = props.match.params.id;

    return (
        <div className="container section workout-details">
            <div className="card">
                <div className="card-content">
                    <span className="card-title center">Workout Title - {id}</span>
                    <p>hello</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>created by : name</div>
                    <div>2nd sep, 2019</div>
                </div>
            </div>
        </div>
    );

}

export default WorkoutDetails; 