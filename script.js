const cnt = document.getElementById("content").querySelector("#qselect")
cnt.style.padding = '0% 20%'

let hr;
cats.forEach(v => {
    const section = document.createElement("section")
    const h3 = document.createElement("h3")
    h3.innerText = v.name
    h3.id = v.id
    h3.style.marginTop = '3em'
    h3.style.marginBottom = '0px'
    const p = document.createElement("p")
    p.style.marginTop = '0px'
    p.innerText = v.description
    const sp1 = document.createElement("span")
    sp1.innerText = ` Возраст ${v.age},`
    const sp2 = document.createElement("span")
    sp2.innerText = ` рейтинг ${v.rate}`
    p.append(sp1, sp2)
    const img = document.createElement("img")
    hr = document.createElement("hr")
    img.style.paddingBottom = '3em'
    img.src = v.img_link
    img.alt = v.name
    img.style.width = '70%'
    img.style.border = v.favourite ? '0.5em solid green' : 'none'
    section.append(h3, p, img, hr)
    cnt.appendChild(section)
});
hr.remove(); // delete the last hr