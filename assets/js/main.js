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
const acceptAlert = () => {
   Swal.fire({
      position: "top-center",
      icon: "success",
      title: "User Accepted",
      showConfirmButton: false,
      timer: 1500
   });
}
const DeclinedAlert = () => {
   Swal.fire({
      title: "Give a Reason To Reject User",
      input: "text",
      inputAttributes: {
         autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Rejected",
      showLoaderOnConfirm: true,
   }).then((result) => {
      if (result.isConfirmed) {
         Swal.fire({
            title: `User Is Rejected`,
            imageUrl: result.value.avatar_url
         });
      }
   });
}
$(document).ready(function ($) {
   $('.select-dropdown__button').click(function () {
      $('.select-dropdown__list').removeClass('d-block');
      $(this).siblings('.select-dropdown__list').toggleClass('d-block');
   });
   $(document).click(function (e) {
      if (!$(e.target).closest('.select-dropdown').length) {
         $('.select-dropdown__list').removeClass('d-block');
      }
   });
   $('.select-dropdown__list a').click(function () {
      $(this).closest('.select-dropdown__list').removeClass('d-block');
   });
});