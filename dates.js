// Sample data: Array of players with details
const players = [
    {
        name: 'Bhavya',
        admissionDate: '01-01-2024',
       
    },
    {
        name: 'Gurman',
        admissionDate: '03-08-2024',
       
    },
    {
        name: 'Atharv',
        admissionDate: '21-08-2024',
       
    },
    {
        name: 'Pranav',
        admissionDate: '29-09-2024',
       
    },
    {
        name: 'Vaanya',
        admissionDate: '01-10-2024',
       
    },
    {
        name: 'Vega',
        admissionDate: '28-09-2024',
       
    },
    {
        name: 'Mehransh',
        admissionDate: '06-10-2024',
       
    },
    {
        name: 'Yuvraj',
        admissionDate: '01-10-2024',
       
    },
  
    {
        name: 'Devansh',
        admissionDate: '18-10-2024',
       
    },
    {
        name: 'Sukhmehar',
        admissionDate: '19-10-2024',
       
    },
    { name: 'Garvit', admissionDate: '29-09-2024', },
    { name: 'Kashika', admissionDate: '07-08-2023', },
    { name: 'Vihaan', admissionDate: '01-01-2024', },
    { name: 'Aryan', admissionDate: '01-01-2024', },
    { name: 'Blessy', admissionDate: '07-08-2023', },
    { name: 'Chinmay', admissionDate: '07-10-2024', },
    { name: 'Gurshabad', admissionDate: '21-07-2024', }
];

document.addEventListener('DOMContentLoaded', () => {
    displayPlayers(players); // Display all players initially

    // Search bar event listener
    document.getElementById('searchBar').addEventListener('input', searchPlayers);
});

// Function to display players from the array
function displayPlayers(playersToDisplay) {
    const playerList = document.querySelector('.player-list');
    playerList.innerHTML = ''; // Clear existing content

    playersToDisplay.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        
        playerCard.innerHTML = `
            <div>
                <strong>${player.name}</strong><br>
                Admission Date: ${player.admissionDate}<br>
               
                
            </div>
        `;
        
        playerList.appendChild(playerCard);
    });
}

// Function to search players based on input
function searchPlayers() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchQuery));
    displayPlayers(filteredPlayers);
}
