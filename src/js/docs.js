$(function() {
  let localStorage = window.localStorage;

  let currentProduct = '';
  let currentVersion = '';
  let currentDoc = '';
  let parsedUrl = new URL(window.location.href);

  // Are we on the docs home page?
  if (parsedUrl.pathname.length > 2) {
    // If not, expand parsed product.
    currentProduct = parsedUrl.pathname.split('/')[2];

    $('#' + currentProduct + 'Docs').collapse('show');
  }

  // SIDEBAR

  // Sidebar event handling.
  $('#docsSidebarToggle').click(function(event) {
    if ($('#docsSidebar').css('position') === 'absolute') {
      $('#docsSidebar').toggleClass('open');
    }
  });

  // VERSIONING
  
  console.log('Current Product:');
  console.log(currentProduct);
  console.log('Current Version:');
  console.log(currentVersion);

  // Version Select Box
  let $versionSelect = $('#version');
  $versionSelect.on('change', () => handleVersionChange());

  function handleVersionChange() {
    let selectedVersion = $versionSelect.val();

    // Has a new version been selected?
    if (selectedVersion !== currentVersion) {
      // Store the newly selected version number.
      localStorage.setItem('truffleDocs' + currentProduct.charAt(0).toUpperCase() + 'Version', selectedVersion);

      // Redirect to the appropriate page.
      window.location.replace(window.location.protocol + '//' + window.location.hostname + '/docs/' + currentProduct + '/' + selectedVersion + '/quickstart');
    }
  };
});