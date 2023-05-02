
desktopWidth = 577;
isMobile = window.matchMedia(`(max-width: ${desktopWidth - 1}px)`).matches;
if (isMobile) {
  alert('For optimal viewing experience, please turn on desktop site mode');
  console.log(alert);
  break;
}




function Start(){
  document.getElementById("startbutton").style.display="none"
  left=document.getElementById("left")
  left.style.transition="transform"
  left.style.transitionDuration="3s"
  left.style.transform = "translateX(-100%)";
  right=document.getElementById("right")
  right.style.transition="transform"
  right.style.transitionDuration="3s"
  right.style.transform = "translateX(100%)";
  setTimeout(function() {
  parent=document.getElementById("parent")
  parent.style.display="none"
  bothdiv=document.getElementById("bothdiv")
  bothdiv.classList.remove("remove")
   }, 3000);
  }


  function showstart(){
      parent=document.getElementById("parent")
      parent.style.display="block"
      bothdiv=document.getElementById("bothdiv")
      bothdiv.classList.add("remove")
      setTimeout(function() {
          left=document.getElementById("left")
      left.style.transitionDuration="5s"
       left.style.transform = "translateX(0%)";
      right=document.getElementById("right")
      right.style.transition="transform"
      right.style.transitionDuration="5s"
      right.style.transform = "translateX(0%)";
      document.getElementById("startbutton").style.display="block"
   }, 10);
  }



    function toggleSidebar() {
        const secondDiv = document.querySelector('#second-div');
        
        if (secondDiv.classList.contains('col-sm-12')) {
            secondDiv.classList.remove('col-sm-12');
            secondDiv.classList.add('col-sm-9');
        } else {
            secondDiv.classList.remove('col-sm-9');
            secondDiv.classList.add('col-sm-12');
        }
    }

isnavbar=false;
function createNavbar(){
  if(isnavbar==false){
  navbar=document.createElement("nav")
  }
  bg= document.getElementById("navbarcolor").value
  navbar.style.background =bg
  height=document.getElementById("navbarheight").value
  navbar.className="col-sm-12 p-2 col-xs-12 mb-auto col-12 w-100"
  navbar.style.height=height+"px";
  secondDiv=document.getElementById("navbardiv")
  secondDiv.appendChild(navbar);
  isnavbar=true;
}

isfooter=false;
function createfooter(){
  // if(isnavbar==false){
  //   alert("You have not added a header either add a header first or if u want to add one later first remove the footer add the header and then re-add the footer");
  // }
  if(isfooter==false){
    footer=document.createElement("footer")
    }
    fbg= document.getElementById("footercolor").value
    footer.style.background =fbg
    height=document.getElementById("footerheight").value
    footer.style.height=height+"px";
    footer.className="col-sm-12 d-flex mt-auto p-2 col-12"
    secondDiv=document.getElementById("footerdiv")
    secondDiv.appendChild(footer);
    isfooter=true;
}

function contentbutton(string){
button=document.getElementById(string)
if(button.classList.contains('clicked')){
  button.classList.remove('clicked')
  button.classList.remove('myButton')
  createImage()
  }
  else{
    button.classList.add('clicked')
    button.classList.add('myButton')
    createImage()
}
}
isbodyimage = false;
function createImage() {
  if (isbodyimage == false) {
    container = document.createElement("div");
    image = document.createElement("img");
    container.appendChild(image);
  }
  if(isbodyimage){
    buttonclicked=document.getElementById
  }
  input = document.getElementById("mainImage");
  src = input.files[0].name;
  console.log(src);
  image.src = URL.createObjectURL(input.files[0]);
  size = document.getElementById("Imagesize").value;
  image.style.width = size + "%";

  contentright=document.getElementById('contentright')
  if(contentright.classList.contains('clicked')){
    image.style.float='left'
  }
  else{
    image.style.float='none'
  }

  contentleft=document.getElementById('contentleft')
  if(contentleft.classList.contains('clicked')){
    image.style.float='right'
  }
  else{
    image.style.float='none'
  }

  contentright=document.getElementById('contentno')
  if(contentright.classList.contains('clicked')){
    image.style.float='none'
  }

  moverightimage = document.getElementById("Right").value;
  container.style.position = "absolute";
  container.style.left = moverightimage + "px";

  movedownimage = document.getElementById("Up").value;
  container.style.marginTop = movedownimage + "px";

  console.log(moverightimage);
  mainDiv = document.getElementById("main");
  mainDiv.appendChild(container);
  isbodyimage = true;
}


