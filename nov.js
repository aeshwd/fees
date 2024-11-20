// Initial array of players with fee status details
const players = [
    { name: 'Bhavya', feesDate: '01 Nov',  status: 'paid' },
    { name: 'Gurman', feesDate: '03 Nov',  status: 'paid' },
    { name: 'Atharv', feesDate: '21 Nov',  status: 'pending' },
    { name: 'Pranav', feesDate: '29 Nov',  status: 'pending' },
    { name: 'Vaanya', feesDate: '01 Nov',  status: 'paid' },
    { name: 'Vega', feesDate: '28 Nov',  status: 'pending' },
    { name: 'Mehransh', feesDate: '06 Nov',  status: 'paid' },
    { name: 'Yuvraj', feesDate: '01 Nov',  status: 'paid' },
    { name: 'Rabaab', feesDate: '14 Nov',  status: 'pending' },
    { name: 'Athman', feesDate: '14 Nov',  status: 'paid' },
    { name: 'Devansh', feesDate: '18 Nov',  status: 'paid' },
    { name: 'Sukhmehar', feesDate: '19 Nov',  status: 'pending' },
    { name: 'Kashika', feesDate: '07 Nov',  status: 'paid' },
    { name: 'Vihaan', feesDate: '01 Nov',  status: 'paid' },
    { name: 'Aryan', feesDate: '01 Nov',  status: 'paid' },
    { name: 'Blessy', feesDate: '07 Nov',  status: 'paid' }, 
    { name: 'Chinmay', feesDate: '7 Nov',  status: 'paid' },
    { name: 'Gurshabad', feesDate: '21 Nov',  status: 'pending' },
    { name: 'Garvit', feesDate: '29 Nov',  status: 'pending' },
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



// Popup

/* Popup */

document.addEventListener("DOMContentLoaded", function () {
    // Show the modal after 3 seconds
    setTimeout(function () {
      document.getElementById('popupModal').classList.add('show');
    }, 3000);
  
    // Close modal when clicking the cross button
    document.getElementById('closeBtn').addEventListener('click', function () {
      document.getElementById('popupModal').classList.remove('show');
    });

     // Close modal when clicking the cross button
     document.getElementById('popup-btn').addEventListener('click', function () {
        document.getElementById('popupModal').classList.remove('show');
      });
  
    // Optional: Close modal when clicking outside the content
    window.addEventListener('click', function (e) {
      if (e.target == document.getElementById('popupModal')) {
        document.getElementById('popupModal').classList.remove('show');
      }
    });
  });
