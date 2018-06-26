let request = require('request');
/*reqeust (body, error, function is the format)*/
request('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',function(err,response,body){
/*alert(body);*/
console.log(body);
let bodyJson = JSON.parse(body);
let parsedquote = bodyJson[0]["content"]+"- " + bodyJson[0]["title"];
console.log(parsedquote);
document.getElementById("Quotepull").innerHTML = parsedquote;
});

document.getElementById("button").addEventListener("click",function(){
    request('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',function(err,response,body){
        /*alert(body);*/
        console.log(body);
        let bodyJson = JSON.parse(body);
        let parsedquote = bodyJson[0]["content"]+"- " + bodyJson[0]["title"];
        console.log(parsedquote);
        document.getElementById("Quotepull").innerHTML = parsedquote;
        });
},5000);



   


