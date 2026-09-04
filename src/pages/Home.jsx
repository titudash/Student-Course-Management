import { Link } from 'react-router-dom';
import { useStudent } from '../context/StudentContext';

const Home = () => {
    const student = useStudent();

    return (
        <div className="page-container">
            <h1>Welcome to Student Course Management</h1>
            
            <div className="student-info-card">
                <h2>Student Information</h2>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>College:</strong> {student.college}</p>
            </div>

            <p className="description">Manage and explore available courses in your curriculum.</p>
            
            <div className="action-buttons">
                <Link to="/courses" className="btn btn-primary">View Courses</Link>
                <Link to="/about" className="btn btn-secondary">About</Link>
            </div>
        </div>
    );
};
export default Home;
