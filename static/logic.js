allDisasters = []



// d3.request("http://127.0.0.1:5000/alldisasters").get(response => {
//     console.log(JSON.parse(response.response));
// })

statedisasters = []

// function dateFilter(){
//     alert("In clk listener")
//     event.preventDefault();
//    // var clickSel = d3.select("#datetime").value();
//     console.log(clickSel)
//     var clickSel = '1953-06-09' // only for testing the link
//     d3.request("http://127.0.0.1:5000/filter/"+clickSel).get(response => {
//     console.log(JSON.parse(response.response));
//     // statedisasters = response.response;
// })

// }

d3.request("http://127.0.0.1:5000/filter/incident/Tornado").get(response => {
 console.log(JSON.parse(response.response));
 })