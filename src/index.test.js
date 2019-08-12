import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe("our first test", () => {
    it("should pass", () => {
        expect(true).to.equal(true)
    })
})

describe('index.html', () => {
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementById('title');
            expect(h1.innerHTML).to.equal("Hello, SkeletonJS")
            done()
            window.close()
        })
    })
})
