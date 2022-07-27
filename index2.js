var btn1 = document.getElementById('btn');
var input1 = document.getElementById('name');
var input2 = document.getElementById('start');
var input3 = document.getElementById('end');
var makeObject = /** @class */ (function () {
    function makeObject(name, stdate, endate) {
        this.myname = name;
        this.startDate = stdate;
        this.endDate = endate;
    }
    makeObject.prototype.print = function () {
        return {
            myname: this.myname,
            startDate: this.startDate,
            endDate: this.endDate
        };
    };
    return makeObject;
}());
var totatData = [];
btn1.addEventListener('click', submit2);
function submit2() {
    var data = readData();
    reset();
}
function readData() {
    var inputobj = new makeObject(input1.value, new Date(input2.value), new Date(input3.value));
    var obj = inputobj.print();
    totatData.push(obj);
    totatData.sort(sortdate);
    // console.log(totatData);
    showdata();
}
var type1 = new Date();
function sortdate(d1, d2) {
    var a1 = d1.startDate;
    var a2 = d2.startDate;
    if (a1 > a2)
        return 1;
    else if (a1 < a2)
        return -1;
    else
        return 0;
}
function showdata() {
    var arr = totatData.map(function (st, index) {
        var index1 = index + 1;
        var str = '<tr>';
        str += '<td>' + index1 + '</td>';
        str += '<td class="td1">' + st.myname + '</td>';
        str += '<td class="td1">' + st.startDate + '</td>';
        str += '<td class="td1">' + st.endDate + '<t/d>';
        str += '</tr>';
        // console.log(str);
        return str;
    });
    var header = '<tr>';
    header += '<th class="th1">Serial number</th>';
    header += '<th class="th1">Name</th>';
    header += '<th class="th1">Start Date and Time</th>';
    header += '<th class="th1">End Date and Time</th>';
    header += '</tr>';
    var ele = '<table class="table1">' + header + arr.join('') + '</table>';
    var element1 = document.getElementById('tablelist');
    element1.innerHTML = ele;
}
// this functio is use for reset form inputs
function reset() {
    input1.value = "";
    input2.value = "";
    input3.value = "";
}
