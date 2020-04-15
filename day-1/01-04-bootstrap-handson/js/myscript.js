$('#dateOfBirth').datepicker({
      uiLibrary: 'bootstrap4',
      format: 'dd/mm/yyyy'
    });

function change() {
    var btn = document.getElementById('btn');
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-success');
    }