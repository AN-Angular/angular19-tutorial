import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { GetSetInputValueComponent } from './get-set-input-value/get-set-input-value.component';
import { IfElseConditionsComponent } from './if-else-conditions/if-else-conditions.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { SignalsComponent } from './signals/signals.component';
import { DatatypeSignalsComponent } from './datatype-signals/datatype-signals.component';
import { ComputedSignalsComponent } from './computed-signals/computed-signals.component';
import { EffectsComponent } from './effects/effects.component';
import { FlContextualVariablesComponent } from './fl-contextual-variables/fl-contextual-variables.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { SBTwowayBindingComponent } from './sb-twoway-binding/sb-twoway-binding.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DynamicStylingComponent } from './dynamic-styling/dynamic-styling.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { PdParentToChildComponent } from './pd-parent-to-child/pd-parent-to-child.component';
import { PdChildToParentComponent } from './pd-child-to-parent/pd-child-to-parent.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';

@Component({
  selector: 'app-root',
  imports: [
    LoginComponent,
    ProfileComponent,
    GetSetInputValueComponent,
    IfElseConditionsComponent,
    SwitchCaseComponent,
    ForLoopComponent,
    SignalsComponent,
    DatatypeSignalsComponent,
    ComputedSignalsComponent,
    EffectsComponent,
    FlContextualVariablesComponent,
    TwowayBindingComponent,
    SBTwowayBindingComponent,
    TodoListComponent,
    DynamicStylingComponent,
    DirectivesDemoComponent,
    RoutingDemoComponent,
    HeaderComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormComponent,
    PdParentToChildComponent,
    PdChildToParentComponent,
    PipesDemoComponent,
    CustomPipesComponent,
    LifecycleHooksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-19-tutorial'; // property

  name = 'Arjun Naik'; // string
  data: number = 10; // number

  mutipleData: number | string = 10; // number | string

  // for binding signal based two way binding for childs component (sb-twoway-binding)
  counterValue = 0; // number

  checkData() {
    let x: number | string = 10;
    console.log(x);
  }


  handleUsers(users: string[]) {
    console.log("Dispalying users in Parent", users);
  } // method
}
