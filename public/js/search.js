const searchInput = document.getElementById("search-input");
const searchResultsContainer = document.getElementById("search-results");
let fuse;
const fuseOptions = {
	shouldSort: true,
	includeMatches: true,
	threshold: 0.0,
	tokenize: true,
	location: 0,
	distance: 100,
	maxPatternLength: 32,
	minMatchCharLength: 1,
	keys: [
		{ name: "title", weight: 0.8 },
		{ name: "content", weight: 0.5 },
		{ name: "description", weight: 0.5 },
		{ name: "tags", weight: 0.3 },
	],
};
// load our search index
window.onload = () => {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const data = JSON.parse(xhr.responseText);
			if (data) {
				fuse = new Fuse(data, fuseOptions); // build the index from the json file
			}
		}
	};
	xhr.open("GET", "../index.json");
	xhr.send();
};

searchInput.addEventListener("input", function () {
	if (fuse) {
		const results = fuse.search(this.value.trim());
		if (results.length !== 0) {
			let resultSet = "";
			for (const result of results) {
				resultSet += `
          <a href="${result.item.url}" class="bg-bg-accent p-3 px-4 rounded-md focus:scale-96 focus:outline-none hover:scale-96 transition">
            ${result.item.title} ->
          </a>
        `;
			}
			searchResultsContainer.innerHTML = resultSet;
		} else {
			searchResultsContainer.innerHTML = "";
		}
	}
});

// Keyboard bindings for search navigation
document.onkeydown = (e) => {
	const key = e.key;
	const activeElem = document.activeElement;
	const inbox = searchInput.contains(activeElem);

  if (key === "/") {
    e.preventDefault();
    searchInput.focus();
    return;
  }

	// Remove focus class from all result links when input is focused
	if (activeElem === searchInput) {
		const elements = document.getElementsByClassName("focus");
		while (elements.length > 0) {
			elements[0].classList.remove("focus");
		}
	}

	// Only handle navigation if results are available and focus is in search box or results
	const resultLinks = searchResultsContainer.querySelectorAll("a");
	if (
		resultLinks.length === 0 ||
		(!inbox && !searchResultsContainer.contains(activeElem))
	) {
		return;
	}

	// ArrowDown: move focus to next result
	if (key === "ArrowDown") {
		e.preventDefault();
		if (activeElem === searchInput) {
			resultLinks[0].focus();
			resultLinks[0].classList.add("focus");
		} else {
			const idx = Array.from(resultLinks).indexOf(activeElem);
			if (idx < resultLinks.length - 1) {
				resultLinks[idx].classList.remove("focus");
				resultLinks[idx + 1].focus();
				resultLinks[idx + 1].classList.add("focus");
			}
		}
	}
	// ArrowUp: move focus to previous result or back to input
	else if (key === "ArrowUp") {
		e.preventDefault();
		if (activeElem === resultLinks[0]) {
			resultLinks[0].classList.remove("focus");
			searchInput.focus();
		} else {
			const idx = Array.from(resultLinks).indexOf(activeElem);
			if (idx > 0) {
				resultLinks[idx].classList.remove("focus");
				resultLinks[idx - 1].focus();
				resultLinks[idx - 1].classList.add("focus");
			}
		}
	}

	// ArrowRight: activate (click) the focused result link
	else if (
		key === "ArrowRight" &&
		searchResultsContainer.contains(activeElem)
	) {
		activeElem.click();
	}
};
