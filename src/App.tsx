import React from 'react';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center mb-8 text-slate-100">Macro Desktop Architecture</h1>
        <ArchitectureDiagram />
      </div>
    </div>
  );
}