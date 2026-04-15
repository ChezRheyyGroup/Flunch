const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
const cascadeDecode = (hex) => {
    try {
        let str = "";
        for (let i = 0; i < hex.length; i += 2) str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        let bits = 0, val = 0, bytes = [];
        for (let i = 0; i < str.length; i++) {
            let idx = alphabet.indexOf(str[i]);
            if (idx === -1) continue;
            val = (val << 5) | idx;
            bits += 5;
            if (bits >= 8) {
                bytes.push((val >>> (bits - 8)) & 255);
                bits -= 8;
            }
        }
        let b64 = String.fromCharCode.apply(null, bytes);
        return decodeURIComponent(atob(b64));
    } catch (e) { return null; }
};

const cascadeEncode = (data) => {
    let s1 = encodeURIComponent(data);
    let s2 = btoa(s1);
    let binary = "";
    for (let i = 0; i < s2.length; i++) {
        let bin = s2.charCodeAt(i).toString(2);
        binary += "0".repeat(8 - bin.length) + bin;
    }
    let encoded = "";
    for (let i = 0; i < binary.length; i += 5) {
        let chunk = binary.substr(i, 5);
        if (chunk.length < 5) chunk += "0".repeat(5 - chunk.length);
        encoded += alphabet[parseInt(chunk, 2)];
    }
    let hex = "";
    for (let i = 0; i < encoded.length; i++) hex += encoded.charCodeAt(i).toString(16).padStart(2, '0');
    return hex;
};

document.addEventListener('DOMContentLoaded', async () => {
    const userData = JSON.parse(localStorage.getItem('rh_user_data'));
    const token = localStorage.getItem('rh_session_token');

    if (!token || !userData) {
        window.location.href = "f0x1a.html";
        return;
    }

    if(document.getElementById('displayUsername')) {
        document.getElementById('displayUsername').textContent = userData.username;
        document.getElementById('avatarInitial').textContent = userData.username.charAt(0).toUpperCase();
        document.getElementById('userBalance').textContent = userData.balance.toFixed(2) + " €";
        document.getElementById('welcomeMsg').textContent = "Gestion du Compte - " + userData.username;
    }

    if(window.location.pathname.includes('h4t9z.html')) {
        loadHistory(token);
    }

    if(document.getElementById('logoutBtn')) {
        document.getElementById('logoutBtn').addEventListener('click', () => {
            localStorage.clear();
        });
    }
});

async function loadHistory(token) {
    const sig = cascadeEncode(Date.now().toString());
    const res = await fetch("https://relais-kappa.vercel.app/api/auth", {
        headers: {
            "x-auth-sig": sig,
            "x-rh-token": token,
            "x-target-path": "/reseller/history"
        }
    });
    if(res.status === 200) {
        const hex = await res.text();
        const data = JSON.parse(cascadeDecode(hex));
        const body = document.getElementById('historyBody');
        body.innerHTML = '';
        data.forEach(t => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${new Date(t.date).toLocaleDateString()}</td>
                <td class="type-${t.type}">${t.type.toUpperCase()}</td>
                <td>${t.amount.toFixed(2)} €</td>
                <td>${t.status}</td>
            `;
            body.appendChild(tr);
        });
    }
}
