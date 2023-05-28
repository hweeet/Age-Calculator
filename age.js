function age() {
    let m1 = document.getElementById('month').value;
    let d1 = document.getElementById('date').value;
    let y1 = document.getElementById('year').value;

    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d1 = d1 + month[m2 -1];
        m2 = m2 -1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 -y1;

    return document.getElementById('age').innerHTML = `Your age is ${y} years, ${m} months, and ${d} days!`
};

const result = document.getElementById('clickMe');
const output= document.getElementById('age');

result.addEventListener("click", () => {
    const resultAge = age()
    output.innerHTML = resultAge
})