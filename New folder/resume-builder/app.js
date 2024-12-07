"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//! form and resume display elements
const resumeForm = document.getElementById("resumeForm");
const resumeDisplay = document.getElementById("resume-display");
const shareButton = document.getElementById("shareButton");
const downloadButton = document.getElementById("downloadButton");
//! getting input fields
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const emailInput = document.getElementById("emailInput");
const addressInput = document.getElementById("addressInput");
const schoolInput = document.getElementById("schoolInput");
const degreeInput = document.getElementById("degree");
const startYear = document.getElementById("start-yearInput");
const endYear = document.getElementById("end-yearInput");
const selectSkills = document.getElementById("skills");
const company = document.getElementById("companyInput");
const startTime = document.getElementById("start-timeInput");
const endTime = document.getElementById("end-timeInput");
const jobRole = document.getElementById("job-role");
const previousJob = document.getElementById("PeviousjobtInput");
const experience = document.getElementById("experienceInput");
const project = document.getElementById("projectInput");
const projectDescription = document.getElementById("projecttextInput");
const project2 = document.getElementById("projectInput2");
const projectDescription2 = document.getElementById("projecttextInput2");
const project3 = document.getElementById("projectInput3");
const projectDescription3 = document.getElementById("projecttextInput3");
const profileImageInput = document.getElementById("profileImageInput");
const wordLimitWarning = document.getElementById("wordLimitWarning");
const wordCounter = document.getElementById("wordCounter");
const wordLimitWarning2 = document.getElementById("wordLimitWarning2");
const wordCounter2 = document.getElementById("wordCounter2");
const wordLimitWarning3 = document.getElementById("wordLimitWarning3");
const wordCounter3 = document.getElementById("wordCounter3");
const wordLimitWarning4 = document.getElementById("wordLimitWarning4");
const wordCounter4 = document.getElementById("wordCounter4");
const skillsDropdown = document.getElementById("skills");
const selectedSkillsContainer = document.getElementById("selectedSkillsContainer");
const skillList = document.getElementById("skillList");
// ! hide share and download button initially
shareButton.style.display = "none";
downloadButton.style.display = "none";
//! display elements
const nameDisplay = document.getElementById("name");
const jobRoleDisplay = document.getElementById("jobRole");
const addressDisplay = document.getElementById("address");
const phoneDisplay = document.getElementById("phone");
const emailDisplay = document.getElementById("email");
const schoolDisplay = document.getElementById("school");
const syearDisplay = document.getElementById("syear");
const eyearDisplay = document.getElementById("eyear");
const degreeDisplay = document.getElementById("degrees");
const skillDisplay = document.getElementById("skills");
const companyNameDisplay = document.getElementById("company");
const previousjobDisplay = document.getElementById("Peviousjob");
const stimeDisplay = document.getElementById("stime");
const etimeDisplay = document.getElementById("etime");
const workExpDisplay = document.getElementById("workExp");
const projectName = document.getElementById("projName");
const projectDisplay = document.getElementById("projWork");
const projectName2 = document.getElementById("projName2");
const projectDisplay2 = document.getElementById("projWork2");
const projectName3 = document.getElementById("projName3");
const projectDisplay3 = document.getElementById("projWork3");
const profileImageDisplay = document.getElementById("profile-image");
// ! toggling skill section
function toggleSkills() {
    const skillsSection = document.getElementById("selectedSkillsContainer");
    const toggleBtn = document.getElementById("toggle-skills-btn");
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleBtn.innerText = "Hide Skills";
    }
    else {
        skillsSection.style.display = "none";
        toggleBtn.innerText = "Show Skills";
    }
}
//! function to make resume fields editable
const makeContentEditable = () => {
    nameDisplay.setAttribute("contenteditable", "true");
    jobRoleDisplay.setAttribute("contenteditable", "true");
    addressDisplay.setAttribute("contenteditable", "true");
    phoneDisplay.setAttribute("contenteditable", "true");
    emailDisplay.setAttribute("contenteditable", "true");
    schoolDisplay.setAttribute("contenteditable", "true");
    syearDisplay.setAttribute("contenteditable", "true");
    eyearDisplay.setAttribute("contenteditable", "true");
    degreeDisplay.setAttribute("contenteditable", "true");
    skillDisplay.setAttribute("contenteditable", "true");
    companyNameDisplay.setAttribute("contenteditable", "true");
    stimeDisplay.setAttribute("contenteditable", "true");
    etimeDisplay.setAttribute("contenteditable", "true");
    workExpDisplay.setAttribute("contenteditable", "true");
    previousjobDisplay.setAttribute("contenteditable", "true");
    projectName.setAttribute("contenteditable", "true");
    projectDisplay.setAttribute("contenteditable", "true");
    projectName2.setAttribute("contenteditable", "true");
    projectDisplay2.setAttribute("contenteditable", "true");
    projectName3.setAttribute("contenteditable", "true");
    projectDisplay3.setAttribute("contenteditable", "true");
};
// ! enable resume preview filds editable
const editableElements = [
    nameDisplay,
    jobRoleDisplay,
    addressDisplay,
    phoneDisplay,
    emailDisplay,
    schoolDisplay,
    syearDisplay,
    eyearDisplay,
    degreeDisplay,
    skillDisplay,
    previousjobDisplay,
    companyNameDisplay,
    stimeDisplay,
    etimeDisplay,
    workExpDisplay,
    projectName,
    projectDisplay,
    projectName2,
    projectDisplay2,
    projectName3,
    projectDisplay3,
];
editableElements.forEach((element) => {
    element.addEventListener("click", function () {
        if (element.contentEditable !== "true") {
            element.contentEditable = "true";
        }
    });
});
// ! skill dropdown elements
let selectedSkills = [];
function updateSkillDisplay() {
    const skillElements = Array.from(selectedSkillsContainer.children).map((skillBox) => {
        var _a;
        const skill = (_a = skillBox.textContent) === null || _a === void 0 ? void 0 : _a.replace(" x", "").trim();
        return `<span class="skill-badge">${skill}</span>`;
    });
    skillList.innerHTML = skillElements.join(", ");
}
function addSkill(skill) {
    var _a;
    let skillExists = false;
    for (let i = 0; i < selectedSkillsContainer.children.length; i++) {
        if ((_a = selectedSkillsContainer.children[i].textContent) === null || _a === void 0 ? void 0 : _a.includes(skill)) {
            skillExists = true;
            break;
        }
    }
    if (!skillExists) {
        const skillBox = document.createElement("div");
        skillBox.className = "skill-box";
        skillBox.innerHTML = `${skill} <button onclick="removeSkill(this)">x</button>`;
        selectedSkillsContainer.appendChild(skillBox);
        updateSkillDisplay();
    }
}
//! function to remove skill
function removeSkill(button) {
    var _a;
    (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    updateSkillDisplay();
}
window.removeSkill = removeSkill;
//! Event listener for dropdown selection to add skill
skillsDropdown.addEventListener("change", function () {
    const selectedSkill = skillsDropdown.value;
    if (selectedSkill) {
        addSkill(selectedSkill);
    }
    skillsDropdown.value = "";
});
//! word limit for experience input
const maxWords = 40;
experience.addEventListener("input", () => {
    const words = experience.value.trim().split(/\s+/); //! split by whitespace
    wordCounter.textContent = `${Math.min(words.length, maxWords)}/${maxWords}`;
    //! Check if word limit exceed
    if (words.length > maxWords) {
        wordLimitWarning.style.display = "block";
        experience.value = words.slice(0, maxWords).join(" ");
        wordCounter.textContent = `${maxWords}/${maxWords}`;
    }
    else {
        wordLimitWarning.style.display = "none";
    }
});
projectDescription.addEventListener("input", () => {
    const words2 = projectDescription.value.trim().split(/\s+/); //! split by whitespace
    wordCounter2.textContent = `${Math.min(words2.length, maxWords)}/${maxWords}`;
    //! Check if word limit exceed
    if (words2.length > maxWords) {
        wordLimitWarning2.style.display = "block";
        projectDescription.value = words2.slice(0, maxWords).join(" ");
        wordCounter2.textContent = `${maxWords}/${maxWords}`;
    }
    else {
        wordLimitWarning2.style.display = "none";
    }
});
projectDescription2.addEventListener("input", () => {
    const words3 = projectDescription2.value.trim().split(/\s+/); //! split by whitespace
    wordCounter3.textContent = `${Math.min(words3.length, maxWords)}/${maxWords}`;
    //! Check if word limit exceed
    if (words3.length > maxWords) {
        wordLimitWarning3.style.display = "block";
        projectDescription2.value = words3.slice(0, maxWords).join(" ");
        wordCounter3.textContent = `${maxWords}/${maxWords}`;
    }
    else {
        wordLimitWarning3.style.display = "none";
    }
});
projectDescription3.addEventListener("input", () => {
    const words4 = projectDescription3.value.trim().split(/\s+/); //! split by whitespace
    wordCounter4.textContent = `${Math.min(words4.length, maxWords)}/${maxWords}`;
    //! Check if word limit exceed
    if (words4.length > maxWords) {
        wordLimitWarning4.style.display = "block";
        projectDescription3.value = words4.slice(0, maxWords).join(" ");
        wordCounter4.textContent = `${maxWords}/${maxWords}`;
    }
    else {
        wordLimitWarning4.style.display = "none";
    }
});
//! Handle form submission to generate resume
resumeForm.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //! update resume display with form values
    nameDisplay.textContent = nameInput.value;
    jobRoleDisplay.textContent = jobRole.value;
    addressDisplay.textContent = addressInput.value;
    phoneDisplay.textContent = phoneInput.value;
    emailDisplay.textContent = emailInput.value;
    schoolDisplay.textContent = schoolInput.value;
    syearDisplay.textContent = startYear.value;
    eyearDisplay.textContent = endYear.value;
    degreeDisplay.textContent = degreeInput.value;
    skillList.innerHTML = "";
    //! skills in comma separated format
    const selectedSkills = Array.from(selectedSkillsContainer.children).map((skillBox) => { var _a; return (_a = skillBox.textContent) === null || _a === void 0 ? void 0 : _a.replace(" x", "").trim(); });
    //! skill boxes
    selectedSkills.forEach((skill) => {
        const skillElement = document.createElement("span");
        skillElement.className = "skill";
        skillElement.textContent = skill || "";
        skillList.appendChild(skillElement);
    });
    companyNameDisplay.textContent = company.value;
    stimeDisplay.textContent = startTime.value;
    etimeDisplay.textContent = endTime.value;
    previousjobDisplay.textContent = previousJob.value;
    workExpDisplay.textContent = experience.value;
    projectName.textContent = project.value;
    projectDisplay.textContent = projectDescription.value;
    projectName2.textContent = project2.value;
    projectDisplay2.textContent = projectDescription2.value;
    projectName3.textContent = project3.value;
    projectDisplay3.textContent = projectDescription3.value;
    const profileImageFile = (_a = profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (profileImageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImageDisplay.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profileImageFile);
    }
    resumeDisplay.style.display = "block";
    resumeForm.style.display = "none";
    shareButton.style.display = "block";
    downloadButton.style.display = "block";
    makeContentEditable();
});
//! share button functionality
function createShareableLink() {
    const selectedSkills = Array.from(selectedSkillsContainer.children).map((skillBox) => { var _a; return ((_a = skillBox.textContent) === null || _a === void 0 ? void 0 : _a.replace(" x", "").trim()) || ""; });
    const params = new URLSearchParams({
        name: nameDisplay.textContent || "",
        jobrole: jobRoleDisplay.textContent || "",
        address: addressDisplay.textContent || "",
        phone: phoneDisplay.textContent || "",
        email: emailDisplay.textContent || "",
        degree: degreeDisplay.textContent || "",
        school: schoolDisplay.textContent || "",
        syr: syearDisplay.textContent || "",
        eyr: eyearDisplay.textContent || "",
        skills: selectedSkills.join(","),
        skilldis: skillDisplay.textContent || "",
        preJob: previousjobDisplay.textContent || "",
        companyName: companyNameDisplay.textContent || "",
        stm: stimeDisplay.textContent || "",
        etm: etimeDisplay.textContent || "",
        workDis: workExpDisplay.textContent || "",
        projDis: projectName.textContent || "",
        projectDes: projectDisplay.textContent || "",
        projDis2: projectName2.textContent || "",
        projectDes2: projectDisplay2.textContent || "",
        projDis3: projectName3.textContent || "",
        projectDes3: projectDisplay3.textContent || "",
    });
    const photoBase64 = profileImageDisplay.src;
    localStorage.setItem("resumePhoto", photoBase64);
    return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
}
//! event listener for the Share button
shareButton.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const shareableLink = createShareableLink();
        try {
            yield navigator.clipboard.writeText(shareableLink);
            alert("Resume link copied to clipboard!");
        }
        catch (error) {
            console.error("Could not copy using Clipboard API", error);
            const tempInput = document.createElement("input");
            tempInput.value = shareableLink;
            document.body.appendChild(tempInput);
            tempInput.select();
            try {
                document.execCommand("copy");
                alert("Resume link copied to clipboard!");
            }
            catch (fallbackError) {
                console.error("Fallback copy failed", fallbackError);
                alert("Unable to copy the link. Please try copying manually.");
            }
            document.body.removeChild(tempInput);
        }
    });
});
// ! query parameters
window.addEventListener("load", function () {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("name")) {
        nameDisplay.textContent = urlParams.get("name") || "";
        jobRoleDisplay.textContent = urlParams.get("jobrole") || "";
        addressDisplay.textContent = urlParams.get("address") || "";
        phoneDisplay.textContent = urlParams.get("phone") || "";
        emailDisplay.textContent = urlParams.get("email") || "";
        degreeDisplay.textContent = urlParams.get("degree") || "";
        schoolDisplay.textContent = urlParams.get("school") || "";
        syearDisplay.textContent = urlParams.get("syr") || "";
        eyearDisplay.textContent = urlParams.get("eyr") || "";
        const skillsFromURL = urlParams.get("skills") || "";
        const skillsArray = skillsFromURL ? skillsFromURL.split(",") : [];
        renderSkills(skillsArray);
        previousjobDisplay.textContent = urlParams.get("preJob") || "";
        companyNameDisplay.textContent = urlParams.get("companyName") || "";
        stimeDisplay.textContent = urlParams.get("stm") || "";
        etimeDisplay.textContent = urlParams.get("etm") || "";
        workExpDisplay.textContent = urlParams.get("workDis") || "";
        projectName.textContent = urlParams.get("projDis") || "";
        projectDisplay.textContent = urlParams.get("projectDes") || "";
        projectName2.textContent = urlParams.get("projDis2") || "";
        projectDisplay2.textContent = urlParams.get("projectDes2") || "";
        projectName3.textContent = urlParams.get("projDis3") || "";
        projectDisplay3.textContent = urlParams.get("projectDes3") || "";
        const savedPhoto = localStorage.getItem("resumePhoto");
        if (savedPhoto) {
            profileImageDisplay.src = savedPhoto;
        }
        //! Show the resume display and hide the form
        resumeDisplay.style.display = "flex";
        resumeForm.style.display = "none";
        //! Show the share and download buttons
        shareButton.style.display = "block";
        downloadButton.style.display = "block";
    }
});
function renderSkills(skills) {
    skillList.innerHTML = "";
    if (skills.length) {
        skills.forEach((skill) => {
            const skillElement = document.createElement("span");
            skillElement.className = "skill";
            skillElement.textContent = skill;
            skillList.appendChild(skillElement);
        });
    }
}
//! download resume functionality
downloadButton.addEventListener("click", () => {
    if (typeof html2pdf === "undefined") {
        alert("Error: html2pdf library is not loaded.");
        return;
    }
    const selectedSkills = Array.from(selectedSkillsContainer.children)
        .map((skillBox) => { var _a; return ((_a = skillBox.textContent) === null || _a === void 0 ? void 0 : _a.replace(" x", "").trim()) || ""; })
        .join(", ");
    skillDisplay.textContent = `Skills: ${selectedSkills}`;
    const resumeOptions = {
        margin: 0.5,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 1.0 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    //! generate and download reaume
    html2pdf()
        .from(resumeDisplay)
        .set(resumeOptions)
        .save()
        .catch((error) => {
        console.error("PDF generation error:", error);
    });
});
// ! query parameters on page load
window.addEventListener("DOMContentLoaded", () => {
    var _a;
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name") || "";
    const email = params.get("email") || "";
    const phone = params.get("phone") || "";
    const degree = params.get("degrees") || "";
    const school = params.get("school") || "";
    const startYear = params.get("syear") || "";
    const endYear = params.get("eyear") || "";
    const skill = params.get("skills") || "";
    const job = params.get("jobRole") || "";
    const Jobpre = params.get("Peviousjob") || "";
    const company = params.get("company") || "";
    const startTime = params.get("stime") || "";
    const endTime = params.get("etime") || "";
    const experience = params.get("workExp") || "";
    const NameProj = params.get("projName") || "";
    const desProj = params.get("projWork") || "";
    const NameProj2 = params.get("projName2") || "";
    const desProj2 = params.get("projWork2") || "";
    const NameProj3 = params.get("projName3") || "";
    const desProj3 = params.get("projWork3") || "";
    if (name ||
        email ||
        phone ||
        degree ||
        school ||
        startYear ||
        endYear ||
        skill ||
        job ||
        company ||
        startTime ||
        endTime ||
        Jobpre ||
        experience ||
        NameProj ||
        desProj ||
        NameProj2 ||
        desProj2 ||
        NameProj3 ||
        desProj3) {
        nameDisplay.textContent = name;
        emailDisplay.textContent = `Email: ${email}`;
        phoneDisplay.textContent = `Phone: ${phone}`;
        degreeDisplay.textContent = `degree: ${degree}`;
        schoolDisplay.textContent = `school: ${school}`;
        syearDisplay.textContent = `startYear: ${startYear}`;
        eyearDisplay.textContent = `endYear: ${endYear}`;
        skillDisplay.textContent = `skill: ${skill}`;
        jobRoleDisplay.textContent = `jobRole: ${job}`;
        previousjobDisplay.textContent = `previousJob: ${Jobpre}`;
        companyNameDisplay.textContent = `companyName: ${company}`;
        stimeDisplay.textContent = `startTime: ${startTime}`;
        etimeDisplay.textContent = `endTime: ${endTime}`;
        workExpDisplay.textContent = `experience: ${experience}`;
        projectName.textContent = `projectName: ${NameProj}`;
        projectDisplay.textContent = `projectDisplay: ${desProj}`;
        projectName2.textContent = `projectName: ${NameProj2}`;
        projectDisplay2.textContent = `projectDisplay: ${desProj2}`;
        projectName3.textContent = `projectName: ${NameProj3}`;
        projectDisplay3.textContent = `projectDisplay: ${desProj3}`;
        const savedPhoto = localStorage.getItem("resumePhoto");
        if (savedPhoto) {
            profileImageDisplay.src = savedPhoto;
        }
        // ! hide form and show resume preview
        (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
        resumeDisplay.classList.remove("hidden");
    }
});
// ! ----------------------------------------- THE END ------------------------------------------------ //
