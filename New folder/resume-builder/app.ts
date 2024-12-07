declare const html2pdf: any;

//! form and resume display elements
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLElement;
const shareButton = document.getElementById("shareButton") as HTMLButtonElement;
const downloadButton = document.getElementById(
  "downloadButton"
) as HTMLButtonElement;

//! getting input fields
const nameInput = document.getElementById("nameInput") as HTMLInputElement;
const phoneInput = document.getElementById("phoneInput") as HTMLInputElement;
const emailInput = document.getElementById("emailInput") as HTMLInputElement;
const addressInput = document.getElementById(
  "addressInput"
) as HTMLInputElement;
const schoolInput = document.getElementById("schoolInput") as HTMLInputElement;
const degreeInput = document.getElementById("degree") as HTMLSelectElement;
const startYear = document.getElementById(
  "start-yearInput"
) as HTMLInputElement;
const endYear = document.getElementById("end-yearInput") as HTMLInputElement;
const selectSkills = document.getElementById("skills") as HTMLSelectElement;
const company = document.getElementById("companyInput") as HTMLInputElement;
const startTime = document.getElementById(
  "start-timeInput"
) as HTMLInputElement;
const endTime = document.getElementById("end-timeInput") as HTMLInputElement;
const jobRole = document.getElementById("job-role") as HTMLSelectElement;
const previousJob = document.getElementById(
  "PeviousjobtInput"
) as HTMLInputElement;
const experience = document.getElementById(
  "experienceInput"
) as HTMLTextAreaElement;
const project = document.getElementById("projectInput") as HTMLInputElement;
const projectDescription = document.getElementById(
  "projecttextInput"
) as HTMLTextAreaElement;
const project2 = document.getElementById("projectInput2") as HTMLInputElement;
const projectDescription2 = document.getElementById(
  "projecttextInput2"
) as HTMLTextAreaElement;
const project3 = document.getElementById("projectInput3") as HTMLInputElement;
const projectDescription3 = document.getElementById(
  "projecttextInput3"
) as HTMLTextAreaElement;
const profileImageInput = document.getElementById(
  "profileImageInput"
) as HTMLInputElement;
const wordLimitWarning = document.getElementById(
  "wordLimitWarning"
) as HTMLParagraphElement;
const wordCounter = document.getElementById("wordCounter") as HTMLDivElement;
const wordLimitWarning2 = document.getElementById(
  "wordLimitWarning2"
) as HTMLParagraphElement;
const wordCounter2 = document.getElementById("wordCounter2") as HTMLDivElement;
const wordLimitWarning3 = document.getElementById(
  "wordLimitWarning3"
) as HTMLParagraphElement;
const wordCounter3 = document.getElementById("wordCounter3") as HTMLDivElement;
const wordLimitWarning4 = document.getElementById(
  "wordLimitWarning4"
) as HTMLParagraphElement;
const wordCounter4 = document.getElementById("wordCounter4") as HTMLDivElement;
const skillsDropdown = document.getElementById("skills") as HTMLSelectElement;
const selectedSkillsContainer = document.getElementById(
  "selectedSkillsContainer"
) as HTMLDivElement;
const skillList = document.getElementById("skillList") as HTMLDivElement;

// ! hide share and download button initially
shareButton.style.display = "none";
downloadButton.style.display = "none";

