currentMood = 'light'
document.getElementById('mood-btn').addEventListener('click', function () {
    (currentMood == 'light') ? currentMood = 'dark' : currentMood = "light";
    (currentMood == 'light') ? document.getElementById('mood-btn').innerHTML = 'Dark Mode' : document.getElementById('mood-btn').innerHTML = 'Light Mode';
    (currentMood == 'light') ? localStorage.currentTheme = 'light' : localStorage.currentTheme = 'dark';
    document.documentElement.classList.toggle(
        "dark",
        localStorage.currentTheme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
})