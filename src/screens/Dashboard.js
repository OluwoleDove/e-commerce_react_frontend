import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { FaHome, FaUsers, FaChartBar, FaCog } from 'react-icons/fa';
import Sidebar from 'react-sidebar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, NavDropdown } from 'react-bootstrap';
import './App.css';
import Chart from 'chart.js';

// Components for each dashboard page
import Home from './pages/Home';
import Users from './pages/Users';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';

// Sidebar content
const SidebarContent = (
  <Nav className="flex-column sidebar-nav">
    <Nav.Link as={Link} to="/" className="sidebar-link" activeClassName="active">
      <FaHome className="sidebar-icon" />
      Home
    </Nav.Link>
    <Nav.Link as={Link} to="/users" className="sidebar-link" activeClassName="active">
      <FaUsers className="sidebar-icon" />
      Users
    </Nav.Link>
    <Nav.Link as={Link} to="/statistics" className="sidebar-link" activeClassName="active">
      <FaChartBar className="sidebar-icon" />
      Statistics
    </Nav.Link>
    <Nav.Link as={Link} to="/settings" className="sidebar-link" activeClassName="active">
      <FaCog className="sidebar-icon" />
      Settings
    </Nav.Link>
  </Nav>
);

const App = () => {
  const [avatar, setAvatar] = useState(null);

  React.useEffect(() => {
    // Example chart setup
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setAvatar(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Router>
      <Sidebar
        sidebar={SidebarContent}
        docked={true}
        styles={{ sidebar: { background: '#fff', width: '250px' } }}
      >
        <Container fluid className="p-0">
          <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" className="top-nav-link" activeClassName="active">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/users" className="top-nav-link" activeClassName="active">
                  Users
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/statistics"
                  className="top-nav-link"
                  activeClassName="active"
                >
                  Statistics
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/settings"
                  className="top-nav-link"
                  activeClassName="active"
                >
                  Settings
                </Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown title="John Doe" id="basic-nav-dropdown" alignRight>
                  <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/statistics" component={Statistics} />
            <Route path="/settings" component={Settings} />
          </Switch>

          <div className="chart-container">
            <canvas id="myChart" width="400" height="200"></canvas>
          </div>

          <div className="avatar-container">
            {avatar ? (
              <img src={avatar} alt="Avatar" className="avatar" />
            ) : (
              <div className="upload-container">
                <input type="file" accept="image/*" onChange={handleAvatarUpload} />
                <span>Upload Avatar</span>
              </div>
            )}
          </div>
        </Container>
      </Sidebar>
    </Router>
  );
};

export default App;
