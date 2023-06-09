let getRepos = document.querySelector(".get-repos input");
let getRepo = document.querySelector(".get-repo");
let showData = document.querySelector(".show-data");


getRepo.onclick = function () {
    getReposFun()
}


function getReposFun () {
    if (getRepos.value == '') {
        showData.innerHTML = `<span>Please Write Github Username</span>`
}else {
     
    fetch(`https://api.github.com/users/${getRepos.value}/repos`).then((re) => {
        return re.json()
    }).then((reA) => {
        showData.innerHTML = ""
        reA.forEach(ele => {
           let main = document.createElement("div");
           let rebo = document.createTextNode(`${ele.name}`)
           main.appendChild(rebo);
           let a = document.createElement("a");
           a.appendChild(document.createTextNode("visit"));
           a.href = `https://github.com/${getRepos.value}/${ele.name}`
           a.setAttribute(`target`,`_blank`)
           main.appendChild(a)
           let stars = document.createElement("span");
           stars.appendChild(document.createTextNode(`Stars ${ele.stargazers_count}`))
           main.appendChild(stars)
           main.className = "ele-box"
           showData.appendChild(main)
        });
    }) 


}
}