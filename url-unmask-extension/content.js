function isShortUrl(url) {
    // Regular expressions to match common URL shorteners
    var patterns = [
      /^https?:\/\/(bit\.ly|j\.mp|tinyurl\.com|t\.co|owl\.ly|is\.gd|goo\.gl|ow\.ly|tcrn\.ch)\//i,
      /^https?:\/\/(adf\.ly|bcvc\.in|bc\.vc|adcrun\.ch|adcrun\.ch|adfoc\.us|adfl\.y|admy\.link|adshrink\.it|advmaker\.ru|atominik\.com|bc\.vc|bit\.do|bitly\.so|ceesty\.com|chilp\.it|clickthru\.ca|coinlink\.co|cuon\.io|cut-urls\.com|cutwin\.com|dapalan\.com|fas\.st|fas\.st|fastlink\.cyou|fas\.li|fc\.lc|goc\.ro|gotravel\.ro|hideref\.org|itty\.bz|link4win\.com|linkbucks\.com|lnk\.direct|linkfly\.ga|linkpay\.bc\.vc|linkshrink\.net|linkvertise\.com|mboost\.me|miniurl\.esy\.es|minilien\.com|mylink\.zone|ouo\.io|ow\.ly|po\.st|q\.gs|q\.tl|quainator\.com|raboninco\.com|rexurl\.com|scadonsak\.com|shortad\.cf|shortly\.xyz|shortmony\.info|shortzon\.com|shrtfly\.com|shrtfly\.io|shrinkearn\.com|shrinkme\.io|shrtz\.me|shrten\.com|skipurl\.in|soo\.gd|spaste\.com|t2m\.io|tiny\.cc|tinylinks\.co|tinyzon\.com|tlu\.ru|tr\.im|trlink\.co|truvol\.com|tui\.click|url\.ie|url\.zs|urls\.hr|vid\.co|waa\.ai|wicked\.fun|youlink\.xyz|yu2\.me|za\.gl|zoom\.in|zzb\.bz)\//i
    ];
  
    // Loop through the patterns and return true if there is a match
    for (var i = 0; i < patterns.length; i++) {
      if (patterns[i].test(url)) {
        return true;
      }
    }
  
    // No match found, return false
    return false;
  }
  

document.addEventListener('copy', function(e) {
    var url = window.getSelection().toString();
    if (isShortUrl(url) == 'true') {
      chrome.runtime.sendMessage({ action: 'activate' });
    }
  });
  