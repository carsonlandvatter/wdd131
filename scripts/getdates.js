const currentYear = new Date().getFullYear();

const currentYearSpan = document.getElementById('currentyear');

if (currentYearSpan) {
    currentYearSpan.textContent = currentYear;
}