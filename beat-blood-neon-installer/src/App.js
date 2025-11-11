import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

function App() {
  const [installStatus, setInstallStatus] = useState('idle');
  const [buildStatus, setBuildStatus] = useState('idle');
  const [progress, setProgress] = useState(0);
  const [apkLink, setApkLink] = useState('');
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), message }]);
  };

  const simulateInstall = async () => {
    setInstallStatus('installing');
    setProgress(0);
    addLog('Starting automated installation...');

    const steps = [
      { msg: 'Checking system requirements...', progress: 10 },
      { msg: 'Downloading Eclipse Compiler...', progress: 25 },
      { msg: 'Downloading AAPT v1...', progress: 40 },
      { msg: 'Downloading Android.jar...', progress: 55 },
      { msg: 'Setting up libraries...', progress: 70 },
      { msg: 'Configuring build environment...', progress: 85 },
      { msg: 'Installation complete!', progress: 100 },
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 800));
      addLog(step.msg);
      setProgress(step.progress);
    }

    setInstallStatus('completed');
  };

  const simulateBuild = async () => {
    setBuildStatus('building');
    setProgress(0);
    addLog('Starting APK build process...');

    const steps = [
      { msg: 'Compiling Java sources with Eclipse Compiler...', progress: 15 },
      { msg: 'Processing resources with AAPT v1...', progress: 30 },
      { msg: 'Running Multidex merge...', progress: 45 },
      { msg: 'Executing DX merge...', progress: 60 },
      { msg: 'Building APK package...', progress: 75 },
      { msg: 'Signing APK...', progress: 90 },
      { msg: 'APK build successful!', progress: 100 },
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      addLog(step.msg);
      setProgress(step.progress);
    }

    const generatedLink = `https://download.beatblood.neon/apk/build_${Date.now()}.apk`;
    setApkLink(generatedLink);
    setBuildStatus('completed');
    addLog(`Download link generated: ${generatedLink}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden">
      {/* Animated background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink opacity-10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 text-glow text-neon-blue animate-pulse-slow">
            BEAT BLOOD NEON
          </h1>
          <p className="text-xl text-neon-pink text-glow">APK Builder & Java Compiler</p>
          <p className="text-sm text-gray-400 mt-2">Automated Installation System v2.0</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Installation Panel */}
          <div className="glass rounded-2xl p-6 neon-border">
            <h2 className="text-2xl font-bold mb-4 text-neon-blue flex items-center gap-2">
              <span className="text-3xl">⚡</span> Auto Install
            </h2>
            <p className="text-gray-300 mb-6">
              Automatically download and configure all required dependencies:
              Eclipse Compiler, AAPT v1, Android.jar, and libraries.
            </p>
            
            <button
              onClick={simulateInstall}
              disabled={installStatus === 'installing'}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                installStatus === 'completed'
                  ? 'bg-green-600 hover:bg-green-700'
                  : installStatus === 'installing'
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/50'
              }`}
            >
              {installStatus === 'idle' && '🚀 Start Installation'}
              {installStatus === 'installing' && '⏳ Installing...'}
              {installStatus === 'completed' && '✅ Installation Complete'}
            </button>

            {installStatus === 'installing' && (
              <div className="mt-4">
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-pink transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-center mt-2 text-neon-blue">{progress}%</p>
              </div>
            )}
          </div>

          {/* Build Panel */}
          <div className="glass rounded-2xl p-6 neon-border">
            <h2 className="text-2xl font-bold mb-4 text-neon-pink flex items-center gap-2">
              <span className="text-3xl">🔨</span> Build APK
            </h2>
            <p className="text-gray-300 mb-6">
              Compile your project and generate a signed APK with Multidex support,
              DX merge, and automatic signing.
            </p>
            
            <button
              onClick={simulateBuild}
              disabled={buildStatus === 'building' || installStatus !== 'completed'}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                buildStatus === 'completed'
                  ? 'bg-green-600 hover:bg-green-700'
                  : buildStatus === 'building'
                  ? 'bg-gray-600 cursor-not-allowed'
                  : installStatus !== 'completed'
                  ? 'bg-gray-800 cursor-not-allowed opacity-50'
                  : 'bg-gradient-to-r from-neon-pink to-neon-purple hover:shadow-lg hover:shadow-neon-pink/50'
              }`}
            >
              {buildStatus === 'idle' && (installStatus === 'completed' ? '🔨 Build APK' : '🔒 Install First')}
              {buildStatus === 'building' && '⏳ Building...'}
              {buildStatus === 'completed' && '✅ Build Complete'}
            </button>

            {buildStatus === 'building' && (
              <div className="mt-4">
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-neon-pink to-neon-purple transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-center mt-2 text-neon-pink">{progress}%</p>
              </div>
            )}
          </div>
        </div>

        {/* APK Download Section */}
        {apkLink && (
          <div className="glass rounded-2xl p-8 neon-border mb-8 animate-pulse-slow">
            <h2 className="text-3xl font-bold mb-6 text-center text-neon-green text-glow">
              🎉 APK Ready for Download!
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-gray-800 rounded-xl p-4 mb-4">
                  <p className="text-sm text-gray-400 mb-2">Download Link:</p>
                  <a
                    href={apkLink}
                    className="text-neon-blue hover:text-neon-pink transition-colors break-all text-glow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {apkLink}
                  </a>
                </div>
                
                <button
                  onClick={() => navigator.clipboard.writeText(apkLink)}
                  className="w-full py-3 px-6 bg-gradient-to-r from-neon-green to-neon-blue rounded-xl font-bold hover:shadow-lg hover:shadow-neon-green/50 transition-all"
                >
                  📋 Copy Link
                </button>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-400 mb-4">Scan QR Code to Download:</p>
                <div className="bg-white p-4 rounded-xl">
                  <QRCodeSVG value={apkLink} size={200} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Console Logs */}
        <div className="glass rounded-2xl p-6 neon-border">
          <h2 className="text-xl font-bold mb-4 text-neon-purple flex items-center gap-2">
            <span className="text-2xl">📟</span> Console Output
          </h2>
          <div className="bg-black rounded-xl p-4 h-64 overflow-y-auto font-mono text-sm">
            {logs.length === 0 ? (
              <p className="text-gray-500">Waiting for operations...</p>
            ) : (
              logs.map((log, index) => (
                <div key={index} className="mb-2">
                  <span className="text-neon-green">[{log.time}]</span>{' '}
                  <span className="text-gray-300">{log.message}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-400">
          <p className="mb-2">Created by @Falcon-inc & GymkhanaStudio</p>
          <p className="text-sm">
            Join Telegram: <a href="https://t.me/Falcon_inc_yt" className="text-neon-blue hover:text-neon-pink transition-colors">@Falcon_inc_yt</a>
          </p>
          <p className="text-xs mt-2">
            GitHub: <a href="https://github.com/Falcon-Inc/ApkBuilder-JavaCompiler" className="text-neon-purple hover:text-neon-pink transition-colors">ApkBuilder-JavaCompiler</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
