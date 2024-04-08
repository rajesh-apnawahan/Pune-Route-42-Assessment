var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pimpalesaudagar_1 = new ol.format.GeoJSON();
var features_Pimpalesaudagar_1 = format_Pimpalesaudagar_1.readFeatures(json_Pimpalesaudagar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pimpalesaudagar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pimpalesaudagar_1.addFeatures(features_Pimpalesaudagar_1);
var lyr_Pimpalesaudagar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pimpalesaudagar_1, 
                style: style_Pimpalesaudagar_1,
                popuplayertitle: "Pimpale saudagar",
                interactive: true,
                title: '<img src="styles/legend/Pimpalesaudagar_1.png" /> Pimpale saudagar'
            });
var format_PimpleGaurav_2 = new ol.format.GeoJSON();
var features_PimpleGaurav_2 = format_PimpleGaurav_2.readFeatures(json_PimpleGaurav_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpleGaurav_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpleGaurav_2.addFeatures(features_PimpleGaurav_2);
var lyr_PimpleGaurav_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpleGaurav_2, 
                style: style_PimpleGaurav_2,
                popuplayertitle: "Pimple Gaurav",
                interactive: true,
                title: '<img src="styles/legend/PimpleGaurav_2.png" /> Pimple Gaurav'
            });
var format_Keshavnagar_3 = new ol.format.GeoJSON();
var features_Keshavnagar_3 = format_Keshavnagar_3.readFeatures(json_Keshavnagar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Keshavnagar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Keshavnagar_3.addFeatures(features_Keshavnagar_3);
var lyr_Keshavnagar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Keshavnagar_3, 
                style: style_Keshavnagar_3,
                popuplayertitle: "Keshavnagar",
                interactive: true,
                title: '<img src="styles/legend/Keshavnagar_3.png" /> Keshavnagar'
            });
var format_Yavatmal_4 = new ol.format.GeoJSON();
var features_Yavatmal_4 = format_Yavatmal_4.readFeatures(json_Yavatmal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yavatmal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yavatmal_4.addFeatures(features_Yavatmal_4);
var lyr_Yavatmal_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yavatmal_4, 
                style: style_Yavatmal_4,
                popuplayertitle: "Yavatmal",
                interactive: true,
                title: '<img src="styles/legend/Yavatmal_4.png" /> Yavatmal'
            });
var format_Lahagaon_5 = new ol.format.GeoJSON();
var features_Lahagaon_5 = format_Lahagaon_5.readFeatures(json_Lahagaon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahagaon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahagaon_5.addFeatures(features_Lahagaon_5);
var lyr_Lahagaon_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lahagaon_5, 
                style: style_Lahagaon_5,
                popuplayertitle: "Lahagaon",
                interactive: true,
                title: '<img src="styles/legend/Lahagaon_5.png" /> Lahagaon'
            });
var format_KirkeeBoundary_6 = new ol.format.GeoJSON();
var features_KirkeeBoundary_6 = format_KirkeeBoundary_6.readFeatures(json_KirkeeBoundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KirkeeBoundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KirkeeBoundary_6.addFeatures(features_KirkeeBoundary_6);
var lyr_KirkeeBoundary_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KirkeeBoundary_6, 
                style: style_KirkeeBoundary_6,
                popuplayertitle: "Kirkee Boundary",
                interactive: true,
                title: '<img src="styles/legend/KirkeeBoundary_6.png" /> Kirkee Boundary'
            });
var format_PimpreChinchwadboundary_7 = new ol.format.GeoJSON();
var features_PimpreChinchwadboundary_7 = format_PimpreChinchwadboundary_7.readFeatures(json_PimpreChinchwadboundary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpreChinchwadboundary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpreChinchwadboundary_7.addFeatures(features_PimpreChinchwadboundary_7);
var lyr_PimpreChinchwadboundary_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpreChinchwadboundary_7, 
                style: style_PimpreChinchwadboundary_7,
                popuplayertitle: "Pimpre Chinchwad boundary",
                interactive: true,
                title: '<img src="styles/legend/PimpreChinchwadboundary_7.png" /> Pimpre Chinchwad boundary'
            });
var format_PuneGeoBoundary_8 = new ol.format.GeoJSON();
var features_PuneGeoBoundary_8 = format_PuneGeoBoundary_8.readFeatures(json_PuneGeoBoundary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuneGeoBoundary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuneGeoBoundary_8.addFeatures(features_PuneGeoBoundary_8);
var lyr_PuneGeoBoundary_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuneGeoBoundary_8, 
                style: style_PuneGeoBoundary_8,
                popuplayertitle: "Pune Geo Boundary",
                interactive: true,
                title: '<img src="styles/legend/PuneGeoBoundary_8.png" /> Pune Geo Boundary'
            });
var format_AllPunePopReprojected_9 = new ol.format.GeoJSON();
var features_AllPunePopReprojected_9 = format_AllPunePopReprojected_9.readFeatures(json_AllPunePopReprojected_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPunePopReprojected_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPunePopReprojected_9.addFeatures(features_AllPunePopReprojected_9);
var lyr_AllPunePopReprojected_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllPunePopReprojected_9, 
                style: style_AllPunePopReprojected_9,
                popuplayertitle: "All Pune Pop Reprojected",
                interactive: true,
                title: '<img src="styles/legend/AllPunePopReprojected_9.png" /> All Pune Pop Reprojected'
            });
var format_42DRoute_10 = new ol.format.GeoJSON();
var features_42DRoute_10 = format_42DRoute_10.readFeatures(json_42DRoute_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_42DRoute_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_42DRoute_10.addFeatures(features_42DRoute_10);
var lyr_42DRoute_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_42DRoute_10, 
                style: style_42DRoute_10,
                popuplayertitle: "42D Route",
                interactive: true,
                title: '42D Route'
            });
var format_Route42DMtrs_11 = new ol.format.GeoJSON();
var features_Route42DMtrs_11 = format_Route42DMtrs_11.readFeatures(json_Route42DMtrs_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42DMtrs_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42DMtrs_11.addFeatures(features_Route42DMtrs_11);
var lyr_Route42DMtrs_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42DMtrs_11, 
                style: style_Route42DMtrs_11,
                popuplayertitle: "Route 42D Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route42DMtrs_11.png" /> Route 42D Mtrs'
            });
var format_42DStops_12 = new ol.format.GeoJSON();
var features_42DStops_12 = format_42DStops_12.readFeatures(json_42DStops_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_42DStops_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_42DStops_12.addFeatures(features_42DStops_12);
var lyr_42DStops_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_42DStops_12, 
                style: style_42DStops_12,
                popuplayertitle: "42D Stops",
                interactive: true,
    title: '42D Stops<br />\
    <img src="styles/legend/42DStops_12_0.png" /> 1.0<br />\
    <img src="styles/legend/42DStops_12_1.png" /> 10.0<br />\
    <img src="styles/legend/42DStops_12_2.png" /> 11.0<br />\
    <img src="styles/legend/42DStops_12_3.png" /> 12.0<br />\
    <img src="styles/legend/42DStops_12_4.png" /> 13.0<br />\
    <img src="styles/legend/42DStops_12_5.png" /> 14.0<br />\
    <img src="styles/legend/42DStops_12_6.png" /> 15.0<br />\
    <img src="styles/legend/42DStops_12_7.png" /> 16.0<br />\
    <img src="styles/legend/42DStops_12_8.png" /> 17.0<br />\
    <img src="styles/legend/42DStops_12_9.png" /> 18.0<br />\
    <img src="styles/legend/42DStops_12_10.png" /> 2.0<br />\
    <img src="styles/legend/42DStops_12_11.png" /> 3.0<br />\
    <img src="styles/legend/42DStops_12_12.png" /> 4.0<br />\
    <img src="styles/legend/42DStops_12_13.png" /> 5.0<br />\
    <img src="styles/legend/42DStops_12_14.png" /> 6.0<br />\
    <img src="styles/legend/42DStops_12_15.png" /> 7.0<br />\
    <img src="styles/legend/42DStops_12_16.png" /> 8.0<br />\
    <img src="styles/legend/42DStops_12_17.png" /> 9.0<br />\
    <img src="styles/legend/42DStops_12_18.png" /> <br />'
        });
var format_Route42DStopsRecomPop_13 = new ol.format.GeoJSON();
var features_Route42DStopsRecomPop_13 = format_Route42DStopsRecomPop_13.readFeatures(json_Route42DStopsRecomPop_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42DStopsRecomPop_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42DStopsRecomPop_13.addFeatures(features_Route42DStopsRecomPop_13);
var lyr_Route42DStopsRecomPop_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42DStopsRecomPop_13, 
                style: style_Route42DStopsRecomPop_13,
                popuplayertitle: "Route 42D Stops Recom Pop",
                interactive: true,
                title: '<img src="styles/legend/Route42DStopsRecomPop_13.png" /> Route 42D Stops Recom Pop'
            });
var format_Route42DStopsPop_14 = new ol.format.GeoJSON();
var features_Route42DStopsPop_14 = format_Route42DStopsPop_14.readFeatures(json_Route42DStopsPop_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42DStopsPop_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42DStopsPop_14.addFeatures(features_Route42DStopsPop_14);
var lyr_Route42DStopsPop_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42DStopsPop_14, 
                style: style_Route42DStopsPop_14,
                popuplayertitle: "Route 42D Stops Pop",
                interactive: true,
                title: '<img src="styles/legend/Route42DStopsPop_14.png" /> Route 42D Stops Pop'
            });
var format_42DStopsRecon_15 = new ol.format.GeoJSON();
var features_42DStopsRecon_15 = format_42DStopsRecon_15.readFeatures(json_42DStopsRecon_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_42DStopsRecon_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_42DStopsRecon_15.addFeatures(features_42DStopsRecon_15);
var lyr_42DStopsRecon_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_42DStopsRecon_15, 
                style: style_42DStopsRecon_15,
                popuplayertitle: "42D Stops Recon",
                interactive: true,
                title: '<img src="styles/legend/42DStopsRecon_15.png" /> 42D Stops Recon'
            });
var format_Route42Pop1Km_16 = new ol.format.GeoJSON();
var features_Route42Pop1Km_16 = format_Route42Pop1Km_16.readFeatures(json_Route42Pop1Km_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42Pop1Km_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42Pop1Km_16.addFeatures(features_Route42Pop1Km_16);
var lyr_Route42Pop1Km_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42Pop1Km_16, 
                style: style_Route42Pop1Km_16,
                popuplayertitle: "Route 42 Pop 1Km",
                interactive: true,
                title: '<img src="styles/legend/Route42Pop1Km_16.png" /> Route 42 Pop 1Km'
            });
var format_Route42Pop500Mtrs_17 = new ol.format.GeoJSON();
var features_Route42Pop500Mtrs_17 = format_Route42Pop500Mtrs_17.readFeatures(json_Route42Pop500Mtrs_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42Pop500Mtrs_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42Pop500Mtrs_17.addFeatures(features_Route42Pop500Mtrs_17);
var lyr_Route42Pop500Mtrs_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42Pop500Mtrs_17, 
                style: style_Route42Pop500Mtrs_17,
                popuplayertitle: "Route 42 Pop 500 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route42Pop500Mtrs_17.png" /> Route 42 Pop 500 Mtrs'
            });
var format_Route42Pop250Mtr_18 = new ol.format.GeoJSON();
var features_Route42Pop250Mtr_18 = format_Route42Pop250Mtr_18.readFeatures(json_Route42Pop250Mtr_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42Pop250Mtr_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42Pop250Mtr_18.addFeatures(features_Route42Pop250Mtr_18);
var lyr_Route42Pop250Mtr_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42Pop250Mtr_18, 
                style: style_Route42Pop250Mtr_18,
                popuplayertitle: "Route 42 Pop 250 Mtr",
                interactive: true,
                title: '<img src="styles/legend/Route42Pop250Mtr_18.png" /> Route 42 Pop 250 Mtr'
            });
var format_Routr42100Mtr_19 = new ol.format.GeoJSON();
var features_Routr42100Mtr_19 = format_Routr42100Mtr_19.readFeatures(json_Routr42100Mtr_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routr42100Mtr_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routr42100Mtr_19.addFeatures(features_Routr42100Mtr_19);
var lyr_Routr42100Mtr_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Routr42100Mtr_19, 
                style: style_Routr42100Mtr_19,
                popuplayertitle: "Routr 42 100 Mtr",
                interactive: true,
                title: '<img src="styles/legend/Routr42100Mtr_19.png" /> Routr 42 100 Mtr'
            });
var format_trafficsignal_20 = new ol.format.GeoJSON();
var features_trafficsignal_20 = format_trafficsignal_20.readFeatures(json_trafficsignal_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trafficsignal_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trafficsignal_20.addFeatures(features_trafficsignal_20);
var lyr_trafficsignal_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trafficsignal_20, 
                style: style_trafficsignal_20,
                popuplayertitle: "traffic signal",
                interactive: true,
                title: '<img src="styles/legend/trafficsignal_20.png" /> traffic signal'
            });
var format_PublicBuildings_21 = new ol.format.GeoJSON();
var features_PublicBuildings_21 = format_PublicBuildings_21.readFeatures(json_PublicBuildings_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicBuildings_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicBuildings_21.addFeatures(features_PublicBuildings_21);
var lyr_PublicBuildings_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PublicBuildings_21, 
                style: style_PublicBuildings_21,
                popuplayertitle: "Public Buildings",
                interactive: true,
                title: '<img src="styles/legend/PublicBuildings_21.png" /> Public Buildings'
            });
var format_Offices_22 = new ol.format.GeoJSON();
var features_Offices_22 = format_Offices_22.readFeatures(json_Offices_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Offices_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Offices_22.addFeatures(features_Offices_22);
var lyr_Offices_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Offices_22, 
                style: style_Offices_22,
                popuplayertitle: "Offices",
                interactive: true,
                title: '<img src="styles/legend/Offices_22.png" /> Offices'
            });
var format_Temple_23 = new ol.format.GeoJSON();
var features_Temple_23 = format_Temple_23.readFeatures(json_Temple_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temple_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temple_23.addFeatures(features_Temple_23);
var lyr_Temple_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temple_23, 
                style: style_Temple_23,
                popuplayertitle: "Temple",
                interactive: true,
                title: '<img src="styles/legend/Temple_23.png" /> Temple'
            });
var format_Industries_24 = new ol.format.GeoJSON();
var features_Industries_24 = format_Industries_24.readFeatures(json_Industries_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industries_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industries_24.addFeatures(features_Industries_24);
var lyr_Industries_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industries_24, 
                style: style_Industries_24,
                popuplayertitle: "Industries",
                interactive: true,
                title: '<img src="styles/legend/Industries_24.png" /> Industries'
            });
var format_POIRoute42_25 = new ol.format.GeoJSON();
var features_POIRoute42_25 = format_POIRoute42_25.readFeatures(json_POIRoute42_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIRoute42_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIRoute42_25.addFeatures(features_POIRoute42_25);
var lyr_POIRoute42_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POIRoute42_25, 
                style: style_POIRoute42_25,
                popuplayertitle: "POI Route 42",
                interactive: true,
                title: '<img src="styles/legend/POIRoute42_25.png" /> POI Route 42'
            });
var format_POIRoute42_26 = new ol.format.GeoJSON();
var features_POIRoute42_26 = format_POIRoute42_26.readFeatures(json_POIRoute42_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIRoute42_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIRoute42_26.addFeatures(features_POIRoute42_26);
var lyr_POIRoute42_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POIRoute42_26, 
                style: style_POIRoute42_26,
                popuplayertitle: "POI Route 42",
                interactive: true,
                title: '<img src="styles/legend/POIRoute42_26.png" /> POI Route 42'
            });
var format_Route42RevenueAssessment_27 = new ol.format.GeoJSON();
var features_Route42RevenueAssessment_27 = format_Route42RevenueAssessment_27.readFeatures(json_Route42RevenueAssessment_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42RevenueAssessment_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42RevenueAssessment_27.addFeatures(features_Route42RevenueAssessment_27);
var lyr_Route42RevenueAssessment_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42RevenueAssessment_27, 
                style: style_Route42RevenueAssessment_27,
                popuplayertitle: "Route 42 Revenue Assessment",
                interactive: true,
    title: 'Route 42 Revenue Assessment<br />\
    <img src="styles/legend/Route42RevenueAssessment_27_0.png" /> 0.61<br />\
    <img src="styles/legend/Route42RevenueAssessment_27_1.png" /> 1.12<br />\
    <img src="styles/legend/Route42RevenueAssessment_27_2.png" /> 2.14<br />\
    <img src="styles/legend/Route42RevenueAssessment_27_3.png" /> 5.25<br />\
    <img src="styles/legend/Route42RevenueAssessment_27_4.png" /> <br />'
        });
var format_Route42RidershipAssessment_28 = new ol.format.GeoJSON();
var features_Route42RidershipAssessment_28 = format_Route42RidershipAssessment_28.readFeatures(json_Route42RidershipAssessment_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42RidershipAssessment_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42RidershipAssessment_28.addFeatures(features_Route42RidershipAssessment_28);
var lyr_Route42RidershipAssessment_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42RidershipAssessment_28, 
                style: style_Route42RidershipAssessment_28,
                popuplayertitle: "Route 42 Ridership Assessment",
                interactive: true,
    title: 'Route 42 Ridership Assessment<br />\
    <img src="styles/legend/Route42RidershipAssessment_28_0.png" /> 0.61<br />\
    <img src="styles/legend/Route42RidershipAssessment_28_1.png" /> 1.12<br />\
    <img src="styles/legend/Route42RidershipAssessment_28_2.png" /> 2.14<br />\
    <img src="styles/legend/Route42RidershipAssessment_28_3.png" /> 5.25<br />\
    <img src="styles/legend/Route42RidershipAssessment_28_4.png" /> <br />'
        });
var format_42UStoppop10Minswalk_29 = new ol.format.GeoJSON();
var features_42UStoppop10Minswalk_29 = format_42UStoppop10Minswalk_29.readFeatures(json_42UStoppop10Minswalk_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_42UStoppop10Minswalk_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_42UStoppop10Minswalk_29.addFeatures(features_42UStoppop10Minswalk_29);
var lyr_42UStoppop10Minswalk_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_42UStoppop10Minswalk_29, 
                style: style_42UStoppop10Minswalk_29,
                popuplayertitle: "42U Stop pop 10 Mins walk",
                interactive: true,
                title: '<img src="styles/legend/42UStoppop10Minswalk_29.png" /> 42U Stop pop 10 Mins walk'
            });
var format_Route42UMtrs_30 = new ol.format.GeoJSON();
var features_Route42UMtrs_30 = format_Route42UMtrs_30.readFeatures(json_Route42UMtrs_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42UMtrs_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42UMtrs_30.addFeatures(features_Route42UMtrs_30);
var lyr_Route42UMtrs_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42UMtrs_30, 
                style: style_Route42UMtrs_30,
                popuplayertitle: "Route 42U Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route42UMtrs_30.png" /> Route 42U Mtrs'
            });
var format_42UStops_31 = new ol.format.GeoJSON();
var features_42UStops_31 = format_42UStops_31.readFeatures(json_42UStops_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_42UStops_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_42UStops_31.addFeatures(features_42UStops_31);
var lyr_42UStops_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_42UStops_31, 
                style: style_42UStops_31,
                popuplayertitle: "42U Stops",
                interactive: true,
    title: '42U Stops<br />\
    <img src="styles/legend/42UStops_31_0.png" /> 1.0<br />\
    <img src="styles/legend/42UStops_31_1.png" /> 10.0<br />\
    <img src="styles/legend/42UStops_31_2.png" /> 11.0<br />\
    <img src="styles/legend/42UStops_31_3.png" /> 12.0<br />\
    <img src="styles/legend/42UStops_31_4.png" /> 13.0<br />\
    <img src="styles/legend/42UStops_31_5.png" /> 14.0<br />\
    <img src="styles/legend/42UStops_31_6.png" /> 15.0<br />\
    <img src="styles/legend/42UStops_31_7.png" /> 16.0<br />\
    <img src="styles/legend/42UStops_31_8.png" /> 17.0<br />\
    <img src="styles/legend/42UStops_31_9.png" /> 18.0<br />\
    <img src="styles/legend/42UStops_31_10.png" /> 2.0<br />\
    <img src="styles/legend/42UStops_31_11.png" /> 3.0<br />\
    <img src="styles/legend/42UStops_31_12.png" /> 4.0<br />\
    <img src="styles/legend/42UStops_31_13.png" /> 5.0<br />\
    <img src="styles/legend/42UStops_31_14.png" /> 6.0<br />\
    <img src="styles/legend/42UStops_31_15.png" /> 7.0<br />\
    <img src="styles/legend/42UStops_31_16.png" /> 8.0<br />\
    <img src="styles/legend/42UStops_31_17.png" /> 9.0<br />\
    <img src="styles/legend/42UStops_31_18.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Pimpalesaudagar_1.setVisible(true);lyr_PimpleGaurav_2.setVisible(true);lyr_Keshavnagar_3.setVisible(true);lyr_Yavatmal_4.setVisible(true);lyr_Lahagaon_5.setVisible(true);lyr_KirkeeBoundary_6.setVisible(true);lyr_PimpreChinchwadboundary_7.setVisible(true);lyr_PuneGeoBoundary_8.setVisible(true);lyr_AllPunePopReprojected_9.setVisible(true);lyr_42DRoute_10.setVisible(true);lyr_Route42DMtrs_11.setVisible(true);lyr_42DStops_12.setVisible(true);lyr_Route42DStopsRecomPop_13.setVisible(true);lyr_Route42DStopsPop_14.setVisible(true);lyr_42DStopsRecon_15.setVisible(true);lyr_Route42Pop1Km_16.setVisible(true);lyr_Route42Pop500Mtrs_17.setVisible(true);lyr_Route42Pop250Mtr_18.setVisible(true);lyr_Routr42100Mtr_19.setVisible(true);lyr_trafficsignal_20.setVisible(true);lyr_PublicBuildings_21.setVisible(true);lyr_Offices_22.setVisible(true);lyr_Temple_23.setVisible(true);lyr_Industries_24.setVisible(true);lyr_POIRoute42_25.setVisible(true);lyr_POIRoute42_26.setVisible(true);lyr_Route42RevenueAssessment_27.setVisible(true);lyr_Route42RidershipAssessment_28.setVisible(true);lyr_42UStoppop10Minswalk_29.setVisible(true);lyr_Route42UMtrs_30.setVisible(true);lyr_42UStops_31.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Pimpalesaudagar_1,lyr_PimpleGaurav_2,lyr_Keshavnagar_3,lyr_Yavatmal_4,lyr_Lahagaon_5,lyr_KirkeeBoundary_6,lyr_PimpreChinchwadboundary_7,lyr_PuneGeoBoundary_8,lyr_AllPunePopReprojected_9,lyr_42DRoute_10,lyr_Route42DMtrs_11,lyr_42DStops_12,lyr_Route42DStopsRecomPop_13,lyr_Route42DStopsPop_14,lyr_42DStopsRecon_15,lyr_Route42Pop1Km_16,lyr_Route42Pop500Mtrs_17,lyr_Route42Pop250Mtr_18,lyr_Routr42100Mtr_19,lyr_trafficsignal_20,lyr_PublicBuildings_21,lyr_Offices_22,lyr_Temple_23,lyr_Industries_24,lyr_POIRoute42_25,lyr_POIRoute42_26,lyr_Route42RevenueAssessment_27,lyr_Route42RidershipAssessment_28,lyr_42UStoppop10Minswalk_29,lyr_Route42UMtrs_30,lyr_42UStops_31];
lyr_Pimpalesaudagar_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PimpleGaurav_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Keshavnagar_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Yavatmal_4.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Lahagaon_5.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_KirkeeBoundary_6.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PimpreChinchwadboundary_7.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PuneGeoBoundary_8.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_AllPunePopReprojected_9.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'layer': 'layer', 'path': 'path', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', 'Area': 'Area', });
lyr_42DRoute_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Route42DMtrs_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_42DStops_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Direction': 'Direction', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', });
lyr_Route42DStopsRecomPop_13.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Route42DStopsPop_14.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_42DStopsRecon_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'distance': 'distance', 'angle': 'angle', });
lyr_Route42Pop1Km_16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_Route42Pop500Mtrs_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_Route42Pop250Mtr_18.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_Routr42100Mtr_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_trafficsignal_20.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'noexit': 'noexit', 'descriptio': 'descriptio', 'check_date': 'check_date', 'alt_name': 'alt_name', 'traffic_si': 'traffic_si', 'operationa': 'operationa', 'name_en': 'name_en', 'traffic__1': 'traffic__1', 'is_in': 'is_in', 'AND_a_nosr': 'AND_a_nosr', 'traffic__2': 'traffic__2', 'name_mr': 'name_mr', 'name': 'name', 'junction': 'junction', });
lyr_PublicBuildings_21.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'level': 'level', 'email': 'email', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'access': 'access', 'operator_s': 'operator_s', 'brand_shor': 'brand_shor', 'door': 'door', 'start_date': 'start_date', 'building': 'building', 'entrance': 'entrance', 'branch': 'branch', 'descriptio': 'descriptio', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'club': 'club', 'name_pl': 'name_pl', 'name_fr': 'name_fr', 'website': 'website', 'addr_floor': 'addr_floor', 'alt_name': 'alt_name', 'entertainm': 'entertainm', 'contact_ph': 'contact_ph', 'addr_place': 'addr_place', 'addr_house': 'addr_house', 'postal_cod': 'postal_cod', 'addr_hou_1': 'addr_hou_1', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'wheelchair': 'wheelchair', 'name_en': 'name_en', 'internet_a': 'internet_a', 'alt_name_m': 'alt_name_m', 'alt_name_e': 'alt_name_e', 'addr_postc': 'addr_postc', 'operator_t': 'operator_t', 'check_date': 'check_date', 'phone': 'phone', 'operator_w': 'operator_w', 'operator': 'operator', 'opening_ho': 'opening_ho', 'name_mr': 'name_mr', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'name': 'name', });
lyr_Offices_22.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'power': 'power', 'generator_': 'generator_', 'generato_1': 'generato_1', 'generato_2': 'generato_2', 'generato_3': 'generato_3', 'mobile': 'mobile', 'contact_yo': 'contact_yo', 'contact_li': 'contact_li', 'company': 'company', 'branch_wik': 'branch_wik', 'branch_w_1': 'branch_w_1', 'ref': 'ref', 'alt_name_e': 'alt_name_e', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'building_l': 'building_l', 'phone_mobi': 'phone_mobi', 'short_name': 'short_name', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'operator_2': 'operator_2', 'operator_t': 'operator_t', 'operator_s': 'operator_s', 'operator': 'operator', 'opening_ho': 'opening_ho', 'image': 'image', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'contact_tw': 'contact_tw', 'contact_in': 'contact_in', 'contact_fa': 'contact_fa', 'addr_state': 'addr_state', 'addr_distr': 'addr_distr', 'addr_count': 'addr_count', 'government': 'government', 'air_condit': 'air_condit', 'name_el': 'name_el', 'name_hi': 'name_hi', 'official_n': 'official_n', 'addr_floor': 'addr_floor', 'check_date': 'check_date', 'alt_name_m': 'alt_name_m', 'name_fr': 'name_fr', 'addr_unit': 'addr_unit', 'addr_full': 'addr_full', 'name_en': 'name_en', 'start_date': 'start_date', 'level': 'level', 'contact_mo': 'contact_mo', 'addr_place': 'addr_place', 'descriptio': 'descriptio', 'fax': 'fax', 'email': 'email', 'addr_neigh': 'addr_neigh', 'addr_local': 'addr_local', 'alt_name': 'alt_name', 'opening__1': 'opening__1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'wheelchair': 'wheelchair', 'name_mr': 'name_mr', 'entrance': 'entrance', 'smoking': 'smoking', 'phone': 'phone', 'addr_city': 'addr_city', 'designatio': 'designatio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'website': 'website', 'landuse': 'landuse', 'name': 'name', 'building': 'building', });
lyr_Temple_23.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'man_made': 'man_made', 'flag_type': 'flag_type', 'addr_neigh': 'addr_neigh', 'pincode': 'pincode', 'addr_subur': 'addr_subur', 'layer': 'layer', 'polling_st': 'polling_st', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'internet_a': 'internet_a', 'baby_feedi': 'baby_feedi', 'air_condit': 'air_condit', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'shop': 'shop', 'payment_up': 'payment_up', 'level': 'level', 'addr_floor': 'addr_floor', 'service_ti': 'service_ti', 'website': 'website', 'phone': 'phone', 'access': 'access', 'check_date': 'check_date', 'name_en': 'name_en', 'place_of_w': 'place_of_w', 'descriptio': 'descriptio', 'name_hi': 'name_hi', 'alt_name': 'alt_name', 'building': 'building', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'opening_ho': 'opening_ho', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'tourism': 'tourism', 'name_mr': 'name_mr', 'name': 'name', });
lyr_Industries_24.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', });
lyr_POIRoute42_25.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr_full': 'addr_full', 'locked': 'locked', 'material': 'material', 'colour': 'colour', 'start_date': 'start_date', 'level': 'level', 'descriptio': 'descriptio', 'addr_floor': 'addr_floor', 'nursery': 'nursery', 'mobile': 'mobile', 'isced_leve': 'isced_leve', 'contact_yo': 'contact_yo', 'contact_li': 'contact_li', 'contact_in': 'contact_in', 'contact_fa': 'contact_fa', 'brand': 'brand', 'branch': 'branch', 'addr_place': 'addr_place', 'polling_st': 'polling_st', 'ref': 'ref', 'operator_w': 'operator_w', 'operator_s': 'operator_s', 'check_date': 'check_date', 'language_e': 'language_e', 'operator_t': 'operator_t', 'denominati': 'denominati', 'wheelchair': 'wheelchair', 'entrance': 'entrance', 'door': 'door', 'religion': 'religion', 'opening_ho': 'opening_ho', 'email': 'email', 'name_pl': 'name_pl', 'indoor_lev': 'indoor_lev', 'operator': 'operator', 'contact_ph': 'contact_ph', 'access': 'access', 'school': 'school', 'designatio': 'designatio', 'addr_house': 'addr_house', 'alt_name': 'alt_name', 'barrier': 'barrier', 'int_name': 'int_name', 'addr_hou_1': 'addr_hou_1', 'internet_a': 'internet_a', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'website': 'website', 'preschool': 'preschool', 'phone': 'phone', 'name_mr': 'name_mr', 'name_hi': 'name_hi', 'name_en': 'name_en', 'image': 'image', 'grades': 'grades', 'contact_mo': 'contact_mo', 'contact_em': 'contact_em', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_distr': 'addr_distr', 'addr_city': 'addr_city', 'name_etymo': 'name_etymo', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'name': 'name', 'Name_2': 'Name_2', 'descript_1': 'descript_1', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', 'brand_shor': 'brand_shor', 'building': 'building', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'club': 'club', 'name_fr': 'name_fr', 'entertainm': 'entertainm', 'postal_cod': 'postal_cod', 'alt_name_m': 'alt_name_m', 'alt_name_e': 'alt_name_e', 'man_made': 'man_made', 'flag_type': 'flag_type', 'addr_neigh': 'addr_neigh', 'pincode': 'pincode', 'addr_subur': 'addr_subur', 'layer': 'layer', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'baby_feedi': 'baby_feedi', 'air_condit': 'air_condit', 'shop': 'shop', 'payment_up': 'payment_up', 'service_ti': 'service_ti', 'place_of_w': 'place_of_w', 'tourism': 'tourism', 'office': 'office', 'power': 'power', 'generator_': 'generator_', 'generato_1': 'generato_1', 'generato_2': 'generato_2', 'generato_3': 'generato_3', 'company': 'company', 'branch_wik': 'branch_wik', 'branch_w_1': 'branch_w_1', 'internet_1': 'internet_1', 'building_l': 'building_l', 'phone_mobi': 'phone_mobi', 'short_name': 'short_name', 'operator_1': 'operator_1', 'operator_2': 'operator_2', 'contact_tw': 'contact_tw', 'government': 'government', 'name_el': 'name_el', 'official_n': 'official_n', 'addr_unit': 'addr_unit', 'fax': 'fax', 'addr_local': 'addr_local', 'opening__1': 'opening__1', 'smoking': 'smoking', 'landuse': 'landuse', 'highway': 'highway', 'noexit': 'noexit', 'traffic_si': 'traffic_si', 'operationa': 'operationa', 'traffic__1': 'traffic__1', 'is_in': 'is_in', 'AND_a_nosr': 'AND_a_nosr', 'traffic__2': 'traffic__2', 'junction': 'junction', 'path': 'path', });
lyr_POIRoute42_26.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', 'Industries': 'Industries', 'Temple': 'Temple', 'Signals': 'Signals', 'Education': 'Education', 'Offices': 'Offices', });
lyr_Route42RevenueAssessment_27.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', 'layer': 'layer', 'Coverage': 'Coverage', 'Ridership': 'Ridership', 'Daily': 'Daily', 'Revenue': 'Revenue', 'Rev/Pax': 'Rev/Pax', 'Rev/Pop': 'Rev/Pop', });
lyr_Route42RidershipAssessment_28.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', 'layer': 'layer', 'Coverage': 'Coverage', 'Ridership': 'Ridership', 'Daily': 'Daily', 'Adjusted': 'Adjusted', });
lyr_42UStoppop10Minswalk_29.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'Ridership': 'Ridership', '%Ridership': '%Ridership', });
lyr_Route42UMtrs_30.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_42UStops_31.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Direction': 'Direction', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', 'unnamed__1_': 'unnamed__1_', });
lyr_Pimpalesaudagar_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PimpleGaurav_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Keshavnagar_3.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Yavatmal_4.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Lahagaon_5.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_KirkeeBoundary_6.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PimpreChinchwadboundary_7.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PuneGeoBoundary_8.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_AllPunePopReprojected_9.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', 'Area': 'TextEdit', });
lyr_42DRoute_10.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Route42DMtrs_11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_42DStops_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Direction': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', });
lyr_Route42DStopsRecomPop_13.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Route42DStopsPop_14.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_42DStopsRecon_15.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'distance': '', 'angle': '', });
lyr_Route42Pop1Km_16.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'Range', });
lyr_Route42Pop500Mtrs_17.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'Range', });
lyr_Route42Pop250Mtr_18.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'Range', });
lyr_Routr42100Mtr_19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'Range', });
lyr_trafficsignal_20.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'noexit': 'TextEdit', 'descriptio': 'TextEdit', 'check_date': 'TextEdit', 'alt_name': 'TextEdit', 'traffic_si': 'TextEdit', 'operationa': 'TextEdit', 'name_en': 'TextEdit', 'traffic__1': 'TextEdit', 'is_in': 'TextEdit', 'AND_a_nosr': 'TextEdit', 'traffic__2': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'junction': 'TextEdit', });
lyr_PublicBuildings_21.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'level': 'TextEdit', 'email': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'operator_s': 'TextEdit', 'brand_shor': 'TextEdit', 'door': 'TextEdit', 'start_date': 'TextEdit', 'building': 'TextEdit', 'entrance': 'TextEdit', 'branch': 'TextEdit', 'descriptio': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand': 'TextEdit', 'club': 'TextEdit', 'name_pl': 'TextEdit', 'name_fr': 'TextEdit', 'website': 'TextEdit', 'addr_floor': 'TextEdit', 'alt_name': 'TextEdit', 'entertainm': 'TextEdit', 'contact_ph': 'TextEdit', 'addr_place': 'TextEdit', 'addr_house': 'TextEdit', 'postal_cod': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'wheelchair': 'TextEdit', 'name_en': 'TextEdit', 'internet_a': 'TextEdit', 'alt_name_m': 'TextEdit', 'alt_name_e': 'TextEdit', 'addr_postc': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'phone': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'name_mr': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', });
lyr_Offices_22.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'power': 'TextEdit', 'generator_': 'TextEdit', 'generato_1': 'TextEdit', 'generato_2': 'TextEdit', 'generato_3': 'TextEdit', 'mobile': 'TextEdit', 'contact_yo': 'TextEdit', 'contact_li': 'TextEdit', 'company': 'TextEdit', 'branch_wik': 'TextEdit', 'branch_w_1': 'TextEdit', 'ref': 'TextEdit', 'alt_name_e': 'TextEdit', 'internet_a': 'TextEdit', 'internet_1': 'TextEdit', 'building_l': 'TextEdit', 'phone_mobi': 'TextEdit', 'short_name': 'TextEdit', 'operator_w': 'TextEdit', 'operator_1': 'TextEdit', 'operator_2': 'TextEdit', 'operator_t': 'TextEdit', 'operator_s': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'image': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'contact_tw': 'TextEdit', 'contact_in': 'TextEdit', 'contact_fa': 'TextEdit', 'addr_state': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_count': 'TextEdit', 'government': 'TextEdit', 'air_condit': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'official_n': 'TextEdit', 'addr_floor': 'TextEdit', 'check_date': 'TextEdit', 'alt_name_m': 'TextEdit', 'name_fr': 'TextEdit', 'addr_unit': 'TextEdit', 'addr_full': 'TextEdit', 'name_en': 'TextEdit', 'start_date': 'TextEdit', 'level': 'TextEdit', 'contact_mo': 'TextEdit', 'addr_place': 'TextEdit', 'descriptio': 'TextEdit', 'fax': 'TextEdit', 'email': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_local': 'TextEdit', 'alt_name': 'TextEdit', 'opening__1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'wheelchair': 'TextEdit', 'name_mr': 'TextEdit', 'entrance': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'addr_city': 'TextEdit', 'designatio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'website': 'TextEdit', 'landuse': 'TextEdit', 'name': 'TextEdit', 'building': 'TextEdit', });
lyr_Temple_23.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'flag_type': 'TextEdit', 'addr_neigh': 'TextEdit', 'pincode': 'TextEdit', 'addr_subur': 'TextEdit', 'layer': 'TextEdit', 'polling_st': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'internet_a': 'TextEdit', 'baby_feedi': 'TextEdit', 'air_condit': 'TextEdit', 'entrance': 'TextEdit', 'wheelchair': 'TextEdit', 'shop': 'TextEdit', 'payment_up': 'TextEdit', 'level': 'TextEdit', 'addr_floor': 'TextEdit', 'service_ti': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'access': 'TextEdit', 'check_date': 'TextEdit', 'name_en': 'TextEdit', 'place_of_w': 'TextEdit', 'descriptio': 'TextEdit', 'name_hi': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_state': 'TextEdit', 'addr_count': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'tourism': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', });
lyr_Industries_24.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', });
lyr_POIRoute42_25.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'addr_full': '', 'locked': '', 'material': '', 'colour': '', 'start_date': '', 'level': '', 'descriptio': '', 'addr_floor': '', 'nursery': '', 'mobile': '', 'isced_leve': '', 'contact_yo': '', 'contact_li': '', 'contact_in': '', 'contact_fa': '', 'brand': '', 'branch': '', 'addr_place': '', 'polling_st': '', 'ref': '', 'operator_w': '', 'operator_s': '', 'check_date': '', 'language_e': '', 'operator_t': '', 'denominati': '', 'wheelchair': '', 'entrance': '', 'door': '', 'religion': '', 'opening_ho': '', 'email': '', 'name_pl': '', 'indoor_lev': '', 'operator': '', 'contact_ph': '', 'access': '', 'school': '', 'designatio': '', 'addr_house': '', 'alt_name': '', 'barrier': '', 'int_name': '', 'addr_hou_1': '', 'internet_a': '', 'addr_state': '', 'addr_count': '', 'website': '', 'preschool': '', 'phone': '', 'name_mr': '', 'name_hi': '', 'name_en': '', 'image': '', 'grades': '', 'contact_mo': '', 'contact_em': '', 'addr_stree': '', 'addr_postc': '', 'addr_distr': '', 'addr_city': '', 'name_etymo': '', 'wikipedia': '', 'wikimedia_': '', 'wikidata': '', 'name': '', 'Name_2': '', 'descript_1': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', '_count': '', '_sum': '', '_mean': '', 'Pop': '', 'brand_shor': '', 'building': '', 'brand_wiki': '', 'brand_wi_1': '', 'club': '', 'name_fr': '', 'entertainm': '', 'postal_cod': '', 'alt_name_m': '', 'alt_name_e': '', 'man_made': '', 'flag_type': '', 'addr_neigh': '', 'pincode': '', 'addr_subur': '', 'layer': '', 'payment_de': '', 'payment_cr': '', 'payment_ca': '', 'baby_feedi': '', 'air_condit': '', 'shop': '', 'payment_up': '', 'service_ti': '', 'place_of_w': '', 'tourism': '', 'office': '', 'power': '', 'generator_': '', 'generato_1': '', 'generato_2': '', 'generato_3': '', 'company': '', 'branch_wik': '', 'branch_w_1': '', 'internet_1': '', 'building_l': '', 'phone_mobi': '', 'short_name': '', 'operator_1': '', 'operator_2': '', 'contact_tw': '', 'government': '', 'name_el': '', 'official_n': '', 'addr_unit': '', 'fax': '', 'addr_local': '', 'opening__1': '', 'smoking': '', 'landuse': '', 'highway': '', 'noexit': '', 'traffic_si': '', 'operationa': '', 'traffic__1': '', 'is_in': '', 'AND_a_nosr': '', 'traffic__2': '', 'junction': '', 'path': '', });
lyr_POIRoute42_26.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', '_count': '', '_sum': '', '_mean': '', 'Pop': '', 'Industries': '', 'Temple': '', 'Signals': '', 'Education': '', 'Offices': '', });
lyr_Route42RevenueAssessment_27.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'TextEdit', 'layer': 'TextEdit', 'Coverage': 'TextEdit', 'Ridership': 'Range', 'Daily': 'Range', 'Revenue': '', 'Rev/Pax': '', 'Rev/Pop': '', });
lyr_Route42RidershipAssessment_28.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'TextEdit', 'layer': 'TextEdit', 'Coverage': 'TextEdit', 'Ridership': 'Range', 'Daily': 'Range', 'Adjusted': 'Range', });
lyr_42UStoppop10Minswalk_29.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'Range', 'Ridership': 'Range', '%Ridership': 'TextEdit', });
lyr_Route42UMtrs_30.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_42UStops_31.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Direction': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', 'unnamed__1_': 'TextEdit', });
lyr_Pimpalesaudagar_1.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PimpleGaurav_2.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Keshavnagar_3.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Yavatmal_4.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Lahagaon_5.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_KirkeeBoundary_6.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PimpreChinchwadboundary_7.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PuneGeoBoundary_8.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_AllPunePopReprojected_9.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'header label - visible with data', 'Area': 'header label - visible with data', });
lyr_42DRoute_10.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Route42DMtrs_11.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_42DStops_12.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'inline label - visible with data', 'Stg': 'inline label - visible with data', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', });
lyr_Route42DStopsRecomPop_13.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_Route42DStopsPop_14.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_42DStopsRecon_15.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'distance': 'hidden field', 'angle': 'hidden field', });
lyr_Route42Pop1Km_16.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', });
lyr_Route42Pop500Mtrs_17.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', });
lyr_Route42Pop250Mtr_18.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', });
lyr_Routr42100Mtr_19.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', });
lyr_trafficsignal_20.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'noexit': 'hidden field', 'descriptio': 'hidden field', 'check_date': 'hidden field', 'alt_name': 'hidden field', 'traffic_si': 'hidden field', 'operationa': 'hidden field', 'name_en': 'hidden field', 'traffic__1': 'hidden field', 'is_in': 'hidden field', 'AND_a_nosr': 'hidden field', 'traffic__2': 'hidden field', 'name_mr': 'hidden field', 'name': 'hidden field', 'junction': 'hidden field', });
lyr_PublicBuildings_21.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'level': 'hidden field', 'email': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'operator_s': 'hidden field', 'brand_shor': 'hidden field', 'door': 'hidden field', 'start_date': 'hidden field', 'building': 'hidden field', 'entrance': 'hidden field', 'branch': 'hidden field', 'descriptio': 'hidden field', 'brand_wiki': 'hidden field', 'brand_wi_1': 'hidden field', 'brand': 'hidden field', 'club': 'hidden field', 'name_pl': 'hidden field', 'name_fr': 'hidden field', 'website': 'hidden field', 'addr_floor': 'hidden field', 'alt_name': 'hidden field', 'entertainm': 'hidden field', 'contact_ph': 'hidden field', 'addr_place': 'hidden field', 'addr_house': 'hidden field', 'postal_cod': 'hidden field', 'addr_hou_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'wheelchair': 'hidden field', 'name_en': 'hidden field', 'internet_a': 'hidden field', 'alt_name_m': 'hidden field', 'alt_name_e': 'hidden field', 'addr_postc': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'phone': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'name_mr': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'name': 'header label - visible with data', });
lyr_Offices_22.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'power': 'hidden field', 'generator_': 'hidden field', 'generato_1': 'hidden field', 'generato_2': 'hidden field', 'generato_3': 'hidden field', 'mobile': 'hidden field', 'contact_yo': 'hidden field', 'contact_li': 'hidden field', 'company': 'hidden field', 'branch_wik': 'hidden field', 'branch_w_1': 'hidden field', 'ref': 'hidden field', 'alt_name_e': 'hidden field', 'internet_a': 'hidden field', 'internet_1': 'hidden field', 'building_l': 'hidden field', 'phone_mobi': 'hidden field', 'short_name': 'hidden field', 'operator_w': 'hidden field', 'operator_1': 'hidden field', 'operator_2': 'hidden field', 'operator_t': 'hidden field', 'operator_s': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'image': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'contact_tw': 'hidden field', 'contact_in': 'hidden field', 'contact_fa': 'hidden field', 'addr_state': 'hidden field', 'addr_distr': 'hidden field', 'addr_count': 'hidden field', 'government': 'hidden field', 'air_condit': 'hidden field', 'name_el': 'hidden field', 'name_hi': 'hidden field', 'official_n': 'hidden field', 'addr_floor': 'hidden field', 'check_date': 'hidden field', 'alt_name_m': 'hidden field', 'name_fr': 'hidden field', 'addr_unit': 'hidden field', 'addr_full': 'hidden field', 'name_en': 'hidden field', 'start_date': 'hidden field', 'level': 'hidden field', 'contact_mo': 'hidden field', 'addr_place': 'hidden field', 'descriptio': 'hidden field', 'fax': 'hidden field', 'email': 'hidden field', 'addr_neigh': 'hidden field', 'addr_local': 'hidden field', 'alt_name': 'hidden field', 'opening__1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'wheelchair': 'hidden field', 'name_mr': 'hidden field', 'entrance': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'addr_city': 'hidden field', 'designatio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'website': 'hidden field', 'landuse': 'hidden field', 'name': 'header label - visible with data', 'building': 'hidden field', });
lyr_Temple_23.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'man_made': 'hidden field', 'flag_type': 'hidden field', 'addr_neigh': 'hidden field', 'pincode': 'hidden field', 'addr_subur': 'hidden field', 'layer': 'hidden field', 'polling_st': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'internet_a': 'hidden field', 'baby_feedi': 'hidden field', 'air_condit': 'hidden field', 'entrance': 'hidden field', 'wheelchair': 'hidden field', 'shop': 'hidden field', 'payment_up': 'hidden field', 'level': 'hidden field', 'addr_floor': 'hidden field', 'service_ti': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'access': 'hidden field', 'check_date': 'hidden field', 'name_en': 'hidden field', 'place_of_w': 'hidden field', 'descriptio': 'hidden field', 'name_hi': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'opening_ho': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'tourism': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', });
lyr_Industries_24.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'header label - visible with data', });
lyr_POIRoute42_25.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'addr_full': 'hidden field', 'locked': 'hidden field', 'material': 'hidden field', 'colour': 'hidden field', 'start_date': 'hidden field', 'level': 'hidden field', 'descriptio': 'hidden field', 'addr_floor': 'hidden field', 'nursery': 'hidden field', 'mobile': 'hidden field', 'isced_leve': 'hidden field', 'contact_yo': 'hidden field', 'contact_li': 'hidden field', 'contact_in': 'hidden field', 'contact_fa': 'hidden field', 'brand': 'hidden field', 'branch': 'hidden field', 'addr_place': 'hidden field', 'polling_st': 'hidden field', 'ref': 'hidden field', 'operator_w': 'hidden field', 'operator_s': 'hidden field', 'check_date': 'hidden field', 'language_e': 'hidden field', 'operator_t': 'hidden field', 'denominati': 'hidden field', 'wheelchair': 'hidden field', 'entrance': 'hidden field', 'door': 'hidden field', 'religion': 'hidden field', 'opening_ho': 'hidden field', 'email': 'hidden field', 'name_pl': 'hidden field', 'indoor_lev': 'hidden field', 'operator': 'hidden field', 'contact_ph': 'hidden field', 'access': 'hidden field', 'school': 'hidden field', 'designatio': 'hidden field', 'addr_house': 'hidden field', 'alt_name': 'hidden field', 'barrier': 'hidden field', 'int_name': 'hidden field', 'addr_hou_1': 'hidden field', 'internet_a': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'website': 'hidden field', 'preschool': 'hidden field', 'phone': 'hidden field', 'name_mr': 'inline label - visible with data', 'name_hi': 'inline label - visible with data', 'name_en': 'inline label - visible with data', 'image': 'hidden field', 'grades': 'hidden field', 'contact_mo': 'hidden field', 'contact_em': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'inline label - visible with data', 'addr_distr': 'inline label - visible with data', 'addr_city': 'inline label - visible with data', 'name_etymo': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'descript_1': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'hidden field', 'brand_shor': 'hidden field', 'building': 'hidden field', 'brand_wiki': 'hidden field', 'brand_wi_1': 'hidden field', 'club': 'hidden field', 'name_fr': 'hidden field', 'entertainm': 'hidden field', 'postal_cod': 'hidden field', 'alt_name_m': 'hidden field', 'alt_name_e': 'hidden field', 'man_made': 'hidden field', 'flag_type': 'hidden field', 'addr_neigh': 'hidden field', 'pincode': 'hidden field', 'addr_subur': 'hidden field', 'layer': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'baby_feedi': 'hidden field', 'air_condit': 'hidden field', 'shop': 'hidden field', 'payment_up': 'hidden field', 'service_ti': 'hidden field', 'place_of_w': 'hidden field', 'tourism': 'hidden field', 'office': 'hidden field', 'power': 'hidden field', 'generator_': 'hidden field', 'generato_1': 'hidden field', 'generato_2': 'hidden field', 'generato_3': 'hidden field', 'company': 'hidden field', 'branch_wik': 'hidden field', 'branch_w_1': 'hidden field', 'internet_1': 'hidden field', 'building_l': 'hidden field', 'phone_mobi': 'hidden field', 'short_name': 'hidden field', 'operator_1': 'hidden field', 'operator_2': 'hidden field', 'contact_tw': 'hidden field', 'government': 'hidden field', 'name_el': 'hidden field', 'official_n': 'hidden field', 'addr_unit': 'hidden field', 'fax': 'hidden field', 'addr_local': 'hidden field', 'opening__1': 'hidden field', 'smoking': 'hidden field', 'landuse': 'hidden field', 'highway': 'hidden field', 'noexit': 'hidden field', 'traffic_si': 'hidden field', 'operationa': 'hidden field', 'traffic__1': 'hidden field', 'is_in': 'hidden field', 'AND_a_nosr': 'hidden field', 'traffic__2': 'hidden field', 'junction': 'hidden field', 'path': 'hidden field', });
lyr_POIRoute42_26.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', 'Industries': 'inline label - visible with data', 'Temple': 'inline label - visible with data', 'Signals': 'inline label - visible with data', 'Education': 'inline label - visible with data', 'Offices': 'inline label - visible with data', });
lyr_Route42RevenueAssessment_27.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Coverage': 'inline label - visible with data', 'Ridership': 'inline label - visible with data', 'Daily': 'inline label - visible with data', 'Revenue': 'inline label - visible with data', 'Rev/Pax': 'inline label - visible with data', 'Rev/Pop': 'inline label - visible with data', });
lyr_Route42RidershipAssessment_28.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Coverage': 'inline label - visible with data', 'Ridership': 'inline label - visible with data', 'Daily': 'inline label - visible with data', 'Adjusted': 'inline label - visible with data', });
lyr_42UStoppop10Minswalk_29.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Pop': 'header label - visible with data', 'Ridership': 'header label - visible with data', '%Ridership': 'header label - visible with data', });
lyr_Route42UMtrs_30.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_42UStops_31.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'inline label - visible with data', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'inline label - visible with data', 'Stg': 'inline label - visible with data', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', 'unnamed__1_': 'inline label - visible with data', });
lyr_42UStops_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});