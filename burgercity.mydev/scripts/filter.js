let filter = {};
let checkboxes = document.querySelectorAll('.control-input');
let cards = document.querySelectorAll('.card');
let categoryLink = document.querySelectorAll('a.category, a.good-category');

checkFilter();
rememberAnswers();
showAccordingToFilters();

let addcheckboxesClickHandler = function (checkbox) {
  checkbox.addEventListener('click', function () {
    //что происходит при нажатии на чекбокс 
    let category = checkbox.dataset.category;
    filter[category] = checkbox.checked;
    window.localStorage.setItem('filter', JSON.stringify(filter) );
    });
  };
for (let i=0; i<checkboxes.length; i++){
  addcheckboxesClickHandler(checkboxes[i]);
};

function checkFilter(){//какие фильтры включены
  if ( window.localStorage.getItem('filter') != null ) {
    filter = JSON.parse(window.localStorage.getItem('filter'));
  }
  else{
  	for (let b=0; b < checkboxes.length; b++) {
  		filter[checkboxes[b].dataset.category] = true;	
  	}
  	window.localStorage.setItem('filter', JSON.stringify(filter) );
  }
};


function rememberAnswers() {
	for(let a=0; a<checkboxes.length; a++){
		checkboxes[a].checked = filter[checkboxes[a].dataset.category];
	}
}

//наложение :hidden
function showAccordingToFilters(){
	for(let c=0; c<cards.length; c++){
		if (filter[cards[c].dataset.cardCategory]){
				cards[c].classList.remove('hidden');
		} else {
				cards[c].classList.add('hidden');
		}
	}
}




//ссылки на категории
let addCategoryClickHandler = function (category){
	category.addEventListener('click', function () {
		for(type in filter){
			if(type==category.textContent){
				filter[type] = true;
			} else {
				filter[type] = false;
			}
		}
		window.localStorage.setItem('filter', JSON.stringify(filter) );
	});
}
for (let i=0; i<categoryLink.length; i++){
  addCategoryClickHandler(categoryLink[i]);
};

//кнопка "показать"
try{
document.querySelector('.menu-filter-btn').addEventListener('click', showAccordingToFilters());
} catch (e){ };