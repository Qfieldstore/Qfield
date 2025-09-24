var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SicherungGeopackagevomMontagJuli22_1 = new ol.format.GeoJSON();
var features_SicherungGeopackagevomMontagJuli22_1 = format_SicherungGeopackagevomMontagJuli22_1.readFeatures(json_SicherungGeopackagevomMontagJuli22_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SicherungGeopackagevomMontagJuli22_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SicherungGeopackagevomMontagJuli22_1.addFeatures(features_SicherungGeopackagevomMontagJuli22_1);
var lyr_SicherungGeopackagevomMontagJuli22_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SicherungGeopackagevomMontagJuli22_1, 
                style: style_SicherungGeopackagevomMontagJuli22_1,
                popuplayertitle: 'Sicherung Geopackage vom Montag Juli 22',
                interactive: true,
                title: '<img src="styles/legend/SicherungGeopackagevomMontagJuli22_1.png" /> Sicherung Geopackage vom Montag Juli 22'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SicherungGeopackagevomMontagJuli22_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SicherungGeopackagevomMontagJuli22_1];
lyr_SicherungGeopackagevomMontagJuli22_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Quell-ID': 'Quell-ID', 'Strecken-ID': 'Strecken-ID', 'Fuehrung': 'Fuehrung', 'Richtung': 'Richtung', 'Belag': 'Belag', 'Laenge': 'Laenge', 'Datum': 'Datum', 'lebenszeitintervallAnfang': 'lebenszeitintervallAnfang', 'lebenszeitintervallEnde': 'lebenszeitintervallEnde', 'beginntBeiKnoten': 'beginntBeiKnoten', 'endetBeiKnoten': 'endetBeiKnoten', 'Licht': 'Licht', 'Breite': 'Breite', 'Breite_Klasse': 'Breite_Klasse', 'Lage': 'Lage', 'Bewertung': 'Bewertung', 'Bewert_1': 'Bewert_1', 'Baulast': 'Baulast', 'Baulast_3': 'Baulast_3', 'B-Pflicht': 'B-Pflicht', 'Status': 'Status', 'Status_1': 'Status_1', 'Status_2': 'Status_2', 'Tempo': 'Tempo', 'Str_name': 'Str_name', 'AbschnittOptional': 'AbschnittOptional', });
lyr_SicherungGeopackagevomMontagJuli22_1.set('fieldImages', {'fid': '', 'id': '', 'Quell-ID': '', 'Strecken-ID': '', 'Fuehrung': '', 'Richtung': '', 'Belag': '', 'Laenge': '', 'Datum': '', 'lebenszeitintervallAnfang': '', 'lebenszeitintervallEnde': '', 'beginntBeiKnoten': '', 'endetBeiKnoten': '', 'Licht': '', 'Breite': '', 'Breite_Klasse': '', 'Lage': '', 'Bewertung': '', 'Bewert_1': '', 'Baulast': '', 'Baulast_3': '', 'B-Pflicht': '', 'Status': '', 'Status_1': '', 'Status_2': '', 'Tempo': '', 'Str_name': '', 'AbschnittOptional': '', });
lyr_SicherungGeopackagevomMontagJuli22_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Quell-ID': 'no label', 'Strecken-ID': 'no label', 'Fuehrung': 'no label', 'Richtung': 'no label', 'Belag': 'no label', 'Laenge': 'no label', 'Datum': 'no label', 'lebenszeitintervallAnfang': 'no label', 'lebenszeitintervallEnde': 'no label', 'beginntBeiKnoten': 'no label', 'endetBeiKnoten': 'no label', 'Licht': 'no label', 'Breite': 'no label', 'Breite_Klasse': 'no label', 'Lage': 'no label', 'Bewertung': 'no label', 'Bewert_1': 'no label', 'Baulast': 'no label', 'Baulast_3': 'no label', 'B-Pflicht': 'no label', 'Status': 'no label', 'Status_1': 'no label', 'Status_2': 'no label', 'Tempo': 'no label', 'Str_name': 'no label', 'AbschnittOptional': 'no label', });
lyr_SicherungGeopackagevomMontagJuli22_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});