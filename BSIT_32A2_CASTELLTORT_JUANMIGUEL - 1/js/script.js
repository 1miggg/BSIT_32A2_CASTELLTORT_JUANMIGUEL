function showHobbies() {
    const hobbies = ["Studying", "Playing Basketball", "Playing Computer/Video Games"];
    alert("MY HOBBIES:\n" + hobbies.join("\n"));
}


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Form Submitted!");
});
