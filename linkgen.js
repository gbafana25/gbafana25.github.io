var tlds_list = [];
var subdomain_list = [];
var rand_tld = "";
var rand_subdomain = "";

async function getWordlists() {
    var link = document.getElementById("test")
    fetch("https://data.iana.org/TLD/tlds-alpha-by-domain.txt")
        .then((resp) => {
            return resp.text()
        }).then((data) => {
            tlds_list = data.split(/\r?\n/) 
            //console.log(tlds_list)
            var r = Math.floor(Math.random() * tlds_list.length)
            rand_tld = tlds_list[r].toLowerCase()
        }).then(fetch("https://raw.githubusercontent.com/danTaler/WordLists/master/Subdomain.txt")
        .then((resp) => {
            return resp.text()
        }).then((data) => {
            subdomain_list = data.split(/\r?\n/)
            var r = Math.floor(Math.random() * subdomain_list.length)
            rand_subdomain = subdomain_list[r]
            console.log(rand_subdomain+"."+rand_tld)
            link.innerHTML = rand_subdomain+"."+rand_tld
            link.href = "https://"+rand_subdomain+"."+rand_tld
        }))
    
}

getWordlists()

