// ─── Exercise Library ────────────────────────────────────────────────────────
// Each exercise stores sets/reps per level, how-to steps, and rest time.

const exerciseLibrary = {
    push: [
        {
            name: 'Push-Up',
            sets: { beginner: 3, intermediate: 4, advanced: 5 },
            reps: { beginner: '8', intermediate: '12', advanced: '15' },
            rest: '60s',
            description: [
                'Start in a high plank, hands shoulder-width apart.',
                'Lower your chest to the floor keeping elbows at a 45° angle.',
                'Push back up to full arm extension and repeat.',
            ],
        },
        {
            name: 'Wide Push-Up',
            sets: { beginner: 3, intermediate: 4, advanced: 5 },
            reps: { beginner: '6', intermediate: '10', advanced: '14' },
            rest: '60s',
            description: [
                'Place hands wider than shoulder-width apart.',
                'Lower your chest letting elbows flare out to the sides.',
                'Push up squeezing the chest at the top.',
            ],
        },
        {
            name: 'Diamond Push-Up',
            sets: { beginner: 2, intermediate: 3, advanced: 4 },
            reps: { beginner: '5', intermediate: '8', advanced: '12' },
            rest: '60s',
            description: [
                'Place hands close together under your chest forming a diamond.',
                'Lower your chest toward your hands, keeping elbows tight to your body.',
                'Push back up feeling the triceps contract at the top.',
            ],
        },
        {
            name: 'Pike Push-Up',
            sets: { beginner: 3, intermediate: 3, advanced: 4 },
            reps: { beginner: '6', intermediate: '10', advanced: '14' },
            rest: '60s',
            description: [
                'Form an inverted V shape with hips raised high.',
                'Bend elbows to lower your head toward the floor.',
                'Push back up — this mimics an overhead press and targets your shoulders.',
            ],
        },
        {
            name: 'Tricep Dip',
            sets: { beginner: 3, intermediate: 4, advanced: 4 },
            reps: { beginner: '8', intermediate: '12', advanced: '15' },
            rest: '60s',
            description: [
                'Sit on the edge of a sturdy chair, hands gripping the front.',
                'Slide off and lower your body by bending elbows to 90°.',
                'Push back up keeping your back close to the chair.',
            ],
        },
    ],
    legs: [
        {
            name: 'Bodyweight Squat',
            sets: { beginner: 3, intermediate: 4, advanced: 5 },
            reps: { beginner: '12', intermediate: '15', advanced: '20' },
            rest: '75s',
            description: [
                'Stand with feet shoulder-width apart, toes slightly turned out.',
                'Push hips back and down until thighs are parallel to the floor.',
                'Drive through your heels to stand back up.',
            ],
        },
        {
            name: 'Reverse Lunge',
            sets: { beginner: 3, intermediate: 3, advanced: 4 },
            reps: { beginner: '8 each', intermediate: '12 each', advanced: '15 each' },
            rest: '75s',
            description: [
                'Stand tall with feet together.',
                'Step one foot back and lower the back knee toward the floor.',
                'Push through the front foot to return to standing, then switch legs.',
            ],
        },
        {
            name: 'Glute Bridge',
            sets: { beginner: 3, intermediate: 3, advanced: 4 },
            reps: { beginner: '12', intermediate: '15', advanced: '20' },
            rest: '60s',
            description: [
                'Lie on your back with knees bent and feet flat on the floor.',
                'Drive hips up by squeezing your glutes hard at the top.',
                'Lower slowly back down and repeat.',
            ],
        },
        {
            name: 'Wall Sit',
            sets: { beginner: 3, intermediate: 3, advanced: 4 },
            reps: { beginner: '20s', intermediate: '40s', advanced: '60s' },
            rest: '60s',
            description: [
                'Lean your back flat against a wall and slide down to 90°.',
                'Hold with thighs parallel to the floor and weight through your heels.',
                'Keep arms out in front and breathe steadily through the hold.',
            ],
        },
        {
            name: 'Jump Squat',
            sets: { beginner: 3, intermediate: 4, advanced: 4 },
            reps: { beginner: '8', intermediate: '12', advanced: '15' },
            rest: '90s',
            description: [
                'Drop into a squat position with weight in your heels.',
                'Explode upward jumping as high as you can.',
                'Land softly with bent knees and sink straight back into the squat.',
            ],
        },
        {
            name: 'Step-Up',
            sets: { beginner: 3, intermediate: 3, advanced: 4 },
            reps: { beginner: '8 each', intermediate: '12 each', advanced: '15 each' },
            rest: '60s',
            description: [
                'Stand facing a sturdy chair or step.',
                'Step up with one foot and drive the opposite knee up.',
                'Step back down with control and repeat on the same side before switching.',
            ],
        },
    ],
    core: [
        {
            name: 'Plank',
            sets: { beginner: 3, intermediate: 3, advanced: 4 },
            reps: { beginner: '20s', intermediate: '40s', advanced: '60s' },
            rest: '45s',
            description: [
                'Place forearms on the ground with elbows directly under shoulders.',
                'Form a straight line from head to heels — no sagging hips.',
                'Squeeze your core and glutes and breathe steadily throughout.',
            ],
        },
        {
            name: 'Crunches',
            sets: { beginner: 3, intermediate: 3, advanced: 4 },
            reps: { beginner: '15', intermediate: '20', advanced: '25' },
            rest: '45s',
            description: [
                'Lie on your back with knees bent and hands lightly behind your head.',
                'Curl your shoulders off the floor using your abs — not your neck.',
                'Lower slowly and repeat without using momentum.',
            ],
        },
        {
            name: 'Leg Raise',
            sets: { beginner: 3, intermediate: 3, advanced: 4 },
            reps: { beginner: '8', intermediate: '12', advanced: '15' },
            rest: '45s',
            description: [
                'Lie flat with hands placed under your lower back for support.',
                'Keep legs straight and raise them to 90°.',
                'Lower slowly, stopping just before your feet touch the floor.',
            ],
        },
        {
            name: 'Mountain Climbers',
            sets: { beginner: 3, intermediate: 3, advanced: 4 },
            reps: { beginner: '20s', intermediate: '30s', advanced: '45s' },
            rest: '45s',
            description: [
                'Start in a high plank position with arms straight.',
                'Drive one knee toward your chest then quickly switch legs.',
                'Keep hips level and core braced throughout — no bouncing.',
            ],
        },
        {
            name: 'Russian Twist',
            sets: { beginner: 3, intermediate: 3, advanced: 4 },
            reps: { beginner: '10 each', intermediate: '15 each', advanced: '20 each' },
            rest: '45s',
            description: [
                'Sit with knees bent and lean back slightly to engage your core.',
                'Lift feet slightly off the floor for extra challenge.',
                'Rotate your torso side to side, touching the floor on each rep.',
            ],
        },
        {
            name: 'Bicycle Crunch',
            sets: { beginner: 3, intermediate: 3, advanced: 4 },
            reps: { beginner: '10 each', intermediate: '15 each', advanced: '20 each' },
            rest: '45s',
            description: [
                'Lie on your back with hands lightly behind your head.',
                'Bring one elbow toward the opposite knee while straightening the other leg.',
                'Alternate sides in a smooth pedalling motion — don\'t rush.',
            ],
        },
    ],
    cardio: [
        {
            name: 'Jumping Jacks',
            sets: { beginner: 3, intermediate: 4, advanced: 4 },
            reps: { beginner: '30s', intermediate: '45s', advanced: '60s' },
            rest: '30s',
            description: [
                'Stand with feet together and arms at your sides.',
                'Jump feet out wide while raising arms overhead.',
                'Jump back to start and repeat at a steady pace.',
            ],
        },
        {
            name: 'High Knees',
            sets: { beginner: 3, intermediate: 4, advanced: 4 },
            reps: { beginner: '20s', intermediate: '30s', advanced: '45s' },
            rest: '30s',
            description: [
                'Stand tall and run in place.',
                'Drive each knee up to hip height alternating as fast as you can.',
                'Pump your arms in rhythm with your legs to maintain speed.',
            ],
        },
        {
            name: 'Burpee',
            sets: { beginner: 3, intermediate: 4, advanced: 5 },
            reps: { beginner: '5', intermediate: '8', advanced: '12' },
            rest: '45s',
            description: [
                'From standing, drop hands to the floor and jump feet back into a plank.',
                'Do a push-up, then jump feet back to your hands.',
                'Explode up into a jump, clap overhead, and go straight into the next rep.',
            ],
        },
        {
            name: 'Jump Rope (no rope)',
            sets: { beginner: 3, intermediate: 3, advanced: 4 },
            reps: { beginner: '30s', intermediate: '45s', advanced: '60s' },
            rest: '30s',
            description: [
                'Stay on the balls of your feet and keep hops light and quick.',
                'Keep elbows close to your sides and rotate wrists as if holding a rope.',
                'Find a rhythm and maintain it — aim for consistent timing.',
            ],
        },
        {
            name: 'Lateral Shuffle',
            sets: { beginner: 3, intermediate: 3, advanced: 4 },
            reps: { beginner: '20s', intermediate: '30s', advanced: '45s' },
            rest: '30s',
            description: [
                'Stand in an athletic stance with knees slightly bent.',
                'Shuffle sideways 3-4 steps then quickly change direction.',
                'Stay low throughout — don\'t stand up between shuffles.',
            ],
        },
        {
            name: 'Speed Skater',
            sets: { beginner: 3, intermediate: 3, advanced: 4 },
            reps: { beginner: '10 each', intermediate: '15 each', advanced: '20 each' },
            rest: '30s',
            description: [
                'Leap sideways off one foot and land on the other.',
                'Let the trailing leg swing behind the landing leg.',
                'Alternate sides in a fluid skating motion — stay light on your feet.',
            ],
        },
    ],
    flexibility: [
        {
            name: 'Hip Flexor Stretch',
            sets: { beginner: 2, intermediate: 3, advanced: 3 },
            reps: { beginner: '30s each', intermediate: '40s each', advanced: '60s each' },
            rest: '20s',
            description: [
                'Kneel on one knee with the other foot forward.',
                'Shift your weight forward until you feel a stretch at the front of the back hip.',
                'Keep your torso upright and hold — switch sides.',
            ],
        },
        {
            name: 'Hamstring Stretch',
            sets: { beginner: 2, intermediate: 3, advanced: 3 },
            reps: { beginner: '30s each', intermediate: '40s each', advanced: '60s each' },
            rest: '20s',
            description: [
                'Sit with one leg extended and the other foot to your inner thigh.',
                'Hinge forward at the hips toward the extended foot — keep back flat.',
                'Don\'t round the spine — reach for your shin or ankle and hold.',
            ],
        },
        {
            name: 'Pigeon Pose',
            sets: { beginner: 2, intermediate: 2, advanced: 3 },
            reps: { beginner: '30s each', intermediate: '45s each', advanced: '60s each' },
            rest: '20s',
            description: [
                'From all-fours, bring one shin forward roughly parallel to your hips.',
                'Extend the other leg straight back and sink hips toward the floor.',
                'Walk hands forward to deepen the stretch and hold — switch sides.',
            ],
        },
        {
            name: 'Cat-Cow Stretch',
            sets: { beginner: 2, intermediate: 3, advanced: 3 },
            reps: { beginner: '10', intermediate: '12', advanced: '15' },
            rest: '20s',
            description: [
                'Start on all-fours with wrists under shoulders and knees under hips.',
                'Exhale and round your spine up toward the ceiling (cat).',
                'Inhale and drop your belly down, lifting your head and tailbone (cow).',
            ],
        },
        {
            name: "Child's Pose",
            sets: { beginner: 2, intermediate: 2, advanced: 3 },
            reps: { beginner: '30s', intermediate: '45s', advanced: '60s' },
            rest: '15s',
            description: [
                'Kneel and sit back on your heels with arms extended forward.',
                'Lower your forehead to the mat and breathe deeply.',
                'Walk hands further forward to increase the stretch through the lats.',
            ],
        },
        {
            name: 'Seated Spinal Twist',
            sets: { beginner: 2, intermediate: 2, advanced: 3 },
            reps: { beginner: '30s each', intermediate: '45s each', advanced: '60s each' },
            rest: '15s',
            description: [
                'Sit with legs extended, bend one knee and cross that foot over the other leg.',
                'Place the opposite elbow on the outside of the bent knee.',
                'Rotate your torso and look over your shoulder — hold, then switch sides.',
            ],
        },
    ],
};

