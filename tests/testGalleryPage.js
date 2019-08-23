import { Selector } from 'testcafe';
import { Utils } from './util.js'
fixture `Gallery Page Tests`
	.page(Utils.stripTrailingSlash(Utils.baseUrl) + "/" + Utils.galleryPath + "/")

test('Home link', async t=>{
    const link = Selector('#footer-links').child(0).child(0);
    await t.click(link)
    		.expect(Utils.getLocation()).contains(Utils.baseUrl);
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

test('Support link', async t=>{
    const link = Selector('#footer-links').child(0).child(6);
    await t.click(link)
    		.expect(Utils.getLocation()).contains(Utils.supportPath + "/");
});

test('Privacy link', async t=>{
    const link = Selector('#footer-links').child(0).child(7);
    await t.click(link)
    		.expect(Utils.getLocation()).contains(Utils.privacyPath);
});