/* LAB 8 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
  cid: 0,
  name: "",
  pc: "",
  speed: "",
  cost: 0,
};

window.onload = function () {
  let formHandle = document.forms.form_ship;
  let thankYouMsg = document.getElementById("thanks_msg");
  let thanksCustomer = document.getElementById("thanksCustomer");
  let thanksPC = document.getElementById("thanksPC");
  let speedF = formHandle.f_speed;
  let thanksSpeed = document.getElementById("thanksSpeed");
  let thanksCost = document.getElementById("thanksCost");

  formHandle.onsubmit = processForm;

  function processForm() {
    let nameValue = formHandle.f_Name;
    console.log(nameValue.value);
    shipInfo["name"] = nameValue.value;

    let idValue = formHandle.f_Id;
    console.log(idValue.value);
    shipInfo["cid"] = idValue.value;

    let postCodeValue = formHandle.f_pc;
    console.log(postCodeValue.value);
    shipInfo["pc"] = postCodeValue.value;

    let speedValue = speedF.options[speedF.selectedIndex].text;
    console.log(speedValue);
    shipInfo["speed"] = speedValue;

    let costValue = formHandle.f_speed;
    console.log(costValue.value);
    shipInfo["cost"] = `$${costValue.value}`;

    //SHIPPING LEVEL

    // VALIDATE NAME
    if (nameValue.value === "") {
      nameValue.style.background = "red";
      nameValue.focus();
      return false;
    }

    //VALIDATE CUSTOMER ID
    if (idValue.value === "") {
      idValue.style.background = "red";
      idValue.focus();
      return false;
    }

    //VALIDATE POSTAL CODE
    if (postCodeValue.value === "") {
      postCodeValue.style.background = "red";
      postCodeValue.focus();
      return false;
    }

    //show ty msg (IF VALID, SHOW BOTTOM)
    if (
      nameValue.value !== "" &&
      idValue.value !== "" &&
      postCodeValue.value != ""
    ) {
      formHandle.style.display = "none";
      thankYouMsg.style.display = "block";

      thanksCustomer.innerHTML = `${nameValue.value} (Customer # ${idValue.value})`;
      thanksPC.innerHTML = postCodeValue.value;
      thanksSpeed.innerHTML = speedValue;
      thanksCost.innerHTML = costValue.value;
    }
    console.log(shipInfo);
    return false;
  }
};
