var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LimitesTucumannam_tucumn_1 = new ol.format.GeoJSON();
var features_LimitesTucumannam_tucumn_1 = format_LimitesTucumannam_tucumn_1.readFeatures(json_LimitesTucumannam_tucumn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesTucumannam_tucumn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesTucumannam_tucumn_1.addFeatures(features_LimitesTucumannam_tucumn_1);
var lyr_LimitesTucumannam_tucumn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesTucumannam_tucumn_1, 
                style: style_LimitesTucumannam_tucumn_1,
                popuplayertitle: 'Limites Tucuman — nam_tucumn',
                interactive: false,
                title: '<img src="styles/legend/LimitesTucumannam_tucumn_1.png" /> Limites Tucuman — nam_tucumn'
            });
var format_Poblacionporlocalidades_2 = new ol.format.GeoJSON();
var features_Poblacionporlocalidades_2 = format_Poblacionporlocalidades_2.readFeatures(json_Poblacionporlocalidades_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacionporlocalidades_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacionporlocalidades_2.addFeatures(features_Poblacionporlocalidades_2);
var lyr_Poblacionporlocalidades_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacionporlocalidades_2, 
                style: style_Poblacionporlocalidades_2,
                popuplayertitle: 'Poblacion por localidades',
                interactive: true,
                title: '<img src="styles/legend/Poblacionporlocalidades_2.png" /> Poblacion por localidades'
            });
var format_Poblacionporlocalidadesfueradealcance_3 = new ol.format.GeoJSON();
var features_Poblacionporlocalidadesfueradealcance_3 = format_Poblacionporlocalidadesfueradealcance_3.readFeatures(json_Poblacionporlocalidadesfueradealcance_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacionporlocalidadesfueradealcance_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacionporlocalidadesfueradealcance_3.addFeatures(features_Poblacionporlocalidadesfueradealcance_3);
var lyr_Poblacionporlocalidadesfueradealcance_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacionporlocalidadesfueradealcance_3, 
                style: style_Poblacionporlocalidadesfueradealcance_3,
                popuplayertitle: 'Poblacion por localidades fuera de alcance',
                interactive: true,
                title: '<img src="styles/legend/Poblacionporlocalidadesfueradealcance_3.png" /> Poblacion por localidades fuera de alcance'
            });
var format_Hospitales_4 = new ol.format.GeoJSON();
var features_Hospitales_4 = format_Hospitales_4.readFeatures(json_Hospitales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitales_4.addFeatures(features_Hospitales_4);
var lyr_Hospitales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospitales_4, 
                style: style_Hospitales_4,
                popuplayertitle: 'Hospitales',
                interactive: true,
                title: '<img src="styles/legend/Hospitales_4.png" /> Hospitales'
            });
var format_CentrosdeSalud_5 = new ol.format.GeoJSON();
var features_CentrosdeSalud_5 = format_CentrosdeSalud_5.readFeatures(json_CentrosdeSalud_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentrosdeSalud_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentrosdeSalud_5.addFeatures(features_CentrosdeSalud_5);
cluster_CentrosdeSalud_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CentrosdeSalud_5
});
var lyr_CentrosdeSalud_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CentrosdeSalud_5, 
                style: style_CentrosdeSalud_5,
                popuplayertitle: 'Centros de Salud',
                interactive: true,
                title: '<img src="styles/legend/CentrosdeSalud_5.png" /> Centros de Salud'
            });
var format_Buffercentrosdesalud15km_6 = new ol.format.GeoJSON();
var features_Buffercentrosdesalud15km_6 = format_Buffercentrosdesalud15km_6.readFeatures(json_Buffercentrosdesalud15km_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffercentrosdesalud15km_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffercentrosdesalud15km_6.addFeatures(features_Buffercentrosdesalud15km_6);
var lyr_Buffercentrosdesalud15km_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffercentrosdesalud15km_6, 
                style: style_Buffercentrosdesalud15km_6,
                popuplayertitle: 'Buffer centros de salud 15km',
                interactive: true,
                title: '<img src="styles/legend/Buffercentrosdesalud15km_6.png" /> Buffer centros de salud 15km'
            });
var format_BufferHospitales415km_7 = new ol.format.GeoJSON();
var features_BufferHospitales415km_7 = format_BufferHospitales415km_7.readFeatures(json_BufferHospitales415km_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BufferHospitales415km_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferHospitales415km_7.addFeatures(features_BufferHospitales415km_7);
var lyr_BufferHospitales415km_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BufferHospitales415km_7, 
                style: style_BufferHospitales415km_7,
                popuplayertitle: 'Buffer Hospitales 4-15km',
                interactive: true,
                title: '<img src="styles/legend/BufferHospitales415km_7.png" /> Buffer Hospitales 4-15km'
            });
var group_Bufferhospitalesycentrosdesalud = new ol.layer.Group({
                                layers: [lyr_Buffercentrosdesalud15km_6,lyr_BufferHospitales415km_7,],
                                fold: "open",
                                title: 'Buffer hospitales y centros de salud'});
var group_Hospitalesycentrosdesalud = new ol.layer.Group({
                                layers: [lyr_Hospitales_4,lyr_CentrosdeSalud_5,],
                                fold: "open",
                                title: 'Hospitales y centros de salud'});
var group_Nucleospoblacionales = new ol.layer.Group({
                                layers: [lyr_Poblacionporlocalidades_2,lyr_Poblacionporlocalidadesfueradealcance_3,],
                                fold: "open",
                                title: 'Nucleos poblacionales'});

lyr_OpenStreetMap_0.setVisible(true);lyr_LimitesTucumannam_tucumn_1.setVisible(true);lyr_Poblacionporlocalidades_2.setVisible(true);lyr_Poblacionporlocalidadesfueradealcance_3.setVisible(true);lyr_Hospitales_4.setVisible(true);lyr_CentrosdeSalud_5.setVisible(true);lyr_Buffercentrosdesalud15km_6.setVisible(true);lyr_BufferHospitales415km_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LimitesTucumannam_tucumn_1,group_Nucleospoblacionales,group_Hospitalesycentrosdesalud,group_Bufferhospitalesycentrosdesalud];
lyr_LimitesTucumannam_tucumn_1.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'entidad': 'entidad', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Poblacionporlocalidades_2.set('fieldAliases', {'fid': 'fid', 'Localidad': 'Localidad', 'Poblacion': 'Poblacion', });
lyr_Poblacionporlocalidadesfueradealcance_3.set('fieldAliases', {'fid': 'fid', 'Localidad': 'Localidad', 'Poblacion': 'Poblacion', });
lyr_Hospitales_4.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'fna': 'fna', 'gna': 'gna', 'buffer': 'buffer', });
lyr_CentrosdeSalud_5.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'entidad': 'entidad', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'fdc': 'fdc', 'sag': 'sag', 'layer': 'layer', 'path': 'path', });
lyr_Buffercentrosdesalud15km_6.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'entidad': 'entidad', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'fdc': 'fdc', 'sag': 'sag', 'layer': 'layer', 'path': 'path', });
lyr_BufferHospitales415km_7.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'Nombre': 'Nombre', 'gna': 'gna', 'buffer': 'buffer', 'Poblacion_sum': 'Poblacion_sum', });
lyr_LimitesTucumannam_tucumn_1.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'entidad': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_Poblacionporlocalidades_2.set('fieldImages', {'fid': 'TextEdit', 'Localidad': 'TextEdit', 'Poblacion': 'TextEdit', });
lyr_Poblacionporlocalidadesfueradealcance_3.set('fieldImages', {'fid': 'TextEdit', 'Localidad': 'TextEdit', 'Poblacion': 'TextEdit', });
lyr_Hospitales_4.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'buffer': 'Range', });
lyr_CentrosdeSalud_5.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'entidad': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Buffercentrosdesalud15km_6.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'entidad': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BufferHospitales415km_7.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'Nombre': 'TextEdit', 'gna': 'TextEdit', 'buffer': 'Range', 'Poblacion_sum': 'TextEdit', });
lyr_LimitesTucumannam_tucumn_1.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'entidad': 'hidden field', 'fna': 'hidden field', 'gna': 'hidden field', 'nam': 'hidden field', 'in1': 'hidden field', 'fdc': 'hidden field', 'sag': 'hidden field', });
lyr_Poblacionporlocalidades_2.set('fieldLabels', {'fid': 'hidden field', 'Localidad': 'inline label - always visible', 'Poblacion': 'inline label - always visible', });
lyr_Poblacionporlocalidadesfueradealcance_3.set('fieldLabels', {'fid': 'hidden field', 'Localidad': 'inline label - always visible', 'Poblacion': 'inline label - always visible', });
lyr_Hospitales_4.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'fna': 'inline label - always visible', 'gna': 'hidden field', 'buffer': 'hidden field', });
lyr_CentrosdeSalud_5.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'entidad': 'hidden field', 'fna': 'inline label - always visible', 'gna': 'hidden field', 'nam': 'hidden field', 'fdc': 'hidden field', 'sag': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Buffercentrosdesalud15km_6.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'entidad': 'hidden field', 'fna': 'inline label - always visible', 'gna': 'hidden field', 'nam': 'hidden field', 'fdc': 'hidden field', 'sag': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BufferHospitales415km_7.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'Nombre': 'inline label - always visible', 'gna': 'hidden field', 'buffer': 'hidden field', 'Poblacion_sum': 'inline label - always visible', });
lyr_BufferHospitales415km_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});