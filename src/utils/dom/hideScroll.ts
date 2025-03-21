export function hideScroll(isOpen: boolean): void {
    if (typeof document === 'undefined') return // SSR safety
  
    if (isOpen) {
      document.body.classList.add('!overflow-hidden');
    } else {
      document.body.classList.remove('!overflow-hidden');
    }
  }
  