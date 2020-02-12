const baseURL = "http://localhost:5000";

const API = {
  getAllApps() {
    return fetch(`${baseURL}/ideas`)
      .then(response => response.json())
  },
  addNewApp(newApp) {
    return fetch(`${baseURL}/ideas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newApp)
    }).then(response => response.json())
  },
  deleteApp(id) {
    return fetch(`${baseURL}/ideas/${id}`, {
      method: "DELETE"
    })
  }
}

export default API;