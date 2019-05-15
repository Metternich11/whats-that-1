const DeviceDetector = () => {
  return {
    userAgent: () => navigator.userAgent || navigator.vendor || window.opera,
    isIOS: () => {
      return /iPad|iPhone|iPod/.test(this.userAgent()) && !window.MSStream
    },
    isAndroid: () => {
      return /android/i.test(this.userAgent())
    }
  }
}

export default DeviceDetector;