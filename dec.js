// Initial array of players with fee status details
const players = [
    { name: 'Blessy', feesDate: '07 Dec',  status: 'pending' }, 
    { name: 'Bhavya', feesDate: '01 Dec',  status: 'paid' },
    { name: 'Gurman', feesDate: '03 Dec',  status: 'paid' },
    { name: 'Vega', feesDate: '28 Dec',  status: 'pending' },
     { name: 'Vritika', feesDate: '29 Dec',  status: 'pending' },
    { name: 'Mehransh', feesDate: '06 Dec',  status: 'paid' },
    { name: 'Sukhmehar', feesDate: '19 Dec',  status: 'pending' },
    { name: 'Garvit', feesDate: '29 Dec',  status: 'pending' },
    { name: 'Kevit', feesDate: '08 Dec',  status: 'paid' },
    { name: 'Vihaan', feesDate: '01 Dec',  status: 'paid' },
    { name: 'Aryan', feesDate: '01 Dec',  status: 'paid' },
    { name: 'Chinmay', feesDate: '7 Dec',  status: 'paid' },
    { name: 'Gurshabad', feesDate: '21 Dec',  status: 'pending' }
];

document.addEventListener('DOMContentLoaded', () => {
    displayPlayers(players);

    // Search bar event listener
    document.getElementById('searchBar').addEventListener('input', searchPlayers);
});

// Function to display players from the array
function displayPlayers(playerArray) {
    const playerList = document.querySelector('.player-list');
    playerList.innerHTML = ''; // Clear existing content

    playerArray.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        
        playerCard.innerHTML = `
            <div>
                <strong>${player.name}</strong><br>
                Fees Date: ${player.feesDate}<br>
               
                <div class="status ${player.status}">${player.status.charAt(0).toUpperCase() + player.status.slice(1)}</div>
            </div>
        `;
        
        playerList.appendChild(playerCard);
    });
}

// Function to search players based on input
function searchPlayers() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchQuery));
    displayPlayers(filteredPlayers); // Display only the filtered players
}
