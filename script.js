const posts = [
  {
    title: "Welcome!",
    date: "2025-04-14",
    content: "This is my first post. Just testing things out!"
  },
  {
    title: "Another Post",
    date: "2025-04-13",
    content: "I wrote this using JavaScript. Cool, right?"
  }
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
