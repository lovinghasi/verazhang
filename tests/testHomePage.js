import { Selector } from 'testcafe';
import { Utils } from './util.js'
fixture `Home Page Tests`
	.page(Utils.baseUrl)

// Footer links
test('Gallery link', async t => {
    const galleryLink = Selector('#footer-links').child(0).child(1);

    await t.click(galleryLink)
    		.expect(Utils.getLocation()).contains(Utils.galleryPath + "/");
});

test('News link', async t => {
    const blogLink = Selector('#footer-links').child(0).child(2);

    await t.click(blogLink)
    		.expect(Utils.getLocation()).contains(Utils.newsPath + "/");
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
test('Assert resources', async t=>{
	 const status1 = await Utils.getRequestResult("gallery/images/art46.jpg");
	 await t.expect(status1).eql(200);
	 const status2 = await Utils.getRequestResult("gallery/images/art47.jpg");
	 await t.expect(status2).eql(200);
	 const status3 = await Utils.getRequestResult("gallery/images/art48.jpg");
	 await t.expect(status3).eql(200);
});

test('Right and left arrows', async t=>{
	var activeItem = Selector('.active');
	var currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art46.jpg');
	var right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art47.jpg');
	right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art48.jpg');
	right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art46.jpg');
	var left = Selector('.left');
	await t.click(left).wait(1000);
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art48.jpg');
	left = Selector('.left');
	await t.click(left).wait(1000);
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art47.jpg');
	left = Selector('.left');
	await t.click(left).wait(1000);
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art46.jpg');
});

test('Click to details', async t=>{
	const currentImage = Selector('.active').child(0).child(0);
    await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art46.jpg");
	await Utils.goBack();
	const right = Selector('.right');
	await t.click(right).wait(1000);
	await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art47.jpg");
	await Utils.goBack();
	for(let i = 0; i < 2; i++) {
    	await t
	        .click(right)
	        .wait(1000)
	}
	await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art48.jpg");
});



