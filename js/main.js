$('.select-container:not(.opened)').click(function (ev) {
    $('.select-container.opened').removeClass('opened')

    ev.stopPropagation()
    var containerName = $(this).attr('contName')
    InitSelectContainer(containerName)

    var rect = $(this)[0].getBoundingClientRect()

    if(!$(this).hasClass('opened')) {
        $('.select-body').css({
            'left': rect.left,
            'top': rect.top + $(this).outerHeight(),
            'width': rect.width
        }).show()
    $(this).toggleClass('opened')

    }

})


// $('.opened').click(function () {

//     $(this).hide()

// })

// $('body:not(.select-body)').on('click', function(ev) {
//     $('.select-container.opened').removeClass('opened')
//     $('.select-body').hide()
// })

$('.compress').click(function () {
    $('nav').toggleClass('compressed')
    $(this).toggleClass('rotated')
})


var selectContainers = {
    status: [
        {
            name: 'Free'
        },
        {
            name: 'Pending'
        },
        {
            name: 'In Progress'
        },
        {
            name: 'On the way'
        }
    ]
}

function InitSelectContainer(openSelectContainer) {
    var container = ''
    if(!selectContainers[openSelectContainer]) {
        $('.select-body ul').empty()
        return;
    }
    selectContainers[openSelectContainer].forEach(el=> {
        var name = el.name
        container += `
            <li>
                <label for="${name}">
                <input type="checkbox" name="${name}" id="">
                <span>${name}</span>
                </label>
            </li>`
    })

    $('.select-body ul').html(container)
}

$( ".markers" ).click(function() {
    $(this).siblings('.driver-info').toggleClass('active')
});

$(".assign").click(function() {
    $(this).siblings('.order-ids').toggleClass('active')
});

