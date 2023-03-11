import './sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className="App">
      <div className="sidebar">
      <NavLink to={`/profile/${props.id}`} className={({ isActive }) => (isActive ? 'active first-link' : 'inactive first-link')}>Profile</NavLink>
      <NavLink to="/posts" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Posts</NavLink>
      <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Gallery</NavLink>
      <NavLink to="/todo" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>ToDo</NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
