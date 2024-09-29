document.addEventListener('DOMContentLoaded', function() {
    const tbody = document.querySelector('#scoreTable tbody');
    const finalScoresBtn = document.getElementById('finalScoresBtn');
    const scoreTable = document.getElementById('scoreTable');
    const finalScoresTable = document.getElementById('finalScoresTable');
    const startGameBtn = document.getElementById('startGameBtn');
    const finalScores = [0, 0, 0, 0];
  
    // Handle Start Game button click
    startGameBtn.addEventListener('click', function() {
      // Get the player names from the input fields
      const player1Name = document.getElementById('player1Name').value;
      const player2Name = document.getElementById('player2Name').value;
      const player3Name = document.getElementById('player3Name').value;
      const player4Name = document.getElementById('player4Name').value;
  
      // Validate that all names are entered
      if (player1Name && player2Name && player3Name && player4Name) {
        // Update table headers and final scores headers
        document.getElementById('p1Header').textContent = player1Name;
        document.getElementById('p2Header').textContent = player2Name;
        document.getElementById('p3Header').textContent = player3Name;
        document.getElementById('p4Header').textContent = player4Name;
  
        document.getElementById('finalP1').textContent = player1Name;
        document.getElementById('finalP2').textContent = player2Name;
        document.getElementById('finalP3').textContent = player3Name;
        document.getElementById('finalP4').textContent = player4Name;
  
        // Show the score table and final scores button
        scoreTable.style.display = 'table';
        finalScoresBtn.style.display = 'block';
        finalScoresTable.style.display = 'table';
  
        // Hide the name input form
        document.getElementById('nameInputForm').style.display = 'none';
  
        // Create 13 rows for score input
        for (let round = 1; round <= 13; round++) {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>Round ${round}</td>
            <td><input type="number" class="player-score" data-player="0" min="0" placeholder="0"></td>
            <td><input type="number" class="player-score" data-player="1" min="0" placeholder="0"></td>
            <td><input type="number" class="player-score" data-player="2" min="0" placeholder="0"></td>
            <td><input type="number" class="player-score" data-player="3" min="0" placeholder="0"></td>
          `;
          tbody.appendChild(row);
        }
  
        // Add event listener to change color of input box if the value is negative
        const scoreInputs = document.querySelectorAll('.player-score');
        scoreInputs.forEach(input => {
          input.addEventListener('input', function() {
            if (parseInt(input.value) < 0) {
              input.style.backgroundColor = 'red';
            } else {
              input.style.backgroundColor = ''; // Reset the color if value is positive or zero
            }
          });
        });
      } else {
        alert('Please enter names for all players.');
      }
    });
  
    // Event listener for the final scores button
    finalScoresBtn.addEventListener('click', function() {
      // Reset the final scores
      for (let i = 0; i < 4; i++) {
        finalScores[i] = 0;
      }
  
      // Sum up the scores for each player
      const scoreInputs = document.querySelectorAll('.player-score');
      scoreInputs.forEach(input => {
        const playerIndex = input.getAttribute('data-player');
        finalScores[playerIndex] += parseInt(input.value) || 0; // Add input value or 0 if empty
      });
  
      // Update the final scores table
      document.getElementById('player1Total').textContent = finalScores[0];
      document.getElementById('player2Total').textContent = finalScores[1];
      document.getElementById('player3Total').textContent = finalScores[2];
      document.getElementById('player4Total').textContent = finalScores[3];
    });
  });
  