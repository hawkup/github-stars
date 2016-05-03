import {
  it,
  injectAsync,
  TestComponentBuilder,
  ComponentFixture
} from 'angular2/testing';

import {AppComponent} from './app.component';

describe('App Component', () => {
  it('should display "My First Angular2 App"', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(AppComponent).then((componentFixture: ComponentFixture) => {
      const element = componentFixture.nativeElement;
      expect(element.querySelector('h1').innerHTML).toBe('My First Angular2 App');
    });
  }));
});
