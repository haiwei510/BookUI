import axios from 'axios';

const install = function(Vue){
	Object.defineProperty(Vue.prototype, '$axios', { value: axios });
}

export default install;