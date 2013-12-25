window.onload = function()
{
	placeElements();
};

//Place the elmemts into right position
function placeElements()
{
	// var puzzlearea = $("puzzlearea");
	var puzzlepieces = $$("#puzzlearea div");
	for (var i = 0; i < puzzlepieces.length; i++) {
		puzzlepieces[i].className = "puzzlepiece";
		setPositionOfSinglePiece(puzzlepieces[i], i);
	}
}

//Place a singl
var size = 4;
function setPositionOfSinglePiece(piece, index)
{
	//index -> (x, y)
	var x = Math.floor(index / size);
	var y = index % size;

    var fromTheTopEdge = x * (400 / size);
    var fromTheLeftEdge = y * (400 / size);
    piece.style.top = fromTheTopEdge + "px";
    piece.style.left = fromTheLeftEdge + "px";
}