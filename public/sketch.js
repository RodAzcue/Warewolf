let cnv 
var socket

let player
let game

let test

let title
let textName
let textID

let nameInput
let idInput
let hostButton
let joinButton

let mousePosition

let hosts = []







//[229, 229, 229], 	//white
//[204, 204, 204], 	//gray
//[102, 102, 102]		//Black
//[69,69,69] // even blacker




function windowResized(){
	cnv = new Size(windowWidth, windowHeight - 4, windowWidth/200)
	resizeCanvas(cnv.base, cnv.altura)
	updateInfo()	
}


function setup() {
	cnv = new Size(windowWidth,windowHeight - 4, windowWidth/200)
	createCanvas(cnv.base, cnv.altura);


	

	

	socket = io.connect('http://azcue.herokuapp.com')
	//socket = io.connect('http://localhost:3000')
	socket.on("host", recieveHost)
	socket.on("join", recieveJoin)
	socket.on("game", recieveGame)
	socket.on("player", recievePlayer)

	game = new gameClass()
  	create()
}


function recieveHost(data){
	if(game.state == "login"){
		if(data.players.includes(nameInput.text)){
			console.log("Joined succesfully to server: " + data.id)
			game.id = data.id
			game.host = data.host
			game.players = data.players
			game.roles = data.roles
			game.dayNum = data.dayNum
			game.dayCicle = data.dayCicle
			game.state = data.state
		}
		
		if(!hosts.includes(data.id)){
			hosts.push(data.id)
			console.log("Theres a game being hosted: "+ data.id)
		}
	}
}

function recieveJoin(data){
	if(game.host == nameInput.text && game.host != ""){
		if(game.id == (data.id)){
			if(!game.players.includes(data.name)){
				game.players.push(data.name)
				console.log("A player joined: "+ data.name)
			}
		}
	}

}
function recievePlayer(data){
	if(game.host == nameInput.text && game.host != ""){
		if(game.players.includes(data.name)){
			console.log("Recieve something from the player: "+ data.name+","+data)
		}
		
	}

}
function recieveGame(data){
	if(data.players.include(nameInput.text)){
		game.id = data.id
		game.host = data.host
		game.players = data.players
		game.roles = data.roles
		game.state = data.state
		game.dayNum = data.dayNum
		game.dayCicle = data.dayCicle
	}

}


function eventButtonPressed(){
	if(idInput.text != "" && nameInput.text != "" && idInput.text.length == 4){
		if(hostButton.genre.subtype == "pressed"){
			if(!hosts.includes(idInput.text)){
				game.login(idInput.text,nameInput.text)
				console.log("Hosting a game in: "+idInput.text)
			}
		}
		if(joinButton.genre.subtype == "pressed"){
			if(hosts.includes(idInput.text)){
				sendJoin()
				console.log("Joining the game:" + idInput.text)
			}
		}
	}
}
function sendHost(){
	var data = {
	id: game.id, 
	host: game.host, 
	players: game.players, 
	roles: game.roles, 
	state: game.state, 
	dayNum: game.dayNum, 
	dayCicle: game.dayCicle
	}
	socket.emit("host",data)
}
function sendJoin(){
	var data = {
		id: idInput.text,
		name: nameInput.text
	}
	socket.emit("join",data)
}


function draw() {
	background(204)
	mousePosition = new Position(mouseX, mouseY)
	if(game.host == nameInput.text && game.host != ""){
		sendHost()
	}
	
	//textFont('bloodcrowc');
 	//showLogin()
 	show()
 	//updateInfo()

}

function keyTyped() {
    addText()
}
function keyPressed() {
	delText()
}
function mousePressed(){
	updateGenre(true)
}
function mouseReleased(){
	updateGenre(false)
}

