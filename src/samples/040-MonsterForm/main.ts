import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {MonsterEditComponent} from './monster-edit.component';

@Component({
    selector: 'app',
    template: `
    <monster-edit></monster-edit>
    `,
    directives: [MonsterEditComponent]
})
class App {}

bootstrap(App);
