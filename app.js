//  get the query
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
    let queTitle = "Zadanie 1";
    let queSelect = "radio";

    if (e.target.tagName === "SELECT") {
      queSelect = e.target.value;
      const queTitleTarget = e.target.closest("input");
      console.log(queTitleTarget);
      //queTitle = queTitleTarget.value;
      console.log("queSelect", queSelect);
    } else if (e.target.tagName === "INPUT") {
      queTitle = e.target.value;
      console.log("queTitle", queTitle);
      queSelectTarget = e.target.closest("#type");
      queSelect = queSelectTarget.options[queSelectTarget.selectedIndex].value;
    }

    console.log(e.target.value, e.target);
    // Do something with the selected value
    const newQuestion = {
      id: queForm.getAttribute("id"),
      question: queTitle,
      type: queSelect,
    };
    console.log("keydown(): " + newQuestion);
    localStorage.setItem("storage", JSON.stringify(newQuestion));
    console.log("Enter 13code");
    addQuestion();

    e.target.blur();
  }
});

// form.addEventListener("input", (e) => {});

btnAccept.addEventListener("click", function (event) {
  event.preventDefault();
  //   const divFragment = document.createElement("div");
  const formFragment = document.createElement("form");
  const id = Date.now();
  formFragment.setAttribute("id", id);
  console.log("btnAccept() : " + id);

  form.appendChild(formFragment);
  addQueTypeElements(formFragment);
});

forms.forEach((form) => {
  btnSubQue.onclick = function (event) {
    event.preventDefault();
    const questionTitle = inputQuestionTitle.value;
    const questionType =
      inputQuestionType.options[inputQuestionType.selectedIndex].value;

    console.log("addSubquestionBtn: " + questionType + questionTitle);
    addFormElements(questionType);
    addSubquestionBtn.remove();
  };
});

function addFormElements(answerType) {
  //   const divFragment = document.createElement("div");
  const formFragment = document.createElement("form");
  console.log(answerType);
  //   divFragment.setAttribute("class", "form");

  if (answerType == "text" || answerType == "radio") {
    console.log("text || radio");
    const conditionLabel = document.createElement("label");
    conditionLabel.setAttribute("for", "condition");
    conditionLabel.textContent = "Condition equals: ";

    formFragment.appendChild(conditionLabel);

    if (answerType == "text") {
      const conditionInput = document.createElement("input");
      conditionInput.setAttribute("type", "text");
      conditionInput.setAttribute("id", "condition");
      formFragment.appendChild(conditionInput);
    }
    if (answerType == "radio") {
      console.log("radio");
      const selectRadio = document.createAttribute("select");
      select.setAttribute("id", "condition");
      select.setAttribute("name", "typconditione");

      const yesOption = document.createElement("option");
      yesOption.setAttribute("value", "yes");
      yesOption.textContent = "Yes";

      const noOption = document.createElement("option");
      noOption.setAttribute("value", "no");
      noOption.textContent = "No";

      selectRadio.appendChild(yesOption);
      selectRadio.appendChild(noOption);
      formFragment.appendChild(selectRadio);
    }

    // add the elements to the form
    form.appendChild(formFragment);
    addQueTypeElements(formFragment);
  }

  if (answerType == "number") {
    console.log("number");
    const conditionLabel = document.createElement("label");
    conditionLabel.setAttribute("for", "condition");
    conditionLabel.textContent = "Condition equals: ";

    const conditionInput = document.createElement("input");
    conditionInput.setAttribute("type", "text");
    conditionInput.setAttribute("id", "condition");

    // add the elements to the form
    form.appendChild(formFragment);
    formFragment.appendChild(conditionLabel);
    formFragment.appendChild(conditionInput);

    addQueTypeElements(formFragment);
  }
}

function addQueTypeElements(_formFragment) {
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
  addSubquestionBtn.textContent = "Add Sub-question";

  // const nextQuestionBtn = document.createElement("button");
  // nextQuestionBtn.setAttribute("id", "nextQuestion");
  // nextQuestionBtn.textContent = "Add next Question";

  // add the elements to the form
  select.appendChild(radioOption);
  select.appendChild(textOption);
  select.appendChild(numberOption);
  form.appendChild(_formFragment);
  _formFragment.appendChild(questionLabel);
  _formFragment.appendChild(questionInput);
  _formFragment.appendChild(selectLabel);
  _formFragment.appendChild(select);
  _formFragment.appendChild(addSubquestionBtn);
}
