var localIP="http://localhost";



function XMLData(){
    let request = new XMLHttpRequest();
    request.open("GET", localIP+":8080/Funds/funds?format=xml", true);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            let data = request.responseXML;
            let payload = data.getElementsByTagName('Person');
            let tableString = "<table border=\"1\"><tr><td>Name</td><td>Age</td><td>Home</td></tr>";
            for(let i = 0; i < payload.length; i++){
                    tableString += "<tr><td>" + payload[i].childNodes[0].innerHTML + "</td><td>" + payload[i].childNodes[1].innerHTML + "</td><td>" + payload[i].childNodes[2].innerHTML + "</td></tr>";
            }
            tableString += "</table>";
            document.getElementById('xmlOutput').innerHTML = tableString;
        }
    };
}//end XMLData()



function JSONData(){
    let request = new XMLHttpRequest();
    request.open("GET", localIP+":8080/Funds/funds?format=json", true);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            let payload = JSON.parse(request.responseText);
            let tableString = "<table border=\"1\"><tr><td>Name</td><td>Age</td><td>Home</td></tr>";
            /*
            for(let i = 0; i < payload['people'].length; i++){
                tableString += "<tr><td>" + payload['people'][i]['name'] + "</td><td>" + payload['people'][i]['age'] + "</td><td>" + payload['people'][i]['home'] + "</td></tr>";
            }
             */
            tableString += "<tr><td>" + payload['name'] + "</td><td>" + payload['age'] + "</td><td>" + payload['home'] + "</td></tr>";
            tableString += "</table>";
            document.getElementById('jsonOutput').innerHTML = tableString;
        }
    };
}//end JSONData()



function CSVData(){
    let request = new XMLHttpRequest();
    request.open("GET", localIP+":8080/Funds/funds?format=csv", true);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            let rows = request.responseText.split("\n");
            let payload= Array();
            for(let i=0; i<rows.length-1; i++){
               payload[i] = rows[i].split(",");
               for(let p in payload[i]){
                   if(payload[i][p][0] == "\""){
                       payload[i][p] = payload[i][p].substring(1, payload[i][p].length-1);
                   }
                }
            }
            
            let tableString = "<table border=\"1\"><tr><td>Name</td><td>Age</td><td>Home</td></tr>";
            for(let i = 0; i < payload.length; i++){
                tableString += "<tr><td>" + payload[i][0] + "</td><td>" + payload[i][1] + "</td><td>" + payload[i][2] + "</td></tr>";
            }
            tableString += "</table>";
            document.getElementById('csvOutput').innerHTML = tableString;
        }
    };
}//end CSVData()




var sidebarShowing = true;
function hamburger(){
    let sidebar = document.getElementById('sidebar');
    let hamburger = document.getElementById('hamburgerSection');
    let main = document.getElementById('mainContent');
    if(sidebarShowing){
        sidebar.style.display = "none";
        hamburger.style.maxWidth = "5%";
        main.style.minWidth = "93%";        
        sidebarShowing = false;
    }
    else{
        sidebar.style.display = "block";
        hamburger.style.maxWidth = "20%";
        main.style.minWidth = "75%";
        sidebarShowing = true;
    }
}


function statementTabs(event, statement){
    let content = document.getElementsByClassName('statements');
    for(let i=0; i<content.length; i++){
        content[i].style.display = "none";
    }
    if(statement == "balanceSheet"){
        document.getElementById(statement).style.display = "grid";
    }
    else{
        document.getElementById(statement).style.display = "block";
    }
}



function accountLedger(account){
    let left = screen.width/3;
    let top = screen.height/4;
    window.open("pages/account-ledger.html", "AccountLedger", "width=750, height=400, left=" + left + ", top=" + top);
    accountDetails();
}

function editTransaction(transaction){
    let left = screen.width/6;
    let top = screen.height/3;
    window.open("edit-transaction.html", "EditTransaction", "width=750, height=200, left=" + left + ", top=" + top);
    accountDetails();
}



