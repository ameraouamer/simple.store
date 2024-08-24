document.addEventListener("DOMContentLoaded", function() {
    const cardData = JSON.parse(localStorage.getItem("userAddedCards")) || [];
    const cardList = document.querySelector(".card-list");

    // Populate card list
    function populateCardList(cards) {
        cardList.innerHTML = ''; // Clear previous cards
        cards.forEach(card => {
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

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function() {
                deleteCard(card); // Call function to delete the card
            });

            cardItem.appendChild(cardImage);
            cardItem.appendChild(cardTitle);
            cardItem.appendChild(cardDescription);
            cardItem.appendChild(deleteButton); // Add delete button to the card

            cardList.appendChild(cardItem);
        });
    }

    populateCardList(cardData);

    const addCardForm = document.getElementById("myform");

    // Add card when form is submitted
    addCardForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const imageURL = document.getElementById("imageURL").value;
        const cardName = document.getElementById("cardName").value;
        const desription = document.getElementById("desription").value;

        if (imageURL.trim() === '' || cardName.trim() === '') {
            alert("Please provide both the card image URL and name.");
            return;
        }

        const newCard = {
            title: cardName,
            description: desription,
            imageSrc: imageURL
        };

        cardData.push(newCard); // Add the new card to the cardData array
        localStorage.setItem("userAddedCards", JSON.stringify(cardData)); // Save the updated cards array to localStorage

        populateCardList(cardData); // Update the card list on the page with the new card

        alert("Card added successfully!");

        addCardForm.reset(); // Clear the form
    });

    // Function to delete a card
    function deleteCard(card) {
        const index = cardData.findIndex(item => item.title === card.title && item.description === card.description && item.imageSrc === card.imageSrc);
        if (index !== -1) {
            cardData.splice(index, 1); // Remove the card from the cardData array
            localStorage.setItem("userAddedCards", JSON.stringify(cardData)); // Update localStorage
            populateCardList(cardData); // Update the card list on the page
            alert("Card deleted successfully!");
        }
    }
});
deleteButton.textContent = "Delete";
deleteButton.classList.add("delete-button");
deleteButton.addEventListener("click", function() {
    deleteCard(card); // Call function to delete the card
});
 // Get the element to scroll to (in this case, the #result section)
 const addCardForm = document.getElementById(".card-list");

 // Check if the element exists
 if (addCardForm) {
     // Scroll to the result section
     addCardForm.scrollIntoView({
         behavior: "smooth", // Optional: Use smooth scrolling
         block: "start"      // Optional: Scroll to the top of the element
     });
 }
 
