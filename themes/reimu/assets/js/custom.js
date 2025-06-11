document.addEventListener('DOMContentLoaded', function() {
  // Gestion des tabs
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanes = document.querySelectorAll('.tab-pane');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Désactiver tous les tabs
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));
      
      // Activer le tab sélectionné
      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
});