var obj = [
	{"name": "catagory1", "seg": 1 },
	{"name": "catagory2", "seg": 2 },
	{"name": "catagory3", "seg": 3 }
];
//localStorage.setItem("Info", JSON.stringify(obj));

if(JSON.parse(localStorage.getItem("Info"))){
    main();
}else{
    localStorage.setItem("Info", JSON.stringify(obj));
    main();
}

function main(){
    displayTable();

    
}

    function displayTable(){
        var taskArr = JSON.parse(localStorage.getItem("Info"));
        var table = document.getElementById("getDetails");
        
        for (let i=0; i<taskArr.length;i++){
            taskInfo = {
                taskName : taskArr[i].name,
                taskSeg : taskArr[i].seg
            }
            //console.log(taskInfo);
            displayTask(taskInfo,table);
        }
    }

    function displayTask(taskInfo,table){
        
        
        var tr = document.createElement("tr");
        tr.setAttribute("class","tab");
        var td1 = document.createElement("td");
        td1.innerHTML = taskInfo.taskName;
        var td2 = document.createElement("td");
        td2.setAttribute("colspan","2");
        var div =document.createElement("div");
        div.setAttribute("class","btn btn-success btn-circle");
        div.innerHTML = taskInfo.taskSeg;
        var td3 = document.createElement("td");
        td3.setAttribute("class","t3");
        var btn = document.createElement("button");
        btn.setAttribute("class","btn btn-danger btn-circle btn-xl");
        // var i = document.createElement("i");
         btn.innerHTML="X";
        // i.setAttribute("class","fa fa-times");
        td3.setAttribute("id",taskInfo.taskSeg);
        tr.appendChild(td1);
        td2.appendChild(div);
        tr.appendChild(td2);
        // btn.appendChild(i);
        td3.appendChild(btn);
        tr.appendChild(td3);
        btn.onclick = ()=>{
            delete_ele(taskInfo.taskSeg,table);
        };
        table.appendChild(tr);
    }

        function delete_ele(sid,table) {
            $("tr").remove(".tab");
            var obj = JSON.parse( localStorage.getItem("Info"));
            result = obj.filter(obj => (obj.seg)!==sid);
            localStorage.setItem("Info", JSON.stringify(result));
            displayTable();
            
    }
    
    function add(){

var div =document.createElement("div");
div.setAttribute("id","rr");
var val =document.createElement("input");
val.setAttribute("id","in");
var lab =document.createElement("label");
lab.innerHTML="Add Catagory:--"
div.appendChild(lab);
var but =document.createElement("button");
but.innerHTML="Add"
div.appendChild(val);
but.onclick = ()=>{
addon();
};
div.appendChild(but);
document.getElementById("con").appendChild(div);





    }

    function addon() {
        $("tr").remove(".tab");
        var obj={};
        var taskArr = JSON.parse(localStorage.getItem("Info"));
        console.log(taskArr);
        var len = taskArr.length-1;
        console.log(typeof(taskArr[len].seg));
        var segId = taskArr[len].seg+1;
        var ch=document.getElementById("in").value;
        obj.name=ch;
        obj.seg = segId;
        taskArr.push(obj);
        console.log(taskArr);
       localStorage.setItem("Info", JSON.stringify(taskArr));
       displayTable();
     

        $("#rr").remove();


        
    }