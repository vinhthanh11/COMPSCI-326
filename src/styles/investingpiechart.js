let pieChart;

const db = new PouchDB('login-db');

async function fetchUserData(spireId) {
    try {
        const user = await db.get(`user:${spireId}`);
        return user.portfolio.positions;
    } catch (err) {

        console.error('Error fetching user data:', err);
        return null;
    }
}

let breakdown = [];

async function displayPortfolio() {
    const spireId = sessionStorage.getItem('spireId');

    if (spireId) {
        const pf = await fetchUserData(spireId);
        if (pf.length > 0){
            breakdown = pf;
            console.log(breakdown);
        } else {
            // filler if no positions held
            breakdown = 
            [{pair: "BTCUSD", quantity: 300},
            {pair: "ETHUSD", quantity: 200},
            {pair: "DOGEUSD", quantity: 350}];
        }
    } else {
        console.error('SPIRE ID not found in session storage');
        window.location.href = '/';
    }
}





document.addEventListener('DOMContentLoaded', function () {
    displayPortfolio().then(() => {
        console.log(breakdown, 1);
        renderPieChart();
    })
    .catch(error => {
        console.error('Error during displayPortfolio:', error);
    });

});

function renderPieChart(){
    if(pieChart){
        pieChart.destroy();
    }
    var ctx = document.getElementById('myPieChart').getContext('2d');
    pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(251005, 100, 43, 0.6)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(100, 100, 43, 0.6)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    for(const item of breakdown){
        pieChart.data.labels.push(item.pair);
        pieChart.data.datasets[0].data.push(item.quantity);
    }
    pieChart.update()
}

function addToBreakdown(value){
    let index = breakdown.findIndex(element => element.pair === value.pair);
    if(index !== -1){
        breakdown[index].quantity += value.quantity;
    } else{
        breakdown.push(value);
    }
    renderPieChart();
}