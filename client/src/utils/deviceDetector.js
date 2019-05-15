const DeviceDetector = {
  userAgent: () => navigator.userAgent || navigator.vendor || window.opera,
  isIOS: function() {
    return /iPad|iPhone|iPod/.test(this.userAgent()) && !window.MSStream;
  },
  isAndroid: function() {
    return /android/i.test(this.userAgent());
  }
};

export default DeviceDetector;
