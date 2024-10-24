const transactions = [
    { id: '1', from: 'КошелекA', to: 'КошелекB', amount: 0.5, date: '2023-10-20' },
    { id: '2', from: 'КошелекC', to: 'КошелекD', amount: 1.2, date: '2023-10-21' },
    { id: '3', from: 'КошелекE', to: 'КошелекF', amount: 0.8, date: '2023-10-22' },
    { id: '4', from: 'КошелекG', to: 'КошелекH', amount: 2.1, date: '2023-10-23' },
    { id: '5', from: 'КошелекI', to: 'КошелекJ', amount: 0.9, date: '2023-10-24' },
    { id: '6', from: 'КошелекK', to: 'КошелекL', amount: 3.5, date: '2023-10-25' },
    { id: '7', from: 'КошелекM', to: 'КошелекN', amount: 1.8, date: '2023-10-26' },
    { id: '8', from: 'КошелекO', to: 'КошелекP', amount: 0.7, date: '2023-10-27' },
    { id: '9', from: 'КошелекQ', to: 'КошелекR', amount: 4.0, date: '2023-10-28' },
    { id: '10', from: 'КошелекS', to: 'КошелекT', amount: 2.3, date: '2023-10-29' },
];

let currentPage = 1;
const transactionsPerPage = 5;

function displayTransactions(page) {
    const start = (page - 1) * transactionsPerPage;
    const end = start + transactionsPerPage;
    const visibleTransactions = transactions.slice(start, end);

    const walletList = document.getElementById('walletList');
    walletList.innerHTML = ''; 

    visibleTransactions.forEach(transaction => {
        const walletItem = document.createElement('div');
        walletItem.className = 'wallet-item';
        walletItem.innerHTML = `
            <strong>От:</strong> ${transaction.from} <br>
            <strong>Кому:</strong> ${transaction.to} <br>
            <strong>Сумма:</strong> ${transaction.amount} BTC <br>
            <strong>Дата:</strong> ${transaction.date}
        `;
        walletList.appendChild(walletItem);
    });
}

displayTransactions(currentPage);

document.getElementById('loadMoreButton').addEventListener('click', () => {
    currentPage++;
    displayTransactions(currentPage);

    if (currentPage * transactionsPerPage >= transactions.length) {
        document.getElementById('loadMoreButton').style.display = 'none';
    }

    document.getElementById('hideButton').style.display = 'block';
});

document.getElementById('hideButton').addEventListener('click', () => {
    currentPage = 1; 
    displayTransactions(currentPage);
    document.getElementById('hideButton').style.display = 'none'; // Скрываем кнопку
    document.getElementById('loadMoreButton').style.display = 'block'; // Показываем кнопку загрузки
});
