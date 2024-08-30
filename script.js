const cuisines = [
    "Italian", "Chinese", "Mexican", "Indian", "Japanese", 
    "French", "Thai", "Greek", "Mediterranean", "Vietnamese",
    "Korean", "American"
];

let availableCuisines = [];
let currentOptions = [];
let chosenCuisines = [];

function getRandomCuisine() {
    availableCuisines = cuisines.filter(cuisine => !chosenCuisines.includes(cuisine));
    return availableCuisines[Math.floor(Math.random() * availableCuisines.length)];
}

function chooseOption(option) {
    const chosenCuisine = currentOptions[option];

    if (!chosenCuisines.includes(chosenCuisine)) {
        chosenCuisines.push(chosenCuisine);
    }

    if (cuisines.length === chosenCuisines.length) {
        finalChoice(option);
        return;
    }

    if (option == 0) {
        if(!chosenCuisines.includes(currentOptions[1])) {
            chosenCuisines.push(currentOptions[1]);    
        }
        let random = getRandomCuisine();
        if (typeof random === 'undefined') {
            finalChoice(option);
            return;
        }
        document.getElementById('option2').innerText = random;
        currentOptions = [currentOptions[0], random];
    }
    else if (option == 1) {
        if(!chosenCuisines.includes(currentOptions[0])) {
            chosenCuisines.push(currentOptions[0]);    
        }
        let random = getRandomCuisine();
        if (typeof random === 'undefined') {
            finalChoice(option);
            return;
        }
        document.getElementById('option1').innerText = random;
        currentOptions = [random, currentOptions[1]];
    }
}

function renderOptions() {
    document.getElementById('option1').innerText = currentOptions[0];
    document.getElementById('option2').innerText = currentOptions[1];
}

function finalChoice(option) {
    const finalCuisine = currentOptions[option];
    if (finalCuisine == "Italian") {
        window.open('https://www.yelp.com/search?find_desc=Italian+Food&find_loc=4336+Caminito+Del+Zafiro');
    }
    else if (finalCuisine == "Chinese") {
        window.open('https://www.yelp.com/search?find_desc=Chinese+Food&find_loc=4336+Caminito+Del+Zafiro&l=g%3A-117.31613159179688%2C32.79477851084408%2C-117.11151123046875%2C32.967771310880366');
    }
    else if (finalCuisine == "Mexican") {
        window.open('https://www.yelp.com/search?find_desc=Mexican+Food&find_loc=4336+Caminito+Del+Zafiro%2C+San+Diego%2C+CA+92121&l=g%3A-117.31613159179688%2C32.79477851084408%2C-117.11151123046875%2C32.967771310880366');
    }
    else if (finalCuisine == "Indian") {
        window.open('https://www.yelp.com/search?find_desc=Indian+Food&find_loc=4336+Caminito+Del+Zafiro%2C+San+Diego%2C+CA+92121&l=g%3A-117.31613159179688%2C32.79477851084408%2C-117.11151123046875%2C32.967771310880366');
    }
    else if (finalCuisine == "Japanese") {
        window.open('https://www.yelp.com/search?find_desc=Japanese+Food&find_loc=4336+Caminito+Del+Zafiro%2C+San+Diego%2C+CA+92121&l=g%3A-117.31613159179688%2C32.79477851084408%2C-117.11151123046875%2C32.967771310880366');
    }
    else if (finalCuisine == "French") {
        window.open('https://www.yelp.com/search?find_desc=French+Food&find_loc=4336+Caminito+Del+Zafiro%2C+San+Diego%2C+CA+92121');
    }
    else if (finalCuisine == "Thai") {
        window.open('https://www.yelp.com/search?find_desc=Thai+Food&find_loc=4336+Caminito+Del+Zafiro%2C+San+Diego%2C+CA+92121&l=g%3A-117.31613159179688%2C32.79477851084408%2C-117.11151123046875%2C32.967771310880366');
    }
    else if (finalCuisine == "Greek") {
        window.open('https://www.yelp.com/search?find_desc=Greek+Food&find_loc=4336+Caminito+Del+Zafiro%2C+San+Diego%2C+CA+92121&l=g%3A-117.31613159179688%2C32.79477851084408%2C-117.11151123046875%2C32.967771310880366');
    }
    else if (finalCuisine == "Mediterranean") {
        window.open('https://www.yelp.com/search?find_desc=Mediterranean&find_loc=4336+Caminito+Del+Zafiro%2C+San+Diego%2C+CA+92121&l=g%3A-117.31613159179688%2C32.79477851084408%2C-117.11151123046875%2C32.967771310880366');
    }
    else if (finalCuisine == "Vietnamese") {
        window.open('https://www.yelp.com/search?find_desc=Vietnamese+Food&find_loc=4336+Caminito+Del+Zafiro%2C+San+Diego%2C+CA+92121&l=g%3A-117.31613159179688%2C32.79477851084408%2C-117.11151123046875%2C32.967771310880366');
    }
    else if (finalCuisine == "Korean") {
        window.open('https://www.yelp.com/search?find_desc=Korean+Food&find_loc=4336+Caminito+Del+Zafiro%2C+San+Diego%2C+CA+92121');
    }
    else if (finalCuisine == "American") {
        window.open('https://www.yelp.com/search?find_desc=American+Food&find_loc=4336+Caminito+Del+Zafiro%2C+San+Diego%2C+CA+92121');
    }
}

// Initialize with two random options
currentOptions = [getRandomCuisine(), getRandomCuisine()];
while (currentOptions[0] == currentOptions[1]) {
    currentOptions = [getRandomCuisine(), getRandomCuisine()]; 
}
renderOptions();

});
