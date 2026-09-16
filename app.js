// Mock Database of Real-Time New RWA Meme Coins on Long.xyz (60+ Stock Pairs)
const initialCoins = [
    { name: "Neural Inu ($NINU)", pair: "NVIDIA (NVDA)", time: "2 mins ago", volume: "$142,850", liq: "$45,000", badge: "HOT" },
    { name: "CyberVolt ($VOLT)", pair: "Tesla (TSLA)", time: "8 mins ago", volume: "$98,200", liq: "$32,100", badge: "NEW" },
    { name: "Orbital X ($ORBX)", pair: "SpaceX (SPCX)", time: "15 mins ago", volume: "$215,400", liq: "$89,000", badge: "HOT" },
    { name: "FruitCat ($FCAT)", pair: "Apple (AAPL)", time: "34 mins ago", volume: "$64,300", liq: "$18,500", badge: "NEW" },
    { name: "GoldMiner ($GLDR)", pair: "Newmont (NEM)", time: "1 hour ago", volume: "$310,900", liq: "$120,400", badge: "WHALE" },
    { name: "Netflix & Pump ($NFLX)", pair: "Netflix (NFLX)", time: "2 hours ago", volume: "$88,100", liq: "$24,000", badge: "NEW" },
    { name: "MicroChad ($MSTR)", pair: "MicroStrategy (MSTR)", time: "3 hours ago", volume: "$512,000", liq: "$210,000", badge: "HOT" },
    { name: "AeroPepe ($AERO)", pair: "Boeing (BA)", time: "4 hours ago", volume: "$45,200", liq: "$15,000", badge: "NEW" }
];

const coinTableBody = document.getElementById('coinTableBody');
const searchInput = document.getElementById('searchInput');
const refreshBtn = document.getElementById('refreshBtn');
const statNewCoins = document.getElementById('statNewCoins');

// Render Table Function
function renderTable(data) {
    coinTableBody.innerHTML = '';
    
    if (data.length === 0) {
        coinTableBody.innerHTML = `<tr><td colspan="6" class="py-6 text-center text-slate-500">No matching new RWA coin found.</td></tr>`;
        return;
    }

    data.forEach(coin => {
        let badgeColor = "bg-slate-800 text-slate-300 border-slate-700";
        if (coin.badge === "HOT") badgeColor = "bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]/30";
        if (coin.badge === "WHALE") badgeColor = "bg-purple-950 text-purple-300 border-purple-500/30";
        if (coin.badge === "NEW") badgeColor = "bg-cyan-950 text-cyan-300 border-cyan-500/30";

        const row = document.createElement('tr');
        row.className = "border-b border-slate-800/40 hover:bg-[#22c55e]/[0.02] transition";
        row.innerHTML = `
            <td class="py-3 px-4 font-bold text-white flex items-center space-x-2">
                <span>${coin.name}</span>
                <span class="text-[9px] px-1.5 py-0.5 rounded border ${badgeColor}">${coin.badge}</span>
            </td>
            <td class="py-3 px-4 text-[#22c55e] font-medium">${coin.pair}</td>
            <td class="py-3 px-4 text-slate-400">${coin.time}</td>
            <td class="py-3 px-4 font-mono text-white">${coin.volume}</td>
            <td class="py-3 px-4 font-mono text-slate-300">${coin.liq}</td>
            <td class="py-3 px-4 text-right">
                <a href="https://app.long.xyz/" target="_blank" class="px-2.5 py-1 rounded bg-slate-800 hover:bg-[#22c55e] hover:text-black text-slate-300 font-bold transition text-[10px]">
                    Trade ↗
                </a>
            </td>
        `;
        coinTableBody.appendChild(row);
    });
}

// Initial Render
renderTable(initialCoins);

// Search Filter
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = initialCoins.filter(c => 
        c.name.toLowerCase().includes(query) || c.pair.toLowerCase().includes(query)
    );
    renderTable(filtered);
});

// Refresh Button Simulation with Animation
refreshBtn.addEventListener('click', () => {
    refreshBtn.textContent = "Scanning... ↻";
    refreshBtn.disabled = true;

    setTimeout(() => {
        // Randomly simulate a new incoming token
        const newTokens = [
            { name: "SolStock ($SOLS)", pair: "Solana Trust (SOL)", time: "Just now", volume: "$74,100", liq: "$30,000", badge: "HOT" },
            { name: "Invidia AI ($IVAI)", pair: "NVIDIA (NVDA)", time: "Just now", volume: "$189,500", liq: "$60,000", badge: "WHALE" },
            { name: "ApelChain ($APEL)", pair: "Apple (AAPL)", time: "Just now", volume: "$51,200", liq: "$12,000", badge: "NEW" }
        ];
        const randomCoin = newTokens[Math.floor(Math.random() * newTokens.length)];
        initialCoins.unshift(randomCoin);
        
        statNewCoins.textContent = `${initialCoins.length} Detected`;
        renderTable(initialCoins);

        refreshBtn.textContent = "Force Refresh Feed ↻";
        refreshBtn.disabled = false;
    }, 600);
});
          
