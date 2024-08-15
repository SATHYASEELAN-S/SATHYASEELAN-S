
const toggle = document.getElementById('toggle');
toggle.checked = true; 
document.body.classList.toggle("dark-theme");  

toggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.toggle("dark-theme");  
    } else
    {
        document.body.classList.toggle("dark-theme"); 
    }

    
});