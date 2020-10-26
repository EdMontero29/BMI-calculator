$(function()
    {

        $('#submit').click(function()
        {
            //Asi se hace un preventDefault!
            $('form').on('submit', function(evento)
            {
                evento.preventDefault();
                console.log('submit!');
            });

            var peso = $('#peso').val();
            var altura = $('#altura').val();
            var imc = peso/altura**2*100*100;
            $('#resultado').val(imc.toFixed(2))
        });

        $('#peso, #altura').on('change paste keyup keydown', function() {
            if($('#peso').val().length !== 0  && $('#altura').val().length !== 0){
                
                $('#submit').removeAttr('disabled')
                
            }
        })


        $('#limpiar').click(()=>
        {
          
            $("#form").trigger("reset");
            $('#submit').attr('disabled',true)

        });

        
       
        

    });