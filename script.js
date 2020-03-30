var objs_raw;
var textbased = [];
var imgbased = [];

var gallery = document.getElementById("gallery");
var boxes = [];
var fading = false;

var db = firebase.database().ref().child("MyPortfolio");

function load(){
	objs_raw = [];
	textbased = [];
	imgbased = [];
	gallery.innerHTML = '';

	db.once('value', function(snapshot){
		console.log("retrieving");
		objs_raw = snapshot.val();
		console.log(snapshot);
		var currbase;
	  	for(var key in objs_raw){

			currbase = objs_raw[key].base;
			if(objs_raw[key].base == "text"){
				textbased.push(objs_raw[key]);
			}
			else{
				imgbased.push(objs_raw[key]);
			}

	 	 }

		console.log(textbased);
		console.log(imgbased);

		var imgcount = 0; var txtcount = 0;
		console.log("IMG: " + imgbased.length);
		console.log("TXT: " + textbased.length);

		while(imgcount < imgbased.length || txtcount < textbased.length){
			

			if(currbase == "img"){

				if(imgcount != imgbased.length){

					var box = document.createElement("div");
					var id = 0; var i = 0;
					for(var key in objs_raw){
						if(objs_raw[key] == imgbased[imgcount]){id = i;} else{i++;}
					}
					box.id = id;
					console.log(box.id);
					box.onclick = function(){
						if(!fading){
							open(this.id);
						}
					}
					box.className = "box";
					var img = new Image();
					img.className = "icon";
					img.src = imgbased[imgcount].content[0];
					box.appendChild(img);
					gallery.appendChild(box);
					currbase = "text";
					imgcount++;

				} else{
					currbase = "text"
				}

			} else if(currbase == "text"){
				
				if(txtcount != textbased.length){
				
					var box = document.createElement("div");
					var id = 0; var i = 0;
					for(var key in objs_raw){
						if(objs_raw[key] == textbased[txtcount]){id = i;} else{i++;}
					}
					box.id = id;
					console.log(box.id);
					box.onclick = function(){
						if(!fading){
							open(this.id);
						}
					}
					box.className = "textBox";
					var body = document.createElement("p");
					body.className = "preview";
					body.innerHTML = textbased[txtcount].content[0];
					box.appendChild(body);
					gallery.appendChild(box);
					currbase = "img";
					txtcount++;
					
				} else{
					currbase = "img"
				}

			}
			console.log("t: " + txtcount);
			console.log("i: " + imgcount);

		}

	});

}

function show(cat){
  fading = true;
  $("p").fadeOut();
  $("img").fadeOut();
  $("box").fadeOut();
  $("textBox").fadeOut();
  $("h3").fadeOut();
  console.log(cat);
   setTimeout(function () {
         gallery.innerHTML = '';

	  for(var key in objs_raw){
	    if(objs_raw[key].category == cat){
	      var box = document.createElement("div");
		var id = 0; var i = 0;
		for(var k in objs_raw){
			if(objs_raw[k] == objs_raw[key]){id = i;} else{i++;}
		}
		box.id = id;
	      box.onclick = function() {
		      console.log(box.id);
		      open(this.id);
	      };
		if(objs_raw[key].base == "img"){
		  box.className = "box";
		  var img = new Image();
		  img.className = "icon";
		  img.src = objs_raw[key].content[0];
		  box.appendChild(img);
		  currBase = "text";
		}
		else if(objs_raw[key].base == "text"){
		  box.className = "textBox";
		  var body = document.createElement("p");
		  body.className = "preview";
		  body.innerHTML = objs_raw[key].content[0];
		  box.appendChild(body);
		  currBase = "img";
		}
		gallery.appendChild(box);
	    }
	  }
    }, 1000);
   fading = false;

}

function open(i){
	
  var key = Object.keys(objs_raw)[i];
  console.log(key);
  console.log(objs_raw[key]);

  fading = true;
  $("p").fadeOut();
  $("img").fadeOut();
  $("box").fadeOut();
  $("h3").fadeOut();
  setTimeout(function(){
	  gallery.innerHTML = '';
	  var head = document.createElement("h3");
	  head.innerHTML = objs_raw[key].title;
	  gallery.appendChild(head);

	  for(var i = 0; i < objs_raw[key].content.length; i++){

		  console.log(objs_raw[key].content[i]);

		  var box = document.createElement("div");
		  box.className = "separator";
		  var body;

		  if(objs_raw[key].content[i].indexOf("https://firebasestorage.googleapis.com/v0/b/storage-336db.appspot.com/o/") != -1){
			  body = new Image();
			  body.className = "fullPic";
			  body.src = objs_raw[key].content[i];
		  }else{
			  console.log("paragraph");
		  	body = document.createElement("p");
		 	body.className = "fullText";
		  	body.innerHTML = objs_raw[key].content[i];
		  }
		//box.appendChild(body);
	  	gallery.appendChild(body);

	  }

  }, 1000);
  fading = false;
}
