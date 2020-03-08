var objs = 
  [{title:"1", 
  date:"date",
  category:"art",
  subcategories:["sub1", "sub2", "sub3"],
  content:"https://media.discordapp.net/attachments/603405649354948648/668511554882502656/DSC08403.JPG?width=850&height=1140",
  base:"img"},
  
  {title:"2", 
  date:"date",
  category:"art",
  subcategories:["sub1", "sub2", "sub3"],
  content:"https://media.discordapp.net/attachments/583100225875476531/664653844822622218/IMG_20200108_2109333932.jpg?width=1140&height=1140",
  base:"img"},
  
  {title:"3", 
  date:"date",
  category:"art",
  subcategories:["sub1", "sub2", "sub3"],
  content:"https://media.discordapp.net/attachments/583100225875476531/604456873780838420/DSC08295.JPG?width=1462&height=1141",
  base:"img"},
  
  {title:"4", 
  date:"date",
  category:"writing",
  subcategories:["sub1", "sub2", "sub3"],
  content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At erat pellentesque adipiscing commodo. Quis risus sed vulputate odio ut enim blandit volutpat. Tincidunt dui ut ornare lectus sit amet est placerat. Purus non enim praesent elementum facilisis leo vel fringilla. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Amet mauris commodo quis imperdiet massa tincidunt nunc. Lectus vestibulum mattis ullamcorper velit. Felis bibendum ut tristique et. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Diam donec adipiscing tristique risus nec feugiat.",
  base:"text"},
  
  {title:"5", 
  date:"date",
  category:"writing",
  subcategories:["sub1", "sub2", "sub3"],
  content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At erat pellentesque adipiscing commodo. Quis risus sed vulputate odio ut enim blandit volutpat. Tincidunt dui ut ornare lectus sit amet est placerat. Purus non enim praesent elementum facilisis leo vel fringilla. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Amet mauris commodo quis imperdiet massa tincidunt nunc. Lectus vestibulum mattis ullamcorper velit. Felis bibendum ut tristique et. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Diam donec adipiscing tristique risus nec feugiat.",
  base:"text"},
  
  {title:"6", 
  date:"date",
  category:"writing",
  subcategories:["sub1", "sub2", "sub3"],
  content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At erat pellentesque adipiscing commodo. Quis risus sed vulputate odio ut enim blandit volutpat. Tincidunt dui ut ornare lectus sit amet est placerat. Purus non enim praesent elementum facilisis leo vel fringilla. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Amet mauris commodo quis imperdiet massa tincidunt nunc. Lectus vestibulum mattis ullamcorper velit. Felis bibendum ut tristique et. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Diam donec adipiscing tristique risus nec feugiat.",
  base:"text"}];

function load(){

  var gallery = document.getElementById("gallery");
  gallery.innerHTML = '';
  var currBase = "img";
  var available = objs.slice(0);

  var i = 0;
  while(available.length > 0){
    console.log(available[i].title);
    var box = document.createElement("div");
    if(currBase == available[i].base){
      if(available[i].base == "img"){
        box.className = "box";
        var img = new Image();
        img.src = available[i].content;
        box.appendChild(img);
        currBase = "text";
      }
      else if(available[i].base == "text"){
        box.className = "textBox";
        var body = document.createElement("p");
        body.className = "preview";
        body.innerHTML = available[i].content;
        box.appendChild(body);
        currBase = "img";
      }
      var title = document.createElement("p");
      title.className = "title";
      title.innerHTML = available[i].title;
      available.splice(i, 1);
      gallery.appendChild(box, title);

    }

    else{
      if(i == available.length - 1){
        i = 0;
      } else{
        i++;
      }
    }
  }
}

function show(cat){
  $("p").fadeOut();
  $("img").fadeOut();
  console.log(cat);
  var gallery = document.getElementById("gallery");
  gallery.innerHTML = '';
  console.log(objs.length);
  for(var i = 0; i < objs.length; i++){
    if(objs[i].category == cat){
      var box = document.createElement("div");
        if(objs[i].base == "img"){
          box.className = "box";
          var img = new Image();
          img.src = objs[i].content;
          box.appendChild(img);
          currBase = "text";
        }
        else if(objs[i].base == "text"){
          box.className = "textBox";
          var body = document.createElement("p");
          body.className = "preview";
          body.innerHTML = objs[i].content;
          box.appendChild(body);
          currBase = "img";
        }
        gallery.appendChild(box);
    }
  }

}