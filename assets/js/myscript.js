$(document).ready(function() {
//     var mese = moment().format('MMMM'); 
//    var gg = moment().daysInMonth();
//    console.log(mese+' ha '+gg+' giorni')
    $('select').on('change', function () {
        var xData = $("option:selected", this);
            var giorni=xData.val();
            console.log("TCL: giorni", giorni)
            
            var gg = moment(giorni,'MM').daysInMonth();
            var mese = moment(giorni,'MM').format('MMMM'); 
            $('#mese').html(mese);
            $('#gg').html(gg);
        });
});