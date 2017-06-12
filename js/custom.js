// SCRIPT MAPEADO Y HIGHLIGHT DE IMAGENES
$('img[usemap]').rwdImageMaps();
// SCRIPT MAPEADO Y HIGHLIGHT DE IMAGENES
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
$('img[usemap]').rwdImageMaps();
});
// SCRIPT ESCALADO CONTENEDORES
$( window ).load(function() {
$(this).trigger('resize');
});
// APAGAR VIDEOS AL CAMBIO DE PESTAÑA
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
var iframe;
var src;
var video;
var src_video;
iframe = $(e.relatedTarget.hash).find('iframe'); 
src = iframe.attr('src');
iframe.attr('src', '');
iframe.attr('src', src);
video = $(e.relatedTarget.hash).find('video'); 
src_video = video.attr('src');
video.attr('src', '');
video.attr('src', src_video);
});