function showDetails(){
    let left = screen.width/10;
    let top = screen.height/8;
    window.open("pages/book-details.html", "EditTransaction", "width=850, height=480, left=" + left + ", top=" + top);
    accountDetails();
}



function accountDetails(){
    //load the stuff from the database into the innerhtml of the <tbody> element, there should only be one
}



function toggleCheckbutton(event, id){
    let checked = false;
    if(document.getElementById(id).innerHTML === ""){
        checked = true;
    }
    else{
        checked = false;
    }
    
    if(checked){
        document.getElementById(id).innerHTML = "&#x1F5F8;";
    }
    else{
        document.getElementById(id).innerHTML = "";
    }
}//end toggleCheckButton()


function getToggle(element){
    if(document.getElementById(element).innerHTML === ""){
        return false;
    }
    else{
        return true;
    }
}//end getToggle()




function toggleRadiobutton(event, radioset, element){
    let radios = document.getElementsByName(radioset);
    for(let i=0; i<radios.length; i++){
        radios[i].innerHTML = "";
    }
    for(let i=0; i<radios.length; i++){
        if(radios[i].id === element){
            radios[i].innerHTML = "&#9864;";
        }
        else{
            radios[i].innerHTML = "";
        }
    }
    console.log(getRadio(radioset));
}//end toggleRadiobutton()



function getRadio(radioset){
    let radios = document.getElementsByName(radioset);
    for(let i=0; i<radios.length; i++){
        if(radios[i].innerHTML != ""){
            return radios[i].value;
        }
    }
}//end getRadio()




var optionsShowing = false;
function comboBoxSelect(event, options){
    if(optionsShowing){
        document.getElementsByClassName('ledgerComboBoxOptions')[0].style.display = "none";
        optionsShowing = false;
    }
    else{
        document.getElementsByClassName('ledgerComboBoxOptions')[0].style.display = "block";
        optionsShowing = true;
    }
    let choices = document.getElementsByName(options);
    for(let i=0; i < choices.length; i++){
        if(choices[i].checked){
            console.log(choices[i].checked);
            console.log(choices[i].value)
            document.getElementsByClassName('ledgerComboBoxLabel')[0].innerHTML = choices[i].value + " &nbsp; &nbsp; &#9044;";
        }
    }
}//end comboBoxSelect()




function chooseSplitterAccount(event, element){
    let selection = document.getElementById(element);
    let odds = Array.from(document.querySelectorAll(".ledgerAccountListing li:nth-child(odd)"));
    if(selection.style.backgroundColor !== "rgb(241, 241, 113)"){
        selection.style.backgroundColor = "#F1F171";
        selection.style.color = "#b5a264";
    }
    else{
        if(odds.includes(selection)){
            selection.style.backgroundColor = "#ddfad4";
            selection.style.color = "#232323";
        }
        else{
            selection.style.backgroundColor = "#9bc78d";
            selection.style.color = "#232323";
            
        }
    }
//    document.getElementById('split').innerHTML += "<li>" + selection.innerHTML + "</li>";
}//end chooseSplitterAccount()



function addChosenAccounts(event){
    let accounts = Array.from(document.querySelectorAll("#availableAccounts li"));
    let odds = Array.from(document.querySelectorAll(".ledgerAccountListing li:nth-child(odd)"));
    for(let i=0; i<accounts.length; i++){
        if(accounts[i].style.backgroundColor === "rgb(241, 241, 113)"){
            document.getElementById('split').innerHTML += "<li>" + accounts[i].innerHTML + "</li>";
            if(odds.includes(accounts[i])){
                accounts[i].style.backgroundColor = "#ddfad4";
                accounts[i].style.color = "#232323";
            }
            else{
                accounts[i].style.backgroundColor = "#9bc78d";
                accounts[i].style.color = "#232323";

            }
        }
    }
}