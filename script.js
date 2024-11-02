// Initial array of players with fee status details
const players = [
    { name: 'Bhavya', feesDate: '01 Nov',  status: 'paid' },
    { name: 'Gurman', feesDate: '03 Nov',  status: 'pending' },
    { name: 'Atharv', feesDate: '21 Nov',  status: 'pending' },
    { name: 'Pranav', feesDate: '29 Nov',  status: 'pending' },
    { name: 'Vaanya', feesDate: '01 Nov',  status: 'pending' },
    { name: 'Vega', feesDate: '28 Nov',  status: 'pending' },
    { name: 'Mehransh', feesDate: '06 Nov',  status: 'pending' },
    { name: 'Yuvraj', feesDate: '01 Nov',  status: 'pending' },
    { name: 'Rabaab', feesDate: '14 Nov',  status: 'pending' },
    { name: 'Athman', feesDate: '14 Nov',  status: 'pending' },
    { name: 'Devansh', feesDate: '18 Nov',  status: 'pending' },
    { name: 'Sukhmehar', feesDate: '19 Nov',  status: 'pending' },
    { name: 'Kashika', feesDate: '07 Nov',  status: 'pending' },
    { name: 'Vihaan', feesDate: '01 Nov',  status: 'pending' },
    { name: 'Aryan', feesDate: '01 Nov',  status: 'pending' },
    { name: 'Blessy', feesDate: '07 Nov',  status: 'pending' }, 
    { name: 'Surbuland', feesDate: '1 Nov',  status: 'pending' },
    { name: 'Chinmay', feesDate: '7 Nov',  status: 'pending' },
    { name: 'Gurshabad', feesDate: '21 Nov',  status: 'pending' },
    { name: 'Garvit', feesDate: '29 Nov',  status: 'pending' },
    { name: 'Kaashvi', feesDate: '24 Nov',  status: 'pending' },
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
