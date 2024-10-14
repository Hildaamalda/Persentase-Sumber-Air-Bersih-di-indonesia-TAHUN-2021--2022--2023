var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_batasadministrasitahun2021_1 = new ol.format.GeoJSON();
var features_batasadministrasitahun2021_1 = format_batasadministrasitahun2021_1.readFeatures(json_batasadministrasitahun2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasadministrasitahun2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasadministrasitahun2021_1.addFeatures(features_batasadministrasitahun2021_1);
var lyr_batasadministrasitahun2021_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasadministrasitahun2021_1, 
                style: style_batasadministrasitahun2021_1,
                popuplayertitle: "batas administrasi tahun 2021",
                interactive: true,
                title: '<img src="styles/legend/batasadministrasitahun2021_1.png" /> batas administrasi tahun 2021'
            });
var format_batasadministrasitahun2022_2 = new ol.format.GeoJSON();
var features_batasadministrasitahun2022_2 = format_batasadministrasitahun2022_2.readFeatures(json_batasadministrasitahun2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasadministrasitahun2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasadministrasitahun2022_2.addFeatures(features_batasadministrasitahun2022_2);
var lyr_batasadministrasitahun2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasadministrasitahun2022_2, 
                style: style_batasadministrasitahun2022_2,
                popuplayertitle: "batas administrasi tahun 2022 ",
                interactive: true,
                title: '<img src="styles/legend/batasadministrasitahun2022_2.png" /> batas administrasi tahun 2022 '
            });
var format_batasadministrasitahun2023_3 = new ol.format.GeoJSON();
var features_batasadministrasitahun2023_3 = format_batasadministrasitahun2023_3.readFeatures(json_batasadministrasitahun2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasadministrasitahun2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasadministrasitahun2023_3.addFeatures(features_batasadministrasitahun2023_3);
var lyr_batasadministrasitahun2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasadministrasitahun2023_3, 
                style: style_batasadministrasitahun2023_3,
                popuplayertitle: "batas administrasi tahun 2023",
                interactive: true,
                title: '<img src="styles/legend/batasadministrasitahun2023_3.png" /> batas administrasi tahun 2023'
            });
var format_persentasesumberairminum2021_4 = new ol.format.GeoJSON();
var features_persentasesumberairminum2021_4 = format_persentasesumberairminum2021_4.readFeatures(json_persentasesumberairminum2021_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_persentasesumberairminum2021_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_persentasesumberairminum2021_4.addFeatures(features_persentasesumberairminum2021_4);
var lyr_persentasesumberairminum2021_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_persentasesumberairminum2021_4, 
                style: style_persentasesumberairminum2021_4,
                popuplayertitle: "persentase sumber air minum 2021",
                interactive: true,
    title: 'persentase sumber air minum 2021<br />\
    <img src="styles/legend/persentasesumberairminum2021_4_0.png" /> 1 - 18758<br />\
    <img src="styles/legend/persentasesumberairminum2021_4_1.png" /> 18758 - 32750<br />\
    <img src="styles/legend/persentasesumberairminum2021_4_2.png" /> 32750 - 43506<br />\
    <img src="styles/legend/persentasesumberairminum2021_4_3.png" /> 43506 - 55783<br />\
    <img src="styles/legend/persentasesumberairminum2021_4_4.png" /> 55783 - 82228<br />'
        });
var format_persentasesumberairminum2022_5 = new ol.format.GeoJSON();
var features_persentasesumberairminum2022_5 = format_persentasesumberairminum2022_5.readFeatures(json_persentasesumberairminum2022_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_persentasesumberairminum2022_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_persentasesumberairminum2022_5.addFeatures(features_persentasesumberairminum2022_5);
var lyr_persentasesumberairminum2022_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_persentasesumberairminum2022_5, 
                style: style_persentasesumberairminum2022_5,
                popuplayertitle: "persentase sumber air minum 2022",
                interactive: true,
    title: 'persentase sumber air minum 2022<br />\
    <img src="styles/legend/persentasesumberairminum2022_5_0.png" /> 1 - 18758<br />\
    <img src="styles/legend/persentasesumberairminum2022_5_1.png" /> 18758 - 32750<br />\
    <img src="styles/legend/persentasesumberairminum2022_5_2.png" /> 32750 - 43506<br />\
    <img src="styles/legend/persentasesumberairminum2022_5_3.png" /> 43506 - 55783<br />\
    <img src="styles/legend/persentasesumberairminum2022_5_4.png" /> 55783 - 82228<br />'
        });
