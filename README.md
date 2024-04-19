# Service Introduction

This application allows you to categorize tasks by category and view only ongoing tasks, with completed tasks checked off and deleted.

## Key Features

### ✅ Save tasks by category and view detailed pages of saved tasks.

- State management is done using redux-toolkit.

### ✅ Classify tasks as ongoing or completed and delete them.

- Efforts were made to differentiate UI using ternary operators, such as displaying differently for viewing all, or only ongoing tasks when there is no data.

### ✅ Use useRef to access the menu for representing on one page.

- Animation effects were used to go to the corresponding part when clicking the menu using useRef.

## **Project Review (Retrospective)**

This project was created as a concept to review what I learned while studying, so I paid more attention to refactoring. Refactoring was done, such as finding parts where objects and ternary operators can be used to reduce duplicated code and changing the map part of form data to an object. I plan to continue developing to add more convenient features to an ordinary to-do app in the future.
