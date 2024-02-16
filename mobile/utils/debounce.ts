export const debounce = <F extends (...args: any[]) => void>(func: F, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: Parameters<F>): void => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };