document.addEventListener("DOMContentLoaded", function () { // Várakozás amíg a DOM teljesen betöltődik
    const szovegTarolo = document.getElementById("szovegTarolo"); // A szöveg tárolására szolgáló elem lekérése az ID alapján
    const szovegek = ["Oktató", "Programtervező informatikus", "Informatika tanár", "Tehetségfejlesztő tanár", "Egyéni vállalkozó"]; // A megjelenítendő szövegek tömbje
    let jelenlegiSzovegIndex = 0; // A jelenleg megjelenített szöveg indexe a szovegek tömbben
    let jelenlegiKarakterIndex = 0; // A jelenlegi karakter indexe a jelenlegi szövegben
    let torol = false; // Állapotjelző, hogy éppen törlés történik-e

    function szovegAnimacio() { // A szöveg animációját végző függvény
        const jelenlegiSzoveg = szovegek[jelenlegiSzovegIndex]; // A jelenleg megjelenítendő szöveg lekérése

        if (torol) { // Ha törlési fázisban vagyunk
            szovegTarolo.textContent = jelenlegiSzoveg.substring(0, jelenlegiKarakterIndex - 1); // Törlés a szöveg végéről
            jelenlegiKarakterIndex--; // Karakter index csökkentése
        } else { // Ha írási fázisban vagyunk
            szovegTarolo.textContent = jelenlegiSzoveg.substring(0, jelenlegiKarakterIndex + 1); // Szöveg hozzáadása karakterenként
            jelenlegiKarakterIndex++; // Karakter index növelése
        }

        if (!torol && jelenlegiKarakterIndex === jelenlegiSzoveg.length) { // Ha elértük a teljes szöveg végét írás közben
            torol = true; // Átváltunk törlési fázisra
            setTimeout(szovegAnimacio, 2000); // Várakozás mielőtt törölni kezd (2 másodperc)
        } else if (torol && jelenlegiKarakterIndex === 0) { // Ha teljesen töröltük a szöveget
            torol = false; // Átváltunk írási fázisra
            jelenlegiSzovegIndex = (jelenlegiSzovegIndex + 1) % szovegek.length; // Következő szöveg kiválasztása, ha az utolsónál tartunk, akkor vissza az elsőre
            setTimeout(szovegAnimacio, 100); // Várakozás mielőtt új szöveget kezd kiírni (0.1 másodperc)
        } else {
            setTimeout(szovegAnimacio, torol ? 50 : 100); // Várakozás mielőtt folytatjuk az animációt, gyorsabb törlés (0.05 másodperc) és lassabb írás (0.1 másodperc)
        }
    }

    szovegAnimacio(); // Az animáció elindítása
});


function Lathatosag(elemAzonosito) {
    // Lekéri az elemet az ID alapján
    const elem = document.getElementById(elemAzonosito);

    // Ellenőrzi, hogy az elem létezik-e
    if (!elem) {
        console.warn(`Az elem "${elemAzonosito}" nem található.`); // Figyelmeztetés, ha az elem nem található
        return; // Kilép a függvényből, ha az elem nem létezik
    }

    // Beállítja a stílusátmenetet az átlátszóságra és a magasságra
    elem.style.transition = "opacity 0.5s ease, height 0.5s ease";

    // Ellenőrzi, hogy az elem jelenleg látható-e (opacity 1) vagy sem (opacity 0)
    if (elem.style.opacity === "0" || elem.style.opacity === "") {
        // Ha az elem nem látható, megjeleníti azt
        elem.style.opacity = "1"; // Átlátszóságot visszaállítja 1-re (láthatóvá teszi)
        elem.style.height = `${elem.scrollHeight}px`; // Beállítja a magasságot az elem belső magasságára
    } else {
        // Ha az elem látható, elrejti azt
        elem.style.opacity = "0"; // Átlátszóságot 0-ra állítja (láthatatlanná teszi)
        elem.style.height = "0"; // Magasságot 0-ra állítja (összehúzza az elemet)
    }
}


//Végzettségek láthatóság eventjének meghívása
progtech.addEventListener('click', function () { Lathatosag('progtech_info') });
infotanar.addEventListener('click', function () { Lathatosag('infotanar_info') });
tehetsegtanar.addEventListener('click', function () { Lathatosag('tehetsegtanar_info') });

//Munkahelyek láthatóság eventjének meghívása
umszki.addEventListener('click', function () { Lathatosag('umszki_info') });
bolyai.addEventListener('click', function () { Lathatosag('bolyai_info') });
ruander.addEventListener('click', function () { Lathatosag('ruander_info') });
eke.addEventListener('click', function () { Lathatosag('eke_info') });
liska.addEventListener('click', function () { Lathatosag('liska_info') });
terplan.addEventListener('click', function () { Lathatosag('terplan_info') });



//Programozási ismeretek, kártyák eventjének meghívása
document.getElementById('pythoncard').addEventListener('click', function () {
    this.classList.toggle('flip');
});

document.getElementById('html5card').addEventListener('click', function () {
    this.classList.toggle('flip');
});

document.getElementById('css3card').addEventListener('click', function () {
    this.classList.toggle('flip');
});
document.getElementById('bootstrap5card').addEventListener('click', function () {
    this.classList.toggle('flip');
});

document.getElementById('javascriptcard').addEventListener('click', function () {
    this.classList.toggle('flip');
});

document.getElementById('jquerycard').addEventListener('click', function () {
    this.classList.toggle('flip');
});

document.getElementById('typescriptcard').addEventListener('click', function () {
    this.classList.toggle('flip');
});

document.getElementById('mongodbcard').addEventListener('click', function () {
    this.classList.toggle('flip');
});

document.getElementById('angularcard').addEventListener('click', function () {
    this.classList.toggle('flip');
});

document.getElementById('csharpcard').addEventListener('click', function () {
    this.classList.toggle('flip');
});

document.getElementById('mysqlcard').addEventListener('click', function () {
    this.classList.toggle('flip');
});

document.getElementById('phpcard').addEventListener('click', function () {
    this.classList.toggle('flip');
});

//Tulajdonságok eseményeinek meghívása
preciz.addEventListener('click', function () { Lathatosag('preciz_info') });
kommunikacio.addEventListener('click', function () { Lathatosag('kommunikacio_info') });
tanulas.addEventListener('click', function () { Lathatosag('tanulas_info') });