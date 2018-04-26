import {expect} from 'chai';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should say Hello World", (done) => {
    JSDOM.fromFile("./src/index.html").then(dom => {
      const h1 = dom.window.document.body.getElementsByTagName("h1")[0];
      expect(h1.innerHTML).to.equal("Users");
      done();
      dom.window.close();
    } ).catch(done);
  });
});