function toggleButton(string) {
  console.log("hey");
  bold = document.getElementById(string);
  if(bold.classList.contains("bold")){
  if (bold.classList.contains("clicked")) {
    bold.classList.remove("clicked");
    removebold()
  } else {
    bold.classList.add("clicked");
    createtitle();
  }
}

  italic = document.getElementById(string);
  if(italic.classList.contains("italic")){
  if (italic.classList.contains("clicked")) {
    italic.classList.remove("clicked");
    removeitalic();
  } else {
    italic.classList.add("clicked");
    createtitle();
  }
}

underline = document.getElementById(string);
if(underline.classList.contains("underline")){  
if (underline.classList.contains("clicked")) {
    underline.classList.remove("clicked");
    removeunderline();
  } else {
    underline.classList.add("clicked");
    createtitle();
  }
}
}

isbodytitle=false
function createtitle() {
  if (isbodytitle == false) {
    container = document.createElement("div");
    container.className="containerclass"
    container.id="containerclass"
    title = document.createElement("p");
    title.id="ptag"
  }
    else{
      container=document.getElementById("containerclass")
      title=document.getElementById('ptag')
    }
    titlesize=document.getElementById("sizetitle").value;
    console.log(titlesize);
    title.style.fontSize=titlesize+"px"
    container.appendChild(title);
    moverighttitle = document.getElementById("Righttitle").value;
    container.style.position = "relative";
    container.style.left = moverighttitle + "px";

    bold=document.getElementById("bold")
  if(bold.classList.contains("clicked")){
    container.style.fontWeight="bold"
  }
  else{
    removebold()
  }
  italic=document.getElementById("italic")
  if(italic.classList.contains("clicked")){
    container.style.fontStyle="italic"
  }
  else{
    removeitalic()
  }
  underline=document.getElementById("underline")
  if(underline.classList.contains("clicked")){
    container.style.textDecoration="underline"
  }
  else{
    removeunderline()
  }
  container.style.position="relative"
  movedowntitle = document.getElementById("Uptitle").value;
  container.style.marginTop = movedowntitle + "px";
  titlecolor=document.getElementById("colortitle").value;
  container.style.color=titlecolor;
  container.appendChild(title)
  content = document.getElementById("bodytitle").value;
  title.innerHTML = content;
  mainDiv = document.getElementById("main");
  mainDiv.appendChild(container);
  isbodytitle = true;
}


isbodypara=false
function createpara() {
  if (isbodypara == false) {
    container = document.createElement("div");
    container.className="containerclass"
    container.id="containerclasspara"
    para = document.createElement("p");
    para.id="ptag"
  }
    else{
      container=document.getElementById("containerclasspara")
      para=document.getElementById('ptag')
    }
    parasize=document.getElementById("sizepara").value;
    console.log(parasize);
    para.style.fontSize=parasize+"px"
    container.appendChild(para);
    moverightpara = document.getElementById("Rightpara").value;
    container.style.position = "absolute";
    container.style.left = moverightpara + "px";
  movedownpara = document.getElementById("Uppara").value;
  container.style.marginTop = movedownpara + "px";
  paracolor=document.getElementById("colorpara").value;
  container.style.color=paracolor;
  container.appendChild(para)
  content = document.getElementById("bodypara").value;
  para.innerHTML = content;
  mainDiv = document.getElementById("main");
  mainDiv.appendChild(container);
  isbodypara = true;
}

let allink
arr=[]
elementsCreated=false;
function createelement(){
  if (elementsCreated==false) {
    allink=document.getElementById("addelements").value
    arr = allink.split(',');
  
  for (let i = 0; i < arr.length; i++) {
    let navbarItem = document.createElement("a");
    navbarItem.className = "navbar-item";
    navbarItem.style.color=document.getElementById("elementcolor").value
    margin=document.getElementById("elementmargin").value
    navbarItem.href=arr[i]+".html"
    navbarItem.style.marginLeft=margin+"px"
    margin=document.getElementById("elementsize").value
    navbarItem.style.fontSize=margin+"px"
    navbarItem.innerHTML = arr[i];
    navbar.appendChild(navbarItem);
  }
    elementsCreated=true;
}
}


