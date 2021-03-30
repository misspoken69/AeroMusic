const express = require('express');
const server = express();



server.all('/', (req, res)=>{
	res.send('Aero stats: \nonline')
})
function keepAlive(){
	server.listen(3000, ()=>{console.log("Server is ready!")
	});
}
module.exports = keepAlive