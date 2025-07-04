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
