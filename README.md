<h1 align="center">Hi 👋, we are Compass Soft</h1>
<h3 align="center">Compass Notify</h3>

- Compass Soft Notify **For FiveM**

- Hello, this is our third script we shared.

- 👨‍💻 Discord Invite Link [https://discord.gg/zxAMWdFntP](https://discord.gg/zxAMWdFntP)

- **Features**
- 4 type for notify ( natural, info, succes, error)
- Fontawesome support.
- Send icon in event.
- All resolution

- Installation **Add the cs-notify folder to your FiveM resources directory and server.cfg add "ensure cs-notify"**


**If you need add new type**
1- Add and edit style.css
.yourtypename {
    background: linear-gradient(255deg, #66676800 -15%, #1a1a1a 95%);
    color: white;
}

.yourtypename .compassTextBody .compassTitle {
    margin-top: 0.5rem;
    color: #ebc829;
    font-weight: 600;
}

2- exports['cs-notify']:Notify('SUCCESS', 'Lorem Ipsum.', 5000, 'fa-solid fa-check', 'yourtypename')

- **Clientside**
exports['cs-notify']:Notify('title', 'message', time(int), 'icon', 'type')

- **Serverside**
TriggerClientEvent('cs-notify:Notify', source, 'title', 'message', time(int), 'icon', 'type')
**Icon**
https://fontawesome.com/search?m=free&s=solid%2Cbrands

- **Preview**
https://streamable.com/tr2utq


<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://discord.gg/zxAMWdFntP" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" alt="zxAMWdFntP" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://dotnet.microsoft.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

