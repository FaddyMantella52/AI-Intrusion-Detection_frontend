import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="App" style={{ position: 'relative' }}>
      {/* Top-right buttons */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => navigate('/tutorial')}>❓</button>
        <button onClick={() => navigate('/')}>Logout</button>
      </div>

      <div style={{
        background: 'white',
        maxWidth: '700px',
        margin: '5rem auto 2rem',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        textAlign: 'left'
      }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>AI Intrusion Detector</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          This tool analyzes your network traffic using a machine learning model trained on the
          <a href="https://www.unb.ca/cic/datasets/ids-2017.html" target="_blank" rel="noopener noreferrer" style={{ color: '#3498db', textDecoration: 'none', marginLeft: '5px' }}>
            CIC-IDS-2017 dataset
          </a>.
        </p>

        <p style={{ fontSize: '1.05rem' }}>
          The model uses a <strong>Random Forest classifier</strong> trained to detect common cyber threats such as:
          <ul style={{ marginLeft: '1.5rem' }}>
            <li>Denial of Service (DoS)</li>
            <li>Brute Force Attacks</li>
            <li>Port Scans</li>
            <li>Botnet Traffic</li>
            <li>Web-based Attacks (XSS, SQL Injection)</li>
          </ul>
          It also detects statistical anomalies in traffic patterns using anomaly detection algorithms.
        </p>

        <p style={{ marginTop: '1rem' }}>
          Simply upload a <code>.pcap</code> or <code>.csv</code> network capture file, and the system will classify each flow and alert you if any threats are detected.
        </p>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button onClick={() => navigate('/upload')}>
            🚀 Go to Upload Page
          </button>
        </div>
      </div>
    </div>
  );
}
