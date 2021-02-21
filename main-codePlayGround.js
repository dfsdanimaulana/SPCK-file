const arrays =[
  {no : 1, type : 'cat'},
  {no : 2, type : 'dog'},
  {no : 3, type : 'pig'},
  {no : 4, type : 'bat'},
  {no : 5, type : 'rat'},
  ];
 arrays.push({no:6,type:'cow'});
 
 const cl=arg=>console.log(arg);
 
 console.log(arrays);
 
const filterArrays = arrays.filter(item=>item.no%2!=0);
console.log(filterArrays);

const addArrays = arrays.map((item)=>{
  return item.type;
})

console.log(addArrays);

function rndm(min, max){
  let num=Math.floor(Math.random() * (max - min)) + min;
  return num;
  
}
const angka = [];
for (var i = 0; i <= rndm(10,20); i++) {
  angka.push(rndm(1,10));
}
console.log(angka);

/*const angkaGenap= angka.filter(a=>{
  if(a%2==0){return a}
}).map(a=>a*100).reduce((a,b)=>a+b);

console.log(angkaGenap);
*/
var urut = angka.sort();
console.log(urut)
var duit = urut.toString().replace(/,/g,'');
console.log(duit.split(''))

var reverse = duit.split('').reverse().join('');
console.log(reverse)

var ribuan = reverse.match(/\d{1,3}/g).join('.').split('').reverse().join('');
console.log(`Rp. ${ribuan}`)

var genap = urut.filter(a=>a%2==0)
console.log(genap)

var dna = "GGCCTTAA";
/*var newDna = dna.split('');
var revDNA= newDna.map(a=>{
  var ar=[];
  switch (a) {
    case 'A':
      ar.push('T');
      break;
    case 'T':
      ar.push('A');
      break;
    case 'C':
      ar.push('G');
      break;
    case 'G':
      ar.push('C');
      break;
  }
  return ar;
})
var dnaReverse = revDNA.toString().replace(/,/g,'');


const DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)]);
console.log(dna +' menjadi '+DNAStrand(dna))
*/

var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

console.log(dna);
console.log(DNAStrand(dna));
/*
let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

const DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)]);*/

const number = [];
for (var i = 0; i <= rndm(10,20); i++) {
  number.push(rndm(-10,10));
}
console.log(number)


function sumEven(num){
  
  var even = num.filter(a=>a>0);
  return even.reduce((a,b)=>a+b);
  
}
console.log(sumEven(number))

const jumlahAngka=(n,arr)=>{
let num = arr.filter(a=>a==n);
return num.length!=0?`${num[0]} : ${num.length}`:`{}`}
console.log(number.map(a=>jumlahAngka(a,number)))
//console.log(jumlahAngka(number[0]))
//console.log(arrKosong)
//buat array ganjil baru
//const arrGanjil = number.filter(a=>a%2!=0).sort((a,b)=>a-b)
//console.log(arrGanjil)
//buat objek yg berisi value dan index
/*function objGanjil(val,index){
  let obj={};
  obj.val=val;
  obj.index=index;
  return obj;
}*/
/**

var numGanjil= number.filter(a=>a%2!=0
)
console.log(numGanjil)
console.log(numGanjil.sort((a,b)=>a-b))

//array 2 dimensi
var x = new Array(10);

for (var i = 0; i < x.length; i++) {
  var y = [(i+1),(i*2),i];
  x[i] = y;
}

for (var i = 0; i < x.length; i++) {
  for (var j = 0; j <=2; j++) {
    console.log([x[i][j]])
  }
}

**/
/*var
var str='http://hello.guys';
var link=/http:\/\/gi;
console.log(str.replace(link,''))
*/

const hello=str=>{
  return !str?'hello, world':
    `hello ${str.toLowerCase().replace(str[0],str.charAt(0).toUpperCase())}`
}

/*functionnMax=arr=>{
  let res=[];
  arr.length==1?res[0]=res[1]=arr[0]:
  arr.sort((a,b)=>a-b);
  res[0]=arr[0];res[1]=arr[arr.length-1];
  return res;
}
*/
function minMax(arr){
  return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}

console.log(minMax(number));

var str='danI';

const solve=s=>{
  
var 
uc = s.match(/[A-Z]/g),
lc = s.match(/[a-z]/g);

return uc==null||lc==null?s:
       uc.length<lc.length||uc.length==lc.length?s.toLowerCase():s.toUpperCase();


}
const solves = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()
    


console.log(solves(str))

const arr1 =number;
const arr2 =angka;
console.log('arr1 :');
console.log(arr1);
console.log('arr2 :');
console.log(arr2);

const arrayDiff=(a,b)=>{
  if(b.length==0){
    return a;
    }else{
      var sorted =[];
        for (var i = 0; i < b.length; i++) {
          if(i==0){
          var sorted=a.filter(n=>n!=b[i]);
            }else{
          sorted=sorted.filter(n=>n!=b[i]);
          }
        }
      return sorted;
    }
}

//alternative 1
function arrayDiff1(a, b) {
  return a.filter(e => !b.includes(e));
}

//alternative 3
function arrayDiff2(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}


console.log(arrayDiff(arr1,arr2));
console.log(arrayDiff1(arr1,arr2));
console.log(arrayDiff2(arr1,arr2));

/**
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

**/

function Fighter(name, health, damagePerAttack){
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
const fighter1 = new Fighter('dani',1000,4);
const fighter2 = new Fighter('dewi',1000,4);
/*
const {name:n1,health:h1,damagePerAttack:dp1}=fighter1;
const {name:n2,health:h2,damagePerAttack:dp2}=fighter2;
*/


const declareWinner=(fighter1, fighter2,firstAttacker)=>{
 
 //menentukan p1 dan p2
 let p1=null,p2=null;
 if(fighter1.name==firstAttacker){
   p1=fighter1;
   p2=fighter2;
 }else{
   p1=fighter2;
   p2=fighter1;
 }

 let gameOn=true;
 while (gameOn) {
   p2.health-=p1.damagePerAttack;
   if(p2.health<=0){
     return p1.name;
     gameOn=false;
   }
   p1.health -= p2.damagePerAttack;
   if (p1.health <= 0) {
     return p2.name;
     gameOn = false;
   }
 }
}

console.log(declareWinner(fighter1,fighter2,'dani'))


//factorial dari n
//If input is below 0 or above 12 thrown //an exception of type
//throw a RangeError
const factorial=(n)=>{
  if(n<0||n>12){
    throw "RangeError";
  }else{
    let sum=1;
    for (var i = 1; i <= n; i++) {
      sum=sum*i;
    }
    return sum;
  }
}
//remove duplicate
function eliminateDuplicates(arr) {
  var i,
      len = arr.length,
      out = [],
      obj = {};

  for (i = 0; i < len; i++) {
    obj[arr[i]] = 0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}
console.log(eliminateDuplicates(arr2));

//remove the duplicate
const removeDuplicate=(values)=>{
   return values.filter((e, i, arr) => arr.indexOf(e) === i);
}
console.log('hadsilnya ='+removeDuplicate(arr2))
/*
if (a1.length == 0 || a2.length == 0) {
  return -1;
} else {
  return Math.abs(
 a1.map(x=>x.length).sort((a,b)=>b-a)[0]    -
 a2.map(y=>y.length).sort((a,b)=>b-a)[0])
    
}*/


//kyu 6 : Array helpers


var numbers = [1, 2, 3, 4, 5];
console.log(numbers);

function Operator(arg){
  this.square = function(){
    return arg.map(a => a * a);
  }
  this.cube = function() {
    return arg.map(a => a * a *a);
  }
  this.average = function(){
    return arg.reduce((a,b)=>a+b)/arg.length;
  }
  this.sum = function(){
    return arg.reduce((a,b)=>a+b);
  }
  this.even = function(){
    return arg.filter(a=>a%2==0);
  }
  this.odd = function(){
    return arg.filter(a=>a%2!=0);
  }
}
var numbers = new Operator(numbers);

console.log(numbers.square());  // must return [1, 4, 9, 16, 25]
console.log(numbers.cube());    // must return [1, 8, 27, 64, 125]
console.log(numbers.average()); // must return 3
console.log(numbers.sum());     // must return 15
console.log(numbers.even());    // must return [2, 4]
console.log(numbers.odd());     // must return [1, 3, 5]

//multiple table
/*
multiplication_table(3,4)

1 2 3 4
2 4 6 8
3 6 9 12

-->[[1,2,3,4],[2,4,6,8],[3,6,9,12]]

*/
var test =[[1,2],[3,4]];
console.log(test[1][0]);

var arrTest=new Array(5);

/*

function multiTable(a,b){
  var arrOut = new Array(a);
  var arrIn = new Array(b);
  
  for (var i =0 ; i <= a-1 ; i++) {
    arrOut[i] = arrIn;
  }
  return arrOut;
  
}

console.log(multiTable(3,3))
*/

//array ber urut
const arrayUrut=(arg)=>{
  let arr=new Array(arg)
  for (var i = 0; i <arg; i++) {
    arr[i]=i+1;
  }
  return arr;
}
let arrayUrut2 = n => [...Array(n)].map((x, i) => i+1);

const arrayUrut3 = n => Array.from({length: n}, (_, i) => i + 1)
console.log(arrayUrut3(10));

var bit = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];
/*

input = 

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
 
output =
10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
 
*/
const changeBit=arr=>{
  return arr.join('').match(/\d{8}/g).reverse().join('').split('').map(a=>Math.abs(a));
  
}
console.log(bit);
console.log(changeBit(bit));
/*
let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);
*/
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

var kosong=[1,2,3];
console.log(kosong.filter(a=>typeof a==typeof 1));

var text = 'naiz adia ana baru biab uuz'

function sortEnd(x){
  return x.split(' ').map(a=>a.split(''). reverse().join('')).sort().map(a=>a.split(''). reverse().join(''));
}
console.log(text)
console.log(sortEnd(text));

var no = 81;
console.log(`${Math.sqrt(no)} + ${Math.cbrt(no)}`);

//prototype

Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

Object.assign(Array.prototype, {
    square() {return this.map(n => n * n);},
    cube() {return this.map(n => Math.pow(n, 3));},
    sum() {return this.reduce((p,n) => p + n, 0);},
    average() {return this.reduce((p,n) => p + n, 0) / this.length;},
    even() {return this.filter(n => !(n % 2));},
    odd() {return this.filter(n => n % 2);}
});

Object.prototype.rupiah = function () {
  return 'Rp.' +this.toString().split('').reverse().join('').match(/\d{1,3}/g).join('.').split('').reverse().join('')+'\,\-';
}

//Class

class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  birthDay(){
    return this.age-1;
  }
}
class Child extends Person{
}
const p1 = new Person('agus',21);
cl(p1.name);

const bayi = new Child('Feyza',5);

var bocil = new Person();

cl(bayi)
var juta = 10000000;
cl(juta.rupiah())
