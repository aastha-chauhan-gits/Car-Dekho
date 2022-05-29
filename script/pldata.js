// GET THE FORM ELEMENT FROM PLAY WITH CAR SECTION
const form  = document.getElementById('playForm');

// THIS FUNTION IS CALLED ON HITTING THE GET RESULT BUTTON
form.addEventListener('submit', (event) => {

    var pl = document.getElementById('plot');
    var plID = pl.value;

    // If the user hasn't selected anything, then the "Please Specify" sreen is rendered

    if (plID == "temp") {
        document.getElementById('play1').style.display = "block";
        document.getElementById('play2').style.display = "none";
        document.getElementById('foot').style.position = "fixed";
        document.getElementById('foot').style.bottom = "0";
        document.getElementById('foot').style.left = "0";
        document.getElementById('foot').style.width = "100%";
    }

    // Elsewise we get the graph as per the choice made

    else {

        if (plID == "1") {
            document.getElementById('playFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=ab4f3d7f-04b9-411a-9a17-7602f2402b3e&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (plID == "2") {
            document.getElementById('playFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=b2e4d077-590e-40cc-a013-ee29e4eeb42e&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (plID == "3") {
            document.getElementById('playFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=e118ee8d-b7f7-4170-ab15-e4d3f570706d&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (plID == "4") {
            document.getElementById('playFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=8689cc25-f37a-4d66-9eab-2a1f1dcdf111&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (plID == "5") {
            document.getElementById('playFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=25496d8a-8135-422f-b641-f3ccf01c1ea7&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (plID == "6") {
            document.getElementById('playFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=096f6c5f-9ca6-4b3a-9fe0-f92bcfa62f17&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }

        // then obviously, some cleverness must be shown to replace the static screen with the graph

        document.getElementById('play1').style.display = "none";
        document.getElementById('play2').style.display = "block";

        document.getElementById('foot').style.marginTop = "50px";
        document.getElementById('foot').style.position = "relative";
    }

    event.preventDefault();
});