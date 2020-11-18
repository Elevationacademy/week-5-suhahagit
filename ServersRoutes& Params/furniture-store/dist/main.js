
const getPrice = function (){
    const furniture = $('#input').val()
    $.get(`/priceCheck/${furniture}`, (data) => {
        $('#price').empty().append(`<p>${data.price}</p>`)
    })
}

const buy = function(){
    const furniture = $('#buyInput').val()
    $.get(`/buy/${furniture}`, (data) => {
        console.log(data.furniture)
        $('#buy').empty()
        .append(`<p>Congratulations, you've just bought ${data.name} for ${data.price}. 
        There are ${data.inventory} left now in the store.</p>`)
    })
}