const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("task-list");
const taskCounter = document.getElementById("task-counter");

let totalTasks = 0;

// دالة لتحديث عداد المهام
function updateCounter() {
    taskCounter.textContent = `Total Tasks: ${totalTasks}`;
}

// دالة لإضافة مهمة جديد
function addTask() {
    const textValue = taskInput.value.trim();
    
    // منع إضافة مهمة فارغة
    if (textValue === "") return;

    // 1. إنشاء عنصر الـ li للمهمة
    const newTask = document.createElement('li');

    // 2. إنشاء عنصر span لنص المهمة (ليسهل تحديدها كمكتملة)
    const taskText = document.createElement('span');
    taskText.textContent = textValue;
    
    // إمكانية النقر على النص لتحديد المهمة كمكتملة
    taskText.addEventListener('click', function() {
        newTask.classList.toggle('completed');
    });

    // 3. إنشاء زر الحذف الخاص بهذه المهمة فقط
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');

    // برمجة زر الحذف لإزالة العنصر وتحديث العداد
    deleteBtn.addEventListener('click', function() {
        newTask.remove();
        totalTasks--;
        updateCounter();
    });

    // 4. ربط العناصر ببعضها وزرعها في القائمة
    newTask.appendChild(taskText);
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    // 5. زيادة العداد وتفريغ خانة الإدخال
    totalTasks++;
    updateCounter();
    taskInput.value = "";
}

// إضافة المهمة عند النقر على الزر
addBtn.addEventListener('click', addTask);

// إضافة المهمة أيضاً عند الضغط على زر Enter من لوحة المفاتيح
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});