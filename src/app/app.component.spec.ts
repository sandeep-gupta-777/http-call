import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NgxsModule} from '@ngxs/store';
import {VersionStateReducer} from './state/app.state';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([VersionStateReducer])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-test');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-test!');
  });
});

describe('render', () => {
  const favoriteMoviesToUse = [
    { title: 'Interstellar' },
    { title: 'The big Lebowski' },
    { title: 'Fences' }
  ];
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([VersionStateReducer])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.debugElement.componentInstance.movies = favoriteMoviesToUse;
  }));

  it('should show all the movies', () => {
    fixture.debugElement.componentInstance.movies = favoriteMoviesToUse;
    fixture.detectChanges();
    const movieElement = fixture.debugElement.queryAll(By.css('.movie')).length;
    console.log(fixture.debugElement);
    console.log(fixture.debugElement.queryAll(By.css('.movie')));
    expect(movieElement).toEqual(favoriteMoviesToUse.length);
  });

  it(`should contain movie title'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const movieElements = fixture.debugElement.queryAll(By.css('.movie'));
    movieElements.forEach((movieElement: DebugElement, index)=>{
      expect(movieElement.nativeElement.innerHTML).toContain(favoriteMoviesToUse[index].title);
    })
  });
});
