document.addEventListener('DOMContentLoaded', function() {
  // Elementet për modal
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeModal = document.querySelector('.modal .close');

  // Merr të gjitha butonat e stacioneve (nuk e ndryshojmë këtë pjesë)
  const stationButtons = document.querySelectorAll('.station-btn');

  // Përmbajtje dummy për secilin stacion (mund ta përditësosh sipas nevojës)
  const stationContent = {
    "1": `<h3>Pyetjet për Stacionin 1</h3>
          <p>Këtu vendoset përmbajtja e pyetjeve për stacionin 1. (Ploteso vendet bosh, V/G, lidh me shigjetë, përcakto llojin, shpjego...)</p>`,
    "2": `<h3>Pyetjet për Stacionin 2</h3>
          <p>Këtu vendoset përmbajtja e pyetjeve për stacionin 2.</p>`,
    "3": `<h3>Pyetjet për Stacionin 3</h3>
          <p>Këtu vendoset përmbajtja e pyetjeve për stacionin 3.</p>`,
    "4": `<h3>Pyetjet për Stacionin 4</h3>
          <p>Këtu vendoset përmbajtja e pyetjeve për stacionin 4.</p>`
  };

  // Shto event listener për çdo buton stacioni
  stationButtons.forEach(button => {
    button.addEventListener('click', function() {
      const stationId = this.getAttribute('data-station');
      modalBody.innerHTML = stationContent[stationId] || "<p>Nuk ka përmbajtje për këtë stacion.</p>";
      modal.style.display = 'block';
    });
  });

  // Mbyll modal-in kur klikohet butoni "close"
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Mbyll modal-in kur klikohet jashtë përmbajtjes së modal-it
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
