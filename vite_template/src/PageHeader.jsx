import React from "react";

export default function PageHeader({ user, title = '', onCreateTicket }) {
  return (
    <div className="page-header">
      <h1>Hello{user ? `, ${user.name || user.email}` : ''}</h1>
      <button className="create-ticket-btn" onClick={onCreateTicket}>
        <span style={{fontSize: '1.3em', fontWeight: 'bold'}}>+</span>
        Create Ticket
      </button>
    </div>
  );
}
