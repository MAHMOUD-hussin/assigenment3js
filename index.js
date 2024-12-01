var oneSite;
var shanta = [];
var cartona;

shanta = JSON.parse(localStorage.getItem("storeShanta")) || [];

show();

function demo(value) {
    var siteInput = document.getElementById("site");
    var urlInput = document.getElementById("url");

    // Site name validation
    if (siteInput.value) {
        const siteRegex = /^[a-zA-Z0-9\s]{3,}$/;
        if (siteRegex.test(siteInput.value)) {
            siteInput.classList.add("is-valid");
            siteInput.classList.remove("is-invalid");
        } else {
            siteInput.classList.add("is-invalid");
            siteInput.classList.remove("is-valid");

        }
    }

    // URL validation
    if (urlInput.value) {
        const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;
        if (urlRegex.test(urlInput.value)) {
            urlInput.classList.add("is-valid");
            urlInput.classList.remove("is-invalid");
        } else {
            urlInput.classList.add("is-invalid");
            urlInput.classList.remove("is-valid");
            
        }
    }
}

function test() {
    var siteName = document.getElementById("site").value;
    var siteUrl = document.getElementById("url").value;

    var siteRegex = /^[a-zA-Z0-9\s]{3,}$/;
    var urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;

    if (!siteRegex.test(siteName) || !urlRegex.test(siteUrl)) {
    
        return;
    }

    oneSite = {
        site: siteName,
        url: siteUrl,
    }

    shanta.push(oneSite);
    localStorage.setItem("storeShanta", JSON.stringify(shanta));
    show();
    clear();
}

function clear() {
    var inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.value = '';
        input.classList.remove('is-valid', 'is-invalid');
    });
    document.getElementById("siteFeedback").innerHTML = "";
    document.getElementById("urlFeedback").innerHTML = "";
}

function show(){

    cartona ='';

    for(let i = 0; i < shanta.length; i++){
        console.log(shanta[i]);

        cartona += `  <tr>
                <td>${i+1}</td>
                <td>${shanta[i].site}</td>
                <td> <button class="btn btn-primary">visit</button></td>
                <td> <button onclick="deleteWeb(${i})" class="btn btn-danger">delete</button></td>
            </tr>`


            document.getElementById("row").innerHTML = cartona;


    }

}

function deleteWeb(index) {
    
        shanta.splice(index, 1);
        localStorage.setItem("storeShanta", JSON.stringify(shanta));
        show();

}




