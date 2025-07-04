// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const SystemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const icon = document.querySelector('#Moon');

    if(SystemPrefersDark) {
        document.documentElement.classList.add('dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
    else {
        document.documentElement.classList.remove('dark');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
})

function DarkTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const icon = document.querySelector('#Moon');
    
    if(isDark) {
        document.documentElement.classList.remove('dark');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
    else {
        document.documentElement.classList.add('dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
}


// Terminal Content functionality
const texts = [
    "git clone https://github.com/Jatin915/Portfolio",
    "https://in.linkedin.com/",
    "https://instagram.com/"
  ];

  const target = document.querySelector("#typing-text");
  let i = 0;
  let char = 0;

function type() {
    document.querySelector("#terminal-blinking-cursor").classList.remove('blinking-cursor');
    if(i == 3)
        i=0;

    if(char < texts[i].length){
        target.textContent += texts[i].charAt(char);
        char++;
        setTimeout(type, 100);
    }
    else{
        document.querySelector("#terminal-blinking-cursor").classList.add('blinking-cursor');
        setTimeout(() => {
            erase();
        }, 3000);
    }
}

function erase() {
    document.querySelector("#terminal-blinking-cursor").classList.remove('blinking-cursor');
    if(char > 0){
        target.textContent = target.textContent.slice(0, char-1);
        char--;
        setTimeout(erase, 50);
    }
    else{
        i++;
        document.querySelector("#terminal-blinking-cursor").classList.add('blinking-cursor');
        setTimeout(type, 2000);
    }
}
document.addEventListener('DOMContentLoaded', type);


// Mobile Menu Toggle Functionality
const menu = document.querySelector('#menu-container');
const Links = document.querySelector('#menu-container ul');

function menuToggle() {
    menu.style.transform = 'translateX(0vw)';
}

function menuClose() {
    menu.style.transform = 'translateX(100vw)';
}
Links.addEventListener("click", menuClose);