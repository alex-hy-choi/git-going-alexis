const data = [
    {
        "name": "The West Wing",
        "author": "Aaron Sorkin",
        "type": "TV Show",
        "image": "images/westwing.jpg",
        "altText": "Image of West Wing main characters, above image of the White House, over blue background and title of TV show",
        "text": "A political drama series following the lives of White House staffers as they navigate governance and personal challenges.",
        "opinion": "I absolutely LOVE the characters, it's very witty and the plot is always thick. It never gets boring, even though there are seven seasons. I always feel smarter after watching the West Wing."
    },
    {
        "name": "HIT ME HARD AND SOFT",
        "author": "Billie Eilish",
        "type": "Music",
        "image": "images/hmhas.png",
        "altText": "Album cover for HIT ME HARD AND SOFT, featuring Billie Eilish sinking in navy-colored water under a white door",
        "text": "Billie Eilish’s 2024 album blends haunting vocals and introspective lyrics with atmospheric production.",
        "opinion": "I think this album is amazingly written and cohesive—everything works well together, all of the songs are amazing. Billie Eilish has such a unique style of music, and I really love the lyricism."
    },
    {
        "name": "Madeline Woo",
        "author": "Madeline Woo",
        "type": "Dance",
        "image": "images/maddiewoo.png",
        "altText": "Black and white image of Madeline Woo wearing a long sleeve leotard, on pointe on one leg, with the other leg pointing to the sky",
        "text": "A principal dancer with the Royal Swedish Ballet.",
        "opinion": "I first found her on Instagram, and I love watching her dance. She's very dynamic, and is very athletic and poised. Also, from her posts, she doesn't take herself too seriously, which I appreciate."
    },
    {
        "name": "Crazy Rich Asians",
        "author": "Jon M. Chu",
        "type": "Movie",
        "image": "images/crazyrichasians.jpg",
        "altText": "Main characters Rachel and Nick looking at each other lovingly in front of a background of colorful fans, jewels, and flowers. Title in front of them.",
        "text": "A rom-com novel about a Chinese-American woman discovering the opulent world of her boyfriend’s elite Singaporean family.",
        "opinion": "This movie is THE PLANE MOVIE. I swear I only watch it on the plane, and it is perfect. I love every moment of it, partially because I'm Asian American and so is the main character"
    },
    {
        "name": "The Penderwicks",
        "author": "Jeanne Birdsall",
        "type": "Book",
        "image": "images/penderwicks.jpg",
        "altText": "Book cover for The Penderwicks featuring four silouettes of children in light blue, including the book title and author Jeanne Birdsall",
        "text": "A charming middle-grade series about four sisters and their whimsical summer adventures.",
        "opinion": "The Penderwicks is my comfort book. I LOVE reading this because it's so comforting, and I first read it probably in second grade. There are five books, but my favorite is the last book in the series."
    },
    {
        "name": "A Good Girl's Guide to Murder",
        "author": "Holly Jackson",
        "type": "Book",
        "image": "images/agggtm.jpg",
        "altText": "Book cover for A Good Girl's Guide to Murder by Holly Jackson, with the title as torn pieces of paper, attached by red string.",
        "text": "A YA mystery following a teen’s investigation into a closed murder case that unearths hidden secrets.",
        "opinion": "This book kept me HOOKED. I could not put this one down for a second. I really like the banter between Pip and Ravi, two of the main characters, and the plot. The first book was the best by far, though."
    },
    {
        "name": "Bluey",
        "author": "Joe Brumm",
        "type": "TV Show",
        "image": "images/bluey.jpg",
        "altText": "Image of Bluey main characters Bluey, Bingo, Mum, and Dad, standing together on a hill, with the title of the show above them.",
        "text": "A heartwarming Australian animated series about a Blue Heeler puppy and her family’s everyday adventures.",
        "opinion": "ABSOLUTELY THE CUTEST TV SHOW. If you ask anyone I know, I've probably made them watch this show, even though it's for kids. It's just perfectly funny and the animations are adorable."
    },
    {
        "name": "CHIHIRO",
        "author": "Billie Eilish",
        "type": "Music",
        "image": "images/chihiro.jpg",
        "altText": "Still image of Billie Eilish in the music video for CHIHIRO; Billie standing in front of the underside of a bridge, wearing a red and white sweater, with an overcast look.",
        "text": "Chihiro by Billie Eilish is a haunting, ethereal track from HIT ME HARD AND SOFT, blending dreamy production with introspective lyrics about longing and emotional distance.",
        "opinion": "My top played song on Spotify this year. I absolutely love all the vocals, the beat is just super unique, and it highlights Billie's diverse skill set. As a dancer, I really want to choreograph a piece to Chihiro."
    },
    {
        "name": "Ice Cream Man",
        "author": "Dyllan Blackburn",
        "type": "Dance",
        "image": "icecreamman.jpg",
        "altText": "Still image of Dyllan Blackburn performing Ice Cream Man, in a handstand with one leg extended and the other bent.",
        "text": "Dyllan Blackburn's lyical solo to the song \"Ice Cream Man\" by Raye.",
        "opinion": "I love this dance—Dyllan Blackburn has a phenomenal movement quality, and I think all of the tricks are performed so fluidly, which is something I appreciate in a piece. It also has a very powerful message."
    },
    {
        "name": "WandaVision",
        "author": "Jac Schaeffer",
        "type": "TV Show",
        "image": "images/wandavision.jpg",
        "altText": "Image of main character Wanda, framed by side characters Vision, Agatha Harkness, Monica Rambeau, and others.",
        "text": "A Marvel miniseries blending sitcom nostalgia with superhero intrigue and psychological depth.",
        "opinion": "The Scarlet Witch is one of my favorite Marvel superheros, because of this show. It's very creative, in how each episode is set in a different decade. Also, I like the mystery element, and find Wanda hilarious."
    },
    {
        "name": "Never Felt So Alone",
        "author": "Labrinth, Billie Eilish",
        "type": "Music",
        "image": "images/neverfeltsoalone.png",
        "altText": "Album cover for Ends & Begins by Labrinth, featuring Labrinth stadning in a clear booth, surrounded by blurry lights.",
        "text": "A melancholic song by Labrinth that explores themes of isolation and longing.",
        "opinion": "I first listened to this song when I learned a dance combination to it at a convention. Not surprisingly, it's lyrics and interesting dynamics was what hooked me. Also, I recently found out that Billie (my favorite) is featured on this track."
    },
    {
        "name": "Neko Atsume",
        "author": "Yutaka Takazaki",
        "type": "Game",
        "image": "images/nekoatsume.png",
        "altText": "App logo for Neko Atsume, with a white cat in the center of a yellow border.",
        "text": "A relaxing mobile game where players attract and collect adorable cats in a virtual yard.",
        "opinion": "I used to play this game on my shared iPad when I was little (8-9 yrs. old?). It's adorable, and I recently downloaded it. Unfortunately I'm allergic to cats, but this game is how I cope."
    }
]


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function openModal(imageSRC, index) {
    modal.style.display = "block";
    document.getElementById("modal-image").src = imageSRC;
    document.getElementById("piece-name").innerText = data[index].name;
    document.getElementById("type").innerText = data[index].type;
    document.getElementById("artist-name").innerText = data[index].author;
    document.getElementById("modal-image").src = data[index].image;
    document.getElementById("modal-image").alt = data[index].altText;
    document.getElementById("text").innerText = data[index].text;
    document.getElementById("opinion").innerText = data[index].opinion;
}

function closeModal() {
    modal.style.display = "none";
}

// btn.onclick = openModal('images/one.svg', data[0])

// span.onclick = closeModal()

// window.onclick = closeModal()