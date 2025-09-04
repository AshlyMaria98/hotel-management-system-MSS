function submitFeedback() {
    const rating = document.querySelector('input[name="rate"]:checked');
    const comments = document.getElementById('comments').value;

    if (!rating) {
        alert("Please select a rating!");
        return;
    }

    const ratingValue = rating.value;
    document.getElementById('output').innerText = 
        `Thank you for your feedback!\nRating: ${ratingValue}\nComments: ${comments}`;
    
    // Clear form
    document.getElementById('comments').value = '';
    document.querySelectorAll('input[name="rate"]').forEach(input => input.checked = false);
}