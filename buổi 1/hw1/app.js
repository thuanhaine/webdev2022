const $$ = document.querySelectorAll.bind(document)

const ratings = $$(".fa-regular.fa-square")


ratings.forEach((rating, index) => {
    var indexActive = -1;
    rating.onclick = function () {
        if(this.classList == "fa-regular fa-square rating--active")
        {
           this.classList.remove("rating--active") 

           indexActive = Math.floor(index/5)

           switch (indexActive) {
            case 0: handleDisActive(ratings, index,4);
                 break;
            case 1: handleDisActive(ratings, index,9);
                 break;
            case 2: handleDisActive(ratings, index,14);
                 break;
            case 3: handleDisActive(ratings, index,19);       
                 break;
            case 4: handleDisActive(ratings, index,24);
                 break;
            case 5: handleDisActive(ratings, index,29);
                 break;  
            case 6: handleDisActive(ratings, index,34);
                  break;
            case 7: handleDisActive(ratings, index,39);
                 break;
            case 8: handleDisActive(ratings, index,44);
                 break;
             default: ;
        }
        }
    else
        {
            this.classList.add("rating--active")
            
        
            indexActive = Math.floor(index/5)

            
            switch (indexActive) {
                case 0: handleActive(ratings,0, index);
                     break;
    
                case 1: handleActive(ratings,5, index);
                     break;
                case 2: handleActive(ratings,10, index);
                     break;
                case 3: handleActive(ratings,15, index);       
                     break;
                case 4: handleActive(ratings,20, index);
                     break;
                case 5: handleActive(ratings,25, index);
                     break  ;  
                case 6: handleActive(ratings,30, index);
                      break;
                case 7: handleActive(ratings,35, index);
                     break;
                case 8: handleActive(ratings,40, index);
                     break;
    
                 default: ;
    
            }
           
        };
        
    

    };
    
    
}
);
 var handleActive = function (array,min, activeid) {
    for(let i = min; i <= activeid; i++) {
        if(array[i].classList == "fa-regular fa-square")
        {
            array[i].classList.add("rating--active")

        }
    }
}
var handleDisActive = function (array,min, activeid) {
    for(let i = min; i <= activeid; i++) {
        if(array[i].classList == "fa-regular fa-square rating--active")
        {
            array[i].classList.remove("rating--active")

        }
    }
}