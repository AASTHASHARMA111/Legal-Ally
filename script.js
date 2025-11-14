document.addEventListener("DOMContentLoaded", function () {
    // File upload functionality
    document.querySelector(".file-label").addEventListener("click", function () {
        document.getElementById("fileUpload").click();
    });

    document.getElementById("fileUpload").addEventListener("change", function () {
        if (this.files.length > 0) {
            document.querySelector(".file-label").textContent = "File Selected: " + this.files[0].name;
        }
    });

    // Submit button functionality
    document.querySelector(".submit-btn").addEventListener("click", function () {
        alert("Form Submitted Successfully!");
    });
});
