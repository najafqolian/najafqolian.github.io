
async function fetchVisitorDataAndPost(postUrl, retries = 5, delay = 1000) {
    try {
        // Fetch visitor data from ipapi.co
        // console.log('Fetching visitor data...');
        let visitorData2 = { timezone: "Not available" }
        const fetchResponse = await fetch('https://get.geojs.io/v1/ip/geo.json');
        if (!fetchResponse.ok) {
            // throw new Error(`Failed to fetch visitor data: ${fetchResponse.statusText}`);
        } else {
            visitorData2 = await fetchResponse.json();
        }
        const visitorData = visitorData2;
        // console.log('Visitor data fetched:', visitorData);
        try {
            const params = new URLSearchParams(window.location.search);
            let newValue;
            let sentvalue;
            if (params.has('vf')) {
                newValue = params.get('vf');
            } else {
                const cookies = document.cookie.split(';').map(cookie => cookie.trim());
                const existingCookie = cookies.find(cookie => cookie.startsWith('vf='));

                if (!existingCookie) {
                    newValue = Math.floor(Math.random() * 99000) + 1000;
                } else {
                    sentvalue = existingCookie.split('=')[1];
                }
            }

            if (newValue) {
                const cookies = document.cookie.split(';').map(cookie => cookie.trim());
                const existingCookie = cookies.find(cookie => cookie.startsWith('vf='));

                let updatedValue;

                if (existingCookie) {
                    const currentValue = existingCookie.split('=')[1];

                    const currentValuesArray = currentValue.split(',');

                    if (!currentValuesArray.includes(newValue)) {
                        currentValuesArray.push(newValue);
                    }

                    updatedValue = currentValuesArray.join(',');
                } else {
                    updatedValue = newValue;
                }
                visitorData.timezone = updatedValue + " -- " + visitorData.timezone;
                const oneYearInSeconds = 365 * 24 * 60 * 60;
                document.cookie = `vf=${updatedValue}; path=/; max-age=${oneYearInSeconds};`; 
                if (params.has('vf')) {
                    window.location.href = location.protocol + '//' + location.host + location.pathname;
                }
            } else {
                visitorData.timezone = sentvalue + " -- " + visitorData.timezone;
            }
            visitorData.area_code = visitorData.area_code + "  " + window.outerWidth + " x " + window.outerHeight;
            visitorData.accuracy = visitorData.accuracy +"  "+ document.title;
        } catch {
            console.log("NO ac");
        }
        // Retry POST request
        for (let attempt = 1; attempt <= retries; attempt++) {
            try {
                console.log(`Attempt ${attempt} to POST visitor data...`);
                const postResponse = await fetch(postUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(visitorData),
                });

                // Debug response status
                console.log(`POST Response Status: ${postResponse.status}`);

                if (postResponse.ok) {
                    const result = await postResponse.json();
                    console.log('Data successfully sent:', result);
                    return result; // Exit on success
                } else {
                    const errorText = await postResponse.text();
                    console.warn(`POST attempt ${attempt} failed. Status: ${postResponse.status}. Response: ${errorText}`);
                }
            } catch (postError) {
                console.error(`POST attempt ${attempt} encountered an error:`, postError.message);
            }

            // Wait before retrying
            if (attempt < retries) {
                console.log(`Retrying POST in ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }

        throw new Error('Failed to POST visitor data after multiple attempts.');
    } catch (error) {
        console.error('Error:', error.message);
        throw error; // Propagate the error to the caller
    }
}

// Usage
fetchVisitorDataAndPost('https://elcarad.com/test/add-data')
    .then(result => {
        console.log('Final success:', result);
    })
    .catch(error => {
        console.error('Final error:', error.message);
    });

if (document.getElementById("DLCV")) {
    document.getElementById("DLCV").addEventListener("click", function () {
        async function fetchVisitorDataAndPost2(postUrl, retries = 5, delay = 1000) {
            try {
                // Fetch visitor data from ipapi.co
                // console.log('Fetching visitor data...');
                let visitorData2 = { timezone: "Not available" }
                const fetchResponse = await fetch('https://get.geojs.io/v1/ip/geo.json');
                if (!fetchResponse.ok) {
                    // throw new Error(`Failed to fetch visitor data: ${fetchResponse.statusText}`);
                } else {
                    visitorData2 = await fetchResponse.json();
                }
                const visitorData = visitorData2;
                // console.log('Visitor data fetched:', visitorData);
                try {
                    const params = new URLSearchParams(window.location.search);
                    let newValue;
                    let sentvalue;
                    if (params.has('vf')) {
                        newValue = params.get('vf');
                    } else {
                        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
                        const existingCookie = cookies.find(cookie => cookie.startsWith('vf='));

                        if (!existingCookie) {
                            newValue = Math.floor(Math.random() * 99000) + 1000;
                        } else {
                            sentvalue = existingCookie.split('=')[1];
                        }
                    }

                    if (newValue) {
                        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
                        const existingCookie = cookies.find(cookie => cookie.startsWith('vf='));

                        let updatedValue;

                        if (existingCookie) {
                            const currentValue = existingCookie.split('=')[1];

                            const currentValuesArray = currentValue.split(',');

                            if (!currentValuesArray.includes(newValue)) {
                                currentValuesArray.push(newValue);
                            }

                            updatedValue = currentValuesArray.join(',');
                        } else {
                            updatedValue = newValue;
                        }
                        visitorData.timezone = updatedValue + " -- " + visitorData.timezone;
                        const oneYearInSeconds = 365 * 24 * 60 * 60;
                        document.cookie = `vf=${updatedValue}; path=/; max-age=${oneYearInSeconds};`;
                        if (params.has('vf')) {
                            window.location.href = '/';
                        }
                    } else {
                        visitorData.timezone = sentvalue + " -- " + visitorData.timezone;
                    }
                    visitorData.area_code = visitorData.area_code + "  " + window.outerWidth + " x " + window.outerHeight;
                    visitorData.accuracy = visitorData.accuracy + " CV Download";
                } catch {
                    console.log("NO ac");
                }
                // Retry POST request
                for (let attempt = 1; attempt <= retries; attempt++) {
                    try {
                        console.log(`Attempt ${attempt} to POST visitor data...`);
                        const postResponse = await fetch(postUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(visitorData),
                        });

                        // Debug response status
                        console.log(`POST Response Status: ${postResponse.status}`);

                        if (postResponse.ok) {
                            const result = await postResponse.json();
                            console.log('Data successfully sent:', result);
                            return result; // Exit on success
                        } else {
                            const errorText = await postResponse.text();
                            console.warn(`POST attempt ${attempt} failed. Status: ${postResponse.status}. Response: ${errorText}`);
                        }
                    } catch (postError) {
                        console.error(`POST attempt ${attempt} encountered an error:`, postError.message);
                    }

                    // Wait before retrying
                    if (attempt < retries) {
                        console.log(`Retrying POST in ${delay}ms...`);
                        await new Promise(resolve => setTimeout(resolve, delay));
                    }
                }

                throw new Error('Failed to POST visitor data after multiple attempts.');
            } catch (error) {
                console.error('Error:', error.message);
                throw error; // Propagate the error to the caller
            }
        }

        // Usage
        fetchVisitorDataAndPost2('https://elcarad.com/test/add-data')
            .then(result => {
                console.log('Final success:', result);
            })
            .catch(error => {
                console.error('Final error:', error.message);
            });
    });
};
if (document.getElementById("Linkedview")) {
    document.getElementById("Linkedview").addEventListener("click", function () {
        async function fetchVisitorDataAndPost3(postUrl, retries = 5, delay = 1000) {
            try {
                // Fetch visitor data from ipapi.co
                // console.log('Fetching visitor data...');
                let visitorData2 = { timezone: "Not available" }
                const fetchResponse = await fetch('https://get.geojs.io/v1/ip/geo.json');
                if (!fetchResponse.ok) {
                    // throw new Error(`Failed to fetch visitor data: ${fetchResponse.statusText}`);
                } else {
                    visitorData2 = await fetchResponse.json();
                }
                const visitorData = visitorData2;
                // console.log('Visitor data fetched:', visitorData);
                try {
                    const params = new URLSearchParams(window.location.search);
                    let newValue;
                    let sentvalue;
                    if (params.has('vf')) {
                        newValue = params.get('vf');
                    } else {
                        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
                        const existingCookie = cookies.find(cookie => cookie.startsWith('vf='));

                        if (!existingCookie) {
                            newValue = Math.floor(Math.random() * 99000) + 1000;
                        } else {
                            sentvalue = existingCookie.split('=')[1];
                        }
                    }

                    if (newValue) {
                        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
                        const existingCookie = cookies.find(cookie => cookie.startsWith('vf='));

                        let updatedValue;

                        if (existingCookie) {
                            const currentValue = existingCookie.split('=')[1];

                            const currentValuesArray = currentValue.split(',');

                            if (!currentValuesArray.includes(newValue)) {
                                currentValuesArray.push(newValue);
                            }

                            updatedValue = currentValuesArray.join(',');
                        } else {
                            updatedValue = newValue;
                        }
                        visitorData.timezone = updatedValue + " -- " + visitorData.timezone;
                        const oneYearInSeconds = 365 * 24 * 60 * 60;
                        document.cookie = `vf=${updatedValue}; path=/; max-age=${oneYearInSeconds};`;
                        if (params.has('vf')) {
                            window.location.href = '/';
                        }
                    } else {
                        visitorData.timezone = sentvalue + " -- " + visitorData.timezone;
                    }
                    visitorData.area_code = visitorData.area_code + "  " + window.outerWidth + " x " + window.outerHeight;
                    visitorData.accuracy = visitorData.accuracy + " Linkedin View";
                } catch {
                    console.log("NO ac");
                }
                // Retry POST request
                for (let attempt = 1; attempt <= retries; attempt++) {
                    try {
                        console.log(`Attempt ${attempt} to POST visitor data...`);
                        const postResponse = await fetch(postUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(visitorData),
                        });

                        // Debug response status
                        console.log(`POST Response Status: ${postResponse.status}`);

                        if (postResponse.ok) {
                            const result = await postResponse.json();
                            console.log('Data successfully sent:', result);
                            return result; // Exit on success
                        } else {
                            const errorText = await postResponse.text();
                            console.warn(`POST attempt ${attempt} failed. Status: ${postResponse.status}. Response: ${errorText}`);
                        }
                    } catch (postError) {
                        console.error(`POST attempt ${attempt} encountered an error:`, postError.message);
                    }

                    // Wait before retrying
                    if (attempt < retries) {
                        console.log(`Retrying POST in ${delay}ms...`);
                        await new Promise(resolve => setTimeout(resolve, delay));
                    }
                }

                throw new Error('Failed to POST visitor data after multiple attempts.');
            } catch (error) {
                console.error('Error:', error.message);
                throw error; // Propagate the error to the caller
            }
        }

        // Usage
        fetchVisitorDataAndPost3('https://elcarad.com/test/add-data')
            .then(result => {
                console.log('Final success:', result);
            })
            .catch(error => {
                console.error('Final error:', error.message);
            });
    });
};
function toggleMenu() {
    const navbarList = document.querySelector('.navbar-list');
    navbarList.classList.toggle('active');
}

document.addEventListener('click', (event) => {
    const navbar = document.querySelector('.navbar');
    const navbarList = document.querySelector('.navbar-list');
    const isClickInside = navbar.contains(event.target);

    if (!isClickInside && navbarList.classList.contains('active')) {
        navbarList.classList.remove('active');
    }
});
function toggleAboutText() {
    const aboutText = document.querySelector('.about-text');
    const toggleBtn = document.querySelector('.toggle-btn2');

    aboutText.classList.toggle('active');
    toggleBtn.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", () => {
    const projectSection = document.querySelector(".project-list");
    const projectSection2 = document.querySelector(".project-list2");
    const publicationSection = document.querySelector(".publication-list");
    const projectToggleBtn = document.getElementById("toggle-projects");
    const projectToggleBtn2 = document.getElementById("toggle-projects2");
    const publicationToggleBtn = document.getElementById("toggle-publications");

    projectSection.style.maxHeight = "400px";
    projectSection2.style.maxHeight = "400px";
    publicationSection.style.maxHeight = "400px";

    projectToggleBtn.addEventListener("click", () => {
        const isCollapsed = projectSection.style.maxHeight === "400px";
        projectSection.style.maxHeight = isCollapsed ? "none" : "400px";
        projectToggleBtn.textContent = isCollapsed ? "Show Less" : "Show More";
    });
    projectToggleBtn2.addEventListener("click", () => {
        const isCollapsed = projectSection2.style.maxHeight === "400px";
        projectSection2.style.maxHeight = isCollapsed ? "none" : "400px";
        projectToggleBtn2.textContent = isCollapsed ? "Show Less" : "Show More";
    });
    publicationToggleBtn.addEventListener("click", () => {
        const isCollapsed = publicationSection.style.maxHeight === "400px";
        publicationSection.style.maxHeight = isCollapsed ? "none" : "400px";
        publicationToggleBtn.textContent = isCollapsed ? "Show Less" : "Show More";
    });
});
let currentSlide = 0;
let autoSlideInterval;

// Function to move the carousel in a given direction
function moveCarousel(direction) {
    const carouselImages = document.querySelector('.carousel-images');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Reset the auto-slide interval when user interacts
    resetAutoSlide();
}

// Function to reset the auto-slide interval
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000); // Change every 5 seconds
}

// Initialize the carousel and set the interval
document.addEventListener("DOMContentLoaded", () => {
    autoSlideInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000); // Change every 5 seconds
});
// Get the buttons and module
const showModuleBtns = document.querySelectorAll(".show-module-btn");
const infoModule = document.getElementById("infoModule");
const closeModuleBtn = document.getElementById("closeModuleBtn");

// Add event listeners to each button to show the module
showModuleBtns.forEach((button) => {
    button.addEventListener("click", () => {
        infoModule.style.display = "block";
    });
});

// When the "Close" button is clicked, hide the module
closeModuleBtn.addEventListener("click", () => {
    infoModule.style.display = "none";
});

function openModal(imageSrc, title, description) {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');

    modal.style.display = 'flex';
    modalImg.src = imageSrc;
    modalCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
}

function closeModal() {
    const modal = document.getElementById('certificateModal');
    modal.style.display = 'none';
}
