import React from 'react';
import MaliciousChart from './MaliciousChart';
import AnomalyChart from './AnomalyChart';
import recommendations from './Recommendations';

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

          <h4>🔐 Security Recommendations:</h4>
          <ul>
            {Object.entries(result.malicious_breakdown).map(([attack, count]) => {
              const rec = recommendations[attack];
              return rec ? (
                <li key={attack}>
                  <strong>{attack}</strong>: {rec.description}<br />
                  🔒 <em>{rec.advice}</em><br />
                  🔗 <a href={rec.link} target="_blank" rel="noopener noreferrer">Learn more</a>
                </li>
              ) : (
                <li key={attack}>
                  <strong>{attack}</strong>: No recommendation available.
                </li>
              );
            })}
          </ul>
        </>
      )}

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
    </div>
  );
}

export default ResultCard;
