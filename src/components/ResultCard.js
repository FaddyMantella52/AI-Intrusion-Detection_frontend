import React from 'react';
import MaliciousChart from './MaliciousChart';
import AnomalyChart from './AnomalyChart';

function ResultCard({ result }) {
  return (
    <div className="result-card">
      <h3>🧠 Prediction Summary</h3>
      <p><strong>Total Flows:</strong> {result.total_flows}</p>
      <p><strong>Benign Flows:</strong> ✅ {result.benign}</p>
      <p><strong>Malicious Flows:</strong> 🚨 {result.malicious_total}</p>

      {result.malicious_total > 0 && (
        <>
          <h4>Breakdown:</h4>
          <ul>
            {Object.entries(result.malicious_breakdown).map(([attack, count]) => (
              <li key={attack}><strong>{attack}</strong>: {count}</li>
            ))}
          </ul>

          <MaliciousChart data={result.malicious_breakdown} />
        </>
      )}

      {/* 🔍 Anomaly + Traffic Breakdown Chart */}
      <AnomalyChart
        benign={result.benign}
        malicious={result.malicious_total}
        anomalies={result.anomaly_count}
      />

      {result.anomalous && (
        <div className="anomaly-warning">
          <h4>🚨 Anomalies Detected</h4>
          <p><strong>{result.anomaly_count}</strong> flows appear anomalous and may indicate unknown threats.</p>
          <p>Please inspect your network or consult a security expert.</p>
        </div>
      )}

      {result.anomalous_flows && result.anomalous_flows.length > 0 && (
        <div className="anomalous-flows-list">
          <h4>⚠️ Anomalous Flows Details</h4>
          <ul>
            {result.anomalous_flows.map((flow, index) => (
              <li key={index}>
                Flow #{flow.index}: flagged by <strong>{flow.flagged_by.join(" + ")}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ResultCard;
