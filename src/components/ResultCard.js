import React from 'react';
import MaliciousChart from './MaliciousChart';

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
    </div>
  );
}

export default ResultCard;