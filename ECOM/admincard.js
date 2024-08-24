document.addEventListener("DOMContentLoaded", function() {
    const cardData = [
        
    ];

    const cardList = document.querySelector(".card-list");
    let clickCounts = Array(cardData.length).fill(0);

    // Populate card list
    cardData.forEach((card, index) => {
        const cardItem = document.createElement("div");
        cardItem.classList.add("card-item");

        const cardImage = document.createElement("img");
        cardImage.src = card.imageSrc;
        cardImage.alt = "Card Image";

        const cardTitle = document.createElement("span");
        cardTitle.classList.add("title");
        cardTitle.textContent = card.title;

        const cardDescription = document.createElement("h3");
        cardDescription.textContent = card.description;

        cardItem.appendChild(cardImage);
        cardItem.appendChild(cardTitle);
        cardItem.appendChild(cardDescription);

        cardItem.addEventListener("click", function() {
            toggleDelete(this, index);
        });

        cardList.appendChild(cardItem);
    });

    // Function to toggle delete
    function toggleDelete(cardItem, index) {
        clickCounts[index] = clickCounts[index] + 1; 

        if (clickCounts[index] >= 4) { 
            cardItem.remove(); 
        }
    }

    const toggleSidebarButton = document.getElementById("toggle-sidebar");
    const sidebar = document.querySelector(".sidebar");

    // Toggle sidebar functionality
    toggleSidebarButton.addEventListener("click", function() {
        sidebar.classList.toggle("show");
    });
});
