import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KursyWalutComponent } from './kursy-walut.component';

describe('KursyWalutComponent', () => {
  let component: KursyWalutComponent;
  let fixture: ComponentFixture<KursyWalutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KursyWalutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KursyWalutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