//! display elements
const nameDisplay = document.getElementById("name") as HTMLElement;
const jobRoleDisplay = document.getElementById("jobRole") as HTMLElement;
const addressDisplay = document.getElementById("address") as HTMLElement;
const phoneDisplay = document.getElementById("phone") as HTMLElement;
const emailDisplay = document.getElementById("email") as HTMLElement;
const schoolDisplay = document.getElementById("school") as HTMLElement;
const syearDisplay = document.getElementById("syear") as HTMLElement;
const eyearDisplay = document.getElementById("eyear") as HTMLElement;
const degreeDisplay = document.getElementById("degrees") as HTMLElement;
const skillDisplay = document.getElementById("skills") as HTMLElement;
const companyNameDisplay = document.getElementById("company") as HTMLElement;
const previousjobDisplay = document.getElementById("Peviousjob") as HTMLElement;
const stimeDisplay = document.getElementById("stime") as HTMLElement;
const etimeDisplay = document.getElementById("etime") as HTMLElement;
const workExpDisplay = document.getElementById("workExp") as HTMLElement;
const projectName = document.getElementById("projName") as HTMLElement;
const projectDisplay = document.getElementById("projWork") as HTMLElement;
const projectName2 = document.getElementById("projName2") as HTMLElement;
const projectDisplay2 = document.getElementById("projWork2") as HTMLElement;
const projectName3 = document.getElementById("projName3") as HTMLElement;
const projectDisplay3 = document.getElementById("projWork3") as HTMLElement;
const profileImageDisplay = document.getElementById(
  "profile-image"
) as HTMLImageElement;

// ! toggling skill section
function toggleSkills(): void {
  const skillsSection = document.getElementById("selectedSkillsContainer")!;
  const toggleBtn = document.getElementById(
    "toggle-skills-btn"
  ) as HTMLButtonElement;

  if (skillsSection.style.display === "none") {
    skillsSection.style.display = "block";
    toggleBtn.innerText = "Hide Skills";
  } else {
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
let selectedSkills: string[] = [];

function updateSkillDisplay() {
  const skillElements = Array.from(selectedSkillsContainer.children).map(
    (skillBox) => {
      const skill = skillBox.textContent?.replace(" x", "").trim();
      return `<span class="skill-badge">${skill}</span>`;
    }
  );
  skillList.innerHTML = skillElements.join(", ");
}

function addSkill(skill: string) {
  let skillExists = false;
  for (let i = 0; i < selectedSkillsContainer.children.length; i++) {
    if (selectedSkillsContainer.children[i].textContent?.includes(skill)) {
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
function removeSkill(button: HTMLElement) {
  button.parentElement?.remove();
  updateSkillDisplay();
}

(window as any).removeSkill = removeSkill;

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
  } else {
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
  } else {
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
  } else {
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
  } else {
    wordLimitWarning4.style.display = "none";
  }
});

//! Handle form submission to generate resume
resumeForm.addEventListener("submit", function (event) {
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
  const selectedSkills = Array.from(selectedSkillsContainer.children).map(
    (skillBox) => skillBox.textContent?.replace(" x", "").trim()
  );

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

  const profileImageFile = profileImageInput.files?.[0];
  if (profileImageFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImageDisplay.src = e.target?.result as string;
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
function createShareableLink(): string {
  const selectedSkills = Array.from(selectedSkillsContainer.children).map(
    (skillBox) => skillBox.textContent?.replace(" x", "").trim() || ""
  );
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

  return `${window.location.origin}${
    window.location.pathname
  }?${params.toString()}`;
}

//! event listener for the Share button
shareButton.addEventListener("click", async function () {
  const shareableLink = createShareableLink();

  try {
    await navigator.clipboard.writeText(shareableLink);
    alert("Resume link copied to clipboard!");
  } catch (error) {
    console.error("Could not copy using Clipboard API", error);

    const tempInput = document.createElement("input");
    tempInput.value = shareableLink;
    document.body.appendChild(tempInput);
    tempInput.select();

    try {
      document.execCommand("copy");
      alert("Resume link copied to clipboard!");
    } catch (fallbackError) {
      console.error("Fallback copy failed", fallbackError);
      alert("Unable to copy the link. Please try copying manually.");
    }

    document.body.removeChild(tempInput);
  }
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

function renderSkills(skills: string[]) {
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
    .map((skillBox) => skillBox.textContent?.replace(" x", "").trim() || "")
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
    .catch((error: Error) => {
      console.error("PDF generation error:", error);
    });
});

// ! query parameters on page load
window.addEventListener("DOMContentLoaded", () => {
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

  if (
    name ||
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
    desProj3
  ) {
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
    document.querySelector(".container")?.classList.add("hidden");
    resumeDisplay.classList.remove("hidden");
  }
});

// ! ----------------------------------------- THE END ------------------------------------------------ //
