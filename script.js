document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Set home section as active by default
    document.querySelector('.nav-link').classList.add('active');
    document.getElementById('home').classList.add('active');
    
    // Smooth scrolling and section activation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            
            navLinks.forEach(l => l.classList.remove('active'));
            
            
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(s => s.classList.remove('active'));
            
            // Show the target section
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
            
            // Smooth scroll 
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Download CV 
    document.getElementById('download-cv').addEventListener('click', function() {
        
        const link = document.createElement('a');
        link.href = 'sam_cv.pdf';
        link.download = 'sam_cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Button animation
        this.classList.add('downloading');
        setTimeout(() => {
            this.classList.remove('downloading');
        }, 1000);
    });
    
    // Profile picture error handling
    const profilePic = document.getElementById('profile-pic');
    profilePic.addEventListener('error', function() {
        this.src = 'https://via.placeholder.com/180';
        this.alt = 'Default profile picture';
    });
    
    // Highlight active section based on scroll position
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});