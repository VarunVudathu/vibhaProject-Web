import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoldTextBoxComponent } from './goldtextbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        GoldTextBoxComponent
    ],
    exports: [GoldTextBoxComponent],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [GoldTextBoxComponent]
})
export class GoldTextBoxModule {}