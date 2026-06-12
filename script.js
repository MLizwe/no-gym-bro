// Grab all three page sections and the buttons
const landingPage = document.getElementById('landing');
const formPage = document.getElementById('form-page');
const planPage = document.getElementById('plan-page');

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
            const exerciseRows = day.exercises.map(ex => `
                <div class="exercise-item">
                    <span class="exercise-name">${ex.name}</span>
                    <span class="exercise-meta">${ex.sets} sets × ${ex.reps}</span>
                </div>
            `).join('');

            card.innerHTML = `<h3>${day.label}</h3>${exerciseRows}`;
        }

        output.appendChild(card);
    });
}
