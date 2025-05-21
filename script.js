

const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");
const resizer = document.createElement("div");

resizer.style.width = "10px";
resizer.style.height = "100%";
resizer.style.background = "#1db954";
resizer.style.cursor = "ew-resize";
resizer.style.position = "absolute";
resizer.style.right = "0";
sidebar.appendChild(resizer);

resizer.addEventListener("mousedown", (event) => {
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", resize);
    });
});

function resize(event) {
    let newWidth = event.clientX;
    if (newWidth > 150 && newWidth < 500) {
        sidebar.style.width = newWidth + "px";
        mainContent.style.marginLeft = newWidth + "px"; // Ana içeriği kaydırma
    }
}
document.querySelectorAll(".sidebar ul li").forEach(track => {
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.style.position = "absolute";
    deleteBtn.style.top = "50%";
    deleteBtn.style.right = "10px";
    deleteBtn.style.transform = "translateY(-50%)";
    deleteBtn.style.background = "red";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "5px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.borderRadius = "5px";
    deleteBtn.style.display = "none"; // Başlangıçta gizli

    track.style.position = "relative"; // Silme butonunu doğru konumlandırmak için
    track.appendChild(deleteBtn);

    // Fareyle üzerine gelince butonu göster
    track.addEventListener("mouseover", () => {
        deleteBtn.style.display = "block";
    });

    // Fare ayrıldığında butonu gizle
    track.addEventListener("mouseout", () => {
        deleteBtn.style.display = "none";
    });

    // Silme butonuna tıklanınca şarkıyı kaldır
    deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Linke tıklamayı tamamen engelle
        event.preventDefault(); // Varsayılan link davranışını iptal et
        track.remove(); // Şarkıyı sidebar'dan kaldır
    });

    // Linke tıklamayı engelle (tüm öğeler için)
    track.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Linkin çalışmasını tamamen durdur
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
  const userProfileImage = document.getElementById("userProfileImage");

  
  const savedImage = localStorage.getItem("profileImage");
  if (savedImage) {
    userProfileImage.src = savedImage;  
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("player");
  const clickableImages = document.querySelectorAll("[data-audio]");

  clickableImages.forEach(img => {
    img.addEventListener("click", function (e) {
      e.preventDefault();
      const audioSrc = img.getAttribute("data-audio");
      if (audioSrc) {
        audioPlayer.src = audioSrc;
        audioPlayer.style.display = "block";
        audioPlayer.play();
      }
    });
  });
});




// footer
const audio = document.getElementById("audioPlayer");
  const playBtn = document.getElementById("playBtn");
  const currentTimeEl = document.getElementById("currentTime");
  const durationEl = document.getElementById("duration");
  const volumeControl = document.getElementById("volumeControl");
  const progressContainer = document.getElementById("progressContainer");
  const elapsedBar = progressContainer.querySelector('.elapsed');

  const playlist = [
    { title: "Salla", artist: "Atiye", src: "audio/song1.mp3"  },
    { title: "Sarılırım birine", artist: "Adamlar", src: "audio/song2.mp3" },
    { title: "Rüyalara sor", artist: "Eren Karayılan", src: "audio/song3.mp3" }
  ];
  let currentTrack = 0;

  function loadTrack(index) {
    const song = playlist[index];
    document.getElementById("song-title").textContent = song.title;
    document.getElementById("song-artist").textContent = song.artist;
    audio.src = song.src;
    audio.load();
  }

  function togglePlay() { audio.paused ? (audio.play(), playBtn.textContent='⏸️') : (audio.pause(), playBtn.textContent='▶️'); }
  function nextSong() { currentTrack=(currentTrack+1)%playlist.length; loadTrack(currentTrack); audio.play(); playBtn.textContent='⏸️'; }
  function prevSong() { currentTrack=(currentTrack-1+playlist.length)%playlist.length; loadTrack(currentTrack); audio.play(); playBtn.textContent='⏸️'; }

  audio.addEventListener("timeupdate", () => {
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
    elapsedBar.style.width = (audio.currentTime/audio.duration*100) + "%";
  });

  progressContainer.addEventListener('click', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = clickX/rect.width*audio.duration;
    audio.currentTime = newTime;
  });

  function formatTime(sec) { if(isNaN(sec)) return '0:00'; const m=Math.floor(sec/60); const s=Math.floor(sec%60).toString().padStart(2,'0'); return `${m}:${s}`; }
  volumeControl.addEventListener("input", ()=>audio.volume=volumeControl.value);
  window.addEventListener("load", ()=>loadTrack(currentTrack));

  //search bar
  document.getElementById("searchInput").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll(".mix-card");
  
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      if (text.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
const muzikVeritabani = [
  { isim: "September", sayfa: "dailymix1.html" },
  { isim: "Suçlarımdan Biri", sayfa: "dailymix2.html" },
  { isim: "Yakışıklı", sayfa: "dailymix3.html" },
  { isim: "Hande Yener", sayfa: "dailymix4.html" },
  { isim: "Mabel Matiz", sayfa: "dailymix5.html" },
  { isim: "Khontkar", sayfa: "nkvt.html" },
  { isim: "Hot Hits", sayfa: "hothits.html" },
  { isim: "Blok3", sayfa: "hothits.html" },
  { isim: "Duman", sayfa: "turkcerock.html" },
  { isim: "MFÖ", sayfa: "dailymix3.html" },
  { isim: "Teoman", sayfa: "dailymix3.html" },
  { isim: "Simge", sayfa: "dailymix3.html" },
  { isim: "Güneş", sayfa: "dailymix2.html" },
  { isim: "Tan Taşçı", sayfa: "trend.html" },
  { isim: "Bengü", sayfa: "trend.html" },
  { isim: "Ati242", sayfa: "rapmix.html" },
  { isim: "Uzi", sayfa: "rapmix.html" },
  { isim: "Lvbel C5", sayfa: "dailymix1.html" },
  { isim: "Semicenk", sayfa: "dailymix1.html" },
  { isim: "Hayko Cepkin", sayfa: "turkcerock.html" },
  { isim: "90'lar", sayfa: "turkce90lar.html" },
  { isim: "FIFA", sayfa: "fifa.html" },
  { isim: "Ati242 Radyosu", sayfa: "atiradyo.html" },
  { isim: "Yabancı Rap", sayfa: "yabancirap.html" },
  { isim: "Trend 2024", sayfa: "trend.html" }
];

  document.getElementById("searchInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      const query = this.value.toLowerCase();
      const eslesen = muzikVeritabani.find(item => item.isim.toLowerCase().includes(query));
  
      if (eslesen) {
        window.location.href = eslesen.sayfa;
      } else {
        alert("Şarkı bulunamadı.");
      }
    }
  });


