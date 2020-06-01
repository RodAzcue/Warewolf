function setupLobby(){
	

	lobby = new activity(
	"lobby",
	[
		new tag(new Position(cnv.base/3, cnv.altura/4), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("text","tag"), "Players"),
		new tag(new Position(cnv.base*0.77, cnv.altura/4), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("text","tag"), "Roles"),
		new tag(new Position(cnv.base/2, cnv.altura/6), new Size(cnv.base/7, cnv.base/15, cnv.por), new Genre("text","title"), "Lobby"),
		new tag(new Position(cnv.base/2, cnv.altura/4), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("text","tag"), "Host: "),
		new tag(new Position(cnv.base/2, cnv.altura/4), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("text","tag","left"), "","host"),
		new tag(new Position(cnv.base/2, cnv.altura/3), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("text","tag"), "ID: "),
		new tag(new Position(cnv.base/2, cnv.altura/3), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("text","tag","left"), "","id"),
	],
	[],
	[
	],
	[
		new list(new Position(cnv.base/4.9, cnv.altura/3), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("list"), "players")
	]
	)
}