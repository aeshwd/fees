// Initial array of players with fee status details
const players = [
    { name: 'Bhavya', feesDate: '01 Oct',  status: 'paid' },
    { name: 'Gurman', feesDate: '03 Oct',  status: 'paid' },
    { name: 'Atharv', feesDate: '21 Oct',  status: 'paid' },
    { name: 'Pranav', feesDate: '29 Oct',  status: 'paid' },
    { name: 'Vaanya', feesDate: '01 Oct',  status: 'paid' },
    { name: 'Vega', feesDate: '28 Oct',  status: 'pending' },
    { name: 'Mehransh', feesDate: '06 Oct',  status: 'paid' },
    { name: 'Yuvraj', feesDate: '01 Oct',  status: 'paid' },
    { name: 'Rabaab', feesDate: '14 Oct',  status: 'paid' },
    { name: 'Athman', feesDate: '14 Oct',  status: 'paid' },
    { name: 'Devansh', feesDate: '18 Oct',  status: 'paid' },
    { name: 'Sukhmehar', feesDate: '19 Oct',  status: 'paid' },
    { name: 'Garvit', feesDate: '29 Oct',  status: 'pending' },
    { name: 'Kaashvi', feesDate: '24 Oct',  status: 'pending' },
    { name: 'Kashika', feesDate: '07 Oct',  status: 'paid' },
    { name: 'Vihaan', feesDate: '01 Oct',  status: 'paid' },
    { name: 'Aryan', feesDate: '01 Oct',  status: 'paid' },
    { name: 'Blessy', feesDate: '07 Oct',  status: 'pending' }, 
    { name: 'Surbuland', feesDate: '1 Oct',  status: 'paid' },
    { name: 'Chinmay', feesDate: '7 Oct',  status: 'paid' },
    { name: 'Gurshabad', feesDate: '21 Oct',  status: 'paid' }
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
