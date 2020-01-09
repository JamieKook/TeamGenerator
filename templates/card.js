function generateCardHtml(name, title, id, email, special){
    const titleChoices= {
        Manager: {
            icon: `<i class="fas fa-mug-hot"></i> Manager`,
            special: "Office Number:"
            },
        Engineer: {
            icon: `<i class="fas fa-glasses"></i> Engineer`,
            special: "GitHub:"
            },   
        Intern: {
            icon: `<i class="fas fa-user-graduate"></i> Intern`,
            special: "School:"
        }
    }; 

    return `<div class="card m-4">
                <div class="card-header bg-primary text-white">
                    <h3>${name}</h3>
                    <h4>${titleChoices[title].icon}</h4>
                </div>
                <div class="card-body bg-light p-4">
                    <p class="card-text bg-white border-top border-right border-left p-2 my-0">ID: ${id}</p>
                    <p class="card-text bg-white border p-2 my-0">Email: ${email}</p>
                    <p class="card-text bg-white border-bottom border-right border-left p-2 my-0">${titleChoices[title].special} ${special}</p>
                </div>
            </div>`; 
}

module.exports= {generateCardHtml: generateCardHtml}; 