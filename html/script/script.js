$(function () {
    window.addEventListener('message', function (event) {
        if (event.data.action == 'sendnoti') {
            var notiNum = Math.floor((Math.random() * 1000) + 1);
                $('.compassMain').append(`
                <div class="compassBody ${notiNum} ${event.data.type}" id=`+notiNum+`>
                    <div class="compassIconBody">
                        <div class="compassIconInner">
                            <i class="${event.data.icon} fa-2x"></i>
                        </div>
                    </div>
                    <div class="compassTextBody" id="hideTxt`+notiNum+`">
                        <p class="compassTitle">${event.data.title}</p>
                        <p class="compassDescription">${event.data.message}</p>
                    </div>
                </div>
                `);
            //entry
            $("#"+notiNum).hide();
            $("#"+notiNum).animate({
                marginLeft: '350px',
                height: '3rem',
                'border-radius': '0.5rem'
            }, 0);
            $('#hideTxt'+notiNum).hide();
            $("#"+notiNum).fadeIn(1000);    
            setTimeout(function() {
                
                $("#"+notiNum).animate({
                    marginLeft: '0px',
                    height: '100%'
                }, 500);
                $('#hideTxt'+notiNum).fadeIn(1000);
            }, 1500)
            //exit
            setTimeout(function() {
                $("#"+notiNum).animate({
                    marginLeft: '350px',
                    height: '3rem',
                    'border-radius': '0.5rem'
                }, 500);
                $('#hideTxt'+notiNum).hide();
                $("#"+notiNum).fadeOut(1300);
                setTimeout(function() {
                    $(`.${notiNum}`).remove()
                }, 1300)
            }, event.data.time+2500) //+2500 is for entry and exit anims to show exact time which is defined on client 
        }
    })
})