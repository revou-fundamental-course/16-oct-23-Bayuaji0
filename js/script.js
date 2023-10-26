function tanggalwaktu() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
  
    const currentDate = new Date();
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[currentDate.getDay()];
  
    const currentTimeElement = document.getElementById('current-time');
    currentTimeElement.textContent = `Current time: ${currentDay} ${dateTime}`;
  }
  
  tanggalwaktu();
  
  setInterval(tanggalwaktu, 1000);

 
  document.getElementById('left-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nama = document.getElementById('name').value;
    const tanggalLahir = document.querySelector('input[type="date"]').value;
    const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked');
    const pesan = document.getElementById('pesan1').value;

    if (!nama || !tanggalLahir || !jenisKelamin || !pesan) {
        alert('All fields are required!');
        return;
    }

    document.getElementById('right-form').innerHTML = `
        <p id="current-time">Current time : </p>
        <p>Nama: ${nama}</p>
        <p>Tanggal Lahir: ${tanggalLahir}</p>
        <p>Jenis kelamin: ${jenisKelamin.nextElementSibling.textContent}
        <p>Pesan: ${pesan}</p>
    `;
});



