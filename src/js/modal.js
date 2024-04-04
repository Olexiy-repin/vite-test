import * as basicLightbox from 'basiclightbox';

const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`);

console.log(instance);

instance.show();
