import { Link } from 'react-router-dom';

export const coursesData = [
    { id: 1, name: "React JS", description: "Learn React components, props, state and hooks." },
    { id: 2, name: "JavaScript", description: "Learn modern JavaScript programming." },
    { id: 3, name: "Node.js", description: "Learn backend development using Node.js." },
    { id: 4, name: "Python", description: "Learn Python programming and fundamentals." }
];

const Courses = () => {
    return (
        <div className="page-container">
            <h1>Available Courses</h1>
            <div className="courses-grid">
                {coursesData.map(course => (
                    <div key={course.id} className="course-card">
                        <h3>{course.name}</h3>
                        <p className="course-id">Course #{course.id}</p>
                        <Link to={`/course/${course.id}`} className="btn btn-outline">View Course</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Courses;
