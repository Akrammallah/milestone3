var form = document.getElementById('resume-form');
var output = document.getElementById('resume-output');
form.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault();
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        skills: formData.get('skills'),
        education: formData.get('education'),
        experience: formData.get('experience'),
    };
    var resumeHtml = "\n        <h1>".concat(resumeData.name, "</h1>\n        <p>").concat(resumeData.email, " | ").concat(resumeData.phone, "</p>\n        <h2>Skills</h2>\n        <ul>\n            ").concat(((_a = resumeData.skills) === null || _a === void 0 ? void 0 : _a.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('')) || '', "\n        </ul>\n        <h2>Education</h2>\n        <p>").concat(resumeData.education, "</p>\n        <h2>Experience</h2>\n        <p>").concat(resumeData.experience, "</p>\n    ");
    output.innerHTML = resumeHtml;
});
