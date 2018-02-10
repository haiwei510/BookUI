var indexJs = {
	getData:function(http) {
		http({
			method: 'post',
			url: 'http://localhost:8000/Duanying/test.html',
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'

			}
		}).then(function(response) {
			console.log(response.data);
			console.log(response.status);
			console.log(response.statusText);
			console.log(response.headers);
			console.log(response.config);
		});
	}
}

export default indexJs;