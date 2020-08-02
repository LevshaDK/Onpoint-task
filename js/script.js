var clientY_touch = 0; //Координат Y при тапе.
var clientY_move = 0; //Координат Y при движении.
var slide_height = 768; //Высота слайдаов
var slide_circle = 'circle1';
var slide = 1; //Номер слайда
var slide_max = 3;

var slide_change = 0;

document.getElementById('slide').addEventListener("touchstart", Touch);
document.getElementById('slide').addEventListener("touchmove", TouchMove);
document.getElementById('slide').addEventListener("touchend", TouchEnd);

var rect = document.getElementById("slides").getBoundingClientRect();

function Touch(event){
	clientY_touch = event.changedTouches[0].clientY;
}

var slides = document.getElementById('slides');
function TouchMove(event){
	clientY_move = event.changedTouches[0].clientY;
	

	if (slide_change==0){
		console.log(clientY_move);
		if(clientY_move <= (clientY_touch-100) && slide < slide_max){
			document.getElementById("circle"+slide+"").classList.remove('circle_active');
			slide += 1;
			slides.style.transform = 'translateY(-'+((slide*slide_height)-slide_height)+'px)';
			slide_change = 1;
			document.getElementById("circle"+slide+"").classList.add('circle_active');

			document.getElementById('rectangle').hidden = true;
			document.getElementById('ellipse').hidden = true;
			document.getElementById('ellipse_text').hidden = true;
			document.getElementById('shape').hidden = true;
				
			
		}
		else if(clientY_move >= (clientY_touch+100) && slide > 1){
			document.getElementById("circle"+slide+"").classList.remove('circle_active');
			slide -= 1;
			slides.style.transform = 'translateY(-'+((slide*slide_height)-slide_height)+'px)';
			slide_change = 1;
			document.getElementById("circle"+slide+"").classList.add('circle_active');

			if(slide=='1'){
				function taimer(){
					if(slide=='1'){
						document.getElementById('rectangle').hidden = false;
						document.getElementById('ellipse').hidden = false;
						document.getElementById('ellipse_text').hidden = false;
						document.getElementById('shape').hidden = false;
					}
				}setTimeout(taimer, 600);
			}
		}
	}


}



function TouchEnd(event){
	slide_change = 0;
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

})

range = document.getElementById('range');
range.addEventListener("input", RangeOnchange);
slider = document.querySelector('.slider');
var range_slide = 0;

function RangeOnchange(event){

	if(range.value<333 && range_slide != 1) {
		slider.style.transform = 'translateX(0)';
		range_slide = 1;
	}

	else if(range.value>333 && range.value<=666 && range_slide != 2) {
		slider.style.transform = 'translateX(-1024px)';
		range_slide = 2;
	}

	else if(range.value>666 && range_slide != 3) {
		slider.style.transform = 'translateX(-2048px)';
		range_slide = 3;
	}



}