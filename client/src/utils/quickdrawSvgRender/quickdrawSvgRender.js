const quickdrawSvgRender = (drawing, viewBoxWidth, viewBoxHeight) => {

  const width = viewBoxWidth;
  const height = viewBoxHeight;

  let svg = '';
  svg += ('<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"' + ` height="${height}" width="${width}" viewBox="0 0 ${height} ${width}"` + '>')

  drawing.forEach(function (loops) {
    svg += ('<path d="')
    svg += ('M ' + loops[0][0] + ' ' + loops[1][0])

    for (let i = 1; i < loops[0].length; i++) {
      svg += (' L ' + loops[0][i] + ' ' + loops[1][i])
    }

    svg += ('" strokeWidth="3" stroke="black" fill="none"></path>')
  })

  svg += ('</svg>')

  return svg
}

export default quickdrawSvgRender;