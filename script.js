const API_KEY = 'eda9ba09f56897adc34c8b57c44cd9e1'; // Replace with your real API key
const USER = 'stepapu'; // Replace with your Last.fm username

const getRecentTracks = async () => {
  const endpoint = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${stepapu}&api_key=${eda9ba09f56897adc34c8b57c44cd9e1}&format=json&limit=5`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    const trackList = data.recenttracks.track;
    const container = document.getElementById('tracks');

    trackList.forEach(track => {
      const trackDiv = document.createElement('div');
      trackDiv.innerHTML = `
        <p><strong>${track.artist['#text']}</strong> – ${track.name}</p>
      `;
      container.appendChild(trackDiv);
    });
  } catch (error) {
    console.error('Failed to fetch recent tracks:', error);
  }
};

getRecentTracks();
