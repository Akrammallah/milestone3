const form = document.getElementById('resume-form') as HTMLFormElement;
const output = document.getElementById('resume-output') as HTMLOutputElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const resumeData:any
     = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        skills: formData.get('skills'),
        education: formData.get('education'),
        experience: formData.get('experience'),
    };

    const resumeHtml = `
    <h1>Personal Information </h1>
        <h1> Name:${resumeData.name}</h1>
        <p> Email:${resumeData.email} </p>
        <p> Phone:${resumeData.phone}</p>
        <h2>Skills</h2>
        <ul>
            ${resumeData.skills?.split(',').map((skill) => `<li>${skill.trim()}</li>`).join('') || ''}
        </ul>
        <h2>Education</h2>
        <p>${resumeData.education}</p>
        <h2>Experience</h2>
        <p>${resumeData.experience}</p>
    `;

    output.innerHTML = resumeHtml;
});

