function getCatalog(){
    // create Ajax request to get catalog
    $.ajax({
        url: "/catalog/getCatalog",
        type: 'GET',
        // dont need content type or data b/c get requests cant send data
        success: function (res) {
            console.log("success", res);
            for (var i = 0; i < res.length; i++){
                var item = res[i];
                displayCar(item);
            }
        },
        error: function (error) {
            console.log("Error", error);
        }
    });

    // print the response on the console
}

function displayCar(car) {
    // get the root element (where you want to display it ~ create container on html)
    var container = $("#catalogContainer");


    // create the template for the car
    var template = 
        `<div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${car.imageUrl}" class="card-img" alt="...">
                </div>

                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${car.year} ${car.make} ${car.model}</h5>
                        <p class="card-text">${car.description}.</p>
                        <p class="card-text"><small class="text-muted">Rent the ${car.year} ${car.make} ${car.model} for only $${car.dailyPrice} a day.</small></p>
                    </div>
                </div>
            </div>
        </div>`
        
    
        /*`<div class="col-5 item">
            <div class="row">
                <div class="col-7">
                    <img src="${car.imageUrl}">
                </div>
                <div class="col-5>
                    

                    <label class="info-title">Year:</label>
                    <label class="info-value">${car.year}</label>
                    <br>

                    <label class="info-title">Make:</label>
                    <label class="info-value">${car.make}</label>
                    <br>

                    <label class="info-title">Model:</label>
                    <label class="info-value">${car.model}</label>
                    <br>

                    <label class="info-title">Price:</label>
                    <label class="info-value">${car.dailyPrice}</label>
                    <br>

                    

                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <label class="info-title">Description</label>
                    <p>${car.description}</p>
                
                </div>
            </div>
        </div>`;*/

    // add the template to the root element
    container.append(template);
}

function init(){
    console.log("Catalog Page");

    getCatalog();
}



window.onload = init;