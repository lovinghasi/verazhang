import { Selector } from 'testcafe';
import { Utils } from './util.js'
fixture `Feature Page Tests`
	.page(Utils.baseUrl)

// Footer links
test('Gallery link', async t => {
    const galleryLink = Selector('#footer-links').child(0).child(1);

    await t.click(galleryLink)
    		.expect(Utils.getLocation()).contains(Utils.galleryPath + "/");
});

test('Blog link', async t => {
    const blogLink = Selector('#footer-links').child(0).child(2);

    await t.click(blogLink)
    		.expect(Utils.getLocation()).contains(Utils.blogPath + "/");
});

test('About link', async t => {
    const aboutLink = Selector('#footer-links').child(0).child(3);

    await t.click(aboutLink)
    		.expect(Utils.getLocation()).contains(Utils.aboutPath + "/");
});

test('Instagram link', async t => {
    const supportLink = Selector('#footer-links').child(0).child(4);

    await t.click(supportLink)
    		.expect(Utils.getLocation()).contains(Utils.instaWebPath);
});

test('Email link', async t => {
    const emailLink = Selector('#footer-links').child(0).child(5).child(0);
    await t.expect(emailLink.getAttribute('href')).contains(Utils.emailPath);
});

test('Support link', async t => {
    const supportLink = Selector('#footer-links').child(0).child(6);

    await t.click(supportLink)
    		.expect(Utils.getLocation()).contains(Utils.supportPath + "/");
});

test('Privacy link', async t => {
    const privacyLink = Selector('#footer-links').child(0).child(7);

    await t.click(privacyLink)
    		.expect(Utils.getLocation()).contains(Utils.privacyPath);
});

// Main slider
test('Right and left arrows', async t=>{
	var activeItem = Selector('.active');
	var currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art33.jpg');
	var right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art34.jpg');
	right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art35.jpg');
	right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art36.jpg');
	right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art37.jpg');
	right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art41.jpg');
	right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art42.jpg');
	right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art33.jpg');
	var left = Selector('.left');
	await t.click(left)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art42.jpg');
	left = Selector('.left');
	await t.click(left)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art41.jpg');
	left = Selector('.left');
	await t.click(left)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art37.jpg');
	left = Selector('.left');
	await t.click(left)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art36.jpg');
	left = Selector('.left');
	await t.click(left)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art35.jpg');
	left = Selector('.left');
	await t.click(left)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art34.jpg');
	left = Selector('.left');
	await t.click(left)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art33.jpg');

});

test('Click to details', async t=>{
	const currentImage = Selector('.active').child(0).child(0);
    await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art33.jpg");
	await Utils.goBack();
	const right = Selector('.right');
	await t.click(right).wait(1000);
	await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art34.jpg");
	await Utils.goBack();
	for(let i = 0; i < 2; i++) {
    	await t
	        .click(right)
	        .wait(1000)
	}
	await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art35.jpg");
	await Utils.goBack();
	for(let i = 0; i < 3; i++) {
    	await t
	        .click(right)
	        .wait(1000)
	}
	await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art36.jpg");
	await Utils.goBack();
	for(let i = 0; i < 4; i++) {
    	await t
	        .click(right)
	        .wait(1000)
	}
	await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art37.jpg");
	await Utils.goBack();
	for(let i = 0; i < 5; i++) {
    	await t
	        .click(right)
	        .wait(1000)
	}
	await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art41.jpg");
	await Utils.goBack();
	for(let i = 0; i < 6; i++) {
    	await t
	        .click(right)
	        .wait(1000)
	}
	await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art42.jpg");
});



