function templateHtml(cards){
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Team Summary</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                <script src="https://kit.fontawesome.com/4439e3b362.js" crossorigin="anonymous"></script>
                <style>
                    .card{
                        max-width: 300px;
                        min-width: 300px; 
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
                        ${cards}
                    </div>
                </div>

            </body>
            </html>`
}

module.exports= { templateHtml: templateHtml}; 