import { Link } from 'react-router-dom';

const GenerateReport = () => {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1>Report</h1>
          <p className="text-muted">This page is rendered by React and can be captured by Puppeteer as PDF.</p>
        </div>
        <Link className="btn btn-outline-secondary" to="/">
          Back to Home
        </Link>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Monthly Sales Summary</h2>
          <p className="card-text">A sample report page that Puppeteer can render to PDF.</p>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Widgets</td>
                <td>42</td>
                <td>$4,200</td>
              </tr>
              <tr>
                <td>Services</td>
                <td>18</td>
                <td>$1,800</td>
              </tr>
              <tr>
                <td>Subscriptions</td>
                <td>12</td>
                <td>$1,440</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;
