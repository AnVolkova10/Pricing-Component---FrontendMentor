$(document).ready(function() {    
    // Retrieve the template data from the HTML (jQuery is used here).    
    var template = $('#basic-template1').html();    

    // Compile the template data into a function    
    var templateScript = Handlebars.compile(template);    
    
    // Define data in JSON format.    
    var json =[ 
            {"Type":"Basic","PriceAnnually":"199.99","PriceMonthly":"19.99","Storage":"500 GB","UsersAllowed":"2","UploadSize":"3","Active":false },
            {"Type":"Professional","PriceAnnually":"249.99","PriceMonthly":"24.99","Storage":"1 TB","UsersAllowed":"5","UploadSize":"10", "Active": true},
            {"Type":"Master","PriceAnnually":"399.99","PriceMonthly":"39.99","Storage":"2 TB","UsersAllowed":"10","UploadSize":"20", "Active": false}
    ]

    $(function () {
        $("#checkbox").click(function () {
            if ($(this).is(":checked")) {
                $(".monthly").show();
                $(".annually").hide();
            } else {
                $(".annually").show();
                $(".monthly").hide();
            }
        });
    });
    
    
    // Pass Data to template script.    
    var html = templateScript(json);    
    
    // Insert the HTML code into the page    
    $(document.body).append(html);    
});

