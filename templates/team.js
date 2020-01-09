function templateHtml(){
    let cardHtml= 
    `<div class="card m-4">
        <div class="card-header bg-primary text-white">
            <h3>Name</h3>
            <h4>Icon + Title</h4>
        </div>
        <div class="card-body bg-light p-4">
            <p class="card-text bg-white border-top border-right border-left p-2 my-0">ID: <span id="Id"></span></p>
            <p class="card-text bg-white border p-2 my-0">Email: <span id="Email"></span></p>
            <p class="card-text bg-white border-bottom border-right border-left p-2 my-0">special: <span id="Special"></span></p>
        </div>
    </div>`


    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Team Summary</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                <script src="https://kit.fontawesome.com/4439e3b362.js" crossorigin="anonymous"></script>
                <style><div class="card m-4">
                            <div class="card-header bg-primary text-white">
                                <h3>Name</h3>
                                <h4>Icon + Title</h4>
                            </div>
                            <div class="card-body bg-light p-4">
                                <p class="card-text bg-white border-top border-right border-left p-2 my-0">ID: <span id="Id"></span></p>
                                <p class="card-text bg-white border p-2 my-0">Email: <span id="Email"></span></p>
                                <p class="card-text bg-white border-bottom border-right border-left p-2 my-0">special: <span id="Special"></span></p>
                            </div>
                        </div>
                    .card{
                        max-width: 225px;
                        min-width: 225px; 
                        box-shadow: 5px 5px 10px;
                    }
                </style>
            </head>
            <body>
                <header class="container-fluid bg-danger text-white text-center p-5">
                    <h1>My Team</h1>
                </header>

                <div class="container my-5">
                    <div class="d-flex justify-content-center flex-wrap">
                        
                    </div>
                </div>

            </body>
            </html>`
}

module.exports= { templateHtml: templateHtml}; 