//karıştır

function rastgeleSirala() {
    const tbody = document.querySelector("table tbody");
    const satirlar = Array.from(tbody.querySelectorAll("tr"));

    for (let i = satirlar.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [satirlar[i], satirlar[j]] = [satirlar[j], satirlar[i]];
    }

    tbody.innerHTML = "";
    satirlar.forEach((satir, index) => {
        satir.querySelector("td").textContent = index + 1; // sırayı güncelle
        tbody.appendChild(satir);
    });
}


// Plak ekleme butonuna tıklama işlemi
document.querySelector(".gunluk-play-button").addEventListener("click", function () {
  // Burada başlık ve fotoğrafı alıyoruz
  const trackTitle = document.querySelector(".title").textContent; // Başlık
  const trackImage = document.querySelector(".photo img").src; // Resim

  // Sidebar'a yeni bir şarkı eklemek için <li> öğesi oluşturuyoruz
  const newTrack = document.createElement("li");
  newTrack.classList.add("track-item");

  // Track içeriğini hazırlıyoruz
  newTrack.innerHTML = `
      <a href="dailyMix.html" class="track-link">
          <img src="${trackImage}" alt="track image" class="track-image">
          <span class="track-title">${trackTitle}</span>
      </a>
      <button class="delete-btn">✖</button>
  `;

  // Sidebar'a ekliyoruz
  document.querySelector(".sidebar ul").appendChild(newTrack);

  // Delete butonuna tıklama işlemi
  const deleteBtn = newTrack.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
      newTrack.remove(); // Şarkıyı sidebar'dan kaldır
  });

  // localStorage'a kaydet
  saveToLocalStorage();
});

// LocalStorage'a kaydetme
function saveToLocalStorage() {
  const tracks = [];
  const trackItems = document.querySelectorAll(".sidebar ul li");

  trackItems.forEach(item => {
      const trackTitle = item.querySelector(".track-title").textContent;
      const trackImage = item.querySelector(".track-image").src;
      tracks.push({ title: trackTitle, image: trackImage });
  });

  localStorage.setItem("savedTracks", JSON.stringify(tracks)); // Veriyi localStorage'a kaydet
}

// Sayfa yüklendiğinde localStorage'tan şarkıları ekle
document.addEventListener("DOMContentLoaded", function () {
  const savedTracks = JSON.parse(localStorage.getItem("savedTracks"));
  if (savedTracks) {
      savedTracks.forEach(track => {
          const newTrack = document.createElement("li");
          newTrack.classList.add("track-item");

          newTrack.innerHTML = `
              <a href="dailyMix.html" class="track-link">
                  <img src="${track.image}" alt="track image" class="track-image">
                  <span class="track-title">${track.title}</span>
              </a>
              <button class="delete-btn">✖</button>
          `;
          document.querySelector(".sidebar ul").appendChild(newTrack);

          const deleteBtn = newTrack.querySelector(".delete-btn");
          deleteBtn.addEventListener("click", function () {
              newTrack.remove(); // Şarkıyı sidebar'dan kaldır
              saveToLocalStorage(); // Listeyi tekrar localStorage'a kaydet
          });
      });
  }
});



