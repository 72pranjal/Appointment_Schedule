let btn1 = document.getElementById('btn')!;
let input1 = document.getElementById('name') as HTMLInputElement;
let input2 = document.getElementById('start') as HTMLInputElement;

let input3 = document.getElementById('end') as HTMLInputElement;

class makeObject {
    public myname: string;
    public startDate: Date;
    public endDate: Date;
    constructor(name: string, stdate: Date, endate: Date) {
        this.myname = name;
        this.startDate = stdate;
        this.endDate = endate;
    }
    print() {
        return {
            myname: this.myname,
            startDate: this.startDate,
            endDate: this.endDate
        };
    }
}
let totatData = [] as makeObject[];
btn1.addEventListener('click', submit2);
function submit2(): void {
    let data = readData();
    reset();
}
function readData(): void {
    let inputobj = new makeObject(input1.value, new Date(input2.value), new Date(input3.value));
    let obj = inputobj.print();
    totatData.push(obj);
    totatData.sort(sortdate);
    // console.log(totatData);
    showdata();
}
let type1 = new Date();
function sortdate(d1, d2): number {
    let a1 = d1.startDate;
    let a2 = d2.startDate;
    if (a1 > a2)
        return 1;
    else if (a1 < a2)
        return -1;
    else
        return 0
}
function showdata(): any {
    let arr = totatData.map(function (st, index): string {
        const index1 = index + 1;
        let str = '<tr>';
        str += '<td>' + index1 + '</td>';
        str += '<td class="td1">' + st.myname + '</td>';
        str += '<td class="td1">' + st.startDate + '</td>';
        str += '<td class="td1">' + st.endDate + '<t/d>';
        str += '</tr>';
        // console.log(str);
        return str;

    });
    let header = '<tr>';
    header += '<th class="th1">Serial number</th>';
    header += '<th class="th1">Name</th>';
    header += '<th class="th1">Start Date and Time</th>';
    header += '<th class="th1">End Date and Time</th>';
    header += '</tr>';
    let ele = '<table class="table1">' + header + arr.join('') + '</table>';
    let element1 = document.getElementById('tablelist')! as HTMLInputElement;
    element1.innerHTML = ele;
}
// this functio is use for reset form inputs
function reset(): void {
    input1.value = "";
    input2.value = "";
    input3.value = "";

}
