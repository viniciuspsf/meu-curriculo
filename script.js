
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

function loadData() {
    const cacheBuster = '?t=' + new Date().getTime();

    fetch('data.json' + cacheBuster)
        .then(response => {
            if (!response.ok) {
                throw new Error('Arquivo JSON não encontrado ou vazio ainda.');
            }
            return response.json();
        })
        .then(data => {
            const skillList = document.getElementById('skill-list');
            const experienceList = document.getElementById('experience-list');

            skillList.innerHTML = '';
            experienceList.innerHTML = '';

            if (data.skills && Array.isArray(data.skills)) {
                data.skills.forEach(skill => {
                    const li = document.createElement('li');
                    li.textContent = skill;
                    skillList.appendChild(li);
                });
            }

            if (data.experiences && Array.isArray(data.experiences)) {
                data.experiences.forEach(exp => {
                    const li = document.createElement('li');
                    li.textContent = exp;
                    experienceList.appendChild(li);
                });
            }
        })
        .catch(error => console.warn('Aviso ao carregar dados:', error.message));
}
 
window.onload = loadData;

