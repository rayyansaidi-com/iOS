const isDev = true;
const notDev = !isDev;
const homeTab = document.getElementById('homeTab')
const holidaysTab = document.getElementById('holidaysTab')
const settingsTab = document.getElementById('settingsTab')
const home = document.getElementById('home')
const holidays = document.getElementById('holidays')
const settings = document.getElementById('settings')
const section = document.getElementById('section')
const theme = document.getElementById('theme')
const sectionsettings = document.getElementById('sectionsettings')
const themesettings = document.getElementById('themesettings')

homeTab.addEventListener('click', () => {
  homeTab.classList.add('active')
  holidaysTab.classList.remove('active')
  settingsTab.classList.remove('active')
  home.style.display = 'block'
  holidays.style.display = 'none'
  settings.style.display = 'none'
})

holidaysTab.addEventListener('click', () => {
  homeTab.classList.remove('active')
  holidaysTab.classList.add('active')
  settingsTab.classList.remove('active')
  home.style.display = 'none'
  holidays.style.display = 'block'
  settings.style.display = 'none'
})

settingsTab.addEventListener('click', () => {
  homeTab.classList.remove('active')
  holidaysTab.classList.remove('active')
  settingsTab.classList.add('active')
  home.style.display = 'none'
  holidays.style.display = 'none'
  settings.style.display = 'block'
})

section.addEventListener('click', () => {
  section.style.display = 'none';
  theme.style.display = 'none';
  sectionsettings.style.display = 'block';
  themesettings.style.display = 'none';
})

theme.addEventListener('click', () => {
  section.style.display = 'none';
  theme.style.display = 'none';
  sectionsettings.style.display = 'none';
  themesettings.style.display = 'block';
})

document.getElementById('sectionsettings').addEventListener('click', () => {
  section.style.display = 'block';
  theme.style.display = 'block';
  sectionsettings.style.display = 'none';
  themesettings.style.display = 'none';
})

document.getElementById('themesettings').addEventListener('click', () => {
  section.style.display = 'block';
  theme.style.display = 'block';
  sectionsettings.style.display = 'none';
  themesettings.style.display = 'none';
})

if (notDev) {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/sw.js")
        .then(res => console.log("INFO:", res))
        .catch(err => console.error("ERROR:", err))
    })
  }
}