function removeelement(){
  if (isnavbar) {
    let navbarItems = navbar.querySelectorAll(".navbar-item");
    console.log(navbarItems);
    for (let i = 0; i < navbarItems.length; i++) {
      navbarItems[i].remove();
    }
  elementsCreated=false;
}
}

function navbarelementsjustify(align){
  if(align=="center"){
    navbar.className="container-fluid d-flex justify-content-center"
  }
  if(align=="left"){
    navbar.className="container-fluid d-flex justify-content-start"
  }
  if(align=="right"){
    navbar.className="container-fluid d-flex justify-content-end"
  }
}

document.getElementById("navbarcolor").addEventListener("input", function () {
  if (isnavbar) {
    bg = document.getElementById("navbarcolor").value;
    navbar.style.background = bg;
  }
});



document.getElementById("navbarheight").addEventListener("input", function () {
  if (isnavbar) {
    height = document.getElementById("navbarheight").value;
    navbar.style.height = height + "px";
  }
});



document.getElementById("footercolor").addEventListener("input", function () {
  if (isfooter) {
    fbg = document.getElementById("footercolor").value;
    footer.style.background = fbg;
  }
});



document.getElementById("footerheight").addEventListener("input", function () {
  if (isfooter) {
    height = document.getElementById("footerheight").value;
    footer.style.height = height + "px";
  }
});


document.getElementById("Imagesize").addEventListener("input", function () {
  if (isbodyimage) {
    size=document.getElementById("Imagesize").value
    image.style.width=size+"%"
  }
});


document.getElementById("Right").addEventListener("input", function () {
  if (isbodyimage) {
    moveright = document.getElementById("Right").value;
    container.style.left = moveright + "px";
  }
});

document.getElementById("Up").addEventListener("input", function () {
  if (isbodyimage) {
    movedown = document.getElementById("Up").value;
    image.style.marginTop = movedown + "px";

  }
});

document.getElementById("Righttitle").addEventListener("input", function () {
  if (isbodytitle) {
    moveright = document.getElementById("Righttitle").value;
    container.style.left = moveright + "px";
  }
});

document.getElementById("Uptitle").addEventListener("input", function () {
  if (isbodytitle) {
    movedown = document.getElementById("Uptitle").value;
    title.style.marginTop = movedown + "px";

  }
});

document.getElementById("Rightpara").addEventListener("input", function () {
  if (isbodypara) {
    moveright = document.getElementById("Rightpara").value;
    container.style.left = moveright + "px";
  }
});

document.getElementById("Uppara").addEventListener("input", function () {
  if (isbodypara) {
    movedown = document.getElementById("Uppara").value;
    para.style.marginTop = movedown + "px";

  }
});

document.getElementById("bold").addEventListener("input", function () {
    bold = document.getElementById("bold");
    if (bold.classList.contains("clicked")) {
      bold.classList.remove("clicked");
      removebold()
    } else {
      bold.classList.add("clicked");
      createtitle();
    }
});

document.getElementById("italic").addEventListener("input", function () {
  italic = document.getElementById("italic");
  if (italic.classList.contains("clicked")) {
    italic.classList.remove("clicked");
    removeitalic();
  } else {
    italic.classList.add("clicked");
    createtitle();
  }
});

document.getElementById("underline").addEventListener("input", function () {
  underline = document.getElementById("underline");
    if (underline.classList.contains("clicked")) {
        underline.classList.remove("clicked");
        removeunderline();
      } else {
        underline.classList.add("clicked");
        createtitle();
      }
    
});

document.getElementById("elementmargin").addEventListener("input", function () {
  if (isnavbar) {
    margin=document.getElementById("elementmargin").value
    let navbarItems = navbar.querySelectorAll(".navbar-item");
    console.log(navbarItems);
    for (let i = 0; i < navbarItems.length; i++) {
      navbarItems[i].style.marginLeft=margin+"px"
    }
  }
});


document.getElementById("elementsize").addEventListener("input", function () {
  if (isnavbar) {
    size=document.getElementById("elementsize").value
    let navbarItems = navbar.querySelectorAll(".navbar-item");
    console.log(navbarItems);
    for (let i = 0; i < navbarItems.length; i++) {
      navbarItems[i].style.fontSize=size+"px"
    }
  }
});


document.getElementById("elementcolor").addEventListener("input", function () {
  if (isnavbar) {
    color=document.getElementById("elementcolor").value
    let navbarItems = navbar.querySelectorAll(".navbar-item");
    console.log(navbarItems);
    for (let i = 0; i < navbarItems.length; i++) {
      navbarItems[i].style.color=color
    }
  }
});


