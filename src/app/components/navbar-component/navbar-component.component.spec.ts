import {async, TestBed} from '@angular/core/testing';
import {NavbarComponentComponent} from './navbar-component.component';
import {SettingComponentComponent} from '../setting-component/setting-component.component';
import {FormsModule} from '@angular/forms';

describe("navbar-component", () => {
    let fixture;
    let comp;
    beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [FormsModule],
                declarations: [
                    NavbarComponentComponent,
                    SettingComponentComponent
                ],
            }).compileComponents();
        })
    );
    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponentComponent);
        comp = fixture.componentInstance;
    });
    it("starting settings", () => {
        expect(comp.getUserName()).toBe('');
        expect(comp.getSettingDisplay()).toBe(false);
    });
    it("display", () => {
        expect(comp.getSettingDisplay()).toBe(false);

        comp.display();

        expect(comp.getSettingDisplay()).toBe(true);
    });
    it("close()", () => {
        comp.display();
        comp.close();

        expect(comp.getSettingDisplay()).toBe(false);
    });
    it("should change userName", () => {
        comp.onUserNameChange("Ksu");

        expect(comp.getUserName()).toBe("Ksu");
    })
});
