import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TooltipConfig, TooltipModule } from 'ngx-bootstrap/tooltip';
import { MarkdownModule, WidgetsModule } from 'ngx-widgets';

import { CommentComponent } from './comment.component';
import { SafePipeModule } from '../../pipes/safe.module';
import { WorkItemEventModule } from '../../components_ngrx/work-item-event/work-item-event.module';

@NgModule({
  declarations: [ CommentComponent],
  imports: [
    CommonModule,
    SafePipeModule,
    MarkdownModule,
    TooltipModule,
    WidgetsModule,
    WorkItemEventModule
  ],
  exports: [CommentComponent]
})
export class CommentModule { }
