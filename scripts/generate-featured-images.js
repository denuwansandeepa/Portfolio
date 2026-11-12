const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "../public/images/featured");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const templates = [
  {
    name: "core-banking",
    html: `
      <div class="canvas" style="background: radial-gradient(circle at 20% 20%, #1e1b4b 0%, #050811 60%, #020617 100%);">
        <div class="glow" style="top: -60px; left: -60px; background: rgba(139, 92, 246, 0.35);"></div>
        <div class="glow" style="bottom: -80px; right: -40px; background: rgba(6, 182, 212, 0.3);"></div>
        <div class="grid-bg"></div>
        
        <div class="window">
          <div class="win-header">
            <div class="dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
            <div class="win-title">DEARO_CORE_BANKING_ENGINE // v4.2</div>
            <div class="badge-amber">🔒 CONFIDENTIAL ENTERPRISE</div>
          </div>
          <div class="win-body">
            <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom: 22px;">
              <div>
                <div class="eyebrow">LEDGER AGGREGATE TRANSACTION VOLUME</div>
                <div class="big-num">$248,890,410.00</div>
              </div>
              <div class="pill-green">▲ 99.999% ACID SLA</div>
            </div>
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 20px;">
              <div class="node-card" style="border-color: rgba(139,92,246,0.4); background: rgba(139,92,246,0.1);">
                <div class="node-tag" style="color:#c4b5fd;">AUTH NODE 01</div>
                <div class="node-title">ACID Ledger</div>
                <div class="node-status" style="color:#34d399;">● SHA-256 Active</div>
              </div>
              <div class="node-card" style="border-color: rgba(6,182,212,0.4); background: rgba(6,182,212,0.1);">
                <div class="node-tag" style="color:#67e8f9;">GATEWAY 02</div>
                <div class="node-title">Settlement</div>
                <div class="node-status" style="color:#38bdf8;">● Real-time Sync</div>
              </div>
              <div class="node-card" style="border-color: rgba(16,185,129,0.4); background: rgba(16,185,129,0.1);">
                <div class="node-tag" style="color:#6ee7b7;">VAULT 03</div>
                <div class="node-title">Audit Trail</div>
                <div class="node-status" style="color:#34d399;">● Zero Drop</div>
              </div>
            </div>
            <div class="status-bar">
              <span style="color:#10b981;">●</span>
              <span>CORE FINANCIAL INFRASTRUCTURE • ISO-27001 COMPLIANT • MULTI-BRANCH MYSQL CLUSTER</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "dvccl",
    html: `
      <div class="canvas" style="background: radial-gradient(circle at 80% 20%, #0c2c47 0%, #040711 65%);">
        <div class="glow" style="top: -40px; right: 40px; background: rgba(6, 182, 212, 0.35);"></div>
        <div class="glow" style="bottom: -60px; left: 40px; background: rgba(139, 92, 246, 0.25);"></div>
        <div class="grid-bg"></div>

        <div class="window">
          <div class="win-header">
            <div class="dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
            <div class="win-title">DVCCL // DEVELOPMENT VENTURE CAPITAL CORPORATION</div>
            <div class="badge-cyan">🌐 dvccorporation.lk</div>
          </div>
          <div class="win-body" style="display:grid; grid-template-columns: 1.1fr 1.6fr; gap: 20px; align-items: stretch;">
            <div style="display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div class="eyebrow">VENTURE PORTFOLIO AUM</div>
                <div class="big-num" style="font-size:28px;">LKR 4.85B+</div>
                <div style="color:#34d399; font-family:monospace; font-size:11px; margin-top:4px; font-weight:700;">▲ +24.8% YoY Capital Growth</div>
              </div>
              <div class="node-card" style="margin-top:12px;">
                <div class="eyebrow">ACTIVE SEED & GROWTH VENTURES</div>
                <div style="font-size:18px; font-weight:800; color:#fff; margin-top:4px;">18 Sri Lankan Enterprises</div>
              </div>
              <div class="node-card" style="margin-top:10px; border-color:rgba(6,182,212,0.35);">
                <div class="eyebrow">INSTITUTIONAL TIER</div>
                <div style="font-size:16px; font-weight:700; color:#38bdf8; margin-top:4px;">Next.js 14 Executive Portal</div>
              </div>
            </div>
            <div style="background: rgba(2,6,23,0.65); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 18px; display:flex; flex-direction:column; justify-content:space-between;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:12px; font-weight:700; color:#e2e8f0;">Capital Allocation & IRR Trajectory</span>
                <span style="font-size:10px; font-family:monospace; color:#38bdf8;">Q1-Q4 2024</span>
              </div>
              <svg viewBox="0 0 320 140" style="width:100%; height:135px; overflow:visible;">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.45"/>
                    <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.0"/>
                  </linearGradient>
                </defs>
                <line x1="0" y1="30" x2="320" y2="30" stroke="rgba(255,255,255,0.06)" />
                <line x1="0" y1="75" x2="320" y2="75" stroke="rgba(255,255,255,0.06)" />
                <line x1="0" y1="120" x2="320" y2="120" stroke="rgba(255,255,255,0.06)" />
                <path d="M 0 115 Q 60 100, 110 70 T 210 45 T 320 15 L 320 130 L 0 130 Z" fill="url(#g1)" />
                <path d="M 0 115 Q 60 100, 110 70 T 210 45 T 320 15" fill="none" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round" />
                <circle cx="110" cy="70" r="5" fill="#fff" stroke="#8b5cf6" stroke-width="3" />
                <circle cx="210" cy="45" r="5" fill="#fff" stroke="#06b6d4" stroke-width="3" />
                <circle cx="320" cy="15" r="5.5" fill="#10b981" stroke="#fff" stroke-width="2.5" />
              </svg>
              <div style="display:flex; justify-content:space-between; font-family:monospace; font-size:10px; color:#64748b;">
                <span>SEED</span><span>SERIES A</span><span>VENTURE DEBT</span><span>IPO EXIT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "dearo-digital",
    html: `
      <div class="canvas" style="background: radial-gradient(circle at 30% 50%, #2e1065 0%, #090d16 70%);">
        <div class="glow" style="top: 20px; left: 80px; background: rgba(139, 92, 246, 0.4);"></div>
        <div class="glow" style="bottom: 20px; right: 80px; background: rgba(6, 182, 212, 0.3);"></div>
        <div class="grid-bg"></div>

        <div style="position:relative; z-index:2; display:flex; align-items:center; justify-content:space-between; width: 690px; height: 390px;">
          <div style="max-width: 360px;">
            <div class="pill-green" style="display:inline-flex; align-items:center; gap:6px; margin-bottom:16px;">
              <span>▶</span><span>PUBLISHED ON GOOGLE PLAY STORE</span>
            </div>
            <div style="font-size:36px; font-weight:800; color:#fff; letter-spacing:-0.02em; line-height:1.1;">Dearo Digital</div>
            <div style="font-size:15px; color:#a78bfa; font-weight:600; margin-top:8px;">Cross-Platform Flutter App &amp; PHP Backend</div>
            <p style="font-size:13px; color:#94a3b8; line-height:1.6; margin-top:14px;">
              Production fintech &amp; digital customer portal with real-time account synchronization, instant wallet statements, and biometric authentication.
            </p>
            <div style="display:flex; gap:10px; margin-top:22px;">
              <div class="chip">Flutter &amp; Dart</div>
              <div class="chip">PHP REST API</div>
              <div class="chip">MySQL</div>
            </div>
          </div>

          <!-- Phone Mockup -->
          <div style="width: 245px; height: 380px; border-radius: 34px; background: #0f172a; border: 3px solid rgba(255,255,255,0.22); padding: 12px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7); display:flex; flex-direction:column; justify-content:space-between;">
            <div style="width: 70px; height: 10px; background: #020617; border-radius: 10px; margin: 0 auto 8px auto;"></div>
            <div style="flex:1; background: #060913; border-radius: 24px; padding: 16px; display:flex; flex-direction:column; justify-content:space-between; border: 1px solid rgba(255,255,255,0.06);">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <div style="font-size:9px; color:#94a3b8;">Welcome back</div>
                  <div style="font-size:13px; font-weight:700; color:#fff;">Dearo Digital</div>
                </div>
                <div style="width:26px; height:26px; border-radius:50%; background: linear-gradient(135deg,#8b5cf6,#06b6d4);"></div>
              </div>

              <div style="background: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%); border-radius: 14px; padding: 14px; color:#fff; box-shadow: 0 10px 25px rgba(124,58,237,0.35);">
                <div style="font-size:9px; opacity:0.85; font-family:monospace;">PORTFOLIO BALANCE</div>
                <div style="font-size:20px; font-weight:800; margin-top:4px;">LKR 184,250.00</div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:14px; font-size:10px; font-family:monospace;">
                  <span>•••• 8904</span>
                  <span>ACTIVE</span>
                </div>
              </div>

              <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="background:rgba(255,255,255,0.04); padding:10px; border-radius:10px; border:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:9px; color:#38bdf8; font-family:monospace;">TRANSFER</div>
                  <div style="font-size:11px; font-weight:700; color:#fff; margin-top:2px;">Quick Pay</div>
                </div>
                <div style="background:rgba(255,255,255,0.04); padding:10px; border-radius:10px; border:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:9px; color:#34d399; font-family:monospace;">LEDGER</div>
                  <div style="font-size:11px; font-weight:700; color:#fff; margin-top:2px;">Passbook</div>
                </div>
              </div>

              <div style="background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.25); border-radius:10px; padding:8px 10px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:10px; color:#d1fae5; font-weight:600;">Dividend Credit</span>
                <span style="font-size:10px; font-family:monospace; color:#34d399; font-weight:700;">+LKR 12.5K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "doctor-healthcare",
    html: `
      <div class="canvas" style="background: radial-gradient(circle at 20% 80%, #064e3b 0%, #040d1a 70%);">
        <div class="glow" style="top: -50px; left: 100px; background: rgba(6, 182, 212, 0.3);"></div>
        <div class="glow" style="bottom: -50px; right: 60px; background: rgba(16, 185, 129, 0.3);"></div>
        <div class="grid-bg"></div>

        <div class="window">
          <div class="win-header">
            <div class="dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
            <div class="win-title">HC HOME ADMIN // WHERE IS MY DOCTOR &amp; E-PRESCRIPTION</div>
            <div class="pill-green">● CLINICAL SYNC LIVE</div>
          </div>
          <div class="win-body" style="display:grid; grid-template-columns: 1.15fr 1.35fr; gap: 18px;">
            <div style="display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div class="eyebrow">ACTIVE PATIENT QUEUE</div>
                <div class="big-num" style="font-size:28px;">142 Appointments</div>
              </div>
              <div style="background:rgba(6,182,212,0.08); border:1px solid rgba(6,182,212,0.25); border-radius:12px; padding:14px;">
                <div style="font-size:10px; font-family:monospace; color:#38bdf8; margin-bottom:8px;">PATIENT VITALS &amp; TELEMETRY</div>
                <svg viewBox="0 0 240 50" style="width:100%; height:45px;">
                  <path d="M 0 30 L 45 30 L 58 10 L 70 45 L 84 5 L 98 40 L 110 30 L 165 30 L 178 14 L 190 42 L 202 30 L 240 30" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="node-card" style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <div class="eyebrow">PRACTITIONERS ON DUTY</div>
                  <div style="font-size:16px; font-weight:700; color:#fff; margin-top:2px;">28 Specialists</div>
                </div>
                <span class="badge-cyan">Flutter + React</span>
              </div>
            </div>

            <div style="background:rgba(15,23,42,0.9); border:1px solid rgba(255,255,255,0.12); border-radius:14px; padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:10px;">
                <span style="font-family:monospace; font-size:11px; color:#38bdf8; font-weight:700;">℞ DIGITAL E-PRESCRIPTION</span>
                <span style="font-family:monospace; font-size:10px; color:#94a3b8;">#RX-8940</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:8px; margin: 10px 0;">
                <div style="background:rgba(255,255,255,0.03); padding:10px; border-radius:8px; border-left:3px solid #06b6d4;">
                  <div style="font-size:12px; font-weight:700; color:#fff;">Amoxicillin 500mg Capsules</div>
                  <div style="font-size:10px; color:#94a3b8; margin-top:2px;">Dosage: 1 Tab Twice Daily (BID) • 7 Days</div>
                </div>
                <div style="background:rgba(255,255,255,0.03); padding:10px; border-radius:8px; border-left:3px solid #8b5cf6;">
                  <div style="font-size:12px; font-weight:700; color:#fff;">Atorvastatin 20mg Tablet</div>
                  <div style="font-size:10px; color:#94a3b8; margin-top:2px;">Dosage: 1 Tab Nightly (HS) • 30 Days</div>
                </div>
              </div>
              <div style="font-family:monospace; font-size:10px; color:#34d399; display:flex; justify-content:space-between;">
                <span>✓ PHYSICIAN VERIFIED</span>
                <span>ENCRYPTED RECORD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "wecare",
    html: `
      <div class="canvas" style="background: radial-gradient(circle at 50% 30%, #3b0764 0%, #070a14 70%);">
        <div class="glow" style="top: 20px; left: 120px; background: rgba(168, 85, 247, 0.35);"></div>
        <div class="glow" style="bottom: -40px; right: 100px; background: rgba(16, 185, 129, 0.25);"></div>
        <div class="grid-bg"></div>

        <div class="window">
          <div class="win-header">
            <div class="dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
            <div class="win-title">WECARE // MENTAL WELLNESS MOBILE &amp; NEXT.JS 14 ECOSYSTEM</div>
            <div class="badge-cyan">Flutter + Next.js 14</div>
          </div>
          <div class="win-body" style="display:grid; grid-template-columns: 1fr 1.5fr; gap: 20px; align-items:center;">
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:10px;">
              <div style="width:130px; height:130px; border-radius:50%; background: radial-gradient(circle, #a855f7 0%, #3b82f6 55%, rgba(16,185,129,0.2) 100%); display:flex; align-items:center; justify-content:center; box-shadow: 0 0 40px rgba(168,85,247,0.5); border: 2px solid rgba(255,255,255,0.2);">
                <div style="font-size:13px; font-weight:800; color:#fff; letter-spacing:1px;">BREATHE</div>
              </div>
              <div style="font-family:monospace; font-size:10px; color:#c4b5fd; margin-top:14px;">MINDFULNESS AUDIO &amp; GROUNDING</div>
            </div>

            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
              <div>
                <div class="eyebrow">EMOTIONAL SERENITY INDEX</div>
                <div class="big-num" style="font-size:28px;">88.4% Positive Sentiment</div>
              </div>

              <div style="display:grid; grid-template-columns: repeat(7, 1fr); gap:8px; align-items:end; height:85px; padding: 12px; background:rgba(0,0,0,0.3); border-radius:12px; border:1px solid rgba(255,255,255,0.06);">
                <div style="height:45%; background:#8b5cf6; border-radius:4px;"></div>
                <div style="height:60%; background:#8b5cf6; border-radius:4px;"></div>
                <div style="height:50%; background:#06b6d4; border-radius:4px;"></div>
                <div style="height:75%; background:#06b6d4; border-radius:4px;"></div>
                <div style="height:85%; background:#10b981; border-radius:4px;"></div>
                <div style="height:70%; background:#10b981; border-radius:4px;"></div>
                <div style="height:95%; background:#34d399; border-radius:4px;"></div>
              </div>

              <div class="status-bar">
                <span style="color:#a78bfa;">🔒</span>
                <span>END-TO-END ENCRYPTED JOURNAL • DAILY MOOD CHECK-INS • PHP &amp; MYSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "education",
    html: `
      <div class="canvas" style="background: radial-gradient(circle at 80% 30%, #1e1b4b 0%, #050814 70%);">
        <div class="glow" style="top: -40px; left: 100px; background: rgba(139, 92, 246, 0.35);"></div>
        <div class="glow" style="bottom: -50px; right: 80px; background: rgba(56, 189, 248, 0.25);"></div>
        <div class="grid-bg"></div>

        <div class="window">
          <div class="win-header">
            <div class="dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
            <div class="win-title">EDUCATION APP + MODULAR PHP BACKEND // MIT LICENSE</div>
            <div class="pill-green">★ OPEN SOURCE (MIT)</div>
          </div>
          <div class="win-body" style="display:grid; grid-template-columns: 1.2fr 1.2fr; gap: 18px;">
            <div style="display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div class="eyebrow">INTERACTIVE LEARNING SYLLABUS</div>
                <div style="font-size:22px; font-weight:800; color:#fff; margin-top:4px;">Course &amp; Quiz Engine</div>
              </div>

              <div class="node-card">
                <div style="display:flex; justify-content:space-between; font-size:11px; font-weight:700; color:#fff; margin-bottom:6px;">
                  <span>01. Flutter Cross-Platform UI</span>
                  <span style="color:#38bdf8;">92%</span>
                </div>
                <div style="height:6px; background:rgba(255,255,255,0.08); border-radius:3px; overflow:hidden;">
                  <div style="width:92%; height:100%; background:linear-gradient(90deg,#8b5cf6,#06b6d4);"></div>
                </div>
              </div>

              <div class="node-card">
                <div style="display:flex; justify-content:space-between; font-size:11px; font-weight:700; color:#fff; margin-bottom:6px;">
                  <span>02. PHP REST API &amp; Auth</span>
                  <span style="color:#34d399;">100%</span>
                </div>
                <div style="height:6px; background:rgba(255,255,255,0.08); border-radius:3px; overflow:hidden;">
                  <div style="width:100%; height:100%; background:#10b981;"></div>
                </div>
              </div>
            </div>

            <div style="background:#020617; border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:14px; font-family:monospace; font-size:11px; line-height:1.65; color:#cbd5e1;">
              <div style="color:#64748b; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:6px; margin-bottom:8px;">// quiz_controller.dart</div>
              <div><span style="color:#f43f5e;">class</span> <span style="color:#38bdf8;">EducationController</span> {</div>
              <div style="padding-left:14px;"><span style="color:#818cf8;">final</span> api = <span style="color:#34d399;">RestClient</span>();</div>
              <div style="padding-left:14px;"><span style="color:#818cf8;">Future</span>&lt;Result&gt; submitQuiz() <span style="color:#f43f5e;">async</span> {</div>
              <div style="padding-left:28px;"><span style="color:#f43f5e;">return await</span> api.verifyScore();</div>
              <div style="padding-left:14px;">}</div>
              <div>}</div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "service-request",
    html: `
      <div class="canvas" style="background: radial-gradient(circle at 25% 25%, #0f2942 0%, #050814 70%);">
        <div class="glow" style="top: -40px; right: 100px; background: rgba(56, 189, 248, 0.3);"></div>
        <div class="glow" style="bottom: -40px; left: 80px; background: rgba(139, 92, 246, 0.25);"></div>
        <div class="grid-bg"></div>

        <div class="window">
          <div class="win-header">
            <div class="dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
            <div class="win-title">MINI SERVICE REQUEST // FULL-STACK DISPATCH PLATFORM</div>
            <div class="badge-cyan">JavaScript + REST API</div>
          </div>
          <div class="win-body" style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 14px;">
            <div style="background:rgba(0,0,0,0.35); border:1px solid rgba(255,255,255,0.07); border-radius:12px; padding:12px;">
              <div style="font-family:monospace; font-size:10px; color:#fbbf24; font-weight:700; margin-bottom:10px;">● QUEUED (4)</div>
              <div class="node-card" style="margin-bottom:8px;">
                <div style="font-size:12px; font-weight:700; color:#fff;">Network Link Audit</div>
                <div style="font-size:10px; color:#94a3b8; margin-top:2px;">Branch #04 • High Priority</div>
                <div style="font-family:monospace; font-size:9px; color:#fbbf24; margin-top:8px;">#SR-102</div>
              </div>
              <div class="node-card">
                <div style="font-size:12px; font-weight:700; color:#fff;">Server Rack Cooling</div>
                <div style="font-size:10px; color:#94a3b8; margin-top:2px;">Bay 02 • Scheduled</div>
                <div style="font-family:monospace; font-size:9px; color:#38bdf8; margin-top:8px;">#SR-105</div>
              </div>
            </div>

            <div style="background:rgba(0,0,0,0.35); border:1px solid rgba(56,189,248,0.2); border-radius:12px; padding:12px;">
              <div style="font-family:monospace; font-size:10px; color:#38bdf8; font-weight:700; margin-bottom:10px;">● IN-PROGRESS (2)</div>
              <div class="node-card" style="border-color:rgba(56,189,248,0.35); background:rgba(56,189,248,0.08);">
                <div style="font-size:12px; font-weight:700; color:#fff;">Cloud Gateway Sync</div>
                <div style="font-size:10px; color:#cbd5e1; margin-top:2px;">Assigned: Engineer #18</div>
                <div style="font-family:monospace; font-size:9px; color:#38bdf8; margin-top:8px;">STATE: DISPATCHED</div>
              </div>
            </div>

            <div style="background:rgba(0,0,0,0.35); border:1px solid rgba(16,185,129,0.2); border-radius:12px; padding:12px;">
              <div style="font-family:monospace; font-size:10px; color:#34d399; font-weight:700; margin-bottom:10px;">● RESOLVED (28)</div>
              <div class="node-card" style="border-color:rgba(16,185,129,0.35); background:rgba(16,185,129,0.08);">
                <div style="font-size:12px; font-weight:700; color:#fff;">UPS Array Check</div>
                <div style="font-size:10px; color:#cbd5e1; margin-top:2px;">Verified &amp; Closed</div>
                <div style="font-family:monospace; font-size:9px; color:#34d399; margin-top:8px;">✓ SLA PASSED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "dearo-islamic",
    html: `
      <div class="canvas" style="background: radial-gradient(circle at 80% 20%, #064e3b 0%, #020907 70%);">
        <div class="glow" style="top: -40px; left: 80px; background: rgba(16, 185, 129, 0.3);"></div>
        <div class="glow" style="bottom: -40px; right: 80px; background: rgba(245, 158, 11, 0.25);"></div>
        <div class="grid-bg"></div>

        <div class="window" style="border-color: rgba(245, 158, 11, 0.25);">
          <div class="win-header">
            <div class="dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
            <div class="win-title">DEARO ISLAMIC LTD // SHARIAH-COMPLIANT INVESTMENT PORTAL</div>
            <div class="badge-amber">★ AUDIT CERTIFIED</div>
          </div>
          <div class="win-body" style="display:grid; grid-template-columns: 1.15fr 1.35fr; gap: 20px;">
            <div style="display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div class="eyebrow" style="color:#6ee7b7;">ETHICAL ASSET MANAGEMENT</div>
                <div class="big-num" style="font-size:26px;">Mudarabah &amp; Sukuk</div>
                <div style="font-family:monospace; font-size:11px; color:#fbbf24; margin-top:4px;">★ 100% Shariah Board Approved</div>
              </div>
              <div class="node-card" style="border-color:rgba(16,185,129,0.3);">
                <div class="eyebrow">ANNUALIZED PROFIT SHARING RATIO</div>
                <div style="font-size:20px; font-weight:800; color:#34d399; margin-top:4px;">18.2% Projected Return</div>
              </div>
              <div class="node-card">
                <div class="eyebrow">INSTITUTIONAL TRANSPARENCY</div>
                <div style="font-size:13px; font-weight:700; color:#fff; margin-top:4px;">Zero Interest (Riba-Free) Architecture</div>
              </div>
            </div>

            <div style="background:rgba(2,12,10,0.75); border:1px solid rgba(245,158,11,0.2); border-radius:14px; padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
              <div style="font-size:12px; font-weight:700; color:#fbbf24;">Ethical Investment Pillars</div>
              <div style="display:flex; flex-direction:column; gap:10px;">
                <div style="background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.25); padding:10px 12px; border-radius:10px;">
                  <div style="font-size:12px; font-weight:700; color:#fff;">Mudarabah Partnership</div>
                  <div style="font-size:10px; color:#a7f3d0;">Equitable profit-sharing investment accounts</div>
                </div>
                <div style="background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.25); padding:10px 12px; border-radius:10px;">
                  <div style="font-size:12px; font-weight:700; color:#fff;">Sukuk Asset Certificates</div>
                  <div style="font-size:10px; color:#fde68a;">Tangible asset-backed ethical portfolios</div>
                </div>
              </div>
              <div style="font-family:monospace; font-size:10px; color:#6ee7b7;">BUILT WITH NEXT.JS &amp; TAILWIND CSS</div>
            </div>
          </div>
        </div>
      </div>
    `
  }
];

const baseStyles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { width: 800px; height: 480px; overflow: hidden; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif; background: #050811; }
  .canvas { position: relative; width: 800px; height: 480px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
  .glow { position: absolute; width: 320px; height: 320px; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
  .grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 40px 40px; z-index: 1; }
  .window { position: relative; z-index: 2; width: 700px; height: 390px; background: rgba(15, 23, 42, 0.78); backdrop-filter: blur(20px); border: 1.5px solid rgba(255,255,255,0.14); border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7); display: flex; flex-direction: column; overflow: hidden; }
  .win-header { height: 48px; background: rgba(255,255,255,0.03); border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: space-between; padding: 0 20px; }
  .dots { display: flex; gap: 7px; }
  .dots span { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
  .dots .r { background: #ef4444; opacity: 0.8; }
  .dots .y { background: #f59e0b; opacity: 0.8; }
  .dots .g { background: #10b981; opacity: 0.8; }
  .win-title { font-family: Consolas, monospace; font-size: 11px; color: #cbd5e1; font-weight: 700; letter-spacing: 0.5px; }
  .win-body { flex: 1; padding: 24px; display: flex; flex-direction: column; justify-content: space-between; }
  .eyebrow { font-family: Consolas, monospace; font-size: 10px; color: #94a3b8; letter-spacing: 1px; font-weight: 600; }
  .big-num { font-size: 32px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; margin-top: 4px; }
  .badge-amber { font-family: Consolas, monospace; font-size: 10px; color: #fbbf24; background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.35); padding: 4px 10px; border-radius: 999px; font-weight: 700; }
  .badge-cyan { font-family: Consolas, monospace; font-size: 10px; color: #38bdf8; background: rgba(6, 182, 212, 0.15); border: 1px solid rgba(6, 182, 212, 0.35); padding: 4px 10px; border-radius: 999px; font-weight: 700; }
  .pill-green { font-family: Consolas, monospace; font-size: 10px; color: #34d399; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.35); padding: 5px 12px; border-radius: 999px; font-weight: 700; }
  .node-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 12px 14px; }
  .node-tag { font-family: Consolas, monospace; font-size: 10px; font-weight: 700; }
  .node-title { font-size: 16px; font-weight: 800; color: #ffffff; margin: 6px 0; }
  .node-status { font-family: Consolas, monospace; font-size: 10px; font-weight: 600; }
  .status-bar { background: rgba(2, 6, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 10px 14px; font-family: Consolas, monospace; font-size: 10px; color: #94a3b8; display: flex; align-items: center; gap: 8px; }
  .chip { font-family: Consolas, monospace; font-size: 11px; color: #e2e8f0; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 6px 12px; border-radius: 8px; }
`;

async function generate() {
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 480, deviceScaleFactor: 2 });

  for (const item of templates) {
    const fullHtml = `<!DOCTYPE html><html><head><style>${baseStyles}</style></head><body>${item.html}</body></html>`;
    await page.setContent(fullHtml, { waitUntil: "load" });
    const outPath = path.join(outDir, `${item.name}.png`);
    await page.screenshot({ path: outPath, type: "png" });
    console.log(`Generated 2x Retina PNG: ${outPath}`);
  }

  await browser.close();
}

generate().catch((e) => {
  console.error(e);
  process.exit(1);
});

