var contNames = []
$('.select-container').click(function (ev) {
    // $('.select-container.opened').removeClass('opened')
    
    ev.stopPropagation()
    var containerName = $(this).attr('contName')
    
    
    if(!contNames.includes(containerName)) {
        InitSelectContainer(containerName)
        contNames.push(containerName)
    }
    
    var rect = $(this)[0].getBoundingClientRect()
    

    if(!$(this).hasClass('opened')) {
        $('.select-body').css({
            'left': rect.left,
            'top': rect.top + $(this).outerHeight(),
            'width': rect.width
        }).show()
        $('.select-container').removeClass('opened')
        $(this).addClass('opened')
    } else {
        $('.select-body').hide()
        $('.select-container').removeClass('opened')
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
    ],
    order: [
        {
            id: '0',
            name: 'Order ID'
        },
        {
            id: '1',
            name: 'Order Time'
        },
        {
            id: '2',
            name: 'Pick up Time'
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



$('.select-body').on('change', 'input', function(ev) {
    ev.preventDefault()
    var thisSelectBody = $(this).closest('.select-body')
    var checkedInput = $('input:checked', thisSelectBody)

    if($(this).is('[name="All"]')) {
        if ($(this).is(':checked')) {
            $('.select-body input').prop('checked', true);
        } else {
            $('.select-body input').prop('checked', false);
        }
    } else {
        if(!$(this).is(':checked')) {
            $('[name="All"]', thisSelectBody).prop('checked', false)
        } else if($('input', thisSelectBody).length - 1  == checkedInput.length) {
            $('[name="All"]', thisSelectBody).prop('checked', true)
        }
    }

});

$( ".markers" ).click(function() {
    $(this).siblings('.driver-info').toggleClass('active')
});

$(".assign").click(function() {
    $(this).siblings('.order-ids').toggleClass('active')
});


// $( ".menu-item:not(.active)" ).mouseover(function() {
//     $(this).parent('li').addClass('active')
//   });

//   $( ".menu-item:not(.active)" ).mouseleave(function() {
//     $(this).parent('li').removeClass('active')
//   });