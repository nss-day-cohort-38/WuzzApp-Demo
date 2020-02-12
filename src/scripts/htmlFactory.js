const htmlFactory = (appIdea) => {
  return `
  <section>
  <h3>${appIdea.name}</h3>
  <p>${appIdea.description}</p>
  <p>Rating: ${appIdea.rating}</p>
  <button id="delete--${appIdea.id}" class="delete_btn">DELETE</button>
  </section>
  `
}

export default htmlFactory;