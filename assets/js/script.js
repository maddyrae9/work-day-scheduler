/*Variables*/
var currentDay = $("#currentDay");
var timeblocks = $("#time-blocks");
var currentHour = moment().hour()

const todayDate = moment().format("MM DO, YYYY");
function dateBlock(){
    var dateBlockNow = document.querySelector("#currentDay");
    dateBlockNow.textContent = todayDate;
}

dateBlock()
function relativeTime(){
    for(var i=i; i <10 ; i++){
        var ii = i + 8;
        if (currentHour > li){
            $("#hour" + i).addClass ("past");}
            else if (currentHour === ii){$(hour + i).addClass("present");}
            else {$("#hour" + i).addClass ("future");}
        }
}
relativeTime();

/*Verify Date and Times*/
console.log(currentHour)
console.log(currentDate)

/*Tasks*/
var taskInfoEmpty = ["","","","","","","","",""];
var taskInfo;
var lsTaskInfo =JSON.parse(localStorage.getItme("taskInfo"))
    if(lsTaskInfo){taskInfo = lsTaskInfo}
    else
    {taskInfo = taskInfoEmpty}
console.log(taskInfo)

/* Cells */
function populateTasks(){
    for(var i=0; i < taskInfo.length ; i++){
        var ii = i + 1;
        if(taskInfo[i]){
    $('#hour' + ii).val(taskInfo[i]);}
    else{  $('#hour' + ii).val("");}
}
}
populateTasks()

/*Type in Info Field*/
var timeBlock = document.querySelector(".time-block");
var inputs;

timeBlock.addEventListener("input",function(event){
    inputs = {[event.target.id]:event.target.value}
})

/*Save*/
function saveTasks(){
    for (var i = 0; i< taskInfo.length; i++){
        var ii = (i + 1);
        //add input to task info
        var taskInfoEntry = document.querySelector('#hour' + ii).value;
        console.log(taskInfoEntry)
        if (taskInfoEntry){
        taskInfo[i]= taskInfoEntry;}
        else{taskInfo[i] = ""}
    }
    localStorage.setItem("taskInfo",JSON.stringify(taskInfo))
    }
/*Save Tasks*/
var saveBtnX = document.querySelector(".savingButton");
saveBtnX.addEventListener("click",saveTasks);

/*Clear Local Storage*/
function clearSchedule() {
    if (confirm("Current tasks will be deleted; Proceed with 'Clear Schedule'?"))
    {    localStorage.clear();
        location.reload();
    }
  }
/* Clear Schedule */
var clearButton = document.querySelector("#clearBtn")
clearButton.addEventListener("click", clearSchedule)