var scroller = document.getElementsByClassName("scrollPoint");
for(var i=0;i<scroller.length;i++)
{
	scroller[i].addEventListener("click",function()
	{
		for(var i=0;i<scroller.length;i++)
		{
			scroller[i].classList.remove("active");
		}
		this.classList.add("active");
	});
}