// ─── Plan Templates ───────────────────────────────────────────────────────────

const GOAL_TEMPLATES = {
    strength:    [['push', 'core'], ['legs', 'core'], ['push', 'legs'], ['push', 'core'], ['legs', 'core']],
    cardio:      [['cardio', 'core'], ['cardio'], ['cardio', 'core'], ['cardio'], ['cardio', 'core']],
    flexibility: [['flexibility'], ['flexibility', 'core'], ['flexibility'], ['flexibility', 'core'], ['flexibility']],
};

const GOAL_DAY_LABELS = {
    strength:    ['Push + Core', 'Legs + Core', 'Push & Legs', 'Push + Core', 'Legs + Core'],
    cardio:      ['Cardio Circuit', 'Cardio Burn', 'Cardio Circuit', 'Cardio Burn', 'Cardio Circuit'],
    flexibility: ['Full Stretch', 'Flexibility + Core', 'Full Stretch', 'Flexibility + Core', 'Full Stretch'],
};

// ─── Day Scheduling ───────────────────────────────────────────────────────────

const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const WORKOUT_DAYS = {
    3: [0, 2, 4],
    4: [0, 1, 3, 4],
    5: [0, 1, 2, 4, 5],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function pickExercises(group, count) {
    const pool = [...exerciseLibrary[group]];
    const picked = [];
    for (let i = 0; i < count && pool.length > 0; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        picked.push(pool.splice(idx, 1)[0]);
    }
    return picked;
}

// ─── Main Generator ───────────────────────────────────────────────────────────

function generatePlan(level, goal, days) {
    const workoutDayIndices = WORKOUT_DAYS[days];
    const templates = GOAL_TEMPLATES[goal];
    const dayLabels = GOAL_DAY_LABELS[goal];

    const plan = [];
    let workoutCount = 0;

    DAY_NAMES.forEach((dayName, i) => {
        if (!workoutDayIndices.includes(i)) {
            plan.push({ label: dayName, rest: true });
            return;
        }

        const template = templates[workoutCount % templates.length];
        const focusLabel = dayLabels[workoutCount % dayLabels.length];

        const selectedExercises = [];
        template.forEach(group => {
            const count = template.length === 1 ? 3 : 2;
            // Now includes description and rest so the detail modal can use them
            const picked = pickExercises(group, count).map(ex => ({
                name: ex.name,
                sets: ex.sets[level],
                reps: ex.reps[level],
                rest: ex.rest,
                description: ex.description,
            }));
            selectedExercises.push(...picked);
        });

        plan.push({ label: `${dayName} — ${focusLabel}`, rest: false, exercises: selectedExercises });
        workoutCount++;
    });

    return plan;
}
