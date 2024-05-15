function addTableEntry(amount, type, roundup, total){
    const table = document.getElementById('history-table');
    const tr = document.createElement('tr');
    const tdAmount = document.createElement('td');
    const tdType = document.createElement('td');
    const tdRoundup = document.createElement('td');
    const tdTotal = document.createElement('td');
    tdAmount.innerHTML = `$${amount}`;
    tdType.innerHTML = type;
    tdRoundup.innerHTML = `$${roundup}`;
    tdTotal.innerHTML = `$${total}`;
    tr.appendChild(tdAmount);
    tr.appendChild(tdType);
    tr.appendChild(tdRoundup);
    tr.appendChild(tdTotal);
    table.appendChild(tr);
}

addTableEntry(3.43, "Add", 0.45, 1.32);
addTableEntry(6.43, "Add", 0.23, 9.43);
addTableEntry(7.22, "Add", 0.65, 1.23);
addTableEntry(5.65, "Add", 0.34, 9.43);
addTableEntry(1.87, "Add", 0.19, 3.43);