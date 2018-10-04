










// function initialize(){
//     var ctx = document.getElementById("myChart").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });
// }


     

function initialize(){
//  const year = document.querySelector('#one').value;
 const country = document.querySelector('#two').value;


 console.log(typeof(country));
    fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log('data from network');
        console.log(data);
        let el =document.querySelector('#specific');
        el.innerHTML=`<h1 >Population VS Area Calculator OF ${data[0].name}</h1>`;

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Total Population", "Total Area" ],
        datasets: [{
            label: "My First dataset",
            backgroundColor: ['rgba(37, 84, 97,0.5)',
            'rgba(187, 36, 83, 1)'],
            borderColor: 'transparent',
            data: [data[0].population,data[0].area],
        }]
    },

    // Configuration options go here
    options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
});

})
.catch(function(error){
    alert("please fill the form");
    console.log("first letter of country must be capital like Pakistan,Japan");

})
}