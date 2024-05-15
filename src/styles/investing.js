// Load chart into DOM
let chart;
const chartValues = [
{date: '2024-01-01', amount: 10.34},
{date: '2024-02-01', amount: 8.57},
{date: '2024-03-01', amount: 6.87},
{date: '2024-04-01', amount: 23.54},
{date: '2024-05-01', amount: 5.77},
{date: '2024-06-01', amount: 9.04},
{date: '2024-07-01', amount: 10.34},
{date: '2024-08-01', amount: 8.57},
{date: '2024-09-01', amount: 6.87},
{date: '2024-10-01', amount: 23.54},
{date: '2024-11-01', amount: 5.77},
{date: '2024-12-01', amount: 9.04},
];

const recentDividends = [2.34, 5.23, 1.44];

document.addEventListener('DOMContentLoaded', function () {
    renderChart();

    addChartValue({date: '2024-07-01', amount: 11.43});
    loadDividends();
    addDividend(2.43);

    addRoundup(4.32);
    addRecurringAmount(2.95);
    addDividends(6.23);

    addIndividualRoundups(4.83);
    addIndividualRecurring(7.31);
    addIndividualDividends(9.61);
});

function renderChart(){
    if(chart){
        chart.destroy();
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Amount Invested',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                data: [],
                fill: false, 
                lineTension: 0
            }]
        },
    });

    let totalInvested = 0;
    for(const item of chartValues){
        totalInvested += item.amount;
        chart.data.labels.push(item.date);
        chart.data.datasets[0].data.push(totalInvested);
    }
    chart.update();
}

// Add a new amount invested to be displayed on the chart, example argument: {date: '2024-07-01', amount: 11.43}
function addChartValue(value){
    chartValues.push(value);
    renderChart();
}

function loadDividends(){
    const dividendContent = document.getElementById('dividend-content');
    for(const dividend of recentDividends){
        const innerContent = document.createElement('div');
        innerContent.className = "inner-content"
        const title = document.createElement('div');
        title.className = "title";
        const description = document.createElement('div');
        description.className = "amount";
        title.innerHTML = `<h4>Dividend</h4>`;
        description.innerHTML = `<h4>$${dividend}</h4>`;
        innerContent.appendChild(title);
        innerContent.appendChild(description);
        dividendContent.appendChild(innerContent);
    }
}

function addDividend(dividend){
    recentDividends.push(dividend);
    const divContent = document.getElementById('dividend-content');
    divContent.innerHTML = "";
    loadDividends();
}

function addRoundup(amount){
    const field = document.getElementById('roundup-amount');
    field.innerHTML = `<h3>$${amount}</h3>`;
}

function addRecurringAmount(amount){
    const field = document.getElementById('recurring-amount');
    field.innerHTML = `<h3>$${amount}</h3>`;
}

function addDividends(amount){
    const field = document.getElementById('dividends-amount');
    field.innerHTML = `<h3>$${amount}</h3>`;
}

function addIndividualRoundups(amount){
    const field = document.getElementById('individual-roundups');
    field.innerHTML = `<h3>$${amount}</h3>`;
}

function addIndividualRecurring(amount){
    const field = document.getElementById('individual-recurring');
    field.innerHTML = `<h3>$${amount}</h3>`;
}

function addIndividualDividends(amount){
    const field = document.getElementById('individual-dividends');
    field.innerHTML = `<h3>$${amount}</h3>`;
}