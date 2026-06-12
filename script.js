// Grab all three page sections and the buttons
const landingPage = document.getElementById('landing');
const formPage = document.getElementById('form-page');
const planPage = document.getElementById('plan-page');

// Modal elements
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalMeta = document.getElementById('modal-meta');
const modalSteps = document.getElementById('modal-steps');
const modalRest = document.getElementById('modal-rest');

const getStartedBtn = document.getElementById('getStarted');
const generateBtn = document.getElementById('generateBtn');
const restartBtn = document.getElementById('restartBtn');

// showPage hides everything then shows only the requested page.
// This is the core navigation — instead of loading new HTML files,
// we just toggle which div is visible (called a Single Page App pattern).
function showPage(page) {
    landingPage.style.display = 'none';
    formPage.style.display = 'none';
    planPage.style.display = 'none';

    page.style.display = 'flex';
}

// "Get Started" takes the user from the landing page to the form
getStartedBtn.addEventListener('click', () => {
    showPage(formPage);
});

// "Generate My Plan" reads the form values and builds the plan
generateBtn.addEventListener('click', () => {
    const level = document.getElementById('level').value;
    const goal = document.getElementById('goal').value;
    const days = parseInt(document.getElementById('days').value);

    const plan = generatePlan(level, goal, days);
    renderPlan(plan);
    showPage(planPage);
});

// "Start Over" sends the user back to the landing page
restartBtn.addEventListener('click', () => {
    showPage(landingPage);
});

// ─── Modal ────────────────────────────────────────────────────────────────────

function openModal(exercise) {
    modalTitle.textContent = exercise.name;
    modalMeta.textContent = `${exercise.sets} sets × ${exercise.reps}`;

    // Build numbered steps from the description array
    modalSteps.innerHTML = exercise.description
        .map(step => `<li>${step}</li>`)
        .join('');

    modalRest.textContent = `Rest ${exercise.rest} between sets`;

    modalOverlay.classList.add('open');
}

function closeModal() {
    modalOverlay.classList.remove('open');
}

modalClose.addEventListener('click', closeModal);

// Close modal when user clicks outside the modal box
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

// renderPlan takes the generated plan array and builds the HTML for the plan page
function renderPlan(plan) {
    const output = document.getElementById('plan-output');
    output.innerHTML = '';

    plan.forEach(day => {
        const card = document.createElement('div');
        card.className = day.rest ? 'day-card rest' : 'day-card';

        if (day.rest) {
            card.innerHTML = `<h3>${day.label} — Rest Day</h3>`;
        } else {
            card.innerHTML = `<h3>${day.label}</h3>`;

            // Build each exercise row as a real element so we can attach a click listener.
            // We can't attach event listeners to innerHTML strings — they need to be DOM nodes.
            day.exercises.forEach(ex => {
                const row = document.createElement('div');
                row.className = 'exercise-item';
                row.innerHTML = `
                    <span class="exercise-name">${ex.name}</span>
                    <span class="exercise-meta">${ex.sets} sets × ${ex.reps}</span>
                `;
                row.addEventListener('click', () => openModal(ex));
                card.appendChild(row);
            });
        }

        output.appendChild(card);
    });
}
