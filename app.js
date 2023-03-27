const form = document.querySelector(".form");
const inputQuestionTitle = document.querySelector("#question");
const inputQuestionType = document.querySelector("#type");
const forms = document.querySelectorAll("form");

const btnSubQue = document.querySelector("#addSubquestion");
const btnAllSubQue = document.querySelectorAll(".btnAddSubQue");
const btnAccept = document.querySelector("#nextQuestion");

form.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    e.preventDefault();
    const queForm = e.target.closest("form");

    const queTitleTarget = queForm.querySelector("#question");
    const queTitle = queTitleTarget.value;

    const queSelectTarget = queForm.querySelector("#type");
    const queSelect = queSelectTarget.value;

    addToStorage(queForm.getAttribute("id"), queTitle, queSelect);
    e.target.blur();
  }
});

btnAccept.addEventListener("click", function (event) {
  event.preventDefault();

  const newFragment = document.createElement("form");
  form.appendChild(newFragment);

  addQueTypeElements(newFragment, form);
});

function createSubQuestion(_form) {
  const subQueSelectTarget = _form.querySelector("#type");
  const subQueSelect = subQueSelectTarget.value;

  const btnNewSubQue = _form.querySelector(".addSubquestion");
  addFormElements(subQueSelect, _form);
  btnNewSubQue.remove();
}

function addFormElements(_answerType, _form) {
  const formElement = document.createElement("form");
  formElement.setAttribute("class", "subQue");

  const parent_id = _form.getAttribute("id");
  const sub_id = Date.now() + "sub" + parent_id;
  formElement.setAttribute("id", sub_id);

  if (_answerType == "text" || _answerType == "radio") {
    const conditionLabel = document.createElement("label");
    conditionLabel.setAttribute("for", "condition");
    conditionLabel.textContent = "Condition equals: ";

    formElement.appendChild(conditionLabel);

    if (_answerType == "text") {
      const conditionInput = document.createElement("input");
      conditionInput.setAttribute("type", "text");
      conditionInput.setAttribute("id", "condition");
      formElement.appendChild(conditionInput);
    }
    if (_answerType == "radio") {
      const selectRadio = document.createElement("select");
      selectRadio.setAttribute("id", "condition");
      selectRadio.setAttribute("name", "typconditione");

      const yesOption = document.createElement("option");
      yesOption.setAttribute("value", "yes");
      yesOption.textContent = "Yes";

      const noOption = document.createElement("option");
      noOption.setAttribute("value", "no");
      noOption.textContent = "No";

      selectRadio.appendChild(yesOption);
      selectRadio.appendChild(noOption);
      formElement.appendChild(selectRadio);
    }
  }

  if (_answerType == "number") {
    const conditionLabel = document.createElement("label");
    conditionLabel.setAttribute("for", "condition");
    conditionLabel.textContent = "Condition equals: ";

    const conditionInput = document.createElement("input");
    conditionInput.setAttribute("type", "text");
    conditionInput.setAttribute("id", "condition");

    formElement.appendChild(conditionLabel);
    formElement.appendChild(conditionInput);
  }

  insertAfter(formElement, _form);
  addQueTypeElements(formElement, _form);
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function addQueTypeElements(_formFragment, _formToInsert) {
  // create the elements for the question
  const questionLabel = document.createElement("label");
  questionLabel.setAttribute("for", "question");
  questionLabel.textContent = "Question: ";

  const questionInput = document.createElement("input");
  questionInput.setAttribute("type", "text");
  questionInput.setAttribute("id", "question");

  // create the elements for the select
  const selectLabel = document.createElement("label");
  selectLabel.setAttribute("for", "type");
  selectLabel.textContent = "Type: ";

  const select = document.createElement("select");
  select.setAttribute("id", "type");
  select.setAttribute("name", "type");

  const radioOption = document.createElement("option");
  radioOption.setAttribute("value", "radio");
  radioOption.textContent = "Yes / No";

  const textOption = document.createElement("option");
  textOption.setAttribute("value", "text");
  textOption.textContent = "Text";

  const numberOption = document.createElement("option");
  numberOption.setAttribute("value", "number");
  numberOption.textContent = "Number";

  // create the elements for the buttons
  const addSubquestionBtn = document.createElement("button");
  addSubquestionBtn.setAttribute("class", "addSubquestion");
  addSubquestionBtn.addEventListener("click", function () {
    const formT = _formFragment;
    createSubQuestion(formT);
  });
  addSubquestionBtn.textContent = "Add Sub-question";

  const id = Date.now();
  _formFragment.setAttribute("id", id);

  // add the elements to the form
  select.appendChild(radioOption);
  select.appendChild(textOption);
  select.appendChild(numberOption);
  _formToInsert.appendChild(_formFragment);
  _formFragment.appendChild(questionLabel);
  _formFragment.appendChild(questionInput);
  _formFragment.appendChild(selectLabel);
  _formFragment.appendChild(select);
  _formFragment.appendChild(addSubquestionBtn);
}

function addToStorage(_id, _question, _type) {
  const question = {
    id: _id,
    question: _question,
    type: _type,
  };

  let questions = JSON.parse(localStorage.getItem("questions")) || [];
  const existingQuestion = questions.find((q) => q.id === _id);
  if (existingQuestion) {
    existingQuestion.question = _question;
    existingQuestion.type = _type;
  } else {
    questions.push(question);
  }
  localStorage.setItem("questions", JSON.stringify(questions));
}
