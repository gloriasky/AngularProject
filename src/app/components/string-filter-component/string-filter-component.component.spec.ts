import {async, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {StringFilterComponentComponent} from './string-filter-component.component';
import {Model} from '../../classes/model';
import {FormsModule} from '@angular/forms';

describe("string-filter-component",() => {
    let expectedColors = ['green', 'yellow', 'red'];
    beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports:[FormsModule],
                declarations: [
                    StringFilterComponentComponent
                ],
            }).compileComponents();
        })
    );

    it("should call onFilterObjChange()", () => {
        const fixture = TestBed.createComponent(StringFilterComponentComponent);
        const comp = fixture.componentInstance;
        const hostElement = fixture.debugElement.nativeElement;
        comp.colors = expectedColors;
        fixture.detectChanges();
        const strInput = hostElement.querySelector("input");
        strInput.value = 'test';
        strInput.dispatchEvent(new Event('input'));
        const opt = hostElement.querySelector("select");
        opt.selectedIndex = 1;
        opt.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        let currFilter: Model;
        comp.onFilterObjChange.subscribe((newFilter) => currFilter = newFilter);

        fixture.debugElement.query(By.css('.submitFilter')).triggerEventHandler('click',null);
        expect(currFilter).toEqual(new Model('test', 'green', null, null));
    });

    it("should call onFilterObjChange() from resetting the filter", () => {
        const fixture = TestBed.createComponent(StringFilterComponentComponent);
        const comp = fixture.componentInstance;
        const hostElement = fixture.debugElement.nativeElement;

        fixture.detectChanges();

        let currFilter: Model;
        comp.onFilterObjChange.subscribe((newFilter) => currFilter = newFilter);

        fixture.debugElement.query(By.css('.resetFilter')).triggerEventHandler('click',null);
        expect(currFilter).toEqual(new Model('', '', null, null));
    })
});
