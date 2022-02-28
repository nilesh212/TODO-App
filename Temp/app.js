// $("#description-input").on("click", function (e) {
//   $(".description").css({
//     background: "#EAEDF0",
//   });
//   $(this).css({
//     background: "#EAEDF0",
//     color: "white",
//     border: "none",
//   });
// });

var checkbox = $(".task-style input");
var taskList = $(".task-style");

// console.log(checkbox);

/*----------------------------------------------*/
/* TO change background color of completed task */
/*----------------------------------------------*/

for (let i = 0; i < checkbox.length; i++) {
  $(checkbox[i]).on("click", function () {
    let complete = $(this).data("complete");
    // console.log(typeof complete);
    if (complete == false) {
      $(this).data("complete", true);
      $(taskList[i]).css({
        background: "#afeed7",
        textDecoration: "line-through",
      });
    } else {
      $(this).data("complete", false);
      if (i % 2 != 0) {
        $(taskList[i]).css({
          background: "#e6e2e2",
          textDecoration: "none",
        });
      } else {
        $(taskList[i]).css({
          background: "white",
          textDecoration: "none",
        });
      }
    }
  });
}
