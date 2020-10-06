const toggleMenuButton = document.querySelector('.showcase-section nav > img');
const menuItemsContainer = document.querySelector('.showcase-section ul');
const menuItems = document.querySelectorAll('.showcase-section ul li');
const mainHeader = document.querySelector('.showcase-section header');
let isDisplayed = false;

toggleMenuButton.addEventListener('click', () => {
	console.log('Show up menu');
});

function displayMenu() {
	setTimeout(() => {
		menuItemsContainer.style.display = 'block';
	}, 500);

	mainHeader.style.position = 'fixed';
	mainHeader.style.height = '100vh';
}

function hideMenu() {
	mainHeader.style.position = 'static';
	mainHeader.style.height = 'auto';
	menuItemsContainer.style.display = 'none';
}

toggleMenuButton.addEventListener('click', (e) => {
	isDisplayed = !isDisplayed;

	if (isDisplayed) {
		displayMenu();
	} else {
		hideMenu();
	}
});

menuItems.forEach((item) => {
	item.addEventListener('click', (e) => {
		hideMenu();
		isDisplayed = !isDisplayed;
	});
});
