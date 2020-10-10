////////////////////////////////////////////////////////
//  Developed by: Ali Khalid Alyami                   //
//  Date: 08-Oct-2020                                 //
//  Email: braintalked@gmail.com                      //
//  Twitter:@ali_idev                                 //
////////////////////////////////////////////////////////

////////////////////////// START EVENT LISTENER /////////////////////////////////////
  document.addEventListener("click", function(){
    var locationSelectionsArray = [];
    var electricalBrandSelectionsArray = [];
    var electricalMaterialSelectionsArray = [];
    var finalSelectionsArray = [];
////////////////////////// END EVENT LISTENER /////////////////////////////////////

//////////////////// START Disabling and Enabling Locations Checkboxes ////////////////
  function disableAllLocationCheckboxes(){
    document.querySelector("#east").checked = false;
    document.querySelector("#north").checked = false;
    document.querySelector("#west").checked = false;
    document.querySelector("#south").checked = false;
    document.querySelector("#middle").checked = false;

    document.querySelector("#east").disabled = true;
    document.querySelector("#north").disabled = true;
    document.querySelector("#west").disabled = true;
    document.querySelector("#south").disabled = true;
    document.querySelector("#middle").disabled = true;
  }
  function enableAllLocationCheckboxes(){
  document.querySelector("#east").disabled = false;
  document.querySelector("#north").disabled = false;
  document.querySelector("#west").disabled = false;
  document.querySelector("#south").disabled = false;
  document.querySelector("#middle").disabled = false;
  }
//////////////////// END Disabling and Enabling Locations Checkboxes ////////////////

//////////////////// START Disabling and Enabling Electrical Brands Checkboxes ////////////////
  function disableAllElectricalBrandCheckboxes(){
    document.querySelector("#geBrandsCheckbox").checked = false;
    document.querySelector("#philipsBrandsCheckbox").checked = false;
    document.querySelector("#siemensBrandsCheckbox").checked = false;
    document.querySelector("#schneiderBrandsCheckbox").checked = false;
    document.querySelector("#saudiCablesBrandsCheckbox").checked = false;

    document.querySelector("#geBrandsCheckbox").disabled = true;
    document.querySelector("#philipsBrandsCheckbox").disabled = true;
    document.querySelector("#siemensBrandsCheckbox").disabled = true;
    document.querySelector("#schneiderBrandsCheckbox").disabled = true;
    document.querySelector("#saudiCablesBrandsCheckbox").disabled = true;
  }
  function enableAllElectricalBrandCheckboxes(){
    document.querySelector("#geBrandsCheckbox").disabled = false;
    document.querySelector("#philipsBrandsCheckbox").disabled = false;
    document.querySelector("#siemensBrandsCheckbox").disabled = false;
    document.querySelector("#schneiderBrandsCheckbox").disabled = false;
    document.querySelector("#saudiCablesBrandsCheckbox").disabled = false;
  }
//////////////////// END Disabling and Enabling Electrical Brands Checkboxes //////////////////

/////////////////// START Disabling and Enabling Electrical Materials Checkboxes /////////////
function disableAllElectricalMaterialCheckboxes(){
  document.querySelector("#lampsMaterialsCheckbox").checked = false;
  document.querySelector("#switchesMaterialsCheckbox").checked = false;
  document.querySelector("#breakersMaterialsCheckbox").checked = false;
  document.querySelector("#powerPanelsMaterialsCheckbox").checked = false;
  document.querySelector("#powerCablesMaterialsCheckbox").checked = false;

  document.querySelector("#lampsMaterialsCheckbox").disabled = true;
  document.querySelector("#switchesMaterialsCheckbox").disabled = true;
  document.querySelector("#breakersMaterialsCheckbox").disabled = true;
  document.querySelector("#powerPanelsMaterialsCheckbox").disabled = true;
  document.querySelector("#powerCablesMaterialsCheckbox").disabled = true;
}
function enableAllElectricalMaterialCheckboxes(){
  document.querySelector("#lampsMaterialsCheckbox").disabled = false;
  document.querySelector("#switchesMaterialsCheckbox").disabled = false;
  document.querySelector("#breakersMaterialsCheckbox").disabled = false;
  document.querySelector("#powerPanelsMaterialsCheckbox").disabled = false;
  document.querySelector("#powerCablesMaterialsCheckbox").disabled = false;
}
/////////////////// END Disabling and Enabling Electrical Materials Checkboxes ////////////////

//////////////////////////// START LOCATIONS IF STATEMENTS/////////////////////////
if (document.querySelector("#allLocations").checked
||(!document.querySelector("#east").checked
&& !document.querySelector("#north").checked
&& !document.querySelector("#west").checked
&& !document.querySelector("#south").checked
&& !document.querySelector("#middle").checked)){

if (document.querySelector("#allLocations").checked){
      disableAllLocationCheckboxes();
    }
    if (!document.querySelector("#allLocations").checked){
      enableAllLocationCheckboxes();
    }

    document.querySelectorAll(".electricalMaterial").forEach(pushLocationFuntion);
    function pushLocationFuntion(item){
      locationSelectionsArray.push(item);
    }
  }

else{
    if(!document.querySelector("#allLocations").checked){
      locationSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("electricalMaterial")){
            locationSelectionsArray.splice(locationSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#east").checked){
        document.querySelectorAll(".east").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#east").checked){
      locationSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("east")){
            locationSelectionsArray.splice(locationSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#north").checked){
        document.querySelectorAll(".north").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#north").checked){
      locationSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("north")){
            locationSelectionsArray.splice(locationSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#west").checked){
        document.querySelectorAll(".west").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#west").checked){
      locationSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("west")){
            locationSelectionsArray.splice(locationSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#south").checked){
        document.querySelectorAll(".south").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#south").checked){
      locationSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("south")){
            locationSelectionsArray.splice(locationSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#middle").checked){
        document.querySelectorAll(".middle").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#middle").checked){
      locationSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("middle")){
            locationSelectionsArray.splice(locationSelectionsArray.indexOf(item),1);
        }
      }
    }
  }
//////////////////////////// END LOCATIONS IF STATEMENTS/////////////////////////

//////////////////////////// START ELECTRICAL MATERIALS IF STATEMENTS/////////////////////////
if (document.querySelector("#allElectricalMaterialsCheckbox").checked
|| (!document.querySelector("#lampsMaterialsCheckbox").checked
&& !document.querySelector("#switchesMaterialsCheckbox").checked
&& !document.querySelector("#breakersMaterialsCheckbox").checked
&& !document.querySelector("#powerPanelsMaterialsCheckbox").checked
&& !document.querySelector("#powerCablesMaterialsCheckbox").checked)){

if (document.querySelector("#allElectricalMaterialsCheckbox").checked){
      disableAllElectricalMaterialCheckboxes();
    }
    if (!document.querySelector("#allElectricalMaterialsCheckbox").checked){
      enableAllElectricalMaterialCheckboxes();
    }

    document.querySelectorAll(".electricalMaterial").forEach(pushMaterialFuntion);
    function pushMaterialFuntion(item){
      electricalMaterialSelectionsArray.push(item);
    }
  }

else{
    if(!document.querySelector("#allElectricalMaterialsCheckbox").checked){
      electricalMaterialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("electricalMaterial")){
            electricalMaterialSelectionsArray.splice(electricalMaterialSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#lampsMaterialsCheckbox").checked){
        document.querySelectorAll(".lamp").forEach(pushMaterialFuntion);
        function pushMaterialFuntion(item){
          electricalMaterialSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#lampsMaterialsCheckbox").checked){
      electricalMaterialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("lamp")){
            electricalMaterialSelectionsArray.splice(electricalMaterialSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#switchesMaterialsCheckbox").checked){
        document.querySelectorAll(".switch").forEach(pushMaterialFuntion);
        function pushMaterialFuntion(item){
          electricalMaterialSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#switchesMaterialsCheckbox").checked){
      electricalMaterialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("switch")){
            electricalMaterialSelectionsArray.splice(electricalMaterialSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#breakersMaterialsCheckbox").checked){
        document.querySelectorAll(".breaker").forEach(pushMaterialFuntion);
        function pushMaterialFuntion(item){
          electricalMaterialSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#breakersMaterialsCheckbox").checked){
      electricalMaterialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("breaker")){
            electricalMaterialSelectionsArray.splice(electricalMaterialSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#powerPanelsMaterialsCheckbox").checked){
        document.querySelectorAll(".powerPanel").forEach(pushMaterialFuntion);
        function pushMaterialFuntion(item){
          electricalMaterialSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#powerPanelsMaterialsCheckbox").checked){
      electricalMaterialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("powerPanel")){
            electricalMaterialSelectionsArray.splice(electricalMaterialSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#powerCablesMaterialsCheckbox").checked){
        document.querySelectorAll(".powerCable").forEach(pushMaterialFuntion);
        function pushMaterialFuntion(item){
          electricalMaterialSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#powerCablesMaterialsCheckbox").checked){
      electricalMaterialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("powerCable")){
            electricalMaterialSelectionsArray.splice(electricalMaterialSelectionsArray.indexOf(item),1);
        }
      }
    }

}
//////////////////////////// END ELECTRICAL MATERIALS IF STATEMENTS/////////////////////////

//////////////////////////// START ELECTRICAL BRANDS IF STATEMENTS/////////////////////////
if (document.querySelector("#allElectricalBrandsCheckbox").checked
|| (!document.querySelector("#geBrandsCheckbox").checked
&& !document.querySelector("#philipsBrandsCheckbox").checked
&& !document.querySelector("#siemensBrandsCheckbox").checked
&& !document.querySelector("#schneiderBrandsCheckbox").checked
&& !document.querySelector("#saudiCablesBrandsCheckbox").checked)){

  if (document.querySelector("#allElectricalBrandsCheckbox").checked){
      disableAllElectricalBrandCheckboxes();
    }
  if (!document.querySelector("#allElectricalBrandsCheckbox").checked){
      enableAllElectricalBrandCheckboxes();
    }

  document.querySelectorAll(".electricalMaterial").forEach(pushBrandFuntion);
  function pushBrandFuntion(item){
    electricalBrandSelectionsArray.push(item);
    }
}
else{
    if(!document.querySelector("#allElectricalBrandsCheckbox").checked){
      electricalBrandSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("electricalMaterial")){
            electricalBrandSelectionsArray.splice(electricalBrandSelectionsArray.indexOf(item),1);
        }
      }
    }
    enableAllElectricalBrandCheckboxes();
      if (document.querySelector("#geBrandsCheckbox").checked){
          document.querySelectorAll(".ge").forEach(pushBrandFuntion);
          function pushBrandFuntion(item){
            electricalBrandSelectionsArray.push(item);
          }
        }
      if(!document.querySelector("#geBrandsCheckbox").checked){
        electricalBrandSelectionsArray.forEach(myFunction);
        function myFunction(item){
          if(item.classList.contains("ge")){
              electricalBrandSelectionsArray.splice(electricalBrandSelectionsArray.indexOf(item),1);
          }
        }
      }
      if (document.querySelector("#philipsBrandsCheckbox").checked){
          document.querySelectorAll(".philips").forEach(pushBrandFuntion);
          function pushBrandFuntion(item){
            electricalBrandSelectionsArray.push(item);
          }
      }
      if(!document.querySelector("#philipsBrandsCheckbox").checked){
        electricalBrandSelectionsArray.forEach(myFunction);
        function myFunction(item){
          if(item.classList.contains("philips")){
              electricalBrandSelectionsArray.splice(electricalBrandSelectionsArray.indexOf(item),1);
          }
        }
      }
      if (document.querySelector("#siemensBrandsCheckbox").checked){
          document.querySelectorAll(".siemens").forEach(pushBrandFuntion);
          function pushBrandFuntion(item){
            electricalBrandSelectionsArray.push(item);
          }
      }
      if(!document.querySelector("#siemensBrandsCheckbox").checked){
        electricalBrandSelectionsArray.forEach(myFunction);
        function myFunction(item){
          if(item.classList.contains("siemens")){
              electricalBrandSelectionsArray.splice(electricalBrandSelectionsArray.indexOf(item),1);
          }
        }
      }
      if (document.querySelector("#schneiderBrandsCheckbox").checked){
          document.querySelectorAll(".schneider").forEach(pushBrandFuntion);
          function pushBrandFuntion(item){
            electricalBrandSelectionsArray.push(item);
          }
      }
      if(!document.querySelector("#schneiderBrandsCheckbox").checked){
        electricalBrandSelectionsArray.forEach(myFunction);
        function myFunction(item){
          if(item.classList.contains("schneider")){
              electricalBrandSelectionsArray.splice(electricalBrandSelectionsArray.indexOf(item),1);
          }
        }
      }
      if (document.querySelector("#saudiCablesBrandsCheckbox").checked){
          document.querySelectorAll(".saudiCables").forEach(pushBrandFuntion);
          function pushBrandFuntion(item){
            electricalBrandSelectionsArray.push(item);
          }
      }
      if(!document.querySelector("#saudiCablesBrandsCheckbox").checked){
        electricalBrandSelectionsArray.forEach(myFunction);
        function myFunction(item){
          if(item.classList.contains("saudiCables")){
              electricalBrandSelectionsArray.splice(electricalBrandSelectionsArray.indexOf(item),1);
          }
        }
      }
    }
//////////////////////////// END ELECTRICAL BRANDS IF STATEMENTS/////////////////////////

///////////////// START UPDATING FinalSelectionsArray ///////////////////////
  electricalMaterialSelectionsArray.forEach(pushMaterial);
  function pushMaterial(materialItem){
    electricalBrandSelectionsArray.forEach(pushBrand);
    function pushBrand(brandItem){
      locationSelectionsArray.forEach(pushLocation);
      function pushLocation(locationItem){
        if(brandItem == materialItem && brandItem == locationItem){
          finalSelectionsArray.push(brandItem);
        }
      }
    }
  }
///////////////// END UPDATING FinalSelectionsArray ///////////////////////

///////////////////// START SHOWING FINAL SELECTIONS ////////////////////////////
  document.querySelectorAll(".electricalMaterial").forEach(hideElement);
  function hideElement(elem){
      elem.classList.add("hide");
    }
  finalSelectionsArray.forEach(showElement);
  function showElement(elem){
      elem.classList.remove("hide");
    }
///////////////////// END SHOWING FINAL SELECTIONS ////////////////////////////

});
////////////////////////////// END OF CODE ///////////////////////////////////
