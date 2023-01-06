const pokemon = [
  {number: "001", name: "Bulbasaur", type: "Grass | Poison", evolves: "Evolves into Ivysaur", img: "pokemon/1.png"},
  {number: "002", name: "Ivysaur", type: "Grass | Poison", evolves: "Evolves into Venusaur", img: "pokemon/2.png"},
  {number: "003", name: "Venusaur", type: "Grass | Poison", evolves: "Evolves into N/A", img: "pokemon/3.png"},
  {number: "004", name: "Charmander", type: "Fire", evolves: "Evolves into Charmeleon", img: "pokemon/4.png"},
  {number: "005", name: "Charmeleon", type: "Fire", evolves: "Evolves into Charizard", img: "pokemon/5.png"},
  {number: "006", name: "Charizard", type: "Fire | Flying", evolves: "Evolves into N/A", img: "pokemon/6.png"},
  {number: "007", name: "Squirtle", type: "Water", evolves: "Evolves into Wortotle", img: "pokemon/7.png"},
  {number: "008", name: "Wortotle", type: "Water", evolves: "Evolves into Blastoise", img: "pokemon/8.png"},
  {number: "009", name: "Blastoise", type: "Water", evolves: "Evolves into N/A", img: "pokemon/9.png"},
  {number: "010", name: "Caterpie", type: "Bug", evolves: "Evolves into Metapod", img: "pokemon/10.png"},
  {number: "011", name: "Metapod", type: "Bug", evolves: "Evolves into Butterfree", img: "pokemon/11.png"},
  {number: "012", name: "Butterfree", type: "Bug | Flying", evolves: "Evolves into N/A", img: "pokemon/12.png"},
  {number: "013", name: "Weedle", type: "Bug | Poison", evolves: "Evolves into Kakuna", img: "pokemon/13.png"},
  {number: "014", name: "Kakuna", type: "Bug | Poison", evolves: "Evolves into Beedrill", img: "pokemon/14.png"},
  {number: "015", name: "Beedrill", type: "Bug | Poison", evolves: "Evolves into N/A", img: "pokemon/15.png"},
  {number: "016", name: "Pidgey", type: "Normal | Flying", evolves: "Evolves into Pidgeotto", img: "pokemon/16.png"},
  {number: "017", name: "Pidgeotto", type: "Normal | Flying", evolves: "Evolves into Pidgeot", img: "pokemon/17.png"},
  {number: "018", name: "Pidgeot", type: "Normal | Flying", evolves: "Evolves into N/A", img: "pokemon/18.png"},
  {number: "019", name: "Rattata", type: "Normal", evolves: "Evolves into Raticate", img: "pokemon/19.png"},
  {number: "020", name: "Raticate", type: "Normal", evolves: "Evolves into N/A", img: "pokemon/20.png"}

 ]


function searchByNumberr(){
    let /*display=[], c=0,*/ input, filter, ul, li, i, createDiv;//declare variables
    input = document.getElementById("searchByNumber");
    filter = input.value.toUpperCase();
    console.log(filter)
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    createDiv = document.getElementById("div2")
    
   
while (createDiv.firstChild || filter == ""){
  createDiv.removeChild(createDiv.firstChild);}
   
  ulResult = document.createElement("ul")
  createDiv.appendChild(ulResult)
     
    for (i=0;i<pokemon.length;i++)
    {
        if(pokemon[i].number.toUpperCase().includes(filter)){
          let list = document.createElement("li")
          let a = document.createElement("p")
          let a_text = document.createTextNode(pokemon[i].number)
          a.appendChild(a_text)
        

          let n = document.createElement("p")
          let n_name = document.createTextNode(pokemon[i].name)
          n.appendChild(n_name)
          

          let t = document.createElement("p")
          let t_type = document.createTextNode(pokemon[i].type)
          t.appendChild(t_type)
          

          let e = document.createElement("p")
          let e_evolves = document.createTextNode(pokemon[i].evolves)
          e.appendChild(e_evolves)

          let m = document.createElement('img')
          m.src = (pokemon[i].img)

          list.append(a, n, t, e, m)
          ulResult.appendChild(list)
        }
     }
  }

  
  function searchByNamee(){
  let /*display=[], c=0,*/input, filter, ul, li, i, createDiv;//declare variables
    input = document.getElementById("searchByName");
    filter = input.value.toUpperCase();
    console.log(filter)
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    createDiv = document.getElementById("div2")
    
   
while (createDiv.firstChild || filter == ""){
  createDiv.removeChild(createDiv.firstChild);}
   
  ulResult = document.createElement("ul")
  createDiv.appendChild(ulResult)
     
    for (i=0;i<pokemon.length;i++)
    {
        if(pokemon[i].name.toUpperCase().includes(filter)){
          let list = document.createElement("li")
          let a = document.createElement("n")
          let a_text = document.createTextNode(pokemon[i].number)
          a.appendChild(a_text)
        

          let n = document.createElement("g")
          let n_name = document.createTextNode(pokemon[i].name)
          n.appendChild(n_name)
          

          let t = document.createElement("p")
          let t_type = document.createTextNode(pokemon[i].type)
          t.appendChild(t_type)
          

          let e = document.createElement("p")
          let e_evolves = document.createTextNode(pokemon[i].evolves)
          e.appendChild(e_evolves)

          let m = document.createElement('img')
          m.src = (pokemon[i].img)

          list.append(a, n, t, e, m)
          ulResult.appendChild(list)
        }
     }
    }
  
//from lab 1, not used here
  /*function getNumber() //input
  {
    let input = document.getElementById("searchByNumber");
    searchByNumber(input); 
  }

  function getName() //input
  {
    let input = document.getElementById("searchByName");
    searchByName(input);
  }
  */

 
 function divv()
 {
   const divb = document.getElementById("div2");
   const divU = document.createElement("div");
   const div2 = doucment.createElement("ul");
   div2.id ="div2";
   divU.appendChild(div2);
   divb.appendChild(divU);
   }
  
  
