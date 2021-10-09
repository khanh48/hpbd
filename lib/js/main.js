document.addEventListener('DOMContentLoaded', function () {
    var a = document.querySelector('.no');
    var b = document.querySelector('.nut');
    var c = document.querySelector('.nd');
    var d = document.querySelector('.yes');
    var e = document.querySelector('.ib');
    var w = window.innerWidth - 150;
    var h = window.innerHeight - 100;
    a.onmousedown = function () {
        b.style.left = `${Random(0, w)}px`;
        b.style.top = `${Random(0, h)}px`;
        c.innerHTML = "Ơ sao lại hong, iu anh điii :<"
    }
    d.onmouseup = function () {
        c.innerHTML = "Awww yêu em,<br>nhắn tin cho anh đi nè <3";
        a.style.display = "none";
        d.style.display = "none";
        e.style.display = "unset";
    }
    function Random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    document.oncopy = function () {
        return false;
    }

    document.ondragstart = function () {
        return false;
    }

    document.onselectstart = function () {
        return false;
    }
    var count = 0;
    setInterval(starttimer, 1000);

    function starttimer() {
        count += 1;
        if (count == 15) {
            b.style.display = "unset";
        }
    }
})