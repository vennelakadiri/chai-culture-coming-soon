document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscribe-form');
    const button = form.querySelector('button');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
  
        button.innerText = "Processing...";
        button.style.opacity = "0.7";

        setTimeout(() => {
            button.innerText = "You're on the list!";
            button.style.background = "#fff";
            button.style.color = "#250101";
            form.reset();
        }, 1500);
    });
});
