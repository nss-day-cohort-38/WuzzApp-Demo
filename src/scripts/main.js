import events from './events.js'
import render from './render.js'




// TODO: Get all Entries and Render to DOM
// steps
// get the data
// fetch call
// convert to html
// get dom reference to element to output ideas
// render to DOM

render.renderAllIdeas()


// TODO: Add (Create) new entry and add to Database
// steps ??
// get the reference to the save button
// add an event listener to listen for a click and then ...
// grab input values => make newidea object and send to database
events.addSaveBtnListener();



// TODO: Delete entry from database
// steps
// ! create delete button in the html
// ! reference that mf'ng button
// ! add an event listener to that mf'ng button
// do another fetch call >> DELETE
