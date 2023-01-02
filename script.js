let editor;
var inputs = $("#input");



$("#run").click(function(){
    console.log('daa')
    $.ajax({
        
        url: "server.php",
        method: "POST",
        data: {
            code:document.getElementsByClassName('code-area')[0].value,
            input: "inputs.val()"
        },
        success: function(data){
            d = document.getElementsByClassName('shell-area')[0];
            d.value = data;
            
        
        }
    })

})