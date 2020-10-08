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

// Animations
const showcaseSection = document.querySelector('section.showcase');
const revealer = document.querySelector('.revealer');
const aboutSection = document.querySelector('section.about-section');
const greeting = document.querySelector('.about-section header h3');
const aboutMe = document.querySelector('.about-section article p');
const skillsSection = document.querySelector('.skills-section-content');
const oddSkillsContainers = document.querySelectorAll('.skills:nth-child(odd)');
const evenSkillsContainers = document.querySelectorAll('.skills:nth-child(even)');

const tl = gsap.timeline({
	defaults: { ease: 'power2.out' }
});

const tl2 = gsap.timeline({
	scrollTrigger: {
		trigger: aboutSection
	}
});

const tl3 = gsap.timeline({
	scrollTrigger: {
		trigger: skillsSection
	}
});

// SHOWCASE ANIMATIONS
tl.fromTo(revealer, { scale: 0, opacity: 1 }, { scale: 300, opacity: 1, duration: 1 });
tl.to(revealer, { opacity: 0, display: 'none', duration: 1 });
tl.from(mainHeader, { y: -100, duration: 1 }, '-=1');
tl.from(showcaseSection, { x: -2000, duration: 1 }, '-=1');

// ABOUT SECTION ANIMATIONS
tl2.fromTo([ greeting, aboutMe ], { opacity: 0, y: 50, delay: 0.5 }, { opacity: 1, duration: 1, y: 0 });

// SKILLS ANIMATIONS
tl3.from(oddSkillsContainers, { x: -1000, duration: 1 }, '-=1');
tl3.from(evenSkillsContainers, { x: 1000, duration: 1 }, '-=1');
