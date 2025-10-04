const API="https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";

function saveTask(){
    const title = $("#txtTitle").val();
    const descriptions = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title, descriptions, color, date, status, budget);
    
    const data =new Task(title,descriptions,color,date,status,budget);
    console.log(data);
    //displayTask(data);

    $.ajax({
        type: "post",
        url: API,
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function(res){
            console.log("Saved", res);
        },
        error: function(err){
            console.log("Error", err);
            alert("Sorry, something went wrong.");
        }
        // minichallenge time
        // 1. send the data to the server
        // 2. read only the tasks that you created

    });
}

function test(){
    $.ajax({
        type: "get",
        url: API,
        success: function(working){
            console.log(working);
        },
        error: function(err){
            console.log(err)
        }
    })
}

function loadTasks(){
    $.ajax({
        type: "get",
        url: API,
        dataType: "json",
        success: function(res){
            for (let i=0; i<res.length; i++){
                const task = res[i];
                if(task.name==="adrian61"){
                    console.log(task);
                    displayTask(task);
                }
            }
            
        },
        error: function(err){
            console.log(err)
        }
    });

}
function displayTask(task){
    const render=`
    <div class="task" style="border-color:${task.color}">
        <div class="info">
            <h4>${task.title}</h4>
            <p>${task.description}</p>
        </div>
        <div>
        <label class="status">${task.status}</label>
            <div class="date-budget">
                <label>${task.date}</label>
                <label>${task.budget}</label>
            </div>
        </div>
    </div>
    `;
    $(".tasks").append(render);
}
function ToogleList(){
    console.log("hide/show");
    //document.getElementById("form").style.display="none";
    $("#form").hide();
    $("#btnHS").on("click", function(){
        $("#form").toggle();
    });

    //please create the logic to hide/show the form
    //$("#form").show();
}

function init(){
    console.log("init");
    //hook up event listeners
    $("#btnSave").click(saveTask);
    $("#btnHS").click(ToogleList);
    loadTasks();
}
window.onload = init;
//latets