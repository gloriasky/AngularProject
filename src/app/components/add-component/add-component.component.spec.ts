import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AddComponentComponent} from './add-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('AddComponent', () => {
    let h1: HTMLElement;
    let component: AddComponentComponent;
    let fixture:   ComponentFixture<AddComponentComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule],
            declarations: [
                AddComponentComponent
            ],
        }).compileComponents();
    })
    );

    it('should create the component', () => {
        const fixture = TestBed.createComponent(AddComponentComponent);
        const app = fixture.debugElement.componentInstance;
        h1 = fixture.nativeElement.querySelector('label');
        expect(h1.textContent).toContain("Your string: ");
    });

    it('should call addString()', () => {
        const fixture = TestBed.createComponent(AddComponentComponent);
        const comp = fixture.componentInstance;
        const hostElement = fixture.debugElement.nativeElement;
        const form = hostElement.querySelector("form");
        const strInput = hostElement.querySelector("input");
        const button = hostElement.querySelector('button');
        fixture.detectChanges();
        strInput.value = 'test345';
        strInput.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        let str:string;
        comp.onAdd.subscribe((userStr) => str = userStr.userStr);

        button.click();
        expect(str).toBe('test345');
    });
});
