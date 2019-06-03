import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {ListStringsComponentComponent} from './list-strings-component.component';
import {Model} from '../../classes/model';

describe('AddComponent', () => {
    let h1: HTMLElement;
    let component: ListStringsComponentComponent;
    let fixture:   ComponentFixture<ListStringsComponentComponent>;
    let expectedStrings = [new Model("str","green","str",new Date())];
    beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [
                    ListStringsComponentComponent
                ],
            }).compileComponents();
        })
    );

    it('should create the component', () => {
        const fixture = TestBed.createComponent(ListStringsComponentComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should call resetIndex()', () => {
        const fixture = TestBed.createComponent(ListStringsComponentComponent);
        const comp = fixture.componentInstance;
        const hostElement = fixture.debugElement.nativeElement;

        fixture.detectChanges();
        comp.strings = expectedStrings;
        fixture.detectChanges();
        let currIndex:number;
        comp.resetIndex.subscribe((index) => currIndex = index);

        fixture.debugElement.query(By.css('.reset')).triggerEventHandler('click',null);
        expect(currIndex).toBe(0);
    });
    it('should call deleteIndex()', () => {
        const fixture = TestBed.createComponent(ListStringsComponentComponent);
        const comp = fixture.componentInstance;
        const hostElement = fixture.debugElement.nativeElement;

        fixture.detectChanges();
        comp.strings = expectedStrings;
        fixture.detectChanges();
        let currIndex:number;
        comp.deletIndex.subscribe((index) => currIndex = index);

        fixture.debugElement.query(By.css('.delete')).triggerEventHandler('click',null);
        expect(currIndex).toBe(0);
    });
});
