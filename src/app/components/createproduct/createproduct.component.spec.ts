import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CreateproductComponent } from './createproduct.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
describe('CreateproductComponent', () => {
  let component: CreateproductComponent;
  let fixture: ComponentFixture<CreateproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule],
      declarations: [CreateproductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
