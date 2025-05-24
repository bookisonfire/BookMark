export default function Dashboard({ user }) {
  return (
    <div>
      <div className="page-header">
        <h1>Hello, {user.name || user.email}</h1>
        <button className="create-ticket-btn">Create Ticket</button>
      </div>

      <div className="tickets-container">
        <div className="ticket-section">
          <h2>Open tickets</h2>
          <div className="ticket-list">
            {/* Tickets will go here */}
          </div>
        </div>

        <div className="ticket-section">
          <h2>In-Progress tickets</h2>
          <div className="ticket-list">
            {/* Tickets will go here */}
          </div>
        </div>

        <div className="ticket-section">
          <h2>Closed tickets</h2>
          <div className="ticket-list">
            {/* Tickets will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}