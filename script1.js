

function showDetails(coinName) {
    var detailsBox = document.getElementById('detailsBox');
    var detailsContent = document.getElementById('detailsContent');
    
    var blurOverlay = document.querySelector('.blur-background');

    // Show the blur overlay
    blurOverlay.style.display = 'block';
    
    var bitcoinDetails = {
        name: "Bitcoin",
        price: "$19,219.12",
        volume: "24,211,591,836",
        marketCapChange: "-1.68%",
        hourChange: "0.21%",
        dayChange: "-1.53%",
        weekChange: "0.84%",
        img: "./assets/images/coin-1.svg",
        graph: "images/grp2.mp4",
    };
    
    var ethereumDetails = {
        name: "Ethereum",
        price: "$1,303.94",
        volume: "8,955,889,680",
        marketCapChange: "-1.49%",
        hourChange: "0.47%",
        dayChange: "-1.55%",
        weekChange: "1.88%",
        img: "./assets/images/coin-2.svg",
        graph: "images/grp2.mp4",
    };
    
    var tetherDetails = {
        name: "Tether",
        price: "$1.00",
        volume: "75,407,235,472",
        marketCapChange: "0.02%",
        hourChange: "-0.01%",
        dayChange: "0.03%",
        weekChange: "0.01%",
        img: "./assets/images/coin-3.svg",
        graph: "images/grp2.mp4",
    };
    
    var bnbDetails = {
        name: "BNB",
        price: "$308.65",
        volume: "2,577,261,372",
        marketCapChange: "-1.09%",
        hourChange: "-0.13%",
        dayChange: "-0.47%",
        weekChange: "4.05%",
        img: "./assets/images/coin-4.svg",
        graph: "images/grp2.mp4",
    };
    
    var solanaDetails = {
        name: "Solana",
        price: "$40.78",
        volume: "2,122,873,990",
        marketCapChange: "-0.96%",
        hourChange: "0.35%",
        dayChange: "-0.44%",
        weekChange: "14.09%",
        img: "./assets/images/coin-5.svg",
        graph: "images/grp2.mp4",
    };
    
    var xrpDetails = {
        name: "XRP",
        price: "$1.01",
        volume: "4,464,787,424",
        marketCapChange: "-1.37%",
        hourChange: "0.04%",
        dayChange: "-0.60%",
        weekChange: "3.65%",
        img: "./assets/images/coin-6.svg",
        graph: "images/grp2.mp4",
    };
    
    var cardanoDetails = {
        name: "Cardano",
        price: "$1.67",
        volume: "2,603,502,891",
        marketCapChange: "-1.14%",
        hourChange: "0.10%",
        dayChange: "-0.60%",
        weekChange: "1.90%",
        img: "./assets/images/coin-7.svg",
        graph: "images/grp2.mp4",
    };
    
    var avalancheDetails = {
        name: "Avalanche",
        price: "$37.69",
        volume: "655,408,261",
        marketCapChange: "-0.46%",
        hourChange: "0.43%",
        dayChange: "-0.28%",
        weekChange: "20.25%",
        img: "./assets/images/coin-8.svg",
        graph: "images/grp2.mp4",
    };
    

    
    if (coinName === 'bitcoin') {
        displayCoinDetails(bitcoinDetails);
    } else if (coinName === 'ethereum') {
        displayCoinDetails(ethereumDetails);
    }else if (coinName === 'tether') {
        displayCoinDetails(tetherDetails);
    }else if (coinName === 'bnb') {
        displayCoinDetails(bnbDetailsDetails);
    }else if (coinName === 'solana') {
        displayCoinDetails(solanaDetails);
    }else if (coinName === 'xrp') {
        displayCoinDetails(xrpDetails);
    }else if (coinName === 'cardano') {
        displayCoinDetails(cardanoDetails);
    }else if (coinName === 'avalanche') {
        displayCoinDetails(avalancheDetails);
    }
    
    // Show the details box
    detailsBox.style.display = 'block';
}

function displayCoinDetails(details) {
    var detailsContent = document.getElementById('detailsContent');
   
  
    var html = `
    <div  class="detail-logo"style="display: flex; align-items: center; gap: 10px;">
      <img src="${details.img}" width="80" height="80" alt="${details.name}">
      <h1 style="margin: 0;">${details.name}</h1>
    </div>
    <div class=" box-div" style="display: flex; flex-direction: column; align-items: flex-start; padding: 10px; border: 1px solid #ccc; width: max-content;">
    
    <div id="pricebox" >
      <h3 style="margin: 0;">${details.price}</h3>
    </div>
    <br>
    <div style="margin-top: 20px;">
      <h3 style="margin: 10px 0;"><span class="Graph-ques">Total Volume:</span> ${details.volume}</h4>
      <h3 style="margin: 10px 0;"><span class="Graph-ques">Market Cap Change:</span>  ${details.marketCapChange}</h4>
      <h3 style="margin: 10px 0;"><span class="Graph-ques">1 Hour Change:</span>  ${details.hourChange}</h4>
      <h3 style="margin: 10px 0;"><span class="Graph-ques">24 Hour Change:</span> ${details.dayChange}</h4>
      <h3 style="margin: 10px 0;"><span class="Graph-ques">7 Day Change:</span>  ${details.weekChange}</h4>
    </div>
  </div>
  

    `;
    var html1 = `
      
        <video id="video" width="520" height="540" autoplay loop>
  <source src="${details.graph}" type="video/mp4">
</video>
    `;
    
    detailsContent.innerHTML = html;
    grpdiv.innerHTML = html1;
}

function closeDetails() {
    var detailsBox = document.getElementById('detailsBox');
   
    detailsBox.style.display = 'none';
    var blurOverlay = document.querySelector('.blur-background');

    blurOverlay.style.display = 'none';
}
