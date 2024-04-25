let pieChart;

const breakdown = 
[{pair: "BTCUSD", amount: 300},
{pair: "ETHUSD", amount: 200},
{pair: "DOGEUSD", amount: 350}];

document.addEventListener('DOMContentLoaded', function () {
    renderPieChart();
    addToBreakdown({pair: "KASUSDT", amount: 400});
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
        pieChart.data.datasets[0].data.push(item.amount);
    }
    pieChart.update()
}

function addToBreakdown(value){
    let index = breakdown.findIndex(element => element.pair === value.pair);
    if(index !== -1){
        breakdown[index].amount += value.amount;
    } else{
        breakdown.push(value);
    }
    renderPieChart();
}