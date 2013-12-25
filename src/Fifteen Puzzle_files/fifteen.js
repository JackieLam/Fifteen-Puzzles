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
		setBackgroundForSinglePiece(puzzlepieces[i], i);
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

//Set background images of the pieces
function setBackgroundForSinglePiece(piece, index)
{
	var x = Math.floor(index / size);
	var y = index % size;
    var fromTheRightEdge = 400 - x * (400 / size);
    var fromTheBottomEdge = 400 - y * (400 / size);
    piece.style.backgroundPosition = fromTheLeftEdge + "px " + fromTheTopEdge + "px";
}