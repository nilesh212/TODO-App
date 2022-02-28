var checkbox = $(".task-style input");
var taskList = $(".task-style");
var taskListContainer = $(".task-list");
var taskDueDate = $(".task-due-date");
var deleteTasks = $(".del-tasks");

var allCategory = $(".all.cat-style");
var workCategory = $(".work.cat-style");
var schoolCategory = $(".school.cat-style");
var cleaningCategory = $(".cleaning.cat-style");
var personalCategory = $(".personal.cat-style");
var otherCategory = $(".other.cat-style");

var currDate = Date.now();

/*----------------------------------------------*/
/* TO change Heading  */
/*----------------------------------------------*/
var heading = $(".title-container");
var welcomeTitle = 0;
heading.on("click", function () {
  if (welcomeTitle == 0) {
    welcomeTitle = 1;
    $(".title-container h1:nth-child(1)").css({
      display: "none",
      transition: "all 2s ease-in-out",
    });
    $(".title-container h1:nth-child(2) img").css({
      display: "block",
      transition: "all 2s ease-in-out",
    });
  } else {
    welcomeTitle = 0;
    $(".title-container h1:nth-child(1)").css({
      display: "flex",
      transition: "all 2s ease-in-out",
    });
    $(".title-container h1:nth-child(2) img").css({
      display: "none",
      transition: "all 2s ease-in-out",
    });
  }
});

/*----------------------------------------------*/
/* TO change background color of completed task */
/*----------------------------------------------*/

for (let i = 0; i < checkbox.length; i++) {
  //click on checkbox redirect to /chect-task
  $(checkbox[i]).on("click", function () {
    let id = $(this).data("id");
    let complete = $(this).data("complete");
    complete = complete == false ? true : false;
    window.location.href = `/check-task/?id=${id}&complete=${complete}`;
  });

  //due date is finished then change the background color
  let dueDate = Number($(taskDueDate[i]).attr("class").split(" ")[1]);
  if (dueDate < currDate) {
    $(taskList[i]).css({
      background: "#ffb3c1",
    });
  }
}

/*----------------------------------------------*/
/* Delete completed task                        */
/*----------------------------------------------*/

deleteTasks.on("click", function () {
  window.location.href = "/delete-tasks";
});

/*----------------------------------------------*/
/* Category wise sort                        */
/*----------------------------------------------*/

allCategory.on("click", function () {
  if (taskList.length != 0) {
    displayAllTasks();
  } else {
    $(".no-tasks span").text(
      "Hooray! You have no tasks remaining of any category."
    );
  }
});

workCategory.on("click", function () {
  categoryCheck("work");
});

schoolCategory.on("click", function () {
  categoryCheck("school");
});

cleaningCategory.on("click", function () {
  categoryCheck("cleaning");
});

personalCategory.on("click", function () {
  categoryCheck("personal");
});

otherCategory.on("click", function () {
  categoryCheck("other");
});

function categoryCheck(category) {
  displayAllTasks();
  let noOfTasks = 0;
  for (let i = 0; i < taskList.length; i++) {
    if ($(taskList[i]).attr("class").split(" ")[0] != category) {
      $(taskList[i]).css({
        display: "none",
      });
      noOfTasks++;
    }
  }
  // console.log(taskList.length + " " + noOfTasks);
  // Check if it has any task of this category
  // If not display message
  if (noOfTasks == taskList.length) {
    let noTasks = `<div class="no-tasks">
    <span>Hooray! You have no tasks remaining of ${category.toUpperCase()} category.</span>
  </div>`;
    taskListContainer.append(noTasks);
  }
}

/*----------------------------------------------*/
/* Display all task                       */
/*----------------------------------------------*/

function displayAllTasks() {
  $(".no-tasks").css({
    display: "none",
  });
  for (let i = 0; i < taskList.length; i++) {
    $(taskList[i]).css({
      display: "flex",
    });
  }
}
