import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioPreviewComponent } from './anuncio-preview.component';

describe('AnuncioPreviewComponent', () => {
  let component: AnuncioPreviewComponent;
  let fixture: ComponentFixture<AnuncioPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
