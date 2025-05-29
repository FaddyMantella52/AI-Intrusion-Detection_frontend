import React from 'react';

export default function TutorialPage() {
  return (
    <div className="App">
      <div style={{
        maxWidth: '800px',
        background: 'white',
        padding: '2rem',
        margin: '2rem auto',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        textAlign: 'left'
      }}>
        <h1>How to Capture and Analyze Network Traffic</h1>
        <p style={{ fontSize: '1.1rem' }}>
          Follow this step-by-step guide to create a packet capture using <strong>Wireshark</strong> and analyze it using the AI Intrusion Detector.
        </p>

        <h2>🛠️ Step 1: Install Wireshark</h2>
        <ul>
          <li>Download the latest version from the <a href="https://www.wireshark.org/download.html" target="_blank" rel="noopener noreferrer">official website</a>.</li>
          <li>Install it by following the installer instructions. On Windows, accept the default options including installing WinPcap/Npcap (required for packet capture).</li>
        </ul>

        <h2>🌐 Step 2: Start a Network Capture</h2>
        <ul>
          <li>Open Wireshark.</li>
          <li>Select the active network interface (typically your Wi-Fi or Ethernet adapter).</li>
          <li>Click the blue shark fin icon (Start capturing packets).</li>
          <li>Use your computer as usual: open websites, run programs, stream videos — this generates network traffic.</li>
        </ul>

        <h2>💾 Step 3: Save the Capture</h2>
        <ul>
          <li>After a few minutes, click the red square icon (Stop capturing).</li>
          <li>Go to <strong>File &gt; Save As</strong> and save the file with the `.pcap` extension (e.g., <code>my_traffic.pcap</code>).</li>
          <li>Make sure the file is not empty. You should see many rows in the Wireshark capture view before saving.</li>
        </ul>

        <h2>📤 Step 4: Upload the File</h2>
        <ul>
          <li>Go to the <strong>Upload</strong> page using the button on the home screen.</li>
          <li>Click <strong>"Choose File"</strong> and select your `.pcap` or `.csv` file.</li>
          <li>Click <strong>"Upload & Analyze"</strong>.</li>
          <li>The AI will analyze your traffic and return a detailed breakdown of any suspicious or malicious flows.</li>
        </ul>

        <h2>ℹ️ Notes</h2>
        <ul>
          <li>If you already have a `.csv` file (preprocessed network traffic), you can upload that instead.</li>
          <li>Ensure that the file size does not exceed the backend upload limit (usually 10–50MB unless adjusted).</li>
          <li>For better results, avoid uploading very short captures or files with little to no traffic.</li>
        </ul>

        <h2>🛡️ About the AI Intrusion Detector</h2>
        <p>
          This tool uses a machine learning model trained on real-world datasets (e.g., CIC-IDS-2017) to identify known attack patterns 
          and anomalies in your traffic. The model supports multiple attack categories like DoS, brute force, port scanning, and more.
        </p>
        <p>
          After analysis, you’ll receive a summary of detected threats along with helpful recommendations.
        </p>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="/home">
            <button>🔙 Back to Home</button>
          </a>
        </div>
      </div>
    </div>
  );
}
