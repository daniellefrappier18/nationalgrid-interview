import React from 'react';
import {connect} from 'react-redux';
import {setPriorityFilter, setStatusFilter} from '../redux/jobs/jobs-actions';

const Filter = ({setPriorityFilter, setStatusFilter}) => {
    function handlePriorityFilterChange(e) {
       setPriorityFilter(e.target.value)
    }

    function handleStatusFilterChange(e) {
        setStatusFilter(e.target.value)
     }

    return ( 
        <div>
            <div className="priority-filter">
                <label htmlFor="priority-filter"><h2>Priority</h2></label>
                <select onChange={handlePriorityFilterChange} id="priority-filter">
                    <option value="all">All</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>

            <div className="status-filter">
                <label htmlFor="status-filter"><h2>Status</h2></label>
                <select onChange={handleStatusFilterChange} id="status-filter">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="in_progress">In Progress</option>
                    <option value="assigned">Assigned</option>
                    <option value="unassigned">Unassigned</option>
                </select>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPriorityFilter: (priority) => dispatch(setPriorityFilter(priority)),
        setStatusFilter: (status) => dispatch(setStatusFilter(status))
    }
}


export default connect(null, mapDispatchToProps)(Filter);