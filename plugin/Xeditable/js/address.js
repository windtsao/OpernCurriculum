(function ($) {
    var Address = function (options) {
        this.init('address', options, Address.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(Address, $.fn.editabletypes.abstractinput);

    $.extend(Address.prototype, {   
        render: function() {
           this.$input = this.$tpl.find('input');
        },
        
        value2html: function(value, element) {
            if(!value) {
                $(element).empty();
                return; 
            }
            var html = $('<div>').text(value.street).html() + ' #' + $('<div>').text(value.building).html() + ' ' + $('<div>').text(value.city).html() + ', ' + $('<div>').text(value.state).html() + ' ' + $('<div>').text(value.zip).html();
            $(element).html(html); 
        },
        
        html2value: function(html) {        
          return null;  
        },
      
       value2str: function(value) {
           var str = '';
           if(value) {
               for(var k in value) {
                   str = str + k + ':' + value[k] + ';';  
               }
           }
           return str;
       }, 
       
       str2value: function(str) {
           return str;
       },                
          
       value2input: function(value) {
           this.$input.filter('[name="street"]').val(value.street);
           this.$input.filter('[name="building"]').val(value.building);
           this.$input.filter('[name="city"]').val(value.city);
           this.$input.filter('[name="state"]').val(value.state);
           this.$input.filter('[name="zip"]').val(value.zip);
       },       
           
       input2value: function() { 
           return {
              street: this.$input.filter('[name="street"]').val(),
              building: this.$input.filter('[name="building"]').val(),
              city: this.$input.filter('[name="city"]').val(),
              state: this.$input.filter('[name="state"]').val(),
              zip: this.$input.filter('[name="zip"]').val()
           };
       },        
       
       activate: function() {
            this.$input.filter('[name="street"]').focus();
       },  
       
       autosubmit: function() {
           this.$input.keydown(function (e) {
                if (e.which === 13) {
                    $(this).closest('form').submit();
                }
           });
       }       
    });

    Address.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl: '<div class="editable-address"><label><span>Street: </span><input type="text" name="street" class="input-large"></label></div>'+
             '<div class="editable-address"><label><span>Building: </span><input type="text" name="building" class="input-mini"></label></div>'+
             '<div class="editable-address"><label><span>City: </span><input type="text" name="city" class="input-large"></label></div>'+
             '<div class="editable-address"><label><span>State: </span><input type="text" name="state" class="input-mini"></label></div>'+
             '<div class="editable-address"><label><span>Zip: </span><input type="text" name="zip" class="input-mini"></label></div>',
             
        inputclass: ''
    });

    $.fn.editabletypes.address = Address;

}(window.jQuery));