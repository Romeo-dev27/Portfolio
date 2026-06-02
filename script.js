document.addEventListener('DOMContentLoaded', () => {
    
    // --- State & Local Storage Initialization ---
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    let habits = JSON.parse(localStorage.getItem('habits')) || [];
    let goals = JSON.parse(localStorage.getItem('goals')) || [];
    let stats = JSON.parse(localStorage.getItem('stats')) || { tasks: 0, sessions: 0 };

    // --- Theme Toggle ---
    const themeBtn = document.getElementById('theme-toggle');
    const isDark = localStorage.getItem('darkMode') === 'true';
    
    if (isDark) document.body.classList.add('dark-mode');
    themeBtn.textContent = isDark ? '☀️' : '🌙';

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const darkModeActive = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', darkModeActive);
        themeBtn.textContent = darkModeActive ? '☀️' : '🌙';
    });

    // --- Core Functions: Save & Render ---
    function saveData() {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('habits', JSON.stringify(habits));
        localStorage.setItem('goals', JSON.stringify(goals));
        localStorage.setItem('stats', JSON.stringify(stats));
        updateStats();
    }

    // --- Statistics ---
    function updateStats() {
        document.getElementById('stat-tasks').textContent = stats.tasks;
        document.getElementById('stat-sessions').textContent = stats.sessions;
        document.getElementById('stat-habits').textContent = habits.length;
    }

    // --- To-Do List Logic ---
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="item-content ${todo.completed ? 'completed' : ''}">
                    <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${index})">
                    <span>${todo.text}</span>
                </div>
                <button class="delete-btn" onclick="deleteTodo(${index})">×</button>
            `;
            todoList.appendChild(li);
        });
    }

    document.getElementById('add-todo').addEventListener('click', () => {
        const text = todoInput.value.trim();
        if (text) {
            todos.push({ text, completed: false });
            todoInput.value = '';
            saveData();
            renderTodos();
        }
    });

    window.toggleTodo = (index) => {
        todos[index].completed = !todos[index].completed;
        if (todos[index].completed) stats.tasks++; 
        saveData();
        renderTodos();
    };

    window.deleteTodo = (index) => {
        todos.splice(index, 1);
        saveData();
        renderTodos();
    };

    // --- Habit Tracker Logic ---
    const habitInput = document.getElementById('habit-input');
    const habitList = document.getElementById('habit-list');

    function renderHabits() {
        habitList.innerHTML = '';
        const today = new Date().toDateString();
        
        habits.forEach((habit, index) => {
            const completedToday = habit.lastCompleted === today;
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="item-content">
                    <span>${habit.name} (Streak: ${habit.streak} 🔥)</span>
                </div>
                <button class="btn ${completedToday ? 'secondary' : 'primary'}" 
                        onclick="completeHabit(${index})" 
                        ${completedToday ? 'disabled' : ''}>
                    ${completedToday ? 'Done' : 'Complete'}
                </button>
            `;
            habitList.appendChild(li);
        });
    }

    document.getElementById('add-habit').addEventListener('click', () => {
        const name = habitInput.value.trim();
        if (name) {
            habits.push({ name, streak: 0, lastCompleted: null });
            habitInput.value = '';
            saveData();
            renderHabits();
        }
    });

    window.completeHabit = (index) => {
        const today = new Date().toDateString();
        if (habits[index].lastCompleted !== today) {
            habits[index].streak++;
            habits[index].lastCompleted = today;
            saveData();
            renderHabits();
        }
    };

    // --- Goals Logic ---
    const goalInput = document.getElementById('goal-input');
    const goalList = document.getElementById('goal-list');

    function renderGoals() {
        goalList.innerHTML = '';
        goals.forEach((goal, index) => {
            const li = document.createElement('li');
            li.style.flexDirection = 'column';
            li.style.alignItems = 'flex-start';
            li.innerHTML = `
                <div style="display:flex; justify-content:space-between; width:100%;">
                    <span>${goal.name}</span>
                    <button class="delete-btn" onclick="deleteGoal(${index})">×</button>
                </div>
                <div style="display:flex; align-items:center; width:100%; gap:10px; margin-top:10px;">
                    <input type="range" min="0" max="100" value="${goal.progress}" 
                           onchange="updateGoalProgress(${index}, this.value)" style="flex:1;">
                    <span>${goal.progress}%</span>
                </div>
                <div class="goal-progress-container">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${goal.progress}%"></div>
                    </div>
                </div>
            `;
            goalList.appendChild(li);
        });
    }

    document.getElementById('add-goal').addEventListener('click', () => {
        const name = goalInput.value.trim();
        if (name) {
            goals.push({ name, progress: 0 });
            goalInput.value = '';
            saveData();
            renderGoals();
        }
    });

    window.updateGoalProgress = (index, value) => {
        goals[index].progress = value;
        saveData();
        renderGoals();
    };

    window.deleteGoal = (index) => {
        goals.splice(index, 1);
        saveData();
        renderGoals();
    };

    // --- Pomodoro Timer Logic ---
    let timerInterval;
    let timeLeft = 25 * 60; // 25 minutes in seconds
    let isRunning = false;

    const timerDisplay = document.getElementById('timer-display');
    const startBtn = document.getElementById('start-timer');
    const pauseBtn = document.getElementById('pause-timer');
    const resetBtn = document.getElementById('reset-timer');

    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        if (isRunning) return;
        isRunning = true;
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                isRunning = false;
                stats.sessions++; // Increment study sessions
                saveData();
                alert("Focus session complete! Take a break.");
                timeLeft = 25 * 60;
                updateTimerDisplay();
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        isRunning = false;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        isRunning = false;
        timeLeft = 25 * 60;
        updateTimerDisplay();
    }

    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);

    // --- Initial Render ---
    updateTimerDisplay();
    renderTodos();
    renderHabits();
    renderGoals();
    updateStats();
});
