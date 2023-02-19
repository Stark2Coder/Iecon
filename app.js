const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

const info = {
    name: 'Iecon',
    logo: 'https://cdn.discordapp.com/attachments/1076248256608223354/1076478586418122792/149F7C69-DC10-4356-B298-6F7D3D33FF63.gif'
}

const siteVariabls = {
    info: info
}




//games start
const fortnite = {
    gameName: 'Fortnite',
    description: 'Fortnite هي لعبة فيديو عبر الإنترنت تم تطويرها بواسطة Epic Games وتم إصدارها في عام 2017. وهي متوفرة في ثلاثة إصدارات مختلفة لوضع اللعبة والتي تشترك في نفس طريقة اللعب العامة ومحرك اللعبة: Fortnite ...',
    downloaLink: '',
    image: 'https://ftw.usatoday.com/wp-content/uploads/sites/90/2022/04/Fortnite-Chapter-3-Season-2-The-Resistance.jpg?w=1000&h=600&crop=1'
}


const cod = {
    gameName: 'COD',
    description: 'Call of Duty هو امتياز لعبة فيديو مطلق النار من منظور شخص أول تنشره Activision. ابتداءً من عام 2003 ، ركزت أولاً على الألعاب التي تدور أحداثها في الحرب العالمية الثانية. بمرور الوقت ، شهدت السلسلة ألعابًا تدور أحداثها في خضم الحرب الباردة والعوالم المستقبلية والعصر الحديث.',
    downloaLink: '',
    image: 'https://www.gamebyte.com/wp-content/uploads/2022/05/29a04fee-call-of-duty-modern-warfare-2-price.jpg'
}





const games = {
    info: info,
    fortnite: fortnite,
    cod: cod
}
//games end




app.get('/', (req, res) => {
    res.render('index', siteVariabls)
})

app.get('/our-games', (req, res) => {
    res.render('pages/our-games', games)
})

app.get('/contact', (req, res) => {
    res.render('pages/contact', siteVariabls)
})


const port = 3000
app.listen(port, () => {
    console.log(`Server listen at ${port} Boss`)
})