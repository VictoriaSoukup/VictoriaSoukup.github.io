let numOfProperties = 4; //const variable for max length

let properties = [  
    ["img/lilpeep.jpg", "Lil Peep", "21 Jahre", "Rapper", "https://open.spotify.com/artist/2kCcBybjl3SAtIcwdWpUe3"],
    ["img/xxx.jpg", "XXXTentation","20 Jahre", "Sänger", `https://open.spotify.com/artist/15UsOTVnJzReFVN1VCnxy4`],
    ["img/melmart.jpg", "Melanie Martinez","26 Jahre","Sängerin", `https://open.spotify.com/artist/63yrD80RY3RNEM2YDpUpO8`],
    ["img/GHOSTEMANE.jpg", "Ghostmane","30 Jahre","Rapper", `https://open.spotify.com/artist/3uL4UpqShC4p2x1dJutoRW`],
    ["img/yungblud.jpg", "YUNGBLUD","24 Jahre","Sänger", `https://open.spotify.com/artist/6Ad91Jof8Niiw0lGLLi3NW`],
    ["img/marina.jpg", "MARINA","36 Jahre","Sängerin", `https://open.spotify.com/artist/6CwfuxIqcltXDGjfZsMd9A`],
    ["img/billie-eilish.jpg","Billie EIlish","19 Jahre","Sängerin", `https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH"`],
    ["img/ash.jpg", "Ashnikko","25 Jahre","Rapperin", `https://open.spotify.com/artist/3PyJHH2wyfQK3WZrk9rpmP`],
    ["img/thelum.jpg", "The Lumineers","38 und 35 Jahre","Band", `https://open.spotify.com/artist/16oZKvXb6WkQlVAjwo2Wbg`],
    ["img/nf.jpg", "NF","30 Jahre", "Sänger", `https://open.spotify.com/artist/6fOMl44jA4Sp5b9PpYCkzz`]
    
]; 

//output content
let images = "";
let code = '';

    for (let i = 0; i < properties.length; i++){   
        code += `<div class="infobox"><img src="${properties[i][0]}">`;
        
        for (let j = 1; j < numOfProperties; j++) {
            let infos = properties[i][j];
            code +=  `<p>${infos}</p>`;
        }

        code += `<div id="spotify"><a href="${properties[i][4]}">♬ Listen to</a></div>`;
        code += '</div>';
    }

document.getElementById("boxes").innerHTML = code;




