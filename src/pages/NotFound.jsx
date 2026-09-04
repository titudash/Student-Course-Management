import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="page-container text-center">
            <h1 className="error-404">404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-primary mt-2">Go Home</Link>
        </div>
    );
};
export default NotFound;
