var bookName = document.getElementById("bookName");
var bookURL = document.getElementById("bookURL");

var websitelist = [];

if(localStorage.getItem("web") !== null){
    websitelist = JSON.parse(localStorage.getItem("web"));
    displayWeb();
}

function addWeb(){
    if(validationNmae() == true  && validation_url() == true){
        var website = {
            name : bookName.value,
            url : bookURL.value,
        }
        websitelist.push(website);
    
        displayWeb();
    
    
        localStorage.setItem("web" , JSON.stringify(websitelist));
    
        clearform();
        console.log(website);
    }
    else{
        var msg = document.getElementById("msg");
        msg.classList.remove("d-none")
    }
}

function displayWeb(){
    var container = "";
    for(var i = 0 ; i < websitelist.length ; i++){
        container += `
            <tr>
                <td>${i+1}</td>
                <td>${websitelist[i].name}</td>
                <td>
                    <button  class="btn text-muted btn-visit">
                        <i class="fa-regular fa-eye"></i>
                        <a href="${websitelist[i].url}">Visit</a>
                    </button>
                </td>
                <td>
                    <button onclick="deleteItem(${i})" class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                    Delete
                    </button>
                </td>
            </tr>
        `
    }
    document.getElementById("tableData").innerHTML = container;
}

function deleteItem(indexitem){
    websitelist.splice(indexitem , 1);
    displayWeb();
    localStorage.setItem("web" , JSON.stringify(websitelist) );
}

function clearform(){
    bookName.value = null;
    bookURL.value = null;

    bookName.classList.remove("is-valid");
    bookURL.classList.remove("is-valid");
}

function validationNmae(){
    var nameweb = bookName.value ;
    var regex = /^[a-zA-Z]{3,}$/;
    // var msg = document.getElementById("msg");

    if(regex.test(nameweb) == true){
        // console.log("match")
        bookName.classList.add("is-valid");
        bookName.classList.remove("is-invalid");
        // msg.classList.add("d-none");
        return true;
    }
    else{
        // console.log("not match")
        bookName.classList.add("is-invalid");
        bookName.classList.remove("is-valid");
        // msg.classList.remove("d-none");
        return false;
    }
}

function validation_url(){
    var url = bookURL.value;
    var regex = /^(?:(?:http|https|ftp):\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=%]+$/;
    // var msg = document.getElementById("msg");

    if(regex.test(url) == true){
        bookURL.classList.add("is-valid");
        bookURL.classList.remove("is-invalid")
        // msg.classList.add("d-none");
        return true;
    }
    else{
        bookURL.classList.add("is-invalid");
        bookURL.classList.remove("is-valid");
        // msg.classList.remove("d-none");
        return false;
    }
}
function close_window(){
    var msg = document.getElementById("msg");
    msg.classList.add("d-none")

}
