const resume = {
    "name": "celso",
    "contact": {
        "email": "celso@example.com",
        "phone": "12345678",
        "address": "sample address"
    },
    "summary": "Experienced software developer with a strong background in web development. Skilled in JavaScript, HTML, CSS, and various web frameworks. Passionate about creating efficient and user-friendly web applications.",
    "education": [
        {
            "degree": "Master of computer application",
            "school": "University of Example",
            "year": "2012"
        }
    ],
    "experience": [
        {
            "title": "example web developer",
            "company": "example company",
            "startDate": "2016-01-01",
            "endDate": "2022-12-31",
            "responsibilities": [
                "Developed and maintained web applications"
            ]
        },
        
    ],
    "skills": [
        "JavaScript",
        "HTML",
        "CSS"
        
    ]
};

for (let key in resume) {
    if (resume.hasOwnProperty(key)) {
        console.log(key + ": " + JSON.stringify(resume[key]));
    }
}