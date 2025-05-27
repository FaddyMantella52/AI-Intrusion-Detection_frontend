import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function AnomalyChart({ benign = 0, malicious = 0, anomalies = 0 }) {
  const total = benign + malicious + anomalies;

  const data = {
    labels: [
      `Benign (${((benign / total) * 100 || 0).toFixed(1)}%)`,
      `Malicious (${((malicious / total) * 100 || 0).toFixed(1)}%)`,
      `Anomalous (${((anomalies / total) * 100 || 0).toFixed(1)}%)`,
    ],
    datasets: [
      {
        data: [benign, malicious, anomalies],
        backgroundColor: ['#81c784', '#ef5350', '#ffeb3b'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Pie data={data} />
    </div>
  );
}

export default AnomalyChart;
