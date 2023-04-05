function gallerySlider() {
	const imgs = document.querySelectorAll(".gallery-img");
	const gallerySlider = document.querySelector(".gallery-slider");
	const gallerySliderImgsBlock = document.querySelector(".gallery-slider-imgs");

	const nextBtn = document.querySelector(".next");
	const prevBtn = document.querySelector(".prev");
	let activeSlide = 0;

	gallerySlider.addEventListener("click", (e) => {
		e.stopPropagation();
		if (e.target.classList.contains("gallery-slider")) {
			gallerySlider.classList.remove("active");
		}
	});

	imgs.forEach((img, i) => {
		const clone = img.cloneNode(true);
		clone.classList.remove("gallery-img");
		clone.classList.add("slider-img");
		gallerySliderImgsBlock.append(clone);

		img.addEventListener("click", (e) => {
			gallerySlider.classList.add("active");
			activeSlide = i;
			renderActiveClasses(document.querySelectorAll(".slider-img"));
		});
	});

	nextBtn &&
		nextBtn.addEventListener("click", (e) => {
			if (activeSlide === imgs.length - 1) {
				activeSlide = 0;
			} else {
				activeSlide++;
			}

			renderActiveClasses(document.querySelectorAll(".slider-img"));
		});

	prevBtn &&
		prevBtn.addEventListener("click", (e) => {
			if (activeSlide === 0) {
				activeSlide = imgs.length - 1;
			} else {
				activeSlide--;
			}

			renderActiveClasses(document.querySelectorAll(".slider-img"));
		});

	function renderActiveClasses(arr) {
		arr.forEach((img, index) => {
			img.classList.remove("active");
			if (index === activeSlide) {
				img.classList.add("active");
			}
		});
	}
}
gallerySlider();
