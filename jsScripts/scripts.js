$.ajax({
    url:'data/profile.json',
    method:'GET',
    datatype:'JSON',
    data:'',
    beforeSend: function(){
    },
    success: function(data){
        // alert(data.services.description);
        $('#descServices').html(data.services.description);

        data.services.listServices.forEach(element => {
            let card = '<div class="col-md-6">'+
                            '<div class="card">'+
                            '<div class="card-body">'+
                                '<h5 class="card-title">' +element.title+ '</h5>'+
                                '<p class="card-text">' +element.description+ '</p>'+
                                '<a href="#" class="btn btn-info">Read more</a>'+
                            '</div>'+
                            '</div>'+
                        '</div>';

            $('#contentServices').append(card);            
           
        });
    },
    error: function(){

    }
});


$.ajax({
    url:'data/profile.json',
    method:'GET',
    datatype:'JSON',
    data:'',
    beforeSend: function(){

    },
    success: function(data){
        // alert(data.projects.description);
        $('#descProjects').html(data.projects.description);

        data.projects.listProjects.forEach(element => {
            //alert(element.src_img);
            let cardProject = '<div class="col-md-4">'+
                                '<img src=" '+element.src_img+' " width="90%" /> '+
                            '</div>';
            $('#contentProjects').append(cardProject);                
        });

    },
    error: function(){
        alert('Error al cargar información!');
    }
});