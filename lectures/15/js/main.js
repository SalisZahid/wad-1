data=[
    {
        Name:"Salis Zahid",
        Currency:"Pkr",
        IBAN:"Pk123",
        Bal:123456
    }
    ]



init();

function init(){

    document.getElementById("title").innerText=data[0].Name;
    document.getElementById("balance").innerText=data[0].Bal;
    document.getElementById("currency").innerText=data[0].Currency;
    document.getElementById("IBAN").innerText=data[0].IBAN;
}

function depositamount(a) {
    if(a.key=="Enter"){
        var q=parseInt(document.getElementById("deposit").value);
        if(isNaN(q)){
            document.getElementById("deposit-msg").innerText="Enter a valid amount";
        }
        else{

            data[0].Bal+=q;
            document.getElementById("balance").innerText=data[0].Bal;

            table=document.getElementById("transaction-table");
            table.innerHTML+=
                '<tr>'
                + '<th align="left" valign="middle" scope="col">'+ new Date() +'</th>'
                + '<th align="left" valign="middle" scope="col">'+ 'Credit' +'</th>'
                + '<th align="left" valign="middle" scope="col">'+ document.getElementById("deposit").value +'</th>'
                +'</tr>';

        }
    }

}

function withdrawamount(a) {
    if(a.key=="Enter"){
        var q=parseInt(document.getElementById("withdraw").value);
        if(isNaN(q)){
            document.getElementById("withdraw-msg").innerText="Enter a valid amount";
        }
        else if(document.getElementById("withdraw").value>data[0].Bal)
        {
            document.getElementById("withdraw-msg").innerText="Insufficient Funds";
        }
        else{

            data[0].Bal-=q;
            document.getElementById("balance").innerText=data[0].Bal;

            table=document.getElementById("transaction-table");
            table.innerHTML+=
                '<tr>'
                + '<th align="left" valign="middle" scope="col">'+ new Date() +'</th>'
                + '<th align="left" valign="middle" scope="col">'+ 'Debit' +'</th>'
                + '<th align="left" valign="middle" scope="col">'+ document.getElementById("withdraw").value +'</th>'
                +'</tr>';

        }
    }

}