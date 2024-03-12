let number=10
let button = document.querySelector("button");
        let images = document.querySelector(".images");
        const getImages=()=>{
             
            let url = "https://fakestoreapi.com/products";
            fetch(url)
                .then((response) =>{
                    return response.json()
                }) 
                .then(data => {
                    images.innerHTML=""
                    for(let i=0;i<number;i++)
                  {
                        let img = document.createElement('img');
                        img.src = data[i].image
                        images.appendChild(img);
                    }
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }

        button.addEventListener("click", () => {
            number=number+5
            
            getImages()
        });
        getImages()