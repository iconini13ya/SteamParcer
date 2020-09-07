var needle= require("needle");
var cheerio= require("cheerio");
url="https://steamcommunity.com/market/listings/570/Peregrine%20Flight"
courseURL="http://www.cbr.ru/scripts/XML_daily.asp"
function getEuroPrice(){
    return new  Promise ((resolve, reject)=>{
        needle.get(courseURL,(err,res)=>{
            resolve(res.body.children[11].children[4].value);
           });
    });
}
needle.get(url,(err,res)=>{
    if(err) throw err;
    var $= cheerio.load(res.body);
    // priceArr = Array.from($(".market_listing_price.market_listing_price_with_fee").text().replace(/\s/g, ''));
    console.log( $(".market_listing_price.market_listing_price_with_fee").text().replace(/\s/g, ' ') );
    // console.log($);
});
// getEuroPrice().then((res)=>{console.log(res);});

// var text = "2,11";
// console.log(text.search('€')); 

// needle.get(courseURL,(err,res)=>{

// console.log(res.body.children[11].children[4].value);
// });

// let Myarr=[1,100];
// function MidArrMass(arr) {
//     var Summ=0;
//     for (let index = 0; index < arr.length; index++) {
//         Summ=Summ+arr[index];        
//     }
//     Summ=Summ/arr.length;
//     // console.log(Date.now());
//     return Summ*Math.abs(+Math.sin(Date.now()).toFixed(2));
// }
// // console.log(MidArrMass(Myarr).toFixed(2));
// console.log(MidArrMass(Myarr));

// function FactorN(N) {
//     var Factor=1;
//     for (let index = 1; index-1 < N; index++) {
//         Factor=Factor*index;
//     }
//     return Factor;
// }
// console.log(FactorN(11));