// tslint:disable-next-line:class-name
export class resource {
  static toast: HTMLElement;
}

export function fadeIn(el: any, display?: string): void {
  el.style.opacity = 0;
  el.style.display = display || 'block';

  (function fade() {
    let val = parseFloat(el.style.opacity);
    val += .1;
    if (!(val > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

export function fadeOut(el: any): void {
  el.style.opacity = 1;
  (function fade() {
    const k = (el.style.opacity -= .1);
    if (k < 0) {
      el.style.display = 'none';
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

export function toast(msg: string): void {
  if (!resource.toast) {
    resource.toast = (window as any).sysToast;
  }
  resource.toast.innerHTML = msg;
  fadeIn(resource.toast);
  setTimeout(() => {
    fadeOut(resource.toast);
  }, 1340);
}
