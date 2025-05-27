import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function MaliciousChart({ data }) {
  if (!data || Object.keys(data).length === 0) return null;

  const labels = Object.keys(data);
  const values = Object.values(data);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Detected Attacks',
        data: values,
        backgroundColor: 'rgba(231, 76, 60, 0.7)',
        borderColor: 'rgba(192, 57, 43, 1)',
        borderWidth: 1,
      }
    ]
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h4>📊 Attack Types Detected</h4>
      <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
    </div>
  );
}

export default MaliciousChart;
