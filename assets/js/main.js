$('.toggle_btns').click(function (e) {
   $('.admin_siderbarr').toggleClass('showw');
});

$('.flag-lists_in a').click(function (e) {
   $('.flag-lists_in').removeClass('active');
   $(this).parent().addClass('active');
});


var currentPath = location.pathname;
var pathSegments = currentPath.split('/');
var lastSegment = pathSegments[pathSegments.length - 1];
console.log(lastSegment);
document.querySelector(`.admin_siderbarr .sidebar-link[href="${lastSegment}"]`).classList.add('active');
$('#admin_siderbarr .sidebar-link').each(function () {
   var $this = $(this);
   if ($this.attr('href').indexOf(current) !== -1) {
      document.querySelector(`.admin_siderbarr .sidebar-link[href="${lastSegment}"]`).classList.add('active');
   }
})
