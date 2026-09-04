import { NavLink } from 'react-router-dom';
import { useStudent } from '../context/StudentContext';
import './Navbar.css';

const Navbar = () => {
    const student = useStudent();
    return (
        <nav className="navbar">
            <div className="nav-brand">Student Course Management</div>
            <div className="nav-links">
                <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="/courses" className={({isActive}) => isActive ? "active" : ""}>Courses</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
            </div>
            <div className="nav-user">Welcome, {student.name}</div>
        </nav>
    );
};
export default Navbar;
