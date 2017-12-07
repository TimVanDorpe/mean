import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
//app.spec.js
/*let Request = require('request');
describe("server",()=>{
let server;
beforeAll(() => {
server = require('../app');
});
describe("POST /api/employees", () => {
let data = {};
beforeAll((done)=> {
Request({
method: 'POST',
uri: 'http://localhost:4200/API/employees',
json: true,
body:{"name":"spaghetti"ø
},(error, response, body) => {
data.status = response.statusCode;
data.body = body;
done();
});
});
it("status 200",()=>{
expect(15).toBe(15);
});
});*/

});
