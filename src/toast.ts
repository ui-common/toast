export interface ToastService {
  showToast(msg: string);
}

export class ToastUtil {
  private static sysToast = null;
  static showToast(msg: string) {
    if (!ToastUtil.sysToast) {
      ToastUtil.sysToast = (window as any).sysToast;
    }
    ToastUtil.sysToast.innerHTML = msg;
    ToastUtil.fadeIn(ToastUtil.sysToast);
    setTimeout(() => {
      ToastUtil.fadeOut(ToastUtil.sysToast);
    }, 1340);
  }

  private static fadeOut(el) {
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

  private static fadeIn(el, display = null) {
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
}

class DefaultToastService {
  showToast(msg: string) {
    ToastUtil.showToast(msg);
  }
}

export const toast = new DefaultToastService();
