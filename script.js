
document.getElementById('add-data-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('add_data.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const responseMessage = document.getElementById('responseMessage');
        if (data.success) {
            responseMessage.textContent = data.message;
            responseMessage.style.color = 'green';
            loadData();
        } else {
            responseMessage.textContent = data.message;
            responseMessage.style.color = 'red';
        }
        
        this.reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

