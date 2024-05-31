function calculate() {
    const son1 = +document.getElementById('son1').value;
    const son2 = +document.getElementById('son2').value;
    const amal = +document.getElementById('amal').value;

    const javob1 = son1 + son2;
    const javob2 = son1 - son2;
    const javob3 = son1 * son2;
    const javob4 = son1 / son2;

    let dom;
    if (amal == 1) {
        dom = `${son1} + ${son2} = ${javob1}`;
    } else if (amal == 2) {
        dom = `${son1} - ${son2} = ${javob2}`;
    } else if (amal == 3) {
        dom = `${son1} * ${son2} = ${javob3}`;
    } else if (amal == 4) {
        dom = `${son1} / ${son2} = ${javob4}`;
    } else {
        dom = `Siz noto'g'ri raqam kiritdingiz. Siz 1 yoki 2 yoki 3 yoki 4 soni yozish kerak edi. Siz ${amal} sonini kiritdingiz.`;
    }

    let h1 = document.getElementById('result');
    h1.textContent = dom;
    h1.classList.add("animated-text");
}