
var sliderImages = document.querySelectorAll('.slide');
//console.log(sliderImages);
let arrowRight = document.querySelector('#right-arrow');
let arrowLeft = document.querySelector('#left-arrow');
var curr  = 0;

//clear all images
function reset() {
	for(let i=0;i<sliderImages.length;i++)
	{
		sliderImages[i].style.display = 'none';
	}
}

function startSlide()
{
	reset();
	sliderImages[0].style.display = 'block'; //initializes the slider
}

startSlide();


var leftArrowClick = arrowLeft.addEventListener('click',function() 
{
	reset();
	if(curr==0)
	{
		curr=sliderImages.length;
	}

	sliderImages[curr-1].style.display = 'block';
	curr--;
});


var rightArrowClick = arrowRight.addEventListener('click',function() 
{
	reset();
	if(curr == sliderImages.length-1)
	{
		curr=-1;
	}

	sliderImages[curr+1].style.display = 'block';
	curr++;
});





