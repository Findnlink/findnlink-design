export const _getClassNames = (
  parent: string,
  scss: any,
  size: string | undefined,
  weight: string | undefined,
  disabled: boolean | undefined,
) => {
  let className = [parent]

  switch (size) {
    case 's':
      className.push(scss.fontS)
      break
    case 'm':
      className.push(scss.fontM)
      break
    case 'l':
      className.push(scss.fontL)
      break
    case 'xl':
      className.push(scss.fontXL)
      break
  }

  switch (weight) {
    case 'light':
      className.push(scss.weightLight)
      break
    case 'normal':
      className.push(scss.weightNormal)
      break
    case 'bold':
      className.push(scss.weightBold)
      break
  }

  if (disabled) {
    className.push(scss.disabled)
  }

  className.filter(Boolean)

  return className
}
