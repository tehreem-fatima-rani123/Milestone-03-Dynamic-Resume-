//  listing element
//  document.getElementById('resueForm')?.addEventListener('submit', function (event) {
//     event.preventDefault();
//     // type assertion\
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;    
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLInputElement;
//     const experienceElement = document.getElementById('experience') as HTMLInputElement;
//     const skillsElement = document.getElementById('skills') as HTMLInputElement;
// if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement ) {
//     const name  =  nameElement.value;
//     const email =  emailElement.value;
//     const phone = phoneElement.value;
//     const education =educationElement .value;
//     const experience =experienceElement .value;
//     const skills = skillsElement.value;
//       // create resume output
//       const resumeOutput = `
//       <h2>Resume</h2>
//       <p><strong>Name:</strong>  ${name} </p>
//       <p><strong>email:</strong>  ${email} </p>
//       <p><strong>Phone Number:</strong>  ${phone} </p>
//       <h3>Education</h3>
//       <p> ${education} </p>
//       <h3>Experience</h3>
//       <p>${experience} </p>
//       <h3>Skills</h3>
//       <p> ${skills} </p>
//     `;
//     const resumeOutputElement = document.getElementById('resumeOutput')
// if (resumeOutputElement){
//     resumeOutputElement.innerHTML = resumeOutput
// } else {
//     console.error('the resume output elements are missing ')
// }
// } else {
//     console.error('one or more output elements are missing ')
// }
// })
var forma = document.getElementById('resumeForm');
var resumeDisplayElemente = document.getElementById('resumeOutput');
forma.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Informtion</h3>\n<p><b>Name: </b>".concat(name, "</o>\n<p><b>Email: </b>").concat(email, "</o>\n<p><b>Phone: </b>").concat(phone, "</o>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experiences</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
    if (resumeDisplayElemente) {
        resumeDisplayElemente.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume output elements are missing');
    }
});
