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

//  if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement ) {

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



const form1= document.getElementById('resumeForm') as HTMLFormElement ;
const resumeDisplayElement1 = document.getElementById('resumeOutput') as HTMLDivElement;

form1.addEventListener('submit' , (event: Event) => {
    event.preventDefault();
    




    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value


const resumeHTML = `
<h2><b>Resume</b></h2>
<h3>Personal Informtion</h3>
<p><b>Name: </b>${name}</o>
<p><b>Email: </b>${email}</o>
<p><b>Phone: </b>${phone}</o>

<h3>Education</h3>
<p>${education}</p>

<h3>Experiences</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;
if(resumeDisplayElement1){
    resumeDisplayElement1.innerHTML = resumeHTML;

}else {
    console.error('the resume output elements are missing')
}
});







