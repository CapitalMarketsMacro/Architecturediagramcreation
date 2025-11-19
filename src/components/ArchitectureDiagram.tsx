import React from 'react';

export function ArchitectureDiagram() {
  return (
    <div className="relative w-full bg-slate-800 rounded-xl shadow-2xl p-8 border border-slate-700">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Section - Macro Desktop Provides */}
        <div className="col-span-3">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 shadow-lg border border-blue-500">
            <h2 className="text-white mb-4">Macro Desktop Reference Repo</h2>
            <div className="space-y-3">
              {[
                'Authentication/Authorization',
                'Logging',
                'Config',
                'Common Style / Look and Feel',
                'ag-Grid Wrapper',
                'ag-Chart Wrapper',
                'OpenFin API Wrapper',
                'Transport Library - AMPS/Solace/Deephaven'
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/90 backdrop-blur rounded-md p-3 text-blue-200 shadow-sm border border-blue-500/30"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Section - OpenFin Workspace */}
        <div className="col-span-9">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-6 shadow-lg border border-purple-500 h-full">
            <h2 className="text-white mb-4">Macro OpenFin Desktop</h2>
            <div className="space-y-3">
              {[
                'Container',
                'Layout Management',
                'Notification Center',
                'App Store',
                'Dock'
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/90 backdrop-blur rounded-md p-3 text-purple-200 shadow-sm border border-purple-500/30"
                >
                  {item}
                </div>
              ))}
            </div>
            
            {/* MFE blocks inside OpenFin Workspace */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {['MFE', 'MFE', 'MFE'].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/90 backdrop-blur rounded-md p-2 text-indigo-300 text-center shadow-sm border border-indigo-400/50"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Macro Tech Stack */}
      <div className="mt-12">
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg p-6 shadow-lg border border-emerald-500">
          <h2 className="text-white mb-4">Macro Tech Stack to Connect to Backend</h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              { name: 'AMPS', subtitle: 'View Server' },
              { name: 'Solace', subtitle: 'Messaging' },
              { name: 'Deephaven API', subtitle: '' },
              { name: 'Coherence-To-AMPS Adapter', subtitle: '' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/90 backdrop-blur rounded-md p-4 text-emerald-200 shadow-sm border border-emerald-500/30"
              >
                <div>{item.name}</div>
                {item.subtitle && (
                  <div className="text-emerald-300 mt-1">{item.subtitle}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom tier blocks */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          {/* Empty space for AMPS and Solace columns */}
          <div></div>
          <div></div>
          
          {/* Deephaven block below Deephaven API */}
          <div>
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg p-4 shadow-lg text-center border border-slate-500">
              <div className="text-slate-100">Deephaven</div>
            </div>
          </div>
          
          {/* Coherence block below adapter */}
          <div>
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg p-4 shadow-lg text-center border border-slate-500">
              <div className="text-slate-100">Coherence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}