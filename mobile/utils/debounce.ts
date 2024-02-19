type Func = (...args: any[]) => void;

function debounce(func: Func, wait: number): Func {
	let timer: ReturnType<typeof setTimeout> | null = null;

	return function(this: any, ...args: any[]) {
		clearTimeout(timer!);
		timer = setTimeout(() => func.apply(this, args), wait);
	};
}

export default debounce