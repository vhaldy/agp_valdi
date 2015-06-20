$(document).on('pageinit', '#index', function(){ 
    var date = new Date();
    var y = date.getFullYear();
    $("#calendar").jqmCalendar({
        events: [{
            "ringkasan": "Distribusi Jadwal Ujian Akhir Semester Ganjil TA. 2014/2015",
            "begin": new Date(y,0, 19 ),
            "end": new Date(y, 0, 20)

        }, {
            "ringkasan": "Ujian Akhir Semester Ganjil TA. 2014/2015",
            "begin": new Date(y,0, 26 ),
            "end": new Date(y, 0, 27)

        }, {
            "ringkasan": "Penyerahan DPNA Semester Ganjil & Verifikasi Nilai Matakuliah",
            "begin": new Date(y, 0, 27),
            "end": new Date(y, 0, 28)
            
        }, {
            "ringkasan": "Pelaksanaan Semester Pendek (SP)",
            "begin": new Date(y, 1, 23),
            "end": new Date(y, 1, 24)
            
        }, {
            "ringkasan": "",
            "begin": new Date(y, 1, 23),
            "end": new Date(y, 1, 24)
            
        },

        ],
        months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        days: ["Mi", "Se", "Sel", "Ra", "Ka", "Ju", "Sa"],
        startOfWeek: 0
        
    });

    $("#calendar").bind('change', function(event, date) {
        var events = $("#calendar").data("jqm-calendar").settings.events;
        for ( var i = 0; i < events.length; i++ ) {
            if ( events[i].begin.getFullYear() == date.getFullYear() && events[i].begin.getMonth() == date.getMonth() && events[i].begin.getDate() == date.getDate()){
                 if (events[i].ringkasan!=""){
                    $.mobile.changePage("#dialog", { role: "dialog" } );
                    $("#isiPeristiwa").html(events[i].ringkasan);
                 }
                 else{
                   
                 }
                 return false;
            }
        }
    });
});
