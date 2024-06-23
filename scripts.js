document.getElementById('cekForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const result = document.getElementById('result');

  if (nama === '') {
      result.innerHTML = 'Silakan masukkan nama Anda';
      result.style.color = 'red';
      return;
  }

  const khodam = getKhodam(nama);
  result.innerHTML = `Khodam Anda adalah <span style="color: #007bff;">${khodam}</span>`;
  result.style.color = '#333';
});

function getKhodam(nama) {
  const khodams = [
      'Harimau Sumatera', 'Naga Geni', 'Kyai Semar', 'Ratu Kalijaga',
      'Hanuman', 'Mak Lampir', 'Khodam Leluhur', 'Nenek Gayung',
      'Jin Muslim', 'Macan Kumbang'
  ];

  const randomIndex = Math.floor(Math.random() * khodams.length);
  return khodams[randomIndex];
}
