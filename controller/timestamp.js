 function TimeStamp(req, res, next) {
	let date = req?.params?.date
	 let time

	 if(date == undefined){
		 time = new Date()
	 }
	else if( date.match(/^\d+$/) ){
		time = new Date(Number(date))
	}
	else if(Date.parse(date)){
		time = new Date(date)
	}
	else{
		res.json({ error : "Invalid Date" })
		next()
		return
	}
				  
	console.log("after", time)
	const unix = time.getTime()
	const utc = time.toUTCString()
	res.json({ unix, utc})
	next()
}

module.exports = TimeStamp