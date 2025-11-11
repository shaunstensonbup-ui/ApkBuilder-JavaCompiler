# 🔥 BEAT BLOOD NEON - APK Builder & Java Compiler

![Version](https://img.shields.io/badge/version-2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Linux-orange)

**Automated Installation System with Neon-Themed GUI**

A modern, cyberpunk-styled web interface for automating the APK build process with Eclipse Compiler, AAPT v1, Multidex support, and automatic APK signing.

---

## ✨ Features

- 🚀 **One-Click Automated Installation** - Downloads and configures all dependencies
- 🔨 **Automated APK Building** - Compile Java sources and generate signed APKs
- 🎨 **Neon Cyberpunk UI** - Beautiful dark theme with glassmorphism effects
- 📱 **QR Code Generation** - Instant QR codes for easy APK downloads
- 📊 **Real-Time Progress Tracking** - Live console output and progress bars
- 🔗 **Shareable Download Links** - Generate and share APK download URLs
- ⚡ **Eclipse Compiler Integration** - Fast Java compilation
- 📦 **Multidex Support** - Handle large applications with 65K+ methods
- ✍️ **Automatic APK Signing** - Built-in signing capabilities

---

## 🎯 Quick Start

### Prerequisites

- Node.js 22+ (included in sandbox)
- Java 11+ (auto-installed by script)
- Linux environment (Amazon Linux 2023)

### Installation

1. **Run the automated installer:**
   ```bash
   cd /vercel/sandbox/beat-blood-neon-installer
   ./install.sh
   ```

2. **Start the web interface:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   ```
   http://localhost:3000
   ```

---

## 🎮 Usage

### Web Interface

1. **Auto Install** - Click the "Start Installation" button to automatically download and configure:
   - Eclipse Compiler (ECJ)
   - AAPT v1
   - Android.jar
   - Required libraries

2. **Build APK** - After installation, click "Build APK" to:
   - Compile Java sources
   - Process Android resources
   - Run Multidex merge
   - Execute DX merge
   - Sign the APK
   - Generate download link with QR code

3. **Download** - Copy the generated link or scan the QR code to download your APK

### Command Line

**Manual Installation:**
```bash
./install.sh
```

**Manual APK Build:**
```bash
./build-apk.sh
```

---

## 📁 Project Structure

```
beat-blood-neon-installer/
├── public/
│   └── index.html          # HTML template with Orbitron font
├── src/
│   ├── App.js              # Main React component with neon UI
│   ├── index.js            # React entry point
│   └── index.css           # Tailwind CSS with custom neon styles
├── install.sh              # Automated installation script
├── build-apk.sh            # APK build automation script
├── tailwind.config.js      # Tailwind configuration with neon colors
├── postcss.config.js       # PostCSS configuration
└── package.json            # Node.js dependencies
```

---

## 🎨 Design Features

### Color Palette
- **Neon Blue**: `#00f3ff` - Primary accent
- **Neon Pink**: `#ff006e` - Secondary accent
- **Neon Purple**: `#8b5cf6` - Tertiary accent
- **Neon Green**: `#39ff14` - Success states

### UI Components
- Glassmorphism cards with backdrop blur
- Animated gradient backgrounds
- Pulsing neon borders and text glow effects
- Responsive grid layout
- Real-time console output
- Progress bars with gradient fills
- QR code generation for downloads

---

## 🔧 Configuration

### Build Configuration
Located in `Project Files/build.config`:
```bash
JAVA_HOME=/path/to/java
ANDROID_HOME=/path/to/android/assets
LIBS_PATH=/path/to/libraries
BUILD_TOOLS_VERSION=30.0.3
MIN_SDK_VERSION=21
TARGET_SDK_VERSION=30
```

### Directory Structure
- **Libraries/** - Eclipse Compiler and build libraries
- **Project Assets/** - Android.jar and AAPT v1
- **Project Files/** - Java source files and resources
- **build/** - Temporary build artifacts
- **output/** - Final APK files

---

## 📦 Dependencies

### Frontend
- React 18
- Tailwind CSS 3.4.1
- qrcode.react - QR code generation
- Orbitron font (Google Fonts)

### Backend/Build Tools
- Eclipse Compiler (ECJ)
- AAPT v1 (Android Asset Packaging Tool)
- Android SDK Build Tools
- Java 11+

---

## 🚀 Build Process

1. **Compilation** - Eclipse Compiler processes Java sources
2. **Resource Processing** - AAPT v1 packages Android resources
3. **Multidex Merge** - Handles applications with 65K+ methods
4. **DX Merge** - Converts Java bytecode to Dalvik bytecode
5. **APK Packaging** - Creates APK structure
6. **Signing** - Signs APK with keystore
7. **Link Generation** - Creates shareable download URL

---

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

---

## 📝 License

MIT License - Created by @Falcon-inc & GymkhanaStudio

---

## 🔗 Links

- **Telegram**: [t.me/Falcon_inc_yt](https://t.me/Falcon_inc_yt)
- **GitHub**: [Falcon-Inc/ApkBuilder-JavaCompiler](https://github.com/Falcon-Inc/ApkBuilder-JavaCompiler)

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

## ⚠️ Notes

- This is a demonstration/development version
- For production use, configure proper APK signing with your keystore
- Ensure you have proper Android SDK licenses
- Some features run in demo mode if dependencies are not fully configured

---

## 🎉 Credits

**Created by:**
- @Falcon-inc
- GymkhanaStudio

**Special Thanks:**
- Eclipse Foundation (ECJ)
- Android Open Source Project (AAPT)
- React & Tailwind CSS communities

---

**Enjoy building with Beat Blood Neon! 🔥**
