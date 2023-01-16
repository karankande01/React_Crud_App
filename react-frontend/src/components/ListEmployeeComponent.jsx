import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link ,useParams} from "react-router-dom";

export default function Home() {
    const [employees, setEmployees] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/employees");
        setEmployees(result.data);
    };

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:8080/api/v1/employee/${id}`);
        loadEmployees();
    };

    return (
        <div className="container">
            <div className="py-4">
                <div>
                    <Link className="btn btn-primary" to="/add-employee">
                        Add User
                    </Link>
                </div>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={employee.id}>
                                <th key={index}> {index + 1} </th>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary mx-2"
                                        to={`/view-employee/${employee.id}`}
                                    >
                                        View
                                    </Link>
                                    <Link
                                        className="btn btn-outline-primary mx-2"
                                        to={`/edit-employee/${employee.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-danger mx-2"
                                        onClick={() => deleteEmployee(employee.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
