// GET THE FORM ELEMENT
const form  = document.getElementById('displayForm');
// THIS FUNCTION IS CALLED UPON SUBMITTING THE FORM
form.addEventListener('submit', (event) => {

    // THIS FUNCION IS CALLED UPON SELECTING DROP BOX 1
    var jT = document.getElementById('journeyType');
    var jtID = jT.value;
    // console.log(jtID);

    // THIS FUNCTION IS CALLED UPON SELECTING DROP BOX 2
    var pr = document.getElementById('priceRange');
    var prID = pr.value;
    // console.log(prID);

    // CONDITION FOR SELECTING NOTHING IN DROP BOX
    if (jtID == "temp" && prID == "temp") {
        document.getElementById('number1').style.display = "block";
        document.getElementById('number2').style.display = "none";
    }
    // CONDITION FOR SELECTING ONLY ONE DROP BOX
    else if (jtID == "temp" || prID == "temp") {
        alert('Please Select on both Fields!');
    }
    // CONDITIONS FOR DIFFERENT COMBINATIONS MADE
    else {

        if (jtID == "1" && prID == "1") {
            document.getElementById('iFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=f20b3b26-5a81-4023-ac5a-dddf17b4225e&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (jtID == "1" && prID == "2") {
            document.getElementById('iFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=467a029d-b5b6-48f4-83bc-536abd375bdf&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (jtID == "1" && prID == "3") {
            document.getElementById('iFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=0702d417-f120-41e2-9232-16cd22ea7f8e&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (jtID == "2" && prID == "1") {
            document.getElementById('iFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=26139382-ce80-4a38-848f-66420243fcb4&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (jtID == "2" && prID == "2") {
            document.getElementById('iFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=4dd9e5bb-f92c-4d85-ac9a-c63a59704e2f&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (jtID == "2" && prID == "3") {
            document.getElementById('iFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=444d7ea4-080b-49f7-8d22-6158a0968956&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }

        document.getElementById('number1').style.display = "none";
        document.getElementById('number2').style.display = "block";
    }

    event.preventDefault();
});