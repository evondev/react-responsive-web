function isMobile() {
  if (window && window.innerWidth < 768) return true;
  return false;
}
function isTablet() {
  if (window && window.innerWidth < 1024) return true;
  return false;
}
function isTabletOnly() {
  if (window && window.innerWidth < 1024 && window.innerWidth > 767)
    return true;
  return false;
}
function isLargeTablet() {
  if (window && window.innerWidth < 1280) return true;
  return false;
}
function isLargeTabletOnly() {
  if (window && window.innerWidth < 1280 && window.innerWidth > 1023)
    return true;
  return false;
}
function isDesktop() {
  if (window && window.innerWidth > 1279) return true;
  return false;
}
function isDesktopOnly() {
  if (window && window.innerWidth > 1279 && window.innerWidth < 1440)
    return true;
  return false;
}
function isLargeDesktop() {
  if (window && window.innerWidth > 1440) return true;
  return false;
}

module.exports = {
  isMobile,
  isTablet,
  isTabletOnly,
  isLargeTablet,
  isLargeTabletOnly,
  isDesktop,
  isDesktopOnly,
  isLargeDesktop,
};
