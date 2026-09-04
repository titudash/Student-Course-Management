import { useStudent } from '../context/StudentContext';

const About = () => {
    const student = useStudent();

    return (
        <div className="page-container">
            <h1>About Student Course Management</h1>
            <p>Welcome, <strong>{student.name}</strong>!</p>
            <p>This application demonstrates React Router, dynamic routing, and the Context API.</p>
            
            <div className="tech-card">
                <h2>Technologies Used:</h2>
                <ul>
                    <li>React</li>
                    <li>React Router (for navigation)</li>
                    <li>Context API (for global state)</li>
                    <li>JSX</li>
                    <li>CSS</li>
                </ul>
            </div>
        </div>
    );
};
export default About;
