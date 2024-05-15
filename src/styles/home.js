const db = new PouchDB('login-db');

// Function to fetch user data from PouchDB
async function fetchUserData(spireId) {
    try {
        const user = await db.get(`user:${spireId}`);
        return user.balances;
    } catch (err) {
        console.error('Error fetching user data:', err);
        return null;
    }
}

async function displayAccountBalances() {
    const spireId = sessionStorage.getItem('spireId');

    if (spireId) {
        const balances = await fetchUserData(spireId);

        if (balances) {
            addAccountStudentDebitPlan(balances.studentDebt);
            addAccountDiningDollars(balances.diningDollars);
            addAccountInvesting(balances.investing);
            addAccountDCMeals(balances.unlimitedDC);
        }
    } else {
        console.error('SPIRE ID not found in session storage');
        window.location.href = '/';
    }
}
function getFormattedDate(daysBack) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - daysBack);

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add 1 since months are zero-indexed
    const day = String(currentDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
// Load chart into DOM
console.log("ok");
let chart;
const chartValues = [
{date: getFormattedDate(5), amount: 10.34},
{date: getFormattedDate(4), amount: 8.57},
{date: getFormattedDate(3), amount: 6.87},
{date: getFormattedDate(2), amount: 23.54},
{date: getFormattedDate(1), amount: 5.77},
{date: getFormattedDate(0), amount: 9.04}];

const news = [
{title: "An exploration of UMass' kosher dining options", url:"https://dailycollegian.com/2024/04/an-exploration-of-umass-kosher-dining-options/"},
{title: "Baseball Notebook: UMass suffers sweep at the hands of George Washington", url:"https://dailycollegian.com/2024/05/baseball-notebook-umass-suffers-sweep-at-the-hands-of-george-washington/"},
{title: "Amherst Burgers bucking the odds", url:"https://dailycollegian.com/2023/10/amherst-burgers-bucking-the-odds/"},
{title: "SGA discusses options for reform of the Student Activities Fee increase", url:"https://dailycollegian.com/2024/03/sga-discusses-options-for-reform-of-the-student-activities-fee-increase/"},
];

document.addEventListener('DOMContentLoaded', function () {
    renderChart();
    try {
        addChartValue({date: getFormattedDate(0), amount: 0});
        displayAccountBalances()
    } catch (e){
        addChartValue({date: getFormattedDate(0), amount: 0});
        addAccountStudentDebitPlan(9999);
        addAccountDiningDollars(9999);
        addAccountInvesting(9999);
        addAccountDCMeals(9999);
    }
    

    loadNewsHeadlines();

    addTotalAmountInvested(145.83);
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

// Add amount to student debit plan box
function addAccountStudentDebitPlan(amount){
    const field = document.getElementById('student-debit-plan');
    field.innerHTML = `<h3>$${amount.toFixed(2)}</h3>`;
}

// Add amount to dining dollars box
function addAccountDiningDollars(amount){
    const field = document.getElementById('dining-dollars');
    field.innerHTML = `<h3>$${amount.toFixed(2)}</h3>`;
}

// Add amount to investing box
function addAccountInvesting(amount){
    const field = document.getElementById('investing');
    field.innerHTML = `<h3>$${amount.toFixed(2)}</h3>`;
}

// Add amount to DC Meals box
function addAccountDCMeals(amount){
    const field = document.getElementById('dc-meals');
    field.innerHTML = `<h3>${amount.toFixed(0)}</h3>`;
}

// Load news headlines, see above
function loadNewsHeadlines(){
    const newsHeadlines = news;
    const newsContainer = document.getElementById('news-container');
    for(const headline of newsHeadlines){
        const innerContent = document.createElement('div');
        innerContent.className = "inner-content"
        const title = document.createElement('div');
        title.className = "title";
        // const description = document.createElement('div');
        // description.className = "amount";
        title.innerHTML = `<h4><a target="_blank" href=${headline.url}>${headline.title} </a></h4>`;
        // description.innerHTML = headline.description;
        innerContent.appendChild(title);
        // innerContent.appendChild(description);
        newsContainer.appendChild(innerContent);
    }
}

// Add a news headline, format for argument: {title: "sample news title 1", description: "samples news description 1"}
function addNewsHeadline(newsHeadline){
    news.append(newsHeadline);
    loadNewsHeadlines();
}

function addTotalAmountInvested(amount){
    const amtInvested = document.getElementById('total-amount-invested');
    amtInvested.innerHTML = `<h1>Total Amount Invested: $${amount}</h1>`
}
