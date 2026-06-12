// ─── Exercise Library ────────────────────────────────────────────────────────
// Each exercise has sets and reps keyed by level (beginner/intermediate/advanced).
// This means one exercise entry covers all three levels — no duplication needed.

const exerciseLibrary = {
    push: [
        { name: 'Push-Up',         sets: { beginner: 3, intermediate: 4, advanced: 5 }, reps: { beginner: '8',      intermediate: '12',     advanced: '15'     } },
        { name: 'Wide Push-Up',    sets: { beginner: 3, intermediate: 4, advanced: 5 }, reps: { beginner: '6',      intermediate: '10',     advanced: '14'     } },
        { name: 'Diamond Push-Up', sets: { beginner: 2, intermediate: 3, advanced: 4 }, reps: { beginner: '5',      intermediate: '8',      advanced: '12'     } },
        { name: 'Pike Push-Up',    sets: { beginner: 3, intermediate: 3, advanced: 4 }, reps: { beginner: '6',      intermediate: '10',     advanced: '14'     } },
        { name: 'Tricep Dip',      sets: { beginner: 3, intermediate: 4, advanced: 4 }, reps: { beginner: '8',      intermediate: '12',     advanced: '15'     } },
    ],
    legs: [
        { name: 'Bodyweight Squat', sets: { beginner: 3, intermediate: 4, advanced: 5 }, reps: { beginner: '12',      intermediate: '15',     advanced: '20'     } },
        { name: 'Reverse Lunge',    sets: { beginner: 3, intermediate: 3, advanced: 4 }, reps: { beginner: '8 each',  intermediate: '12 each', advanced: '15 each' } },
        { name: 'Glute Bridge',     sets: { beginner: 3, intermediate: 3, advanced: 4 }, reps: { beginner: '12',      intermediate: '15',     advanced: '20'     } },
        { name: 'Wall Sit',         sets: { beginner: 3, intermediate: 3, advanced: 4 }, reps: { beginner: '20s',     intermediate: '40s',    advanced: '60s'    } },
        { name: 'Jump Squat',       sets: { beginner: 3, intermediate: 4, advanced: 4 }, reps: { beginner: '8',       intermediate: '12',     advanced: '15'     } },
        { name: 'Step-Up',          sets: { beginner: 3, intermediate: 3, advanced: 4 }, reps: { beginner: '8 each',  intermediate: '12 each', advanced: '15 each' } },
    ],
    core: [
        { name: 'Plank',           sets: { beginner: 3, intermediate: 3, advanced: 4 }, reps: { beginner: '20s',     intermediate: '40s',    advanced: '60s'    } },
        { name: 'Crunches',        sets: { beginner: 3, intermediate: 3, advanced: 4 }, reps: { beginner: '15',      intermediate: '20',     advanced: '25'     } },
        { name: 'Leg Raise',       sets: { beginner: 3, intermediate: 3, advanced: 4 }, reps: { beginner: '8',       intermediate: '12',     advanced: '15'     } },
        { name: 'Mountain Climbers', sets: { beginner: 3, intermediate: 3, advanced: 4 }, reps: { beginner: '20s',   intermediate: '30s',    advanced: '45s'    } },
        { name: 'Russian Twist',   sets: { beginner: 3, intermediate: 3, advanced: 4 }, reps: { beginner: '10 each', intermediate: '15 each', advanced: '20 each' } },
        { name: 'Bicycle Crunch',  sets: { beginner: 3, intermediate: 3, advanced: 4 }, reps: { beginner: '10 each', intermediate: '15 each', advanced: '20 each' } },
    ],
    cardio: [
        { name: 'Jumping Jacks',       sets: { beginner: 3, intermediate: 4, advanced: 4 }, reps: { beginner: '30s', intermediate: '45s', advanced: '60s' } },
        { name: 'High Knees',          sets: { beginner: 3, intermediate: 4, advanced: 4 }, reps: { beginner: '20s', intermediate: '30s', advanced: '45s' } },
        { name: 'Burpee',              sets: { beginner: 3, intermediate: 4, advanced: 5 }, reps: { beginner: '5',   intermediate: '8',   advanced: '12'  } },
        { name: 'Jump Rope (no rope)', sets: { beginner: 3, intermediate: 3, advanced: 4 }, reps: { beginner: '30s', intermediate: '45s', advanced: '60s' } },
        { name: 'Lateral Shuffle',     sets: { beginner: 3, intermediate: 3, advanced: 4 }, reps: { beginner: '20s', intermediate: '30s', advanced: '45s' } },
        { name: 'Speed Skater',        sets: { beginner: 3, intermediate: 3, advanced: 4 }, reps: { beginner: '10 each', intermediate: '15 each', advanced: '20 each' } },
    ],
    flexibility: [
        { name: 'Hip Flexor Stretch',    sets: { beginner: 2, intermediate: 3, advanced: 3 }, reps: { beginner: '30s each', intermediate: '40s each', advanced: '60s each' } },
        { name: 'Hamstring Stretch',     sets: { beginner: 2, intermediate: 3, advanced: 3 }, reps: { beginner: '30s each', intermediate: '40s each', advanced: '60s each' } },
        { name: 'Pigeon Pose',           sets: { beginner: 2, intermediate: 2, advanced: 3 }, reps: { beginner: '30s each', intermediate: '45s each', advanced: '60s each' } },
        { name: 'Cat-Cow Stretch',       sets: { beginner: 2, intermediate: 3, advanced: 3 }, reps: { beginner: '10',       intermediate: '12',       advanced: '15'       } },
        { name: "Child's Pose",          sets: { beginner: 2, intermediate: 2, advanced: 3 }, reps: { beginner: '30s',       intermediate: '45s',      advanced: '60s'      } },
        { name: 'Seated Spinal Twist',   sets: { beginner: 2, intermediate: 2, advanced: 3 }, reps: { beginner: '30s each', intermediate: '45s each', advanced: '60s each' } },
    ],
};

// ─── Plan Templates ───────────────────────────────────────────────────────────
// Each goal has a list of "day templates" — which exercise groups appear that day.
// We cycle through these templates across all workout days.
// e.g. strength day 1 = push + core, day 2 = legs + core, day 3 = push + legs, etc.

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
// Maps the chosen number of days to specific weekday indices (0 = Monday).
// 3 days → Mon/Wed/Fri, 4 days → Mon/Tue/Thu/Fri, 5 days → Mon–Wed + Fri/Sat

const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const WORKOUT_DAYS = {
    3: [0, 2, 4],
    4: [0, 1, 3, 4],
    5: [0, 1, 2, 4, 5],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Randomly picks `count` exercises from a group without repeating any.
// We spread into a copy so the original library isn't mutated.
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
// Returns a 7-item array (one per day of the week).
// Each item is either { label, rest: true } or { label, rest: false, exercises: [...] }.

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

        // Cycle through templates — so if user picks 5 days and there are 5 templates,
        // each day gets a unique focus. For 3 days it just uses the first 3 templates.
        const template = templates[workoutCount % templates.length];
        const focusLabel = dayLabels[workoutCount % dayLabels.length];

        const selectedExercises = [];
        template.forEach(group => {
            // Pick 2 exercises per group. If the day only has one group, pick 3.
            const count = template.length === 1 ? 3 : 2;
            const picked = pickExercises(group, count).map(ex => ({
                name: ex.name,
                sets: ex.sets[level],
                reps: ex.reps[level],
            }));
            selectedExercises.push(...picked);
        });

        plan.push({ label: `${dayName} — ${focusLabel}`, rest: false, exercises: selectedExercises });
        workoutCount++;
    });

    return plan;
}
