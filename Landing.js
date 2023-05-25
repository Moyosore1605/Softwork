let main1 = document.getElementById('maind-none1');
let main2 = document.getElementById('maind-none2');
let main3 = document.getElementById('maind-none3');
let div1 = document.getElementById('divchange1');
let div2 = document.getElementById('divchange2');
let div3 = document.getElementById('divchange3');
let subdiv1 = document.getElementById('paj');
let subdiv2 = document.getElementById('bab');
let subdiv3 = document.getElementById('lus');
let var1;
let var2;
let var3;

function changer(var1) {
    main1.style.display = 'none';
    main2.style.display = 'none';
    main3.style.display = 'none';
    var1.style.display='flex';
}
// function changer2(params) {
//     main1.style.display = 'none';
//     main2.style.display = 'none';
//     main3.style.display = 'flex';
// }
// function changer(params) {
//     main1.style.display = 'flex';
//     main2.style.display = 'none';
//     main3.style.display = 'none';
// }
function revert(params) {
    main1.style.display = 'none';
    main2.style.display = 'none';
    main3.style.display = 'none';
}
function change(var2,var3) {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    subdiv1.style.backgroundColor = "white";
    subdiv2.style.backgroundColor = "white";
    subdiv3.style.backgroundColor = "white";
    var2.style.backgroundColor ="rgb(240, 247, 245)";
    var3.style.display="block";
}
// function change1() {
//     div1.style.display = "none";
//     div3.style.display = "none";
//     div2.style.display = "block";
//     subdiv1.style.backgroundColor = "white";
//     subdiv3.style.backgroundColor = "white";
//     subdiv2.style.backgroundColor = "rgb(240, 247, 245)";
// }
// function change2() {
//     div1.style.display = "none";
//     div3.style.display = "block";
//     div2.style.display = "none";
//     subdiv1.style.backgroundColor = "white";
//     subdiv3.style.backgroundColor = "rgb(240, 247, 245)";
//     subdiv2.style.backgroundColor = "white";
// }