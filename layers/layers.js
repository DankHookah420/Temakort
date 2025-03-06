var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1 = new ol.format.GeoJSON();
var features_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1 = format_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1.readFeatures(json_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1.addFeatures(features_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1);
var lyr_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1, 
                style: style_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1,
                popuplayertitle: 'TEMA KORT LOKAL PLANER 0167 HVIDOVRE KOMMUNE',
                interactive: true,
    title: 'TEMA KORT LOKAL PLANER 0167 HVIDOVRE KOMMUNE<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_0.png" /> 1024399<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_1.png" /> 1053515<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_2.png" /> 1061002<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_3.png" /> 1061022<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_4.png" /> 1061038<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_5.png" /> 1061103<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_6.png" /> 1061140<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_7.png" /> 1061206<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_8.png" /> 1061209<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_9.png" /> 1061210<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_10.png" /> 1061715<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_11.png" /> 1061734<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_12.png" /> 1061739<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_13.png" /> 1061746<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_14.png" /> 1061756<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_15.png" /> 1061757<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_16.png" /> 1061824<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_17.png" /> 1061829<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_18.png" /> 1062026<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_19.png" /> 1062121<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_20.png" /> 1070479<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_21.png" /> 1071381<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_22.png" /> 1074662<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_23.png" /> 1074664<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_24.png" /> 1074675<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_25.png" /> 1075214<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_26.png" /> 1075219<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_27.png" /> 1075387<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_28.png" /> 1075393<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_29.png" /> 1075552<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_30.png" /> 1075553<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_31.png" /> 1075577<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_32.png" /> 1075593<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_33.png" /> 1075598<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_34.png" /> 1075609<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_35.png" /> 1075669<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_36.png" /> 1075682<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_37.png" /> 1075695<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_38.png" /> 1075708<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_39.png" /> 1075710<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_40.png" /> 1075718<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_41.png" /> 1075751<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_42.png" /> 1075752<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_43.png" /> 1075779<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_44.png" /> 1075795<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_45.png" /> 1075800<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_46.png" /> 1075801<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_47.png" /> 1075815<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_48.png" /> 1075877<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_49.png" /> 1075893<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_50.png" /> 1075897<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_51.png" /> 1075900<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_52.png" /> 1075902<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_53.png" /> 1075905<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_54.png" /> 1075907<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_55.png" /> 1075908<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_56.png" /> 1076004<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_57.png" /> 1076010<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_58.png" /> 1076019<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_59.png" /> 1076041<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_60.png" /> 1076064<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_61.png" /> 1076086<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_62.png" /> 1076094<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_63.png" /> 1076107<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_64.png" /> 1076114<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_65.png" /> 1076115<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_66.png" /> 1076126<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_67.png" /> 1076129<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_68.png" /> 1076287<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_69.png" /> 1076379<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_70.png" /> 1076865<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_71.png" /> 1076868<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_72.png" /> 1076874<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_73.png" /> 1076892<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_74.png" /> 1076902<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_75.png" /> 1076939<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_76.png" /> 1076961<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_77.png" /> 1076968<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_78.png" /> 1077070<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_79.png" /> 1077082<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_80.png" /> 1077085<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_81.png" /> 1077086<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_82.png" /> 1077558<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_83.png" /> 1077565<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_84.png" /> 1078074<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_85.png" /> 1078075<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_86.png" /> 1078077<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_87.png" /> 1078184<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_88.png" /> 1078227<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_89.png" /> 1078229<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_90.png" /> 1078231<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_91.png" /> 1078248<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_92.png" /> 1078275<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_93.png" /> 1078279<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_94.png" /> 1078289<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_95.png" /> 1078346<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_96.png" /> 1078464<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_97.png" /> 1078465<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_98.png" /> 1078468<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_99.png" /> 1079122<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_100.png" /> 1079123<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_101.png" /> 1079666<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_102.png" /> 1079671<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_103.png" /> 1081381<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_104.png" /> 1084485<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_105.png" /> 1084491<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_106.png" /> 1084492<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_107.png" /> 1103890<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_108.png" /> 1109560<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_109.png" /> 1328884<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_110.png" /> 1359145<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_111.png" /> 1369547<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_112.png" /> 1374739<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_113.png" /> 1792902<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_114.png" /> 1869505<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_115.png" /> 2136388<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_116.png" /> 2186492<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_117.png" /> 2269185<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_118.png" /> 2641209<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_119.png" /> 2702963<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_120.png" /> 2702964<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_121.png" /> 2702965<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_122.png" /> 2702968<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_123.png" /> 2702969<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_124.png" /> 2702993<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_125.png" /> 2978253<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_126.png" /> 3016098<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_127.png" /> 3016099<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_128.png" /> 3016105<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_129.png" /> 3186913<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_130.png" /> 3188617<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_131.png" /> 3188619<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_132.png" /> 3812280<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_133.png" /> 3964626<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_134.png" /> 3964627<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_135.png" /> 3964812<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_136.png" /> 9419556<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_137.png" /> 9431987<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_138.png" /> 9431989<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_139.png" /> 9431990<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_140.png" /> 9431991<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_141.png" /> 9431992<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_142.png" /> 9431993<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_143.png" /> 9431994<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_144.png" /> 9690454<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_145.png" /> 9717080<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_146.png" /> 9731022<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_147.png" /> 9732835<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_148.png" /> 9732862<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_149.png" /> 9753254<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_150.png" /> 10353005<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_151.png" /> 10456675<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_152.png" /> 10478656<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_153.png" /> 10840028<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_154.png" /> 10900534<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_155.png" /> 10906517<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_156.png" /> 10985743<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_157.png" /> 11021467<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_158.png" /> 11126774<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_159.png" /> 11159816<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_160.png" /> 11176926<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_161.png" /> 11185105<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_162.png" /> 11198619<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_163.png" /> 11228193<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_164.png" /> 11240317<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_165.png" /> 11252419<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_166.png" /> 11307736<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_167.png" /> 11307768<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_168.png" /> 11317442<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_169.png" /> 11347122<br />\
    <img src="styles/legend/TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1_170.png" /> <br />' });
var format_folkeskolerv1_2 = new ol.format.GeoJSON();
var features_folkeskolerv1_2 = format_folkeskolerv1_2.readFeatures(json_folkeskolerv1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_folkeskolerv1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_folkeskolerv1_2.addFeatures(features_folkeskolerv1_2);
var lyr_folkeskolerv1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_folkeskolerv1_2, 
                style: style_folkeskolerv1_2,
                popuplayertitle: 'folkeskolerv1',
                interactive: true,
                title: '<img src="styles/legend/folkeskolerv1_2.png" /> folkeskolerv1'
            });
var format_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3 = new ol.format.GeoJSON();
var features_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3 = format_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3.readFeatures(json_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3.addFeatures(features_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3);
var lyr_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3, 
                style: style_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3,
                popuplayertitle: 'TEMA KORT forlag LOKAL PLANER 0167 HVIDOVRE KOMMUNE',
                interactive: true,
    title: 'TEMA KORT forlag LOKAL PLANER 0167 HVIDOVRE KOMMUNE<br />\
    <img src="styles/legend/TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3_0.png" /> 11367622<br />\
    <img src="styles/legend/TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3_1.png" /> 11442254<br />\
    <img src="styles/legend/TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3_2.png" /> 11461117<br />\
    <img src="styles/legend/TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3_3.png" /> 11484598<br />\
    <img src="styles/legend/TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3_4.png" /> <br />' });
var format_togstationer_4 = new ol.format.GeoJSON();
var features_togstationer_4 = format_togstationer_4.readFeatures(json_togstationer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_togstationer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_togstationer_4.addFeatures(features_togstationer_4);
var lyr_togstationer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_togstationer_4, 
                style: style_togstationer_4,
                popuplayertitle: 'togstationer',
                interactive: true,
                title: '<img src="styles/legend/togstationer_4.png" /> togstationer'
            });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1.setVisible(true);lyr_folkeskolerv1_2.setVisible(true);lyr_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3.setVisible(true);lyr_togstationer_4.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1,lyr_folkeskolerv1_2,lyr_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3,lyr_togstationer_4];
lyr_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1.set('fieldAliases', {'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_folkeskolerv1_2.set('fieldAliases', {'skolenavn': 'skolenavn', 'adresse': 'adresse', 'by': 'by', 'hejmmeside': 'hejmmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3.set('fieldAliases', {'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_togstationer_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1.set('fieldImages', {'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_folkeskolerv1_2.set('fieldImages', {'skolenavn': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'hejmmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3.set('fieldImages', {'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_togstationer_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_TEMAKORTLOKALPLANER0167HVIDOVREKOMMUNE_1.set('fieldLabels', {'planid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_folkeskolerv1_2.set('fieldLabels', {'skolenavn': 'hidden field', 'adresse': 'inline label - always visible', 'by': 'inline label - always visible', 'hejmmeside': 'inline label - always visible', });
lyr_TEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_3.set('fieldLabels', {'planid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_togstationer_4.set('fieldLabels', {'Name': 'header label - always visible', });
lyr_togstationer_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});