document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(localStorage.getItem('rh_user_data'));
    const token = localStorage.getItem('rh_session_token');

    if (!token || !userData) {
        window.location.href = "f0x1a.html";
        return;
    }

    document.getElementById('displayUsername').textContent = userData.username;
    document.getElementById('avatarInitial').textContent = userData.username.charAt(0).toUpperCase();
    document.getElementById('userBalance').textContent = userData.balance.toFixed(2) + " €";
    document.getElementById('welcomeMsg').textContent = "Gestion du Compte - " + userData.username;

    const grid = document.getElementById('servicesGrid');
    const categories = userData.categories || "";
    
    const serviceMap = {
        'ecommerce': { name: 'E-Commerce Pro', icon: '📦', desc: 'Gestion des stocks et flux.' },
        'finance': { name: 'Finances', icon: '💰', desc: 'Gestion des paiements.' },
        'security': { name: 'Protection Flux', icon: '🛡️', desc: 'Chiffrement AES-256 actif.' }
    };

    categories.split(',').forEach(cat => {
        const key = cat.trim().toLowerCase();
        if (serviceMap[key]) {
            const s = serviceMap[key];
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <div class="category-img">${s.icon}</div>
                <h4>${s.name}</h4>
                <p>${s.desc}</p>
                <button class="btn-small">Gérer</button>
            `;
            grid.appendChild(card);
        }
    });

    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.clear();
    });
});