var format_persentasesumberairminum2023_6 = new ol.format.GeoJSON();
var features_persentasesumberairminum2023_6 = format_persentasesumberairminum2023_6.readFeatures(json_persentasesumberairminum2023_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_persentasesumberairminum2023_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_persentasesumberairminum2023_6.addFeatures(features_persentasesumberairminum2023_6);
var lyr_persentasesumberairminum2023_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_persentasesumberairminum2023_6, 
                style: style_persentasesumberairminum2023_6,
                popuplayertitle: "persentase sumber air minum 2023",
                interactive: true,
    title: 'persentase sumber air minum 2023<br />\
    <img src="styles/legend/persentasesumberairminum2023_6_0.png" /> 1 - 18758<br />\
    <img src="styles/legend/persentasesumberairminum2023_6_1.png" /> 18758 - 32750<br />\
    <img src="styles/legend/persentasesumberairminum2023_6_2.png" /> 32750 - 43506<br />\
    <img src="styles/legend/persentasesumberairminum2023_6_3.png" /> 43506 - 55783<br />\
    <img src="styles/legend/persentasesumberairminum2023_6_4.png" /> 55783 - 82228<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_batasadministrasitahun2021_1.setVisible(true);lyr_batasadministrasitahun2022_2.setVisible(true);lyr_batasadministrasitahun2023_3.setVisible(true);lyr_persentasesumberairminum2021_4.setVisible(true);lyr_persentasesumberairminum2022_5.setVisible(true);lyr_persentasesumberairminum2023_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_batasadministrasitahun2021_1,lyr_batasadministrasitahun2022_2,lyr_batasadministrasitahun2023_3,lyr_persentasesumberairminum2021_4,lyr_persentasesumberairminum2022_5,lyr_persentasesumberairminum2023_6];
lyr_batasadministrasitahun2021_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', });
lyr_batasadministrasitahun2022_2.set('fieldAliases', {'PROVINSI': 'PROVINSI', });
lyr_batasadministrasitahun2023_3.set('fieldAliases', {'PROVINSI': 'PROVINSI', });
lyr_persentasesumberairminum2021_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMPR': 'WADMPR', '_JML_PSTA': '_JML_PSTA', '_NAMA_INST': '_NAMA_INST', });
lyr_persentasesumberairminum2022_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMPR': 'WADMPR', '_JML_PSTA': '_JML_PSTA', '_NAMA_INST': '_NAMA_INST', });
lyr_persentasesumberairminum2023_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMPR': 'WADMPR', '_JML_PSTA': '_JML_PSTA', '_NAMA_INST': '_NAMA_INST', });
lyr_batasadministrasitahun2021_1.set('fieldImages', {'PROVINSI': 'TextEdit', });
lyr_batasadministrasitahun2022_2.set('fieldImages', {'PROVINSI': '', });
lyr_batasadministrasitahun2023_3.set('fieldImages', {'PROVINSI': '', });
lyr_persentasesumberairminum2021_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMPR': 'TextEdit', '_JML_PSTA': 'TextEdit', '_NAMA_INST': 'TextEdit', });
lyr_persentasesumberairminum2022_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMPR': 'TextEdit', '_JML_PSTA': 'TextEdit', '_NAMA_INST': 'TextEdit', });
lyr_persentasesumberairminum2023_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMPR': 'TextEdit', '_JML_PSTA': 'TextEdit', '_NAMA_INST': 'TextEdit', });
lyr_batasadministrasitahun2021_1.set('fieldLabels', {'PROVINSI': 'header label - always visible', });
lyr_batasadministrasitahun2022_2.set('fieldLabels', {'PROVINSI': 'no label', });
lyr_batasadministrasitahun2023_3.set('fieldLabels', {'PROVINSI': 'inline label - visible with data', });
lyr_persentasesumberairminum2021_4.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'WADMPR': 'header label - visible with data', '_JML_PSTA': 'header label - visible with data', '_NAMA_INST': 'no label', });
lyr_persentasesumberairminum2022_5.set('fieldLabels', {'OBJECTID': 'no label', 'WADMPR': 'no label', '_JML_PSTA': 'inline label - visible with data', '_NAMA_INST': 'inline label - always visible', });
lyr_persentasesumberairminum2023_6.set('fieldLabels', {'OBJECTID': 'no label', 'WADMPR': 'no label', '_JML_PSTA': 'inline label - always visible', '_NAMA_INST': 'inline label - visible with data', });
lyr_persentasesumberairminum2023_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});