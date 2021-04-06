let inlinePaddingRight: number | string = 0
let inlineOverflowY: number | string = 0
let isScrollbarHidden = false

export function hidePageScrollbar(): void {
  if (isScrollbarHidden) {
    return
  }

  isScrollbarHidden = true

  inlinePaddingRight = document.body.style.paddingRight
  inlineOverflowY = document.body.style.overflowY

  const paddingRight = parseFloat(getComputedStyle(document.body).paddingRight)

  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth

  document.body.style.paddingRight = `${paddingRight + scrollbarWidth}px`
  document.body.style.overflowY = 'hidden'
}

export function showPageScrollbar(): void {
  if (!isScrollbarHidden) {
    return
  }

  isScrollbarHidden = false

  // @ts-ignore
  document.body.style.paddingRight =
    inlinePaddingRight === '' ? null : inlinePaddingRight
  // @ts-ignore
  document.body.style.overflowY =
    inlineOverflowY === '' ? null : inlineOverflowY
}
