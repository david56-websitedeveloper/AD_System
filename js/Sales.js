document.getElementById('save-btn').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'flex';
  });
  
  document.getElementById('confirm-btn').addEventListener('click', function () {
    alert('Sales receipt saved!');
    document.getElementById('popup').style.display = 'none';
  });
  
  document.getElementById('cancel-btn').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
  });