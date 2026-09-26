const targetDate = new Date(
    "2026-11-14 00:00:00"
).getTime();


/* ==============================
   COUNTDOWN
============================== */

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerText = "0";
        document.getElementById("hours").innerText = "0";
        document.getElementById("minutes").innerText = "0";
        document.getElementById("seconds").innerText = "0";

        clearInterval(countdown);

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}, 1000);


/* ==============================
   PINDAH HALAMAN
============================== */

function nextPage(namaPage) {

    document.querySelectorAll(".page").forEach(function(page) {

        page.classList.remove("active");

    });

    document.getElementById(namaPage).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function explodePhotos() {

    const explosion =
        document.querySelector(".photo-explosion");

    if (!explosion) {
        return;
    }

    if (explosion.classList.contains("open")) {
        return;
    }

    const photos =
        explosion.querySelectorAll(".explode-photo");

    const count = photos.length;

    const isMobile =
        window.innerWidth <= 600;

    const radius =
        isMobile ? 145 : 250;

    photos.forEach(function(photo, index) {

        const angle =
            (Math.PI * 2 * index / count)
            - Math.PI / 2;

        const x =
            Math.cos(angle) * radius;

        const y =
            Math.sin(angle) * radius * 0.75;

        const rotate =
            (index % 2 === 0 ? -1 : 1) *
            (8 + (index % 4) * 4);

        const delay =
            index * 0.06;

        photo.style.setProperty(
            "--x",
            x + "px"
        );

        photo.style.setProperty(
            "--y",
            y + "px"
        );

        photo.style.setProperty(
            "--rotate",
            rotate + "deg"
        );

        photo.style.setProperty(
            "--delay",
            delay + "s"
        );

    });

    explosion.classList.add("open");

}

function startMusic() {
    const music = document.getElementById("bgMusic");

    music.currentTime = 0;
    music.play();
}