const Nightmare = require("nightmare")
const nightmare = Nightmare({ show: true, openDevTools: { mode: 'detach' } })

nightmare
	.goto('https://sg.finance.yahoo.com/crypto/')
	.type('#yfin-usr-qry', 'tsla')
	.click('.finsrch-btn')
	.wait('#result-quotes-0')
	.evaluate((text) => typeof text)
	.end()
	.then(console.log)
	.catch(error => {
		console.error('Search failed:', error)
	})

