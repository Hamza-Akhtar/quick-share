import React, { Component } from 'react';

class RecentWorkout extends Component {
    render() {
        return(
           <div className="recent container">
            <div className="row">
                <div className="col s6 m12">
                    <div className="project-list section">

                        <div className="card project-summary">
                            <div className="card-content grey-text text-darken-3">
                                <span className="card-title center">Workout Name</span>
                                <p className="grey-text left ">created by: name</p>
                                <p className="grey-text right">31 december, 2018</p>
                            </div>
                        </div>

                        <div className="card project-summary">
                            <div className="card-content grey-text text-darken-3">
                                <span className="card-title center">Workout Name</span>
                                <p className="grey-text left ">created by: name</p>
                                <p className="grey-text right">31 december, 2018</p>
                            </div>
                        </div>


                        <div className="card project-summary">
                            <div className="card-content grey-text text-darken-3">
                                <span className="card-title center">Workout Name</span>
                                <p className="grey-text left ">created by: name</p>
                                <p className="grey-text right">31 december, 2018</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
           </div>

        );
    }
}

export default RecentWorkout;