function formatDepartureTime(secondsSinceMidnight) {
    // Nykyhetken määrittäminen
    const now = new Date();
    const secondsSinceMidnightNow = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  
    // Lähtöaika sekunteina nyt-hetkestä
    const departureInSeconds = secondsSinceMidnight - secondsSinceMidnightNow;
  
    // Lähtöaika on alle 10 minuutin päästä
    if (departureInSeconds < 600) { // 10 minuuttia * 60 sekuntia
      return `${Math.max(Math.round(departureInSeconds / 60), 0)} min`;
    } else {
      // Muussa tapauksessa muunnetaan sekunnit tunneiksi ja minuuteiksi
      const hours = Math.floor(secondsSinceMidnight / 3600);
      const minutes = Math.floor((secondsSinceMidnight % 3600) / 60);
  
      // Lisätään johtava nolla tarvittaessa
      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
  
      return `${formattedHours}:${formattedMinutes}`;
    }
  }
  
  // Esimerkiksi jos API palauttaa 43500 sekuntia (12:05pm)
  console.log(formatDepartureTime(39700));