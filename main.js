const isDev = false
const notDev = !isDev
const homeTab = document.getElementById('homeTab')
const holidaysTab = document.getElementById('holidaysTab')
const settingsTab = document.getElementById('settingsTab')
const home = document.getElementById('home')
const holidays = document.getElementById('holidays')
const settings = document.getElementById('settings')
const sectionsSettings = document.getElementById('sectionsSettings')
const settingsMenu = document.getElementById('settingsMenu')
const backSections = document.getElementById('backSections')

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

// sectionsButton.addEventListener('click', () => {
//   sectionsSettings.style.display = 'block'
//   settingsMenu.style.display = 'none'
//   backSections.addEventListener('click', () => {
//     sectionsSettings.style.display = 'none'
//     settingsMenu.style.display = 'block'
//   })
// })

// section.addEventListener('click', () => {
//   section.style.display = 'none';
//   theme.style.display = 'none';
//   sectionsettings.style.display = 'block';
//   themesettings.style.display = 'none';
// })

// theme.addEventListener('click', () => {
//   section.style.display = 'none';
//   theme.style.display = 'none';
//   sectionsettings.style.display = 'none';
//   themesettings.style.display = 'block';
// })

// document.getElementById('sectionsettings').addEventListener('click', () => {
//   section.style.display = 'block';
//   theme.style.display = 'block';
//   sectionsettings.style.display = 'none';
//   themesettings.style.display = 'none';
// })

// document.getElementById('themesettings').addEventListener('click', () => {
//   section.style.display = 'block';
//   theme.style.display = 'block';
//   sectionsettings.style.display = 'none';
//   themesettings.style.display = 'none';
// })

const themeDropdown = document.querySelector('#themeButton select')
function readThemeDropdown () {
  if (themeDropdown.value === 'default') {
    localStorage.setItem('theme', 'default')
  } else if (themeDropdown.value === 'light') {
    localStorage.setItem('theme', 'light')
  } else if (themeDropdown.value === 'dark') {
    localStorage.setItem('theme', 'dark')
  }
  changeTheme()
}

function changeTheme () {
  if (localStorage.getItem('theme') === 'default' || !localStorage.getItem('theme')) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelector('body').classList.add('dark')
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      e.matches ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
    })
  } else if (localStorage.getItem('theme') === 'dark') {
    document.querySelector('body').classList.add('dark')
  } else if (localStorage.getItem('theme') === 'light') {
    document.querySelector('body').classList.remove('dark')
  }
}
changeTheme()

if (notDev) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker
        .register('/sw.js')
        .then(res => console.log('INFO:', res))
        .catch(err => console.error('ERROR:', err))
    })
  }
}
