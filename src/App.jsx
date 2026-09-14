import React from 'react';
import './App.css';

export default function App() {
  const devopsTools = [
    {
      name: 'Git',
      category: 'Distributed Version Control',
      badge: 'VCS',
      description:
        'A local command-line distributed version control system designed to track changes in source code across branches, commit histories, and merges with high speed and integrity.',
      keyFeatures: [
        'Local branch & merge workflows',
        'Staging area (index)',
        'Cryptographic history tracking (SHA-1)'
      ]
    },
    {
      name: 'GitHub',
      category: 'Source Code & Collaboration',
      badge: 'Platform',
      description:
        'A cloud-based Git repository hosting service providing Pull Requests, Code Reviews, automated Webhooks, and GitHub Actions for continuous delivery.',
      keyFeatures: [
        'Centralized remote repositories',
        'Webhooks for CI/CD triggers',
        'Pull request review workflows'
      ]
    },
    {
      name: 'Docker',
      category: 'Containerization Engine',
      badge: 'Packaging',
      description:
        'A platform that packages applications and their dependencies into lightweight, immutable containers, ensuring consistent runtime behavior across development, testing, and production.',
      keyFeatures: [
        'Isolated runtime environments',
        'Lightweight image layers (Dockerfile)',
        'Consistent deployable units'
      ]
    },
    {
      name: 'Jenkins',
      category: 'Continuous Integration & Delivery',
      badge: 'Automation',
      description:
        'An open-source automation server used to orchestrate build pipelines, execute automated tests, validate code quality, and trigger deployments automatically via Webhooks.',
      keyFeatures: [
        'Extensive plugin ecosystem',
        'Scripted & Declarative Pipelines',
        'Automated webhook build triggers'
      ]
    }
  ];

  return (
    <div className="layout-container">
      {/* Header / Navigation */}
      <header className="navbar">
        <div className="brand">
          <span className="logo-dot"></span>
          <h2>DevOps Tools Guide</h2>
        </div>
        <span className="badge-pipeline">CI/CD Pipeline Demo</span>
      </header>

      {/* Main Content Section */}
      <main className="content">
        {/* Hero Section */}
        <section className="hero">
          <div className="assignment-meta">
            <span className="meta-pill"><strong>Project:</strong> DevOps Tools Guide</span>
            <span className="meta-pill"><strong>Student:</strong> Kush Bhardwaj</span>
          </div>

          <h1>DevOps Core Toolchain & Architecture</h1>
          <p className="description">
            An overview of the foundational tools powering modern DevOps workflows: version control,
            collaborative remote repositories, containerized environments, and continuous integration pipelines.
          </p>
        </section>

        {/* Tools Cards Grid */}
        <section className="card-grid">
          {devopsTools.map((tool, idx) => (
            <div key={idx} className="card">
              <div className="card-header">
                <div className="tool-title-row">
                  <h3>{tool.name}</h3>
                  <span className="tool-badge">{tool.badge}</span>
                </div>
                <span className="tool-category">{tool.category}</span>
              </div>

              <p className="card-desc">{tool.description}</p>

              <div className="feature-block">
                <h4>Core Capabilities</h4>
                <ul>
                  {tool.keyFeatures.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 DevOps Tools Guide</p>
      </footer>
    </div>
  );
}