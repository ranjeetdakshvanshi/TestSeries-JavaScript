document.addEventListener("DOMContentLoaded", loadTasks);

        function addTask() {
            let taskInput = document.getElementById("task");
            let taskList = document.getElementById("taskList");
            let taskText = taskInput.value.trim();
            
            if (taskText === "") {
                alert("Task cannot be empty!");
                return;
            }
            
            let existingTasks = Array.from(document.querySelectorAll("#taskList li"))
                                    .map(li => li.textContent.replace("❌", "").trim());
            
            if (existingTasks.includes(taskText)) {
                alert("Task already exists!");
                return;
            }
            
            let li = document.createElement("li");
            li.innerHTML = `${taskText} <button onclick="removeTask(this)">❌</button>`;
            taskList.appendChild(li);
            storeTasks();
            taskInput.value = "";
        }
        
        function removeTask(button) {
            button.parentElement.remove();
            storeTasks();
        }
        
        function storeTasks() {
            let tasks = [];
            document.querySelectorAll("#taskList li").forEach(li => {
                tasks.push(li.textContent.replace("❌", "").trim());
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        
        function loadTasks() {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            let taskList = document.getElementById("taskList");
            tasks.forEach(task => {
                let li = document.createElement("li");
                li.innerHTML = `${task} <button onclick="removeTask(this)">❌</button>`;
                taskList.appendChild(li);
            });
        }