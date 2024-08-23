$(document).ready(function() {
    // Función para cargar el JSON
    $.getJSON('assets/data/data.json', function(data) {
        // Cargar regiones
        data.regiones.forEach(function(region) {
            $('#region').append(`<option value="${region.nombre}">${region.nombre}</option>`);
        });

        // Manejar cambio en el selector de regiones
        $('#region').change(function() {
            var selectedRegion = $(this).val();
            $('#provincia').empty().append('<option value="">Selecciona una Provincia</option>');
            $('#comuna').empty().append('<option value="">Selecciona una Comuna</option>');

            // Encontrar provincias para la región seleccionada
            var regionData = data.regiones.find(function(region) {
                return region.nombre === selectedRegion;
            });

            if (regionData) {
                regionData.provincias.forEach(function(provincia) {
                    $('#provincia').append(`<option value="${provincia.nombre}">${provincia.nombre}</option>`);
                });
            }
        });

        // Manejar cambio en el selector de provincias
        $('#provincia').change(function() {
            var selectedProvincia = $(this).val();
            $('#comuna').empty().append('<option value="">Selecciona una Comuna</option>');

            // Encontrar comunas para la provincia seleccionada
            var selectedRegion = $('#region').val();
            var regionData = data.regiones.find(function(region) {
                return region.nombre === selectedRegion;
            });

            if (regionData) {
                var provinciaData = regionData.provincias.find(function(provincia) {
                    return provincia.nombre === selectedProvincia;
                });

                if (provinciaData) {
                    provinciaData.comunas.forEach(function(comuna) {
                        $('#comuna').append(`<option value="${comuna}">${comuna}</option>`);
                    });
                }
            }
        });
    }).fail(function() {
        console.error('No se pudo cargar el archivo JSON.');
    });
});


