import PageHeader from './PageHeader';

export default function Dashboard({ user }) {
  return (
    <div>
      <PageHeader user={user} title="Dashboard" />

      {/* Stat Cards Row */}
      <div className="dashboard-cards-row">
        <div className="dashboard-card">
          <div className="dashboard-card-title">Total Tickets</div>
          <div className="dashboard-card-value">156</div>
          <div className="dashboard-card-desc">+12% from last month</div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-title">Open Tickets</div>
          <div className="dashboard-card-value">23</div>
          <div className="dashboard-card-desc">-2% from last week</div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-title">In Progress</div>
          <div className="dashboard-card-value">12</div>
          <div className="dashboard-card-desc">+5% from last week</div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-title">Avg Resolution</div>
          <div className="dashboard-card-value">2.4d</div>
          <div className="dashboard-card-desc">-0.5d from last month</div>
        </div>
      </div>

      {/* Ticket Cards Row */}
      <div className="dashboard-tickets-row">
        {/* Recent Tickets Card */}
        <div className="dashboard-tickets-card recent-tickets">
          <div className="dashboard-tickets-card-header">
            <div className="dashboard-tickets-card-title">Recent Tickets</div>
            <div className="dashboard-tickets-card-desc">Latest ticket activity in your system</div>
          </div>
          <div className="recent-tickets-list">
            {/* Mock tickets */}
            {[
              { id: 'TKT-001', title: 'Login page not loading', priority: 'high', status: 'open', createdBy: 'John Doe', date: '1/15/2024' },
              { id: 'TKT-002', title: 'Feature request: Dark mode', priority: 'medium', status: 'in-progress', createdBy: 'Bob Wilson', date: '1/14/2024' },
              { id: 'TKT-003', title: 'Database performance issue', priority: 'urgent', status: 'closed', createdBy: 'Sarah Davis', date: '1/13/2024' },
              { id: 'TKT-004', title: 'Login page not loading', priority: 'high', status: 'open', createdBy: 'John Doe', date: '1/15/2024' },
              { id: 'TKT-005', title: 'Feature request: Dark mode', priority: 'medium', status: 'in-progress', createdBy: 'Bob Wilson', date: '1/14/2024' },
              { id: 'TKT-006', title: 'Database performance issue', priority: 'urgent', status: 'closed', createdBy: 'Sarah Davis', date: '1/13/2024' },
              { id: 'TKT-002', title: 'Feature request: Dark mode', priority: 'medium', status: 'in-progress', createdBy: 'Bob Wilson', date: '1/14/2024' },
              { id: 'TKT-003', title: 'Database performance issue', priority: 'urgent', status: 'closed', createdBy: 'Sarah Davis', date: '1/13/2024' },
            ].map(ticket => (
              <div key={ticket.id} className="recent-ticket-row">
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
            ))}
          </div>
        </div>
        {/* Ticket Distribution Card */}
        <div className="dashboard-tickets-card ticket-distribution">
          <div className="dashboard-tickets-card-header">
            <div className="dashboard-tickets-card-title">Ticket Distribution</div>
            <div className="dashboard-tickets-card-desc">Current ticket status breakdown</div>
          </div>
          <div className="ticket-distribution-list">
            <div className="ticket-distribution-row">
              <span>Open</span>
              <span>23</span>
            </div>
            <div className="progress-bar"><div className="progress-fill open" style={{width: '15%'}}></div></div>
            <div className="ticket-distribution-row">
              <span>In Progress</span>
              <span>12</span>
            </div>
            <div className="progress-bar"><div className="progress-fill in-progress" style={{width: '8%'}}></div></div>
            <div className="ticket-distribution-row">
              <span>Closed</span>
              <span>121</span>
            </div>
            <div className="progress-bar"><div className="progress-fill closed" style={{width: '77%'}}></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}