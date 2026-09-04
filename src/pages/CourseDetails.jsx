import { useParams, Link } from 'react-router-dom';
import { coursesData } from './Courses';

const CourseDetails = () => {
    const { id } = useParams();
    const course = coursesData.find(c => c.id === parseInt(id));

    if (!course) {
        return (
            <div className="page-container text-center">
                <h2>Course Not Found</h2>
                <p>The course ID you requested does not exist.</p>
                <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
            </div>
        );
    }

    return (
        <div className="page-container">
            <h1>Course Details</h1>
            <div className="course-detail-card">
                <h2>{course.name}</h2>
                <p className="course-id">Course ID: {course.id}</p>
                <div className="course-desc">
                    <strong>Description:</strong>
                    <p>{course.description}</p>
                </div>
            </div>
            <Link to="/courses" className="btn btn-outline mt-2">← Back to Courses</Link>
        </div>
    );
};
export default CourseDetails;
