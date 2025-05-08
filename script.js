// === Dados Modificáveis ===
const salesData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
    values: [1200, 1900, 3000, 2500, 3200]
  };
  
  const leadsData = {
    labels: ['Site Web', 'Instagram', 'TikTok', 'Référence'],
    values: [45, 25, 20, 10]
  };
  
  // === Menu Flutuante (opcional) ===
  const toggleBtn = document.getElementById('toggleMenu');
  const contactMenu = document.getElementById('contactMenu');
  if (toggleBtn && contactMenu) {
    toggleBtn.addEventListener('click', () => {
      contactMenu.style.display = contactMenu.style.display === 'flex' ? 'none' : 'flex';
    });
  }
  
  // === Graphique des Ventes ===
  const salesCtx = document.getElementById('salesChart').getContext('2d');
  new Chart(salesCtx, {
    type: 'line',
    data: {
      labels: salesData.labels,
      datasets: [{
        label: 'Ventes',
        data: salesData.values,
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        borderColor: 'rgba(37, 99, 235, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Ventes Mensuelles' }
      }
    }
  });
  
  // === Graphique des Leads ===
  const leadsCtx = document.getElementById('leadsChart').getContext('2d');
  new Chart(leadsCtx, {
    type: 'doughnut',
    data: {
      labels: leadsData.labels,
      datasets: [{
        label: 'Leads',
        data: leadsData.values,
        backgroundColor: [
          'rgba(37, 99, 235, 0.7)',
          'rgba(251, 191, 36, 0.7)',
          'rgba(244, 63, 94, 0.7)',
          'rgba(16, 185, 129, 0.7)'
        ],
        borderColor: '#fff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Origine des Leads' }
      }
    }
  });
  