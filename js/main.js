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


$(document).on('click', function(ev) {

    $('.select-container.opened').removeClass('opened')
    $('.select-body').hide()
})

$('.select-body').on('click', function(ev) {
    ev.stopPropagation()
})

$('.compress').click(function () {
    $('nav').toggleClass('compressed')
    $(this).toggleClass('rotated')
    $('.section-area').toggleClass('compressed')
})


var selectContainers = {
    status: [
        {
            id: '0',
            name: 'All'
        },
        {
            id: '1',
            name: 'Free'
        },
        {
            id: '2',
            name: 'Pending'
        },
        {
            id: '3',
            name: 'In Progress'
        },
        {
            id: '4',
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
        var id = el.id
        container += `
            <li>
                <label for="${name}">
                <input type="checkbox" name="${name}" id="${id}">
                <span>${name}</span>
                </label>
            </li>`
    })


    $('.select-body ul').html(container)
}



$('.select-body').on('change', 'input[name="All"]', function() {

    if ($(this).is(':checked')) {
        $('.select-body input').attr('checked', true);
    } else {
        $('.select-body input').attr('checked', false);
    }

});

$( ".markers" ).click(function() {
    $(this).siblings('.driver-info').toggleClass('active')
});

$(".assign").click(function() {
    $(this).siblings('.order-ids').toggleClass('active')
});


$( ".menu-item:not(.active)" ).mouseover(function() {
    $(this).parent('li').addClass('active')
  });

  $( ".menu-item:not(.active)" ).mouseleave(function() {
    $(this).parent('li').removeClass('active')
  });