document.getElementById("sizetitle").addEventListener("input", function () {
  if(isbodytitle){
    title=document.getElementById('ptag')
    titlesize=document.getElementById("sizetitle").value;
    title.style.fontSize=titlesize+"px"
  }
});

document.getElementById("colortitle").addEventListener("input", function () {
  if(isbodytitle){
    titlecolor=document.getElementById("colortitle").value;
    container.style.color=titlecolor;
  }
});

document.getElementById("sizepara").addEventListener("input", function () {
  if(isbodypara){
    para=document.getElementById('ptag')
    parasize=document.getElementById("sizepara").value;
    para.style.fontSize=parasize+"px"
  }
});

document.getElementById("colorpara").addEventListener("input", function () {
  if(isbodypara){
    paracolor=document.getElementById("colorpara").value;
    container.style.color=paracolor;
  }
});

function navbarremove(){
  if (isnavbar) {
    navbar.remove();
    isnavbar = false;
  }
}

function footerremove(){
  if (isfooter) {
    footer.remove();
    isfooter = false;
  }
}

function removeImage(){
  if (isbodyimage) {
    image.remove();
    isbodyimage = false;
  }
}
  
function removetitle(){
  if (isbodytitle) {
    title.remove();
    isbodytitle = false;
  }
}

function removepara(){
  if (isbodypara) {
    para.remove();
    isbodypara = false;
  }
}

function removebold(){
  console.log("remove triggered");
  container.style.fontWeight="normal";
}

function removeitalic(){
  container.style.fontStyle="normal";
}

function removeunderline(){
  container.style.textDecoration= "none";
}


addnavbar=0
function remove(string){
    buttonpressed=document.getElementById(string)
    if(addnavbar==0 && buttonpressed.id=='addnavbar'){
        show=document.getElementById("removenavbar")
        show.style.display="block"
        buttonpressed.style.display="none"
        showelement=document.getElementById("navbarelement")
        showelement.style.display="block"
        addnavbar++
    }
   else
    {
        show=document.getElementById("addnavbar")
        show.style.display="block"
        buttonpressed.style.display="none"
        showelement=document.getElementById("navbarelement")
        showelement.style.display="none"
        addnavbar=0
    }
}

elementcreated=0
function removeelementbutton(string){
  buttonpressed=document.getElementById(string)
  if(elementcreated==0 && buttonpressed.id=='createelementbutton'){
      show=document.getElementById("removeelementbutton")
      show.style.display="block"
      buttonpressed.style.display="none"
      elementcreated++
  }
 else
  {
      show=document.getElementById("createelementbutton")
      show.style.display="block"
      buttonpressed.style.display="none"
      elementcreated=0
  }
}

addfooter=0
function showfooter(string){
  buttonpressed=document.getElementById(string)
  if(addfooter==0 && string=='addfooter'){
      show=document.getElementById("removefooter")
      show.style.display="block"
      buttonpressed.style.display="none"
      addfooter++
  }
 else
  {
      show=document.getElementById("addfooter")
      show.style.display="block"
      buttonpressed.style.display="none"
      addfooter=0
  }
}

showtitle=0
function showtitlebutton(string){
  buttonpressed=document.getElementById(string)
  if(showtitle==0 && string=='addtitlebutton'){
      show=document.getElementById("removetitlebutton")
      show.style.display="block"
      buttonpressed.style.display="none"
      showmove=document.getElementById("movetitleshow")
      showmove.classList.remove("remove")
      showtitle++
  }
 else
  {
      show=document.getElementById("addtitlebutton")
      show.style.display="block"
      buttonpressed.style.display="none"
      showmove=document.getElementById("movetitleshow")
      showmove.classList.add("remove")
      showtitle=0
  }
}

showpara=0
function showparabutton(string){
  buttonpressed=document.getElementById(string)
  if(showpara==0 && string=='addparabutton'){
      show=document.getElementById("removeparabutton")
      show.style.display="block"
      buttonpressed.style.display="none"
      showmove=document.getElementById("moveparashow")
      showmove.classList.remove("remove")
      showpara++
  }
 else
  {
      show=document.getElementById("addparabutton")
      show.style.display="block"
      buttonpressed.style.display="none"
      showmove=document.getElementById("moveparashow")
      showmove.classList.add("remove")
      showpara=0
  }
}
