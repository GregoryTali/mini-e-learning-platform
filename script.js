// Course Data
const courses = [
  {
    id: 1,
    title: "HTML Basics",
    description: "Learn how to structure web pages using HTML elements.",
    lessons: ["Introduction to HTML", "Tags and Attributes", "Creating Lists and Links"]
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    description: "Style your web pages with colors, layouts, and typography.",
    lessons: ["Selectors and Properties", "The Box Model", "Flexbox and Grid"]
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    description: "Make web pages interactive using JavaScript.",
    lessons: ["Variables and Data Types", "Functions and Events", "DOM Manipulation"]
  }
];

const courseList = document.getElementById("course-list");
const courseDetail = document.getElementById("course-detail");
const homeSection = document.getElementById("home");
const backBtn = document.getElementById("back-btn");
const completeBtn = document.getElementById("complete-btn");

const courseTitle = document.getElementById("course-title");
const courseDescription = document.getElementById("course-description");
const lessonList = document.getElementById("lesson-list");

// Display all courses
function displayCourses() {
  courseList.innerHTML = "";
  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
    `;
    card.addEventListener("click", () => showCourseDetail(course));
    courseList.appendChild(card);
  });
}

// Show course details
function showCourseDetail(course) {
  homeSection.classList.add("hidden");
  courseDetail.classList.remove("hidden");

  courseTitle.textContent = course.title;
  courseDescription.textContent = course.description;

  lessonList.innerHTML = "";
  course.lessons.forEach(lesson => {
    const li = document.createElement("li");
    li.textContent = lesson;
    lessonList.appendChild(li);
  });

  // Update completion button
  const completed = localStorage.getItem(`course-${course.id}-completed`);
  if (completed) {
    completeBtn.textContent = "Completed";
    completeBtn.classList.add("completed");
    completeBtn.disabled = true;
  } else {
    completeBtn.textContent = "Mark Course as Completed";
    completeBtn.classList.remove("completed");
    completeBtn.disabled = false;
  }

  completeBtn.onclick = () => markCompleted(course.id);
}

// Mark as completed
function markCompleted(courseId) {
  localStorage.setItem(`course-${courseId}-completed`, "true");
  completeBtn.textContent = "Completed";
  completeBtn.classList.add("completed");
  completeBtn.disabled = true;
}

// Go back to home
backBtn.addEventListener("click", () => {
  homeSection.classList.remove("hidden");
  courseDetail.classList.add("hidden");
});

displayCourses();
