const posts = [
  {
    title: "Welcome!",
    date: "2025-04-14",
    content: "This is my first post. Just testing things out!"
  },
];

const container = document.getElementById('blog-posts');

posts.forEach(post => {
  const article = document.createElement('article');
  article.innerHTML = `
    <h2>${post.title}</h2>
    <p><em>${post.date}</em></p>
    <p>${post.content}</p>
  `;
  container.appendChild(article);
});

<script>
  const username = 'stepapu';
  const apiKey = 'eda9ba09f56897adc34c8b57c44cd9e1';  // Keep this safe

  fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`)
    .then(response => response.json())
    .then(data => {
      const tracks = data.recenttracks.track.slice(0, 5); // Limit to 5 tracks
      const container = document.getElementById('lastfm-tracks');

      container.innerHTML = tracks.map(track => `
        <div>
          <strong>${track.artist['#text']}</strong> – ${track.name}
        </div>
      `).join('');
    })
    .catch(err => {
      document.getElementById('lastfm-tracks').innerText = 'Error loading tracks.';
      console.error(err);
    });
</script>
