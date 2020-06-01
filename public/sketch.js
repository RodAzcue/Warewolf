
let cnv 
var socket

let game
let gui
let name
let id
let lobby
let login

let mousePosition

let hosts = []

let testList

function windowResized(){
	cnv = new Size(windowWidth, windowHeight - 4, windowWidth/200)
	resizeCanvas(cnv.base, cnv.altura)
	setupLogin()
	setupLobby()
	gui = new gameGui(login,lobby)
}




function setup() {
	cnv = new Size(windowWidth,windowHeight - 4, windowWidth/200)
	createCanvas(cnv.base, cnv.altura);

	socket = io.connect('https://azcue.herokuapp.com')
	//socket = io.connect('http://localhost:3000')
	socket.on("host", recieveHost)
	socket.on("join", recieveJoin)
	socket.on("game", recieveGame)
	socket.on("player", recievePlayer)

	
	
	game = new gameClass()

	setupLogin()
	setupLobby()
	gui = new gameGui(login,lobby)
}
function draw() {
	background(204)
	mousePosition = new Position(mouseX, mouseY)
	if(game.host == name.text && game.host != ""){
		sendHost()
	}
	gui.updateTexts(game.host,game.id)
	gui.updateLists(game.players)
 	gui.show(game.state)
}




function keyTyped() {
    gui.addText(game.state, key)
}
function keyPressed() {
	gui.delText(game.state, keyCode)
}
function mousePressed(){
	gui.updateGenre(game.state, true)
}
function mouseReleased(){
	gui.updateGenre(game.state, false)
}
function buttonPressed(button){
	if(id.text != "" && name.text != "" && id.text.length == 4){
		
		if(button.text == "Host"){
			if(!hosts.includes(id.text)){
				game.login(id.text,name.text)
				console.log("Hosting a game in: "+id.text)
				
			}
		}
		if(button.text == "Join"){
			if(hosts.includes(id.text)){
				sendJoin()
				console.log("Joining the game:" + id.text)
				
			}
		}
	}
}





function recieveHost(data){
	if(game.state == "login"){
		if(data.players.includes(name.text)){
			console.log("Joined succesfully to server: " + data.id)
			game.state = "lobby"
			game.id = data.id
			game.host = data.host
		}
		
		if(!hosts.includes(data.id)){
			hosts.push(data.id)
			console.log("Theres a game being hosted: "+ data.id)
		}
	}
}

function recieveJoin(data){
	if(game.host == name.text && game.host != ""){
		if(game.id == (data.id)){
			if(!game.players.includes(data.name)){
				game.players.push(data.name)
				console.log("A player joined: "+ data.name)

			}
		}
	}

}
function recievePlayer(data){
	if(game.host == name.text && game.host != ""){
		if(game.players.includes(data.name)){
			console.log("Recieve something from the player: "+ data.name+","+data)
		}
		
	}

}
function recieveGame(data){
	if(data.players.include(name.text)){
		game.players = data.players
		game.roles = data.roles
		game.state = data.state
		game.dayNum = data.dayNum
		game.dayCicle = data.dayCicle
	}

}
function sendHost(){
	var data = {
		id: game.id, 
		host: game.host, 
		players: game.players
	}
	socket.emit("host",data)
}
function sendJoin(){
	var data = {
		id: id.text,
		name: name.text
	}
	socket.emit("join",data)
}



