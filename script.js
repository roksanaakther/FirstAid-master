
const nameBox = document.getElementById("nameBox");
const immediateActionBox = document.getElementById("immediateActionBox");
const furtherActionBox = document.getElementById("furtherActionBox");

const searchBox = document.getElementById("searchBox");

const emergencyDetails = document.getElementById("emergencyDetails");

const buttonText = document.getElementById("buttonText");


let allEmergency = [];

if (localStorage.hasOwnProperty("allEmergency")) {  
    let loadedEmergency = localStorage.getItem("allEmergency");
    allEmergency = JSON.parse(loadedEmergency);
    }


function clearEmergencyDatabase() {
    localStorage.removeItem("allEmergency");
    allEmergency.length = 0
    emergencyDetails.innerHTML = "";
}


function heartAttack(){


    let searchName = searchBox.value="heart";
    searchBox.value="";

    emergencyDetails.innerHTML = "";


    
    if (!searchName) return
 
    

    for (let i = 0; i < allEmergency.length; i++) {
        
        if (allEmergency[i].name.toLowerCase().includes(
            searchName.toLowerCase() )
        ) {
            createEmergency(i,searchName);
        }
        
    
    }



}



function choking(){


    let searchName = searchBox.value="choking";
    searchBox.value="";

    emergencyDetails.innerHTML = "";


    
    if (!searchName) return
 
    

    for (let i = 0; i < allEmergency.length; i++) {
        
        if (allEmergency[i].name.toLowerCase().includes(
            searchName.toLowerCase() )
        ) {
            createEmergency(i,searchName);
        }
        
    
    }



}



function bleeding(){


    let searchName = searchBox.value="bleeding";
    searchBox.value="";

    emergencyDetails.innerHTML = "";


    
    if (!searchName) return
 
    

    for (let i = 0; i < allEmergency.length; i++) {
        
        if (allEmergency[i].name.toLowerCase().includes(
            searchName.toLowerCase() )
        ) {
            createEmergency(i,searchName);
        }
        
    
    }



}



function searchEmergency() {

    let searchName = searchBox.value;

    emergencyDetails.innerHTML = "";


    
    if (!searchName) return
 
    

    for (let i = 0; i < allEmergency.length; i++) {
        
        if (allEmergency[i].name.toLowerCase().includes(
            searchName.toLowerCase() )
        ) {
            createEmergency(i,searchName);
        }
        
    
    }




}


function validation() {
    let pass = true

    if (!nameBox.value.trim()) {
        nameBox.value=""
        nameBox.placeholder = "required field"
        pass = false
    } 
    if (!immediateActionBox.value.trim()) {
        immediateActionBox.value=""
        immediateActionBox.placeholder = "required field";
      pass = false;
    }
    if (!furtherActionBox.value.trim()) {
        furtherActionBox.value=""
      furtherActionBox.placeholder = "required field";
      pass = false;
    }

    return pass //true or false
}

function enterEmergencyDetails() {
  //object
  let emergency = {
    name: nameBox.value,
    immediateAction: immediateActionBox.value,
    furtherAction: furtherActionBox.value,
  };


  //long form
  let result = validation();

  if (result == false) {
    return;
  }



  allEmergency.push(emergency);
  allEmergency.push(emergency2);

  nameBox.value = "";
  immediateActionBox.value = "";
  furtherActionBox.value = "";


  nameBox.placeholder = "";
  immediateActionBox.placeholder = "";
  furtherActionBox.placeholder = "";

  localStorage.setItem("allEmergency", JSON.stringify(allEmergency));
}

function createQuick(){
    let nameContent = ''
    let immediateActionContentText = ''
    let immediateActionContent = ''
    let furtherActionContentText = ''
    let furtherActionContent = ''

    nameContent = `Heart attack`;
    immediateActionContentText = `Immediate Action`;

    immediateActionContent = `call an ambulance`;

    furtherActionContentText = `further Action`;
    
    furtherActionContent = `While waiting for an ambulance, it may help to chew and then swallow a tablet of aspirin (ideally 300mg), as long as the person having a heart attack is not allergic to aspirin.`;

    

    let nameText = emergencyDetails.appendChild(document.createElement("p"))
    nameText.innerHTML = nameContent
    nameText.className = "nameTest"

    let immediateAction =emergencyDetails.appendChild(document.createElement("p"))
    immediateAction.innerHTML = immediateActionContentText
    immediateAction.className = "immediateAction"

    let immediateActionInfo = emergencyDetails.appendChild(document.createElement("p"));
    immediateActionInfo.innerHTML = immediateActionContent;
    immediateActionInfo.className = "immediateActionInfo"
    
    let furtherAction = emergencyDetails.appendChild(document.createElement("p"));
    furtherAction.innerHTML = furtherActionContentText;
    furtherAction.className = "furtherAction"

    let furtherActionInfo = emergencyDetails.appendChild(document.createElement("p"));
    furtherActionInfo.innerHTML = furtherActionContent;
    furtherActionInfo.className = "furtherActionInfo"
    
    emergencyDetails.appendChild(document.createElement("hr"))
}

createQuick()

function createEmergency(count, search) {
    let nameContent = ''
    let immediateActionContentText = ''
    let immediateActionContent = ''
    let furtherActionContentText = ''
    let furtherActionContent = ''

    nameContent = allEmergency[count].name

    immediateActionContentText = `Immediate Action`

    immediateActionContent = allEmergency[count].immediateAction;

    furtherActionContentText = `further Action`;
    
    furtherActionContent = allEmergency[count].furtherAction;

    

    let nameText = emergencyDetails.appendChild(document.createElement("p"))
    nameText.innerHTML = nameContent
    nameText.className = "nameTest"

    let immediateAction =emergencyDetails.appendChild(document.createElement("p"))
    immediateAction.innerHTML = immediateActionContentText
    immediateAction.className = "immediateAction"

    let immediateActionInfo = emergencyDetails.appendChild(document.createElement("p"));
    immediateActionInfo.innerHTML = immediateActionContent;
    immediateActionInfo.className = "immediateActionInfo"
    
    let furtherAction = emergencyDetails.appendChild(document.createElement("p"));
    furtherAction.innerHTML = furtherActionContentText;
    furtherAction.className = "furtherAction"

    let furtherActionInfo = emergencyDetails.appendChild(document.createElement("p"));
    furtherActionInfo.innerHTML = furtherActionContent;
    furtherActionInfo.className = "furtherActionInfo"



    emergencyDetails.appendChild(document.createElement("hr"))

}


function deleteStudent(toDelete, search){
    console.log(`I came from ${search}`);
    allEmergency.splice(toDelete,1);
    localStorage.setItem("allEmergency", JSON.stringify(allEmergency));
    emergencyDetails.innerHTML = "";
    searchBox.value="";
    if(search == "all-emergency") showAllStudents();

    
}



