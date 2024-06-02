const saveInput = document.querySelector("#input-btn");
let leads = [];
const inputField = document.querySelector("#input-field");
const leadsList = document.querySelector("#leads-list");
saveInput.addEventListener("click", function() {
    leads.push(inputField.value);
    inputField.value = "";
    showLeads(); 
})

function showLeads(){
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



