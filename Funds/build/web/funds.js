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
    let top = screen.width/4;
    window.open("account-ledger.html", "AccountLedger", "width=700, height=400, left=" + left + ", top=" + top);
    accountDetails();
}

function editTransaction(transaction){
    let left = screen.width/3;
    let top = screen.width/4;
    window.open("edit-transaction.html", "EditTransaction", "width=700, height=200, left=" + left + ", top=" + top);
    accountDetails();
}



function accountDetails(){
    //load the stuff from the database into the innerhtml of the <tbody> element, there should only be one
}


