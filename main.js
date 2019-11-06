function addLink() {
	let ids = $(`#number`)[0].value.split(' ');
	let wn = [], nh = [];
	/* `wnacg.org/photos-index-page-18-aid-${id}.html` */
	/* `nhentai.net/g/${id}` */
	for(let id of ids) {
		if(id.length == 5) wn.push(id);
		if(id.length == 6) nh.push(id);
	}
	let href = '', url = '';
	for(let id of wn) {
		href += `<br><a href="https://wnacg.org/photos-index-aid-${id}.html">W ${id}</a>`;
		url +=           `<br>https://wnacg.org/photos-index-aid-${id}.html`;
	}
	for(let id of nh) {
		href += `<br><a href="https://nhentai.net/g/${id}">N ${id}</a>`;
		url +=           `<br>https://nhentai.net/g/${id}`;
	}
	$(`#href_block`).append(href);
	$(`#url_block`).append(url);
	$(`#number`)[0].value = '';
}