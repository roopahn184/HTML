let employee = [{"id":1,"first_name":"Matthus","last_name":"Cavalier","email":"mcavalier0@jigsy.com","gender":"Male"},
{"id":2,"first_name":"Hadlee","last_name":"Grundey","email":"hgrundey1@hibu.com","gender":"Male"},
{"id":3,"first_name":"Madlin","last_name":"McAirt","email":"mmcairt2@unesco.org","gender":"Polygender"},
{"id":4,"first_name":"Helenka","last_name":"Saintsbury","email":"hsaintsbury3@gnu.org","gender":"Female"},
{"id":5,"first_name":"Yancey","last_name":"McInility","email":"ymcinility4@phpbb.com","gender":"Male"},
{"id":6,"first_name":"Euphemia","last_name":"Huton","email":"ehuton5@berkeley.edu","gender":"Female"},
{"id":7,"first_name":"Chickie","last_name":"Midgley","email":"cmidgley6@slashdot.org","gender":"Male"},
{"id":8,"first_name":"Levon","last_name":"Delicate","email":"ldelicate7@cargocollective.com","gender":"Male"},
{"id":9,"first_name":"Helsa","last_name":"O'Brogane","email":"hobrogane8@infoseek.co.jp","gender":"Female"},
{"id":10,"first_name":"Mollie","last_name":"Manuello","email":"mmanuello9@hud.gov","gender":"Female"},
{"id":11,"first_name":"Shem","last_name":"Garnson","email":"sgarnsona@moonfruit.com","gender":"Male"},
{"id":12,"first_name":"Carmencita","last_name":"Louedey","email":"clouedeyb@ibm.com","gender":"Female"},
{"id":13,"first_name":"Baldwin","last_name":"Bartalucci","email":"bbartaluccic@ucoz.com","gender":"Male"},
{"id":14,"first_name":"Barb","last_name":"McFarland","email":"bmcfarlandd@t.co","gender":"Female"},
{"id":15,"first_name":"Conny","last_name":"Gaughan","email":"cgaughane@aol.com","gender":"Male"},
{"id":16,"first_name":"Phillie","last_name":"Tieraney","email":"ptieraneyf@jiathis.com","gender":"Female"},
{"id":17,"first_name":"Den","last_name":"Franies","email":"dfraniesg@army.mil","gender":"Genderfluid"},
{"id":18,"first_name":"Lydon","last_name":"Woodhead","email":"lwoodheadh@sun.com","gender":"Male"},
{"id":19,"first_name":"Maren","last_name":"Duquesnay","email":"mduquesnayi@cmu.edu","gender":"Female"},
{"id":20,"first_name":"Vonny","last_name":"Hovenden","email":"vhovendenj@cbsnews.com","gender":"Female"}]

function employeedata(){
    for(i=0;i<=employee.length-1;i++){
        row = row + `<tr>
        <td>${employee[i].id}</td>
        </tr>`
    }
    document.getElementById("tbody_data").innerHTML= "gm"
}