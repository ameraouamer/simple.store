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

        const likeCount = document.createElement("span");
        likeCount.classList.add("like-count");
        likeCount.textContent = `${getLikes(index)} like(s)`; // Get likes from localStorage

        cardItem.appendChild(likeCount);

        cardItem.addEventListener("click", function() {
            toggleLike(this, index);
        });

        // Create and append comment section
        const commentSection = document.createElement("div");
        commentSection.classList.add("comment-section");

        const commentInput = document.createElement("textarea");
        commentInput.classList.add("comment-input");
        commentInput.placeholder = "Write a comment...";

        const commentList = document.createElement("div");
        commentList.classList.add("comment-list");

        commentInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                const commentText = commentInput.value.trim();
                if (commentText) {
                    addComment(commentList, commentText, index);
                    commentInput.value = ""; // Clear the input field
                }
            }
        });

        // Load comments from localStorage
        loadComments(commentList, index);

        commentSection.appendChild(commentInput);
        commentSection.appendChild(commentList);

        cardItem.appendChild(commentSection);

        cardList.appendChild(cardItem);
    });

    // Function to toggle like
    function toggleLike(cardItem, index) {
        clickCounts[index] = 1 - clickCounts[index]; // Toggle between 0 and 1
        localStorage.setItem(`like${index}`, clickCounts[index]); // Save like status to localStorage
        cardItem.querySelector(".like-count").textContent = `${getLikes(index)} like(s)`; // Update like count on UI
    }

    // Function to get likes from localStorage
    function getLikes(index) {
        return parseInt(localStorage.getItem(`like${index}`)) || 0; 
    }

  );

        comment.appendChild(commentTextElem);
        comment.appendChild(deleteButton);
        commentList.appendChild(comment);

        let comments = JSON.parse(localStorage.getItem(`comments${index}`)) || [];
        comments.push(commentText);
        localStorage.setItem(`comments${index}`, JSON.stringify(comments));
    }

    // Function to load comments from localStorage
    function loadComments(commentList, index) {
        let comments = JSON.parse(localStorage.getItem(`comments${index}`)) || [];
        comments.forEach(commentText => {
            const comment = document.createElement("div");
            comment.classList.add("comment");

            const commentTextElem = document.createElement("p");
            commentTextElem.textContent = commentText;

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-button");
            deleteButton.textContent = "✖"; 

            deleteButton.addEventListener("click", function() {
                deleteComment(comment, index, commentText);
            });

            comment.appendChild(commentTextElem);
            comment.appendChild(deleteButton);
            commentList.appendChild(comment);
        });
    }

    // Function to delete a comment and remove from localStorage
    function deleteComment(commentElem, index, commentText) {
        commentElem.remove();

        let comments = JSON.parse(localStorage.getItem(`comments${index}`)) || [];
        comments = comments.filter(comment => comment !== commentText);
        localStorage.setItem(`comments${index}`, JSON.stringify(comments));
    }

    const toggleSidebarButton = document.getElementById("toggle-sidebar");
    const sidebar = document.querySelector(".sidebar");

    // Toggle sidebar functionality
    toggleSidebarButton.addEventListener("click", function() {
        sidebar.classList.toggle("show");
    });
});
