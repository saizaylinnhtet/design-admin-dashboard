$('.counter-up').counterUp({
    delay: 10,
    time: 2000
});

let dateArr= ['jul 21','jul 20','jul 19','jul 18','jul 17','jul 16','jul 15','jul 14','jul 13','jul 12','jul 11'];
let orderCountArr= [7, 5, 4, 8, 9, 6, 8, 5, 3, 6, 7];
let viewerCountArr= [17, 25, 12, 18, 19, 23, 18, 15, 14, 16, 17];

const ctx = document.getElementById('ov').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [
            {
                label: 'Order Counts',
                data: orderCountArr,
                backgroundColor: [
                    '#007bff30',
                ],
                borderColor: [
                    '#007bff',
                ],
                borderWidth: 1,
                tension: 0
            },
            {
                label: 'Viewer Counts',
                data: viewerCountArr,
                backgroundColor: [
                    '#20c99750',
                ],
                borderColor: [
                    '#20c997',
                ],
                borderWidth: 1,
                tension: 0
            }
        ]
    },
    options: {
        scales: {
            yAxes:[ {
                display: false
            }],
            xAxes:[{
                display: false,
                gridLines: {
                    display: false
                }
            }]
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle: true
            }
        }
    }
});

let orderFromPlace = [5,15,4,9,7];
let places = ["YGN","MDY","TGI","POL","NPT"];

const sec_ctx = document.getElementById('op').getContext('2d');
const sec_myChart = new Chart(sec_ctx, {
    type: 'doughnut',
    data: {
        labels: places,
        datasets: [{
            label: '# of Votes',
            data: orderFromPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display: false,
                beginAtZero: true
            }],
            xAxes:[{
                display: false
            }]
        },
        legend:{
            display: true,
            position: 'bottom',
            labels: {
                fontColor: '#333',
                usePointStyle: true
            }
        }
    }
});