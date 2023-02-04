const url = 'https://restcountries.com/v2/all'
const total = document.querySelector("#total")
const direction = document.querySelector("#arrow")
const search = document.querySelector("#search")
const countriesall = document.createElement("div")
const container = document.querySelector(".container")
const swith = document.querySelector("#with")
const any = document.querySelector("#any")
const bttn = document.querySelector(".arrw")
const info = document.querySelector("#info")

fetch(url)
    .then(response => response.json())
    .then(data => {
        total.textContent = `Total Number of countries : ${data.length}`

        countriesall.style.width = "%100"
        countriesall.style.display = "flex"
        countriesall.style.flexDirection = "row"
        countriesall.style.justifyContent = "center"
        countriesall.style.flexWrap = "wrap"
        countriesall.style.padding = "30px"

        let contry = []

        // Direction
        let drctn = 1
        direction.addEventListener("click", e => {
            if (direction.className == "fa-solid fa-arrow-up-a-z") {
                direction.className = "fa-solid fa-arrow-down-a-z"
                drctn = 3
            } else {
                direction.className = "fa-solid fa-arrow-up-a-z"
                drctn = 2
            }
        })

        //Input
        let word = ""
        document.body.addEventListener('keypress', e => {
            if (e.keyCode != 0) {

                if (e.keyCode >= 48) {
                    if (e.keyCode <= 122) {
                        word = `${search.value}${e.key}`
                    } else {
                        word = `${search.value}`
                    }
                } else {
                    word = `${search.value}`
                }

            }
        })

        //Start with or any word
        let withorany = "with"

        for (let i = 0; i < data.length; i++) {
            let cnt = data[i].name
            contry.push({ cnt })
        }
        for (let i = 0; i < contry.length; i++) {

            const contrs = document.createElement("div")
            contrs.className = "countries"
            contrs.style.width = "200px"
            contrs.style.height = "200px"
            contrs.style.margin = "20px"
            contrs.style.color = "white"
            contrs.style.textAlign = "center"
            contrs.style.fontSize = "30px"
            contrs.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
            contrs.style.padding = "20px"
            contrs.style.backgroundImage = "url(f/onebyone.png)"
            contrs.style.backgroundPosition = "left"
            contrs.style.borderRadius = "30px"
            contrs.textContent = `${contry[i].cnt}`
            countriesall.appendChild(contrs)
            container.appendChild(countriesall)

        }

        document.body.addEventListener("keypress", e => {

            if (e.keyCode != 0) {

                console.log(`Withorany : ${withorany}`);
                console.log(`Word : ${word}`);
                (drctn != 2) ? console.log(`Direction : A to Z`) : console.log(`Direction : Z to A`);
                
                contry = []

                for (let i = 0; i < data.length; i++) {

                    let nam = `${data[i].name}`
                    let name = nam.toLowerCase()
                    let Word = word.toLowerCase()

                    let warn = ""
                    if (word.length >= 5) {
                        let warnn = word.slice(0, 4).toUpperCase()
                        warn = `${warnn}...`
                    } else {
                        warn = word.toUpperCase()
                    }
                    if (withorany == "any") {

                        if (name.includes(`${Word}`) == 1) {
                            // console.log(data[i].name);
                            let cnt = data[i].name
                            contry.push({ cnt })
                        }

                        info.textContent = `Countries containing ${warn} are ${contry.length}`

                    } else {

                        if (name.startsWith(`${Word}`) == 1) {
                            // console.log(data[i].name);
                            let cnt = data[i].name
                            contry.push({ cnt })
                        }

                        info.textContent = `Countries start with ${warn} are ${contry.length}`

                    }

                }
            }

            countriesall.innerHTML = ""

            for (let i = 0; i < contry.length; i++) {

                const contrs = document.createElement("div")
                contrs.className = "countries"
                contrs.style.width = "200px"
                contrs.style.height = "200px"
                contrs.style.margin = "20px"
                contrs.style.color = "white"
                contrs.style.textAlign = "center"
                contrs.style.fontSize = "30px"
                contrs.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                contrs.style.padding = "20px"
                contrs.style.backgroundImage = "url(f/onebyone.png)"
                contrs.style.backgroundPosition = "left"
                contrs.style.borderRadius = "30px"
                contrs.textContent = `${contry[i].cnt}`
                countriesall.appendChild(contrs)
                container.appendChild(countriesall)

            }

            if (contry.length == 0) {
                const contrs = document.createElement("div")
                contrs.className = "countries"
                contrs.style.width = "500px"
                contrs.style.height = "min-content"
                contrs.style.margin = "20px"
                contrs.style.color = "rgb(218, 99, 19)"
                contrs.style.textAlign = "center"
                contrs.style.fontSize = "30px"
                contrs.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                contrs.style.padding = "20px"
                contrs.style.backgroundColor = "blueviolet"
                contrs.style.backgroundPosition = "left"
                contrs.style.borderRadius = "30px"
                countriesall.appendChild(contrs)
                container.appendChild(countriesall)

                let warn = ""
                if (word.length >= 5) {
                    let warnn = word.slice(0, 4).toUpperCase()
                    warn = `${warnn}...`
                } else {
                    warn = word.toUpperCase()
                }

                if (withorany == "any") {
                    contrs.textContent = `!! Couldn't any country containing ${warn}`
                } else {
                    contrs.textContent = ` !! Couldn't any country startig with ${warn}`
                }
            }
        })

        any.addEventListener("click", e => {

            
            direction.className = "fa-solid fa-arrow-down-a-z"
            drctn = 3
            
            console.log(contry);
            
            contry = []
            withorany = "any"
            
            for (let i = 0; i < data.length; i++) {
                
                let nam = `${data[i].name}`
                let name = nam.toLowerCase()
                let Word = word.toLowerCase()

                if (name.includes(`${Word}`) == 1) {
                    // console.log(data[i].name);
                    let cnt = data[i].name
                    contry.push({ cnt })
                }
                
            }
            
            
            countriesall.innerHTML = ""
            
            for (let i = 0; i < contry.length; i++) {
                
                const contrs = document.createElement("div")
                contrs.className = "countries"
                contrs.style.width = "200px"
                contrs.style.height = "200px"
                contrs.style.margin = "20px"
                contrs.style.color = "white"
                contrs.style.textAlign = "center"
                contrs.style.fontSize = "30px"
                contrs.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                contrs.style.padding = "20px"
                contrs.style.backgroundImage = "url(f/onebyone.png)"
                contrs.style.backgroundPosition = "left"
                contrs.style.borderRadius = "30px"
                contrs.textContent = `${contry[i].cnt}`
                countriesall.appendChild(contrs)
                container.appendChild(countriesall)

            }

            info.textContent = `Countries containing ${word} are ${contry.length}`

            let warn = ""
            if (contry.length == 0) {
                const contrs = document.createElement("div")
                contrs.className = "countries"
                contrs.style.width = "500px"
                contrs.style.height = "min-content"
                contrs.style.margin = "20px"
                contrs.style.color = "rgb(218, 99, 19)"
                contrs.style.textAlign = "center"
                contrs.style.fontSize = "30px"
                contrs.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                contrs.style.padding = "20px"
                contrs.style.backgroundColor = "blueviolet"
                contrs.style.backgroundPosition = "left"
                contrs.style.borderRadius = "30px"
                countriesall.appendChild(contrs)
                container.appendChild(countriesall)

                if (word.length >= 5) {
                    let warnn = word.slice(0, 4).toUpperCase()
                    warn = `${warnn}...`
                } else {
                    warn = word.toUpperCase()
                }

                if (withorany == "any") {
                    contrs.textContent = `!! Couldn't any country containing ${warn}`
                } else {
                    contrs.textContent = ` !! Couldn't any country startig with ${warn}`
                }
            }
            
            (withorany == "any")?info.textContent = `Countries containing ${warn} are ${contry.length}`:info.textContent = `Countries start with ${warn} are ${contry.length}`
        })

        swith.addEventListener("click", e => {

            direction.className = "fa-solid fa-arrow-down-a-z"
            drctn = 3

            console.log(contry);

            contry = []
            withorany = "with"

            for (let i = 0; i < data.length; i++) {

                let nam = `${data[i].name}`
                let name = nam.toLowerCase()
                let Word = word.toLowerCase()

                if (name.startsWith(`${Word}`) == 1) {
                    // console.log(data[i].name);
                    let cnt = data[i].name
                    contry.push({ cnt })
                }

            }

            countriesall.innerHTML = ""

            for (let i = 0; i < contry.length; i++) {

                const contrs = document.createElement("div")
                contrs.className = "countries"
                contrs.style.width = "200px"
                contrs.style.height = "200px"
                contrs.style.margin = "20px"
                contrs.style.color = "white"
                contrs.style.textAlign = "center"
                contrs.style.fontSize = "30px"
                contrs.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                contrs.style.padding = "20px"
                contrs.style.backgroundImage = "url(f/onebyone.png)"
                contrs.style.backgroundPosition = "left"
                contrs.style.borderRadius = "30px"
                contrs.textContent = `${contry[i].cnt}`
                countriesall.appendChild(contrs)
                container.appendChild(countriesall)

            }

            info.textContent = `Countries start with ${word} are ${contry.length}`

            let warn = ""
            if (contry.length == 0) {
                const contrs = document.createElement("div")
                contrs.className = "countries"
                contrs.style.width = "500px"
                contrs.style.height = "min-content"
                contrs.style.margin = "20px"
                contrs.style.color = "rgb(218, 99, 19)"
                contrs.style.textAlign = "center"
                contrs.style.fontSize = "30px"
                contrs.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                contrs.style.padding = "20px"
                contrs.style.backgroundColor = "blueviolet"
                contrs.style.backgroundPosition = "left"
                contrs.style.borderRadius = "30px"
                countriesall.appendChild(contrs)
                container.appendChild(countriesall)

                if (word.length >= 5) {
                    let warnn = word.slice(0, 4).toUpperCase()
                    warn = `${warnn}...`
                } else {
                    warn = word.toUpperCase()
                }

                if (withorany == "any") {
                    contrs.textContent = `!! Couldn't any country containing ${warn}`
                } else {
                    contrs.textContent = ` !! Couldn't any country startig with ${warn}`
                }
            }

            (withorany == "any")?info.textContent = `Countries containing ${warn} are ${contry.length}`:info.textContent = `Countries start with ${warn} are ${contry.length}`

        })

        bttn.addEventListener("click", e => {

            countriesall.innerHTML = ""
            console.log(contry);

            if (drctn == 1) {

                for (let i = 0; i < contry.length; i++) {

                    const contrs = document.createElement("div")
                    contrs.className = "countries"
                    contrs.style.width = "200px"
                    contrs.style.height = "200px"
                    contrs.style.margin = "20px"
                    contrs.style.color = "white"
                    contrs.style.textAlign = "center"
                    contrs.style.fontSize = "30px"
                    contrs.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                    contrs.style.padding = "20px"
                    contrs.style.backgroundImage = "url(f/onebyone.png)"
                    contrs.style.backgroundPosition = "left"
                    contrs.style.borderRadius = "30px"
                    contrs.textContent = `${contry[i].cnt}`
                    countriesall.appendChild(contrs)
                    container.appendChild(countriesall)

                }

            } else {

                contry.reverse()

                for (let i = 0; i < contry.length; i++) {

                    const contrs = document.createElement("div")
                    contrs.className = "countries"
                    contrs.style.width = "200px"
                    contrs.style.height = "200px"
                    contrs.style.margin = "20px"
                    contrs.style.color = "white"
                    contrs.style.textAlign = "center"
                    contrs.style.fontSize = "30px"
                    contrs.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                    contrs.style.padding = "20px"
                    contrs.style.backgroundImage = "url(f/onebyone.png)"
                    contrs.style.backgroundPosition = "left"
                    contrs.style.borderRadius = "30px"
                    contrs.textContent = `${contry[i].cnt}`
                    countriesall.appendChild(contrs)
                    container.appendChild(countriesall)

                }

            }

            let warn = ""
            if (contry.length == 0) {
                const contrs = document.createElement("div")
                contrs.className = "countries"
                contrs.style.width = "500px"
                contrs.style.height = "min-content"
                contrs.style.margin = "20px"
                contrs.style.color = "rgb(218, 99, 19)"
                contrs.style.textAlign = "center"
                contrs.style.fontSize = "30px"
                contrs.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                contrs.style.padding = "20px"
                contrs.style.backgroundColor = "blueviolet"
                contrs.style.backgroundPosition = "left"
                contrs.style.borderRadius = "30px"
                countriesall.appendChild(contrs)
                container.appendChild(countriesall)

                if (word.length >= 5) {
                    let warnn = word.slice(0, 4).toUpperCase()
                    warn = `${warnn}...`
                } else {
                    warn = word.toUpperCase()
                }

                if (withorany == "any") {
                    contrs.textContent = `!! Couldn't any country containing ${warn}`
                } else {
                    contrs.textContent = ` !! Couldn't any country startig with ${warn}`
                }
            }

            (withorany == "any") ?info.textContent = `Countries containing ${warn} are ${contry.length}`:info.textContent = `Countries start with ${warn} are ${contry.length}`

        })

    })