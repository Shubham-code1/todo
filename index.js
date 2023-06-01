document.addEventListener("DOMContentLoaded", () => {
  //checking local Storage if empty setting value initially

  if (!window.localStorage.getItem("todoList")) {
    window.localStorage.setItem("todoList", "[]");
  }

  let singleTodo = {};

  let errorMsg = document.getElementsByClassName("error")[0];
  let errorMsgOne = document.getElementsByClassName("error")[1];
  let errorMsgTwo = document.getElementsByClassName("error")[2];
  let errorMsgThree = document.getElementsByClassName("error")[3];

  // form submission Starts  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  let form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let titleValue = document.getElementById("title").value;
    let nameValue = document.getElementById("fullname").value;
    let description = document.getElementById("todo").value;
    let dateValue = document.getElementById("targetdate").value;

    if (!titleValue || !nameValue || !description || !dateValue) {
      titleValue
        ? (errorMsg.innerHTML = "")
        : (errorMsg.innerHTML = "Required");
      nameValue
        ? (errorMsgOne.innerHTML = "")
        : (errorMsgOne.innerHTML = "Required");
      description
        ? (errorMsgTwo.innerHTML = "")
        : (errorMsgTwo.innerHTML = "Required min 50 char");
      dateValue
        ? (errorMsgThree.innerHTML = "")
        : (errorMsgThree.innerHTML = "Required");

        // alertmsg function starts here ...  alertmsg function starts here ... alertmsg function starts here ...

        function displayAlertBox(alertMessage){
          document.getElementById('alertmain').style.visibility = "visible";
          document.body.style.pointerEvents = "none" ;
          document.body.style.opacity = "0.9" ;
        
          document.getElementById('alertmain').style.pointerEvents = "auto";
          document.getElementById("alertmsg").innerHTML = alertMessage;
  }
  
  document.querySelector("#alertbtn").addEventListener('click',()=>{
      document.body.style.pointerEvents = "auto";
      document.getElementById('alertmain').style.visibility = "hidden";
      document.body.style.opacity = "1" ;
  })
  
  displayAlertBox("New Todo Cannot be created. Kindly fill all the fields and then click on create button");

      

      // alert msg ends here ....alert msg ends here ....alert msg ends here ....alert msg ends here ....

      return;
    } else if (
      titleValue &&
      nameValue &&
      description &&
      dateValue &&
      description.length > 50
    ) {
      titleValue
        ? (errorMsg.innerHTML = "")
        : (errorMsg.innerHTML = "Required");
      nameValue
        ? (errorMsgOne.innerHTML = "")
        : (errorMsgOne.innerHTML = "Required");
      description
        ? (errorMsgTwo.innerHTML = "")
        : (errorMsgTwo.innerHTML = "Required min 50 char");
      dateValue
        ? (errorMsgThree.innerHTML = "")
        : (errorMsgThree.innerHTML = "Required");

      let localStorageData = JSON.parse(localStorage.getItem("todoList"));

      singleTodo.title = titleValue;
      singleTodo.name = nameValue;
      singleTodo.todo = description;
      singleTodo.myDate = dateValue;
      singleTodo.id = new Date().getTime();

      localStorageData.push(singleTodo);

      let newStorageData = JSON.stringify(localStorageData);

      let submissionconfirm = confirm(
        "Are You sure want to create new Todo ????"
      );

      if (submissionconfirm) {
        window.localStorage.setItem("todoList", newStorageData);
      }
      window.location.reload();
    }
  });
  // form submission end  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  //clicking effect and displaying time and date in navbar

  let dateDisplayDivValue = document.getElementById("date");
  dateDisplayDivValue.innerHTML = new Date().toDateString();
  let timeDisplayDivValue = document.getElementById("time");
  setInterval(() => {
    timeDisplayDivValue.innerHTML = new Date().toLocaleTimeString();
  }, 1000);

  document.getElementsByClassName("Todo-dropdown")[0].onclick = function (e) {
    e.preventDefault();
    document.getElementsByClassName(
      "display-right"
    )[0].firstElementChild.style.backgroundColor = "rgb(30, 28, 28)";
  };

  document.getElementsByClassName("Todo-dropdown")[0].onmouseout = function () {
    // window.location.reload();
    document.getElementsByClassName(
      "display-right"
    )[0].firstElementChild.style.backgroundColor = "rgb(44, 44, 44)";
  };

  document.getElementsByClassName("date-dropdown")[0].onclick = function (e) {
    e.preventDefault();
    dateDisplayDivValue.style.visibility = "visible";
  };

  document.getElementsByClassName("date-dropdown")[0].onmouseout = function () {
    dateDisplayDivValue.style.visibility = "hidden";
  };

  document.getElementsByClassName("time-dropdown")[0].onclick = function (e) {
    e.preventDefault();
    timeDisplayDivValue.style.visibility = "visible";
  };

  document.getElementsByClassName("time-dropdown")[0].onmouseout = function () {
    timeDisplayDivValue.style.visibility = "hidden";
  };

  //getting localstorage value to add Todos ---->>>

  let localStorageCurrentData = JSON.parse(localStorage.getItem("todoList"));

  document.getElementById("total").innerHTML =
    localStorageCurrentData.length < 9
      ? "0" + "" + localStorageCurrentData.length
      : localStorageCurrentData.length;

  //creating No Todos are present div
  let textValue = document.createTextNode("Todo List is Empty, Create it !!");
  let divValue = document.createElement("div");
  divValue.setAttribute("id", "empty");
  divValue.appendChild(textValue);

  // if no todo present No Todos are present will be displayed.

  localStorageCurrentData.length == 0
    ? document.getElementsByClassName("display-right")[0].appendChild(divValue)
    : localStorageCurrentData.map((item) => {
        // left-zone starts

        let leftZoneDiv = document.createElement("div");
        leftZoneDiv.setAttribute("id", "left-zone");

        //left-zone ends

        // left-zone h3 start

        let toph3 = document.createElement("h3");
        toph3.setAttribute("id", "top");
        toph3.innerHTML = item.title + " " + item.name;

        let middleP = document.createElement("p");
        middleP.setAttribute("id", "middle");
        middleP.innerHTML = item.todo;

        // left-zone h3 end

        //lower start

        let lowerdiv = document.createElement("div");
        lowerdiv.setAttribute("id", "lower");

        let createDateSpan = document.createElement("span");
        createDateSpan.setAttribute("id", "createdate");
        createDateSpan.innerHTML = new Date().toLocaleString();

        let myTargetSpan = document.createElement("span");
        myTargetSpan.setAttribute("id", "myTarget");
        let d = new Date(item.myDate);
        myTargetSpan.innerHTML = d.toLocaleString();

        let createdAth4 = document.createElement("h4");
        createdAth4.setAttribute("id", "createdAt");
        createdAth4.innerHTML = " Created at:- ";

        let targetOfh4 = document.createElement("h4");
        targetOfh4.setAttribute("id", "targetof");
        targetOfh4.innerHTML = " Target :- ";

        createdAth4.appendChild(createDateSpan);
        targetOfh4.appendChild(myTargetSpan);

        lowerdiv.appendChild(createdAth4);
        lowerdiv.appendChild(targetOfh4);

        //lower end

        // button start

        let rightZone = document.createElement("div");
        rightZone.setAttribute("id", "right-zone");

        let deletebutton = document.createElement("button");
        deletebutton.value = item.id;
        deletebutton.setAttribute("id", "delete");

        let buttonText = document.createTextNode("Delete");
        deletebutton.appendChild(buttonText);

        let editbutton = document.createElement("button");
        editbutton.value = item.id;
        editbutton.setAttribute("id", "edit");

        let editbuttonText = document.createTextNode("Edit");
        editbutton.appendChild(editbuttonText);

        rightZone.appendChild(editbutton);
        rightZone.appendChild(deletebutton);

        // button end

        //----------------------------------------------

        leftZoneDiv.appendChild(toph3);
        leftZoneDiv.appendChild(middleP);
        leftZoneDiv.appendChild(lowerdiv);

        //---------------------------------------------

        let outputdiv = document.createElement("div");
        outputdiv.setAttribute("id", "output");

        outputdiv.appendChild(leftZoneDiv);
        outputdiv.appendChild(rightZone);

        document
          .getElementsByClassName("display-right")[0]
          .appendChild(outputdiv);

        //deleting the todo lists ----------------------------------

        deletebutton.onclick = function () {
          let deletebuttonValue = deletebutton.value;
          // console.log(deletebuttonValue);
          // console.log(localStorageCurrentData);

          let confirmMessage = confirm("Are You sure Want to delete ?");

          if (confirmMessage) {
            let indexToDelete = localStorageCurrentData.findIndex((item) => {
              return item.id == deletebuttonValue;
            });

            console.log("Index", indexToDelete);

            localStorageCurrentData.splice(indexToDelete, 1);

            let newLocalStorageDatatoAdd = localStorageCurrentData;

            console.log("newlocaldata", newLocalStorageDatatoAdd);

            localStorage.removeItem("todoList");
            localStorage.setItem(
              "todoList",
              JSON.stringify(newLocalStorageDatatoAdd)
            );

            window.location.reload();
          }
        };
        
        //deleting the Todos end---------------------------------

        //Editting the existing Data start-----------------------

        editbutton.onclick = function () {
          let editbuttonValue = editbutton.value;

          let indextoEdit = localStorageCurrentData.findIndex((item) => {
            return item.id == editbuttonValue;
          });

          document.getElementById("title").value = item.title;
          document.getElementById("fullname").value = item.name;
          document.getElementById("todo").value = item.todo;
          document.getElementById("targetdate").value = item.myDate;
        };

        //Editting the existing Data end-------------------------
      });

  //Resetting Error Messages manually by pressing reset Button;

  let resetMe = document.getElementById("resets");
  resetMe.addEventListener("click", () => {
    errorMsg.innerHTML = "";
    errorMsgOne.innerHTML = "";
    errorMsgTwo.innerHTML = "";
    errorMsgThree.innerHTML = "";
  });



});
