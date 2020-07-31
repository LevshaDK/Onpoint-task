var clientY_touch = 0; //Координат Y при тапе.
var clientY_move = 0; //Координат Y при движении.
var slide_height = 768; //Высота слайдаов
var slide_circle = 'circle1';
var slide = 1; //Номер слайда
var slide_max = 3;

document.getElementById('slide').addEventListener("touchstart", Touch);
document.getElementById('slide').addEventListener("touchmove", TouchMove);
document.getElementById('slide').addEventListener("touchend", TouchEnd);




function Touch(event){
	clientY_touch = event.changedTouches[0].clientY;
}

function TouchMove(event){
	clientY_move = event.changedTouches[0].clientY;
   	event.preventDefault();
    event.stopPropagation();

}

/*
function TouchEnd(event){
	if(clientY_move <= clientY_touch-20 && slide < slide_max){
		document.getElementById("circle"+slide+"").classList.remove('circle_active');
		slide += 1;
		window.scroll(0, ((slide_height*slide)-slide_height)); //Скрол до (Ширина слайда * Номер слайда)
		document.getElementById("circle"+slide+"").classList.add('circle_active');
	}else{
		window.scroll(0, ((slide_height*slide)-slide_height));
	}

	if(clientY_move >= clientY_touch+20 && slide > 1){
		document.getElementById("circle"+slide+"").classList.remove('circle_active');
		slide -= 1;
		window.scroll(0, ((slide_height*slide)-slide_height)); //Скрол до (Ширина слайда * Номер слайда)
		document.getElementById("circle"+slide+"").classList.add('circle_active');
	}else{
		window.scroll(0, ((slide_height*slide)-slide_height));
	}
	
}
*/


function TouchEnd(event){
	if(clientY_move <= clientY_touch-20 && slide < slide_max){
		document.getElementById("circle"+slide+"").classList.remove('circle_active');
		slide += 1;

	var i = 0;   
	function slideUp () { 
		setTimeout(function () {
			window.scrollBy(0, 76.8);
			i++;
			if(i<10){
				slideUp(); 
			}
		}, 20)
	}
	slideUp(); 
		document.getElementById("circle"+slide+"").classList.add('circle_active');
	}



	else if(clientY_move >= clientY_touch+20 && slide > 1){
		document.getElementById("circle"+slide+"").classList.remove('circle_active');
		slide -= 1;

	var i = 0;   
	function slideDown () { 
		setTimeout(function () {
			window.scrollBy(0, -76.8);
			i++;
			if(i<10){
				slideDown(); 
			}
		}, 20)
	}
	slideDown(); 
		document.getElementById("circle"+slide+"").classList.add('circle_active');
	}
}




window.addEventListener('scroll', function() {
	if(pageYOffset>0){
		document.getElementById('rectangle').hidden = true;
		document.getElementById('ellipse').hidden = true;
		document.getElementById('ellipse_text').hidden = true;
		document.getElementById('shape').hidden = true;
	}else{
		document.getElementById('rectangle').hidden = false;
		document.getElementById('ellipse').hidden = false;
		document.getElementById('ellipse_text').hidden = false;
		document.getElementById('shape').hidden = false;	
	}

/*
	if(pageYOffset>=0 && pageYOffset<slide_height && slide_circle != 'circle1'){
		document.getElementById("circle1").classList.add('circle_active');
		document.getElementById(""+slide_circle+"").classList.remove('circle_active');
		slide_circle = 'circle1';
	}
	else if(pageYOffset>=slide_height && pageYOffset<(slide_height*2) && slide_circle != 'circle2'){
		document.getElementById("circle2").classList.add('circle_active');
		document.getElementById(""+slide_circle+"").classList.remove('circle_active');
		slide_circle = 'circle2';
	}
	else if(pageYOffset>=(slide_height*2) && pageYOffset<(slide_height*3) && slide_circle != 'circle3'){
		document.getElementById("circle3").classList.add('circle_active');
		document.getElementById(""+slide_circle+"").classList.remove('circle_active');
		slide_circle = 'circle3';
	}
*/
})