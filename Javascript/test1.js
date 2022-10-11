
function createCourse(data, callback) {

function handleDeleteCourse(id) {
  const method = {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
  }
  fetch(`${apiCourse}/${id}`, method)
    .then(response => response.json())
    .then(() => {
      const itemElement = document.querySelector(`.course-item-${id}`)
      itemElement.remove()
    })
}

function handleEditCourse(id, name, description) {
  ID = id,
  nameInput.value = name
  descriptionInput.value = description
  showEdit();
}

function updateCourse() {
  const formData = {
    name: nameInput.value,
    description: descriptionInput.value
  }
  const method = {
    method: "PUT",
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(formData)
  }
  fetch(`${apiCourse}/${ID}`, method)
    .then(response => response.json())
    .then(data => {
     getCourse(renderCourse)
    })
    .catch(error => console.log(error))
  hideEdit();
}

const showEdit = () => {
  btnSubmit.style.display = 'none'
  btnUpdate.style.display = 'block'
}

const hideEdit = () => {
  btnSubmit.style.display = 'block'
  btnUpdate.style.display = 'none'
}

btnSubmit.addEventListener('click', () => {
  const name = nameInput.value
  const description = descriptionInput.value
  const formData = {
    name: name,
    description: description
  }
  createCourse(formData, () => {
    getCourse(renderCourse)
  });
})

btnUpdate.addEventListener('click', updateCourse)