/**
 * Cloudflare Email Decoder
 * Decodes protected email addresses encoded by Cloudflare
 * Usage: Automatically decodes any links with data-cfemail attribute
 */
(function() {
  function decodeEmail(encoded) {
    var key = parseInt(encoded.substr(0, 2), 16);
    var string = encoded.substr(2);
    var email = '';
    for (var i = 0; i < string.length; i += 2) {
      email += String.fromCharCode(parseInt(string.substr(i, 2), 16) ^ key);
    }
    return email;
  }

  function decodeEmails() {
    var links = document.querySelectorAll('a[href*="/cdn-cgi/l/email-protection#"], a[data-cfemail]');
    links.forEach(function(link) {
      var href = link.getAttribute('href');
      var dataEmail = link.getAttribute('data-cfemail');
      
      if (dataEmail) {
        var email = decodeEmail(dataEmail);
        link.setAttribute('href', 'mailto:' + email);
        if (link.textContent.includes('email-protection')) {
          link.textContent = email;
        }
      } else if (href && href.includes('/cdn-cgi/l/email-protection#')) {
        var encoded = href.split('#')[1];
        if (encoded) {
          var email = decodeEmail(encoded);
          link.setAttribute('href', 'mailto:' + email);
          if (link.textContent.includes('email-protection')) {
            link.textContent = email;
          }
        }
      }
    });
  }

  // Decode on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', decodeEmails);
  } else {
    decodeEmails();
  }

  // Also watch for dynamically added content
  if (window.MutationObserver) {
    var observer = new MutationObserver(function(mutations) {
      decodeEmails();
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
})();
