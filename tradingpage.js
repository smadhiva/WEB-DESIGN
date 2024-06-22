document.addEventListener('DOMContentLoaded', () => {
    const portfolioTable = document.querySelector('#portfolioTable tbody');
    const transactionForm = document.getElementById('transactionForm');
    const totalInvestedElement = document.getElementById('totalInvested');
    const togglePortfolioBtn = document.getElementById('togglePortfolioBtn');
    const portfolio = document.getElementById('portfolio');
    
   
    const portfolioData = {};
    const email = localStorage.getItem('currentEmail');
            const accounts = JSON.parse(localStorage.getItem("users")) || [];

            if (email) {
                const user = accounts.find(v => v.email === email);
                if (user) {
                    document.getElementById('userName').innerText = user.name;
                }
            } 
    // User profile data
    const user = {
        totalInvested: 0
    };

  
   

    // Event listener for form submission
    transactionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get input values
        const cryptoName = document.getElementById('cryptoName').value.trim();
        const quantity = parseFloat(document.getElementById('quantity').value);
        const transactionType = document.getElementById('transactionType').value;

        if (!cryptoName || isNaN(quantity) || quantity <= 0) {
            alert("Please enter valid cryptocurrency name and quantity.");
            return;
        }

        // Initialize the crypto in the portfolio if not already present
        if (!portfolioData[cryptoName]) {
            portfolioData[cryptoName] = { quantity: 0, cost: 0 };
        }

        // Update portfolio based on transaction type
        const currentPrice = getCurrentPrice(cryptoName);
        if (transactionType === 'buy') {
            portfolioData[cryptoName].quantity += quantity;
            portfolioData[cryptoName].cost += currentPrice * quantity;
            user.totalInvested += currentPrice * quantity;
        } else {
            // Ensure user cannot sell more than they own
            if (portfolioData[cryptoName].quantity < quantity) {
                alert("Insufficient quantity to sell.");
                return;
            }
            portfolioData[cryptoName].quantity -= quantity;
            portfolioData[cryptoName].cost -= currentPrice * quantity;
        }

        // Update the portfolio table and total invested amount
        updatePortfolioTable();
        totalInvestedElement.innerText = user.totalInvested.toFixed(2);
    });

    // Event listener for toggle portfolio button
    togglePortfolioBtn.addEventListener('click', () => {
        if (portfolio.style.display === 'none' || portfolio.style.display === '') {
            portfolio.style.display = 'block';
            var blurOverlay = document.querySelector('.blur-background');

            // Show the blur overlay
            blurOverlay.style.display = 'block';
            togglePortfolioBtn.innerText = 'Hide Portfolio';
        } else {
            portfolio.style.display = 'none';
            togglePortfolioBtn.innerText = 'Show Portfolio';
        }
    });
    

    // Function to update the portfolio table
    function updatePortfolioTable() {
        portfolioTable.innerHTML = '';
        let totalvalueInversted = 0;
        let totalprofit = 0;
        let CurrentAmount =0;
            for (const crypto in portfolioData) {
            const currentPrice = getCurrentPrice(crypto);
            const totalValue = portfolioData[crypto].quantity * currentPrice;
            const profitLoss = totalValue - portfolioData[crypto].cost;
            totalvalueInversted+=totalValue;
            totalprofit+=profitLoss;
            CurrentAmount = totalvalueInversted+totalprofit;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${crypto}</td>
                <td>${portfolioData[crypto].quantity.toFixed(2)}</td>
                <td>$${currentPrice.toFixed(2)}</td>
                <td>$${totalValue.toFixed(2)}</td>
                <td style="color: ${profitLoss >= 0 ? 'green' : 'red'};">
                    $${profitLoss.toFixed(2)}
                </td>
            `;
            portfolioTable.appendChild(row);
        }

        document.getElementById("total-inversted-value").innerHTML = totalvalueInversted;
        document.getElementById("Current-Amount-value").innerHTML = CurrentAmount;
        document.getElementById("Current-Gain-value").innerHTML = totalprofit;
    }

    // Function to simulate current prices of cryptocurrencies
    function getCurrentPrice(crypto) {
       
        const prices = {
            'Bitcoin': 40000,
            'Ethereum': 2500,
            'Ripple': 0.5,
            'Thether': 1,
            'BNB': 300,
            'Solana': 35,
            'XRP': 0.5,
            'Cardano': 1.5,
            'Avalanche': 30
        };
        return prices[crypto] || 0;
    }
});



function closeDetails() {
    var detailsBox = document.getElementById('detailsBox');
   
    portfolio.style.display = 'none';
    var blurOverlay = document.querySelector('.blur-background');

    blurOverlay.style.display = 'none';
    togglePortfolioBtn.innerText = 'Show Portfolio';
}
