import { Chart } from 'chart.js/auto';

// Initial data for the charts, news, and accounts
export const chartValues = [
    { date: '2024-01-01', amount: 10.34 },
    // Additional initial values
];

export const initialNews = [
    { title: "sample news title 1", description: "samples news description 1" },
    { title: "sample news title 2", description: "samples news description 2" },
    { title: "sample news title 3", description: "samples news description 3" }
];

export const initialAccounts = {
    studentDebitPlan: 11.20,
    diningDollars: 21.45,
    investing: 132.87,
    dcMeals: 62
};

// Functions to manage the chart
export const initChart = (ctx, chartValues) => {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartValues.map(val => val.date),
            datasets: [{
                label: 'Amount Invested',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                data: chartValues.map(val => val.amount),
                fill: false,
                lineTension: 0
            }]
        }
    });
};

export const addChartValue = (chart, value) => {
    chart.data.labels.push(value.date);
    chart.data.datasets[0].data.push(value.amount);
    chart.update();
};

