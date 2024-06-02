const saveInput = document.querySelector("#input-btn");
let currentleads = [];
const inputField = document.querySelector("#input-field");
const leadsList = document.querySelector("#leads-list");
const deleteButton = document.querySelector("#delete-btn");
const locaLeads = JSON.parse(localStorage.getItem("leads"));
const saveTabButton = document.querySelector("#savetab-btn");


if(locaLeads){
    currentleads = locaLeads;
    showLeads(currentleads); 
}

saveInput.addEventListener("click", function() {
    currentleads.push(inputField.value);
    inputField.value = "";
    localStorage.setItem("leads", JSON.stringify(currentleads));
    showLeads(currentleads); 
})

deleteButton.addEventListener("click", function(){      
    currentleads = [];
    localStorage.clear();
    showLeads(currentleads);
})

saveTabButton.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        currentleads.push(tabs[0].url);
        localStorage.setItem("leads",JSON.stringify(currentleads));
        showLeads(currentleads);
    })
})

function showLeads(leads){
    let listItems = "";
    for(let i = 0; i < leads.length; i++){
        listItems += `
        <li>
        <a href='${leads[i]}' target='_blank'>"${leads[i]} 
        "</a>
        </li>`
    }
    leadsList.innerHTML = listItems;
}



