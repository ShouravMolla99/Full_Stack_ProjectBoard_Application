import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProjectTask = () => {

    let navigate = useNavigate()

    const [project_task, setUsers] = useState({
        summary: "",
        acceptanceCriteria: "",
        status: ""
    })
    // constructor( ) {
    //     super();
    //     this.state = {
    //         "summary":"",
    //         "acceptanceCriteria":"",
    //         status:""
    //     };
    // }
    const { summary, acceptanceCriteria, status } = project_task

    const onInputChange = (e) => {
        setUsers({ ...project_task, [e.target.name]: e.target.value })
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/board", project_task)
        navigate("/")
    }

    return (
        <div className="addProjectTask">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link className="btn btn-light" to={"/"}>
                            Back to Board
                        </Link>
                        <h4 className="display-4 text-center">Add /Update Project Task</h4>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="form-group mb-3">
                                <input type={"text"} className="form-control form-control-lg" placeholder="Project Task summary" name="summary" value={summary} onChange={(e) => onInputChange(e)}></input>
                            </div>
                            <div className="form-group mb-3">
                                <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria" value={acceptanceCriteria} onChange={(e) => onInputChange(e)}></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <select className="form-control form-control-lg" name="status" value={status} onChange={(e) => onInputChange(e)}>
                                    <option value="">Select Status</option>
                                    <option value="TO_DO">TO DO</option>
                                    <option value="IN_PROGRESS">IN PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProjectTask;