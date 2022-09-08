
const $ = selector => document.querySelector(selector)

const $button = $('button')
const $count = $('#count')

$button.addEventListener('click', () => {
  const count = +$count.innerText
  $count.innerText = count + 1
})

// Created under preload.js
window.electronAPI.onUpdateTheme((event, theme) => {
  const root = document.documentElement
  console.log({ theme })

  root.style.setProperty('--scheme', theme)
})
