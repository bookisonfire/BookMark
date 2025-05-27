import React from "react";
import PageHeader from './PageHeader';

const mockTickets = [
  { id: 'TKT-001', title: 'Login page not loading', priority: 'high', status: 'open', createdBy: 'John Doe', date: '1/15/2024' },
  { id: 'TKT-002', title: 'Feature request: Dark mode', priority: 'medium', status: 'in-progress', createdBy: 'Bob Wilson', date: '1/14/2024' },
  { id: 'TKT-003', title: 'Database performance issue', priority: 'urgent', status: 'closed', createdBy: 'Sarah Davis', date: '1/13/2024' },
  { id: 'TKT-004', title: 'Login page not loading', priority: 'high', status: 'open', createdBy: 'John Doe', date: '1/15/2024' },
  { id: 'TKT-005', title: 'Feature request: Dark mode', priority: 'medium', status: 'in-progress', createdBy: 'Bob Wilson', date: '1/14/2024' },
  { id: 'TKT-006', title: 'Database performance issue', priority: 'urgent', status: 'closed', createdBy: 'Sarah Davis', date: '1/13/2024' },
  { id: 'TKT-007', title: 'Minor UI bug', priority: 'low', status: 'open', createdBy: 'Alice', date: '1/12/2024' },
  { id: 'TKT-008', title: 'Performance lag', priority: 'high', status: 'in-progress', createdBy: 'Bob Wilson', date: '1/11/2024' },
  { id: 'TKT-009', title: 'Add export feature', priority: 'low', status: 'closed', createdBy: 'Sarah Davis', date: '1/10/2024' },
  { id: 'TKT-010', title: 'Login page not loading', priority: 'high', status: 'open', createdBy: 'John Doe', date: '1/15/2024' },
  { id: 'TKT-011', title: 'Feature request: Dark mode', priority: 'medium', status: 'in-progress', createdBy: 'Bob Wilson', date: '1/14/2024' },
  { id: 'TKT-012', title: 'Database performance issue', priority: 'urgent', status: 'closed', createdBy: 'Sarah Davis', date: '1/13/2024' },
  { id: 'TKT-013', title: 'Minor UI bug', priority: 'low', status: 'open', createdBy: 'Alice', date: '1/12/2024' },
  { id: 'TKT-014', title: 'Performance lag', priority: 'high', status: 'in-progress', createdBy: 'Bob Wilson', date: '1/11/2024' },
  { id: 'TKT-015', title: 'Add export feature', priority: 'low', status: 'closed', createdBy: 'Sarah Davis', date: '1/10/2024' },
  { id: 'TKT-019', title: 'Add export feature', priority: 'low', status: 'closed', createdBy: 'Sarah Davis', date: '1/10/2024' },
];

const priorityOrder = { urgent: 1, high: 2, medium: 3, low: 4 };

function sortByPriority(tickets) {
  return [...tickets].sort((a, b) => (priorityOrder[a.priority] - priorityOrder[b.priority]));
}

function TicketCard({ ticket }) {
  return (
    <div className="recent-ticket-row" style={{marginBottom: '14px'}}>
      <div className="recent-ticket-main">
        <span className="recent-ticket-title">{ticket.title}</span>
        <span className={`badge badge-priority badge-priority-${ticket.priority}`}>{ticket.priority}</span>
        <span className={`badge badge-status badge-status-${ticket.status}`}>{ticket.status}</span>
      </div>
      <div className="recent-ticket-meta">
        <span className="recent-ticket-id">{ticket.id} • Created by {ticket.createdBy}</span>
        <span className="recent-ticket-date">{ticket.date}</span>
      </div>
    </div>
  );
}

export default function Tickets({ user }) {
  const openTickets = sortByPriority(mockTickets.filter(t => t.status === 'open'));
  const inProgressTickets = sortByPriority(mockTickets.filter(t => t.status === 'in-progress'));
  const closedTickets = sortByPriority(mockTickets.filter(t => t.status === 'closed'));

  return (
    <div>
      <PageHeader user={user} title="Tickets" />
      <div className="tickets-columns-row">
        <div className="tickets-column">
          <h2>Open</h2>
          {openTickets.length === 0 ? <p>No open tickets.</p> : openTickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} />)}
        </div>
        <div className="tickets-column">
          <h2>In Progress</h2>
          {inProgressTickets.length === 0 ? <p>No in-progress tickets.</p> : inProgressTickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} />)}
        </div>
        <div className="tickets-column">
          <h2>Closed</h2>
          {closedTickets.length === 0 ? <p>No closed tickets.</p> : closedTickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} />)}
        </div>
      </div>
    </div>
  );
} 