function setupLogin(){
	name = new input(new Position(cnv.base/2, cnv.altura/2.5), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("input","unpressed","char"))
	id = new input(new Position(cnv.base/2, cnv.altura/2), new Size(cnv.base/15, cnv.base/30, cnv.por), new Genre("input","unpressed","int"))

	login = new activity(
	"login",
	[
		new tag(new Position(cnv.base/2, cnv.altura/2.5), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("text","tag"), "Name "),
		new tag(new Position(cnv.base/2, cnv.altura/2), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("text","tag"), "ID "),
		new tag(new Position(cnv.base/2, cnv.altura/6), new Size(cnv.base/7, cnv.base/15, cnv.por), new Genre("text","title"), "Warewolf")
	],
	[
		name,
		id
	],
	[
		new button(new Position(cnv.base/2 + cnv.por, cnv.altura/1.5), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("button","unpressed"), "Host"),
		new button(new Position(cnv.base/2 - cnv.base/7 - cnv.por, cnv.altura/1.5), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("button","unpressed"), "Join")
	],
	[]
	)
}


