import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeaderNavComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ],

      imports:[RouterTestingModule],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
