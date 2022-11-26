function getdata(event){
    event.preventDefault();
}

function button(){

    let fname=document.getElementById("fname").value
    console.log(fname)
    let td1=document.getElementById("td1")
    td1.innerText=fname;

    let lname=document.getElementById("lname").value
    console.log(lname)
    let td2=document.getElementById("td2")
    td2.innerText=lname;

    let address =document.getElementById("address").value
    console.log(address)
    let td5=document.getElementById("td5")
    td5.innerText=address;

    let pincode=document.getElementById("pincode").value
    console.log(pincode)
    let td6=document.getElementById("td6")
    td6.innerText=pincode;
    
    let state=document.getElementById("state").value
    console.log(state)
    let td7=document.getElementById("td7")
    td7.innerText=state;

    let country=document.getElementById("country").value
    console.log(country)
    let td8=document.getElementById("td8")
    td8.innerText=country;
    
    let male=document.getElementById("male").value
   
    let female=document.getElementById("female").value
    if(document.getElementById("male").checked){
        let td3=document.getElementById("td3")
        td3.innerText=male
        console.log(male)
    }else if(document.getElementById("female").checked) {
        let td3=document.getElementById("td3")
        td3.innerText=female
        console.log(female)
    } else{
        td3.innerText=""
    }
   
    let checkbox=document.getElementsByName("checkBox")
        // console.log(checkbox)
        // let checked=0;
        let arr=[]
        for(var i=0;i<checkbox.length;i++){
            
            if(checkbox[i].checked){
                // checked++
                // console.log(checkbox[i].value)
                arr.push(checkbox[i].value)
                console.log(arr)
            }
           
        }
        if(arr.length<2){
            alert("Select Atlest Two")
        }
       
       
      let td4=document.getElementById("td4").innerHTML=arr;
    
    }

