var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_poi_1 = new ol.format.GeoJSON();
var features_poi_1 = format_poi_1.readFeatures(json_poi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_1.addFeatures(features_poi_1);
var lyr_poi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poi_1, 
                style: style_poi_1,
                popuplayertitle: 'poi',
                interactive: true,
                title: '<img src="styles/legend/poi_1.png" /> poi'
            });

lyr_OSMStandard_0.setVisible(true);lyr_poi_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_poi_1];
lyr_poi_1.set('fieldAliases', {'id': 'id', 'desc': 'desc', 'day': 'day', });
lyr_poi_1.set('fieldImages', {'id': '', 'desc': '', 'day': '', });
lyr_poi_1.set('fieldLabels', {'id': 'no label', 'desc': 'inline label - always visible', });
lyr_poi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});