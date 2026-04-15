const API_URL = "https://relais-kappa.vercel.app/api/auth";
const REDIRECT_URL = "p9l2k.html";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
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

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    const btn = document.getElementById('loginBtn');
    
    btn.disabled = true;

    try {
        const sig = cascadeEncode(Date.now().toString());

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-auth-sig': sig
            },
            body: JSON.stringify({ u, p })
        });

        if (response.status === 200) {
            const encodedData = await response.text();
            const data = JSON.parse(cascadeDecode(encodedData));

            if (data && data.success) {
                localStorage.setItem('rh_session_token', data.token);
                localStorage.setItem('rh_user_data', JSON.stringify(data.user));
                showToast("Connexion réussie !", "success");
                setTimeout(() => window.location.href = REDIRECT_URL, 1000);
            } else {
                showToast("Identifiants invalides", "error");
            }
        } else {
            showToast("Erreur serveur (" + response.status + ")", "error");
        }
    } catch (err) {
        showToast("Erreur réseau ou relais inaccessible", "error");
    } finally {
        btn.disabled = false;
    }
});

function showToast(message, type) {
    const container = document.querySelector('.toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type} show`;
    toast.innerHTML = `<div class="toast-icon">!</div><div class="toast-message">${message}</div>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}
