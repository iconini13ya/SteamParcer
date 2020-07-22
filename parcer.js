var needle= require("needle");
var cheerio= require("cheerio");
url="https://steamcommunity.com/market/listings/570/Peregrine%20Flight"

needle.get(url,(err,res)=>{
    if(err) throw err;
    var $= cheerio.load(res.body);

   
    imgs = $(".playerAvatar img");
    console.log($(".market_listing_price.market_listing_price_with_fee").text());
    // imgs.each((i,val)=>{
        
    //     console.log($(val).attr("src"));

    // });
})