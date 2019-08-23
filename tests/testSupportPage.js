import { Selector } from 'testcafe';
import { Utils } from './util.js'
fixture `Support Page Tests`
	.page(Utils.stripTrailingSlash(Utils.baseUrl) + "/" + Utils.supportPath + "/")

test('Home link', async t=>{
    const link = Selector('#footer-links').child(0).child(0);
    await t.click(link)
    		.expect(Utils.getLocation()).contains(Utils.baseUrl);
});

test('Gallery link', async t => {
    const galleryLink = Selector('#footer-links').child(0).child(1);

    await t.click(galleryLink)
            .expect(Utils.getLocation()).contains(Utils.galleryPath + "/");
});

test('News link', async t=>{
    const link = Selector('#footer-links').child(0).child(2);
    await t.click(link)
            .expect(Utils.getLocation()).contains(Utils.newsPath + '/');
});

test('About link', async t=>{
    const link = Selector('#footer-links').child(0).child(3);
    await t.click(link)
            .expect(Utils.getLocation()).contains(Utils.aboutPath + '/');
});

test('Insta link', async t=>{
    const link = Selector('#footer-links').child(0).child(4);
    await t.click(link)
    		.expect(Utils.getLocation()).contains(Utils.instaWebPath);
});

test('Email link', async t=>{
    const link = Selector('#footer-links').child(0).child(5).child(0);
    await t.expect(link.getAttribute('href')).eql(Utils.emailPath);
});


test('Privacy link', async t=>{
    const link = Selector('#footer-links').child(0).child(7);
    await t.click(link)
    		.expect(Utils.getLocation()).contains(Utils.privacyPath);
});