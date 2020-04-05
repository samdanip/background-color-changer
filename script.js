let btn=document.getElementById('btnChange');
let bod = document.getElementById('body');

btn.addEventListener('click', () => {
		setRandomColor();
		});

function setRandomColor() {
		$('#body').css('background-color', getRandomColor());
		}

function getRandomColor() {
		let letters = '0123456789ABCDEF';
		let color = '#';
		for (let i=0; i<6; i++) {
				color += letters[Math.floor(Math.random()*16)];
				}
				return color;
		}
