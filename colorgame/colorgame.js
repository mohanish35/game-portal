var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init()
{
	setupModeButtons();
	reset();
	setupSquares();
}

function setupModeButtons()
{
	for(var i = 0; i < modeBtn.length; i++) 
	{
		modeBtn[i].addEventListener("click", function() 
		{
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");	
			this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}
function setupSquares()
{
	for(var i=0;i<colors.length;i++)
	{
		squares[i].addEventListener("click",function()
		{
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor)
			{
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = pickedColor;
				changeColor(pickedColor);
				messageDisplay.textContent = "Correct!";
			}
			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}

		});
	};
}

function reset() 
{
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++) 
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} 
		else 
		{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click",function()
{
	reset();
});

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var ar = [];
	for(var i=0;i<num;i++)
	{
		ar.push(randomColor());
	}
	return ar;
}

function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function randomColor()
{
	 var r = Math.floor(Math.random() * 256);
	 var g = Math.floor(Math.random() * 256);
	 var b = Math.floor(Math.random() * 256);
	 return "rgb("+r+", "+g+", "+b+")";
}