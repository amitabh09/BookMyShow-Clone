/* Navbar Code */
const nav1Array = ["Movies", "Stream", "Events", "Players", "Sports", "Activities"];
const nav2Array = ["ListYourShow", "Corporate", "Offers", "Gift Cards"];

document.getElementsByClassName('nav1')[0].innerHTML = displayNavbar1(nav1Array);
document.getElementsByClassName('nav2')[0].innerHTML = displayNavbar1(nav2Array);

function displayNavbar1(nav1Array) {
    let str = '';
    for (let n of nav1Array) {
        str += `<div>${n}</div>`;
    }
    return str;
}
/* Navbar Code */

/* Carausal */
const carausalImages = document.querySelectorAll(".carausal_image");
const carausal = document.querySelector(".carausal");
let carausalIndex = 0;

function prevFunction() {
    carausalIndex = (carausalImages.length + carausalIndex - 1)%carausalImages.length;
    carausal.style.transform = `translate(${carausalIndex*(-100)}%)`;
    //console.log(carausalIndex);
}
function nextFunction() {
    carausalIndex = (carausalImages.length + carausalIndex + 1)%carausalImages.length;
    carausal.style.transform = `translate(${carausalIndex*(-100)}%)`;
    //console.log(carausalIndex);
}
/* Carausal */


/* Main Section 2 Code */
const sec2Array = [
    {
        'path': './images/bb3.png',
        'name': 'Bhool Bhulaiyya 3',
        'genre': 'Comedy/Horror'
    },
    {
        'path': './images/singham3.png',
        'name': 'Singham Again',
        'genre': 'Action/Drama'
    },
    {
        'path': 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        'name': 'Interstellar',
        'genre': 'Sci-Fi/Drama'
    },
    {
        'path': 'https://image.tmdb.org/t/p/w500/iVZ3JAcAjmguGPnRNfWFOtLHOuY.jpg',
        'name': 'The Godfather',
        'genre': 'Crime/Drama'
    },
    {
        'path': 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
        'name': 'Parasite',
        'genre': 'Thriller/Drama'
    }
];

document.getElementsByClassName('main-sec-2')[0].innerHTML = displaySection(sec2Array);
// document.getElementsByClassName('main-sec-2')[1].innerHTML = displaySection(sec2Array);

function displaySection(sec2Array) {
    let str = '';
    for (let obj of sec2Array) {
        str += `<div><img src=${obj.path} alt="no image"> <h3>${obj.name}</h3> <p>${obj.genre}</p></div>`;
    }
    return str;
}

/* Main Section 2 Code */

/* Main Section 4 Code */
const sec4Array = [
    {
        'path': 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00403644-fvewzhbdbs-portrait.jpg',
        'name': 'Asal Kolaar Live in ...',
        'genre': 'Comedy/Horror'
    },
    {
        'path': 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAzIERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00417872-zpdasnzjry-portrait.jpg',
        'name': 'Maroon 5 India 2024',
        'genre': 'Action/Drama'
    },
    {
        'path': 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410091-cneymqpeng-portrait.jpg',
        'name': 'Shilpa Rao Live in ...',
        'genre': 'Sci-Fi/Drama'
    },
    {
        'path': 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411050-xrvlxdhczm-portrait.jpg',
        'name': 'Sunburn Arena Ft. Charlotte',
        'genre': 'Crime/Drama'
    },
    {
        'path': 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00406791-njvcryufzg-portrait.jpg',
        'name': 'Badlands 2024 Ft. A7x ...',
        'genre': 'Thriller/Drama'
    }
];

document.getElementsByClassName('main-sec-4')[0].innerHTML = displaySection(sec4Array);

/* Main Section 4 Code */


/* Main Section 5 Code */
const laughterShowsArray = [
    {
        'path': 'https://via.placeholder.com/300x200?text=The+Kapil+Sharma+Show', // Placeholder for "The Kapil Sharma Show"
        'name': 'The Kapil Sharma Show',
        'genre': 'Stand-Up/Sketch Comedy'
    },
    {
        'path': 'https://via.placeholder.com/300x200?text=Comedy+Nights+with+Kapil', // Placeholder for "Comedy Nights with Kapil"
        'name': 'Comedy Nights with Kapil',
        'genre': 'Comedy Talk Show'
    },
    {
        'path': 'https://via.placeholder.com/300x200?text=Comicstaan', // Placeholder for "Comicstaan"
        'name': 'Comicstaan',
        'genre': 'Stand-Up Competition'
    },
    {
        'path': 'https://via.placeholder.com/300x200?text=Movers+%26+Shakers', // Placeholder for "Movers & Shakers"
        'name': 'Movers & Shakers',
        'genre': 'Talk Show/Comedy'
    },
    {
        'path': 'https://via.placeholder.com/300x200?text=The+Great+Indian+Laughter+Challenge', // Placeholder for "The Great Indian Laughter Challenge"
        'name': 'The Great Indian Laughter Challenge',
        'genre': 'Stand-Up Comedy Reality Show'
    }
];

document.getElementsByClassName('main-sec-5')[0].innerHTML = displaySection(laughterShowsArray);

/* Main Section 5 Code */


/* Main Section 6 Code */
const popularEventsArray = [
    {
        'path': 'https://via.placeholder.com/300x200?text=Lollapalooza+India', // Placeholder for "Lollapalooza India"
        'name': 'Lollapalooza India',
        'category': 'Music Festival'
    },
    {
        'path': 'https://via.placeholder.com/300x200?text=Sunburn+Festival', // Placeholder for "Sunburn Festival"
        'name': 'Sunburn Festival',
        'category': 'EDM Festival'
    },
    {
        'path': 'https://via.placeholder.com/300x200?text=Comic+Con+India', // Placeholder for "Comic Con India"
        'name': 'Comic Con India',
        'category': 'Pop Culture Convention'
    },
    {
        'path': 'https://via.placeholder.com/300x200?text=The+Great+Indian+Food+Festival', // Placeholder for "The Great Indian Food Festival"
        'name': 'The Great Indian Food Festival',
        'category': 'Food Festival'
    },
    {
        'path': 'https://via.placeholder.com/300x200?text=Stand-Up+Comedy+Night', // Placeholder for "Stand-Up Comedy Night"
        'name': 'Stand-Up Comedy Night',
        'category': 'Comedy Show'
    }
];
document.getElementsByClassName('main-sec-6')[0].innerHTML = displaySection(popularEventsArray);

/* Main Section 6 Code */


/* Footer */
const footer3Array = [
    {
        'heading': 'Movies Now Showing in Bengaluru',
        'contents': [
            { 'name': 'Amaran', 'path': '#' },
            { 'name': 'Bagheera', 'path': '#' },
            { 'name': 'Singham Again', 'path': '#' },
            { 'name': 'Bhool Bhulaiyaa 3', 'path': '#' },
            { 'name': 'Lucky Baskhar', 'path': '#' },
            { 'name': 'KA (2024)', 'path': '#' },
            { 'name': 'Venom: The Last Dance', 'path': '#' },
            { 'name': 'Navagraha', 'path': '#' },
            { 'name': 'I am Kathalan', 'path': '#' },
            { 'name': 'The Wild Robot', 'path': '#' }
        ]
    },
    {
        'heading': 'Upcoming Movies in Bengaluru',
        'contents': [
            { 'name': 'Kale Lagan Chhe !?!', 'path': '#' },
            { 'name': 'Mushak Aakhyan', 'path': '#' },
            { 'name': 'Rajaram', 'path': '#' },
            { 'name': 'Iravinil Aatam Par', 'path': '#' },
            { 'name': 'Ella', 'path': '#' },
            { 'name': 'Mura', 'path': '#' },
            { 'name': 'Jewel Thief (Beware of Burglar)', 'path': '#' },
            { 'name': 'The Shortcut', 'path': '#' },
            { 'name': 'Hya Goshtila Navach Nahi', 'path': '#' },
            { 'name': 'Swargam', 'path': '#' }
        ]
    },
    {
        'heading': 'Movies by Genre',
        'contents': [
            { 'name': 'Drama Movies', 'path': '#' },
            { 'name': 'Action Movies', 'path': '#' },
            { 'name': 'Thriller Movies', 'path': '#' },
            { 'name': 'Crime Movies', 'path': '#' },
            { 'name': 'Comedy Movies', 'path': '#' },
            { 'name': 'Romantic Movies', 'path': '#' },
            { 'name': 'Adventure Movies', 'path': '#' },
            { 'name': 'Horror Movies', 'path': '#' },
            { 'name': 'Bollywood Movies', 'path': '#' },
            { 'name': 'Classic Movies', 'path': '#' }
        ]
    },
    {
        'heading': 'Movies by Language',
        'contents': [
            { 'name': 'Movies in Kannada', 'path': '#' },
            { 'name': 'Movies in English', 'path': '#' },
            { 'name': 'Movies in Hindi', 'path': '#' },
            { 'name': 'Movies in Tamil', 'path': '#' },
            { 'name': 'Movies in Malayalam', 'path': '#' },
            { 'name': 'Movies in Telugu', 'path': '#' },
            { 'name': 'Movies in Bhojpuri', 'path': '#' },
            { 'name': 'Movies in Bengali', 'path': '#' },
            { 'name': 'Movies in French', 'path': '#' },
            { 'name': 'Movies in Nepali', 'path': '#' }
        ]
    },
    {
        'heading': 'Sports Events in Bengaluru',
        'contents': [
            { 'name': 'Chess', 'path': '#' },
            { 'name': 'Running', 'path': '#' },
            { 'name': 'Football', 'path': '#' },
            { 'name': 'Kabaddi', 'path': '#' },
            { 'name': 'Cricket', 'path': '#' },
            { 'name': 'Mixed Martial Arts', 'path': '#' },
            { 'name': 'Basketball', 'path': '#' },
            { 'name': 'Baseball', 'path': '#' },
            { 'name': 'Boat Race', 'path': '#' },
            { 'name': 'Bowling', 'path': '#' }
        ]
    },
    {
        'heading': 'Events in Top Cities',
        'contents': [
            { 'name': 'Events in Mumbai', 'path': '#' },
            { 'name': 'Events in Delhi-NCR', 'path': '#' },
            { 'name': 'Events in Chennai', 'path': '#' },
            { 'name': 'Events in Bengaluru', 'path': '#' },
            { 'name': 'Events in Hyderabad', 'path': '#' },
            { 'name': 'Events in Pune', 'path': '#' },
            { 'name': 'Events in Ahmedabad', 'path': '#' },
            { 'name': 'Events in Kolkata', 'path': '#' },
            { 'name': 'Events in Kochi', 'path': '#' }
        ]
    },
    {
        'heading': 'Cinemas in Top Cities',
        'contents': [
            { 'name': 'Cinemas in Mumbai', 'path': '#' },
            { 'name': 'Cinemas in Delhi-NCR', 'path': '#' },
            { 'name': 'Cinemas in Chennai', 'path': '#' },
            { 'name': 'Cinemas in Bengaluru', 'path': '#' },
            { 'name': 'Cinemas in Hyderabad', 'path': '#' },
            { 'name': 'Cinemas in Pune', 'path': '#' },
            { 'name': 'Cinemas in Ahmedabad', 'path': '#' },
            { 'name': 'Cinemas in Kolkata', 'path': '#' },
            { 'name': 'Cinemas in Kochi', 'path': '#' }
        ]
    },
    {
        'heading': 'Plays in Top Cities',
        'contents': [
            { 'name': 'Plays in Mumbai', 'path': '#' },
            { 'name': 'Plays in Delhi-NCR', 'path': '#' },
            { 'name': 'Plays in Chennai', 'path': '#' },
            { 'name': 'Plays in Bengaluru', 'path': '#' },
            { 'name': 'Plays in Hyderabad', 'path': '#' },
            { 'name': 'Plays in Pune', 'path': '#' },
            { 'name': 'Plays in Ahmedabad', 'path': '#' },
            { 'name': 'Plays in Kolkata', 'path': '#' },
            { 'name': 'Plays in Kochi', 'path': '#' }
        ]
    },
    {
        'heading': 'Activities in Top Cities',
        'contents': [
            { 'name': 'Activities in Mumbai', 'path': '#' },
            { 'name': 'Activities in Delhi-NCR', 'path': '#' },
            { 'name': 'Activities in Chennai', 'path': '#' },
            { 'name': 'Activities in Bengaluru', 'path': '#' },
            { 'name': 'Activities in Hyderabad', 'path': '#' },
            { 'name': 'Activities in Pune', 'path': '#' },
            { 'name': 'Activities in Ahmedabad', 'path': '#' },
            { 'name': 'Activities in Kolkata', 'path': '#' },
            { 'name': 'Activities in Kochi', 'path': '#' }
        ]
    },
    {
        'heading': 'Movies Now Showing',
        'contents': [
            { 'name': 'Singham Again', 'path': '#' },
            { 'name': 'Bhool Bhulaiyaa 3', 'path': '#' },
            { 'name': 'Amaran', 'path': '#' },
            { 'name': 'Lucky Baskhar', 'path': '#' },
            { 'name': 'The House of Dead Horror', 'path': '#' },
            { 'name': 'Bagheera', 'path': '#' },
            { 'name': 'Wild Roller Coaster', 'path': '#' },
            { 'name': 'Prehistoric Adventure', 'path': '#' },
            { 'name': 'KA (2024)', 'path': '#' },
            { 'name': 'Brother', 'path': '#' }
        ]
    },
    {
        'heading': 'Countries',
        'contents': [
            { 'name': 'Indonesia', 'path': '#' },
            { 'name': 'Singapore', 'path': '#' },
            { 'name': 'UAE', 'path': '#' },
            { 'name': 'Sri Lanka', 'path': '#' },
            { 'name': 'West Indies', 'path': '#' }
        ]
    },
    {
        'heading': 'Help',
        'contents': [
            { 'name': 'About Us', 'path': '#' },
            { 'name': 'Contact Us', 'path': '#' },
            { 'name': 'Current Opening', 'path': '#' },
            { 'name': 'Press Release', 'path': '#' },
            { 'name': 'Press Coverage', 'path': '#' },
            { 'name': 'Sitemap', 'path': '#' },
            { 'name': 'FAQs', 'path': '#' },
            { 'name': 'Terms and Conditions', 'path': '#' },
            { 'name': 'Privacy Policy', 'path': '#' }
        ]
    },
    {
        'heading': 'BookMyShow Exclusives',
        'contents': [
            { 'name': 'Lollapalooza India', 'path': '#' },
            { 'name': 'Superstar', 'path': '#' },
            { 'name': 'BookAChange', 'path': '#' },
            { 'name': 'Corporate Vouchers', 'path': '#' },
            { 'name': 'Gift Cards', 'path': '#' },
            { 'name': 'List My Show', 'path': '#' },
            { 'name': 'Offers', 'path': '#' },
            { 'name': 'Stream', 'path': '#' },
            { 'name': 'Trailers', 'path': '#' }
        ]
    }
];

document.getElementsByClassName('footer3')[0].innerHTML = displayFooter3(footer3Array);

function displayFooter3(footer3Array) {
    let str = '';
    for (let obj of footer3Array) {
        let anchorString = '';
        for(element of obj.contents) {
            anchorString += `<a href=${element.path}>${element.name}</a>`;
        }
        str += `<h4>${obj.heading}</h4> <div>${anchorString}</div>`;
    }
    return str;
}

/* Footer */