let day = "day"
let night = "night"

let dead = "dead"
let alive = "alive"






class gameClass{
	constructor(id = "", host = "", players = [], roles = [], state = "login", dayNum = 0, dayCicle = night){
		//Cuatro numeros
		this.id = id
		this.host = host
		//lista de objetos
		this.players = players
		//roles con su description del juego
		this.roles = roles
		//diccionario de jugadores con los roles, si no se conoce su rol sera "desconocido"
		this.state = state
		//# dia del juego
		this.dayNum = dayNum
		//estado del ciclo diurno dia o noche
		this.dayCicle = dayCicle
	}
	login(id, host){
		this.id = id
		this.host = host
		this.state = "lobby"

	}
	logout(){
		this.id = ""
		this.host = ""
		this.state = "login"
	}
	addPlayers(player){
		this.players.push(player)
	}
	deletePlayers(player){
		this.players.splice(this.players.IndexOf(player),1)
	}
	addRoles(rol){
		this.roles.push(rol)
	}
	deleteRoles(rol){
		this.roles.splice(this.roles.IndexOf(rol),1)
	}
	nextDayNum(){
		this.dayNum ++
	}
	nextDayCicle(){
		if(this.dayCicle == day){
			this.dayCicle = night
		}else{
			this.dayCicle = day
		}
	}
	updateState(state){
		this.state = state
	}
	detectWiners(){
		//if theres a tanner and if its death by the villagers he wins
		// if the number of wolf and villagers alive are alive then wolves win
		//if there are no wolf alive villagers win

	}
}

//-----------------------------------------------------------------------------------------
//											PLAYER
//------------------------------------------------------------------------------------------

class Player{
	constructor(playerName, state = alive, rolName, description,vVote = "No one"){
		this.playerName = playerName
		//vivo o muerto
		this.state = state
		this.rolName = rolName
		this.description = description
		this.vVote = vVote
	}
	updateState(state){
		this.state = state
	}
	villagerVote(playerName){
		vVote =  playerName
	}
}

//-----------------------------------------------------------------------------------------
//											MODERATOR
//------------------------------------------------------------------------------------------

class host extends Player{
	constructor(playerName,state) {
		let rolName = "Moderator"
		let description = "Its in charge of the game, he sees it all and knows it all."
		super(playerName,state,rolName,description)
		
	}
	
	updateState(state){super.updateState(state)}

	changeTimer(time){
		//change the time on the timer
	}
	startTimer(){
		//starts a timer only if timer is > 0
	}
	stopTimer(){
		//starts a timer only 
	}
	resetTimer(){
		//starts a timer only if timer is > 0
	}
	startVotes(){
		//starts the villager votes
	}
	stopVotes(){
		//stop villager votes and return the results 
	}
	startNight(){
		//changes the game state to night only if its day
	}
	startDay(){
		//changes the game state to day only if its night
	}
	kill(playerName, by){
		//kills a player by changing his state to dead
		//and the rest of the players are notified only if its alive
	}
	revive(playerName){
		//revive a player by changing his state to alive
		//and the rest of the players are notified only if its dead
	}
}

//-----------------------------------------------------------------------------------------
//											VILLAGER
//------------------------------------------------------------------------------------------

class villager extends Player{
	constructor(playerName,state) {
		let rolName = "Villager"
		let description = ""
		super(playerName,state,rolName,description,vVote)
	}
	
	updateState(state){super.updateState(state)}
	villagerVote(playerName){super.villagerVote(playerName)}
}

//-----------------------------------------------------------------------------------------
//											WOLF
//------------------------------------------------------------------------------------------

class wolf extends Player{
	constructor(playerName,state) {
		let rolName = "Wolf"
		let description = ""
		super(playerName,state,rolName,description,vVote)
	}
	
	updateState(state){super.updateState(state)}
	villagerVote(playerName){super.villagerVote(playerName)}
	wolfVote(playerName){
		//votan los lobos para saber a quien matar used once per night and not dead
	}
}

//-----------------------------------------------------------------------------------------
//											SEER
//------------------------------------------------------------------------------------------

class seer extends Player{
	constructor(playerName,state) {
		let rolName = "Seer"
		let description = ""
		super(playerName,state,rolName,description,vVote)
	}
	
	updateState(state){super.updateState(state)}
	villagerVote(playerName){super.villagerVote(playerName)}
	getRol(playerName){
		if(game.players.find(element => element == playerName).rolName=="Wolf"){
			return true
		}else{
			return false
		}
	}
}

//-----------------------------------------------------------------------------------------
//											MISTIC SEER
//------------------------------------------------------------------------------------------

class misticSeer extends Player{
	constructor(playerName,state) {
		let rolName = "Mistic Seer"
		let description = ""
		super(playerName,state,rolName,description,vVote)
	}
	
	updateState(state){super.updateState(state)}
	villagerVote(playerName){super.villagerVote(playerName)}

	getRol(playerName){
		return game.players.find(element => element == playerName).rolName
	}
}

//-----------------------------------------------------------------------------------------
//											TANNER
//------------------------------------------------------------------------------------------

class tanner extends Player{
	constructor(playerName,state) {
		let rolName = "Tanner"
		let description = ""
		super(playerName,state,rolName,description,vVote)
	}
	
	updateState(state){super.updateState(state)}
	villagerVote(playerName){super.villagerVote(playerName)}
}

//-----------------------------------------------------------------------------------------
//											DOCTOR
//------------------------------------------------------------------------------------------

class doctor extends Player{
	constructor(playerName,state) {
		let rolName = "Doctor"
		let description = ""
		super(playerName,state,rolName,description,vVote)

		this.playerRevived = playerRevived
	}

	revive(playerName){
		this.playerRevived = playerName
	}
	
	updateState(state){super.updateState(state)}
	villagerVote(playerName){super.villagerVote(playerName)}

	revive(playerName){
		this.playerRevived = playerName
	}
}

//-----------------------------------------------------------------------------------------
//											PROTECTOR
//------------------------------------------------------------------------------------------

class protector extends Player{
	constructor(playerName,state, playerProtected) {
		let rolName = "Protector"
		let description = ""
		super(playerName,state,rolName,description,vVote)

		this.playerProtected = playerProtected
	}
	
	updateState(state){super.updateState(state)}
	villagerVote(playerName){super.villagerVote(playerName)}

	protect(playerName){
		this.playerProtected = playerName
	}
}

//-----------------------------------------------------------------------------------------
//											WITCH
//------------------------------------------------------------------------------------------

class witch extends Player{
	constructor(playerName,state,playerKilled,playerRevived) {
		let rolName = "Moderator"
		let description = ""
		super(playerName,state,rolName,description,vVote)

		this.playerKilled = playerKilled
		this.playerRevived = playerRevived
	}
	
	updateState(state){super.updateState(state)}
	villagerVote(playerName){super.villagerVote(playerName)}
	
	Kill(playerName){
		this.playerKilled = playerName
	}

	revive(playerName){
		this.playerRevived = playerName
	}
}
