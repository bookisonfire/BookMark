import { NavLink } from "react-router-dom";

export default function Sidebar({ night, setNight }) {
  return (
    <nav className="sidebar">
      <div id="sidebar-logo">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "logo-link active" : "logo-link"}>
          <img
            src="./public/BookMark_cover_photo.png"
            alt="BookMark Cover Photo"
            style={{ width: '200px', marginBottom: '5px' }}
          />
        </NavLink>
      </div>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/tickets">Tickets</NavLink>
      <NavLink to="/message-board">Message Board</NavLink>
      <NavLink to="/reports">Reports</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <button id="night-mode-button"
        onClick={() => setNight(n => !n)}
      >
        {night ? 'Day Mode' : 'Night Mode'}
      </button>
    </nav>
  );
}
