!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){timerId=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(timerId),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.5f5a9228.js.map
