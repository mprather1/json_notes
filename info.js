var info = { 
  "name" : "Mike Prather",
  "array" : [
    0, 1, 2, 3, 4
  ],
  "links" : {
    "google": "www.google.com",
    "youtube": "www.youtube.com",
    "github": "https://github.com/mprather1"
  },
};

console.log("info.name: " + info.name);
console.log("info[name]: " + info["name"]);

for (i = 0; i < info.array.length; i++){
  console.log(info.array[i]);
}

var output = "";

for ( key in info.links ){
  if (info.links.hasOwnProperty(key)){
    output += "<li>" + "<a href='" + info.links[key] + "'>" + key + "</a>" + "</li>\n"
  }
}



console.log(output);

