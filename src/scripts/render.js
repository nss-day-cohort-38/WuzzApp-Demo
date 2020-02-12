import API from './api.js'
import htmlFactory from './htmlFactory.js'
import events from './events.js'

const ideasContainer = document.getElementById("ideas_container");

const render = {
  renderAllIdeas() {
    API.getAllApps()
      .then(ideas => {
        ideasContainer.innerHTML = "";
        ideas.forEach(idea => ideasContainer.innerHTML += htmlFactory(idea))
        events.addDeleteBtnListeners();
      })
  }
}

export default render