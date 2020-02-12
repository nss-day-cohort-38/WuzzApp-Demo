import API from './api.js'
import render from './render.js'

const saveButton = document.querySelector("#save_button");
const nameInput = document.getElementById("name_input")
const descriptionInput = document.getElementById("description_input")
const ratingInput = document.getElementById("rating_input")

const events = {
  addSaveBtnListener() {
    saveButton.addEventListener("click", (event) => {
      const newIdeaObject = {
        "name": nameInput.value,
        "description": descriptionInput.value,
        "rating": ratingInput.value
      }
      // send new idea to database
      API.addNewApp(newIdeaObject).then(render.renderAllIdeas)
    })
  },
  addDeleteBtnListeners() {
    const deleteButtons = document.getElementsByClassName("delete_btn")
    const buttonsArray = Array.from(deleteButtons)
    buttonsArray.forEach(button => {
      // where the magic happens
      // add event listener
      // click ->
      button.addEventListener("click", (event) => {
        // get the idea id
        const ideaId = event.target.id.split("--")[1]
        // delete that id from the database >> fetch call of delete
        API.deleteApp(ideaId)
          .then(render.renderAllIdeas)
        // re-render the page
      })
    });
  }
}

export default events