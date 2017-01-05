import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { AlmIconModule } from './../../shared-component/icon/almicon.module';
import { WorkItemBoardComponent }   from './work-item-board.component';
import { BoardRoutingModule }   from './work-item-board-routing.module';
//pipes

import { AlmFilterBoardList } from './../../pipes/alm-board-filter.pipe';
import { CountPipe } from 'ng2bln-count-pipe';


@NgModule({
  imports:      [ CommonModule, BoardRoutingModule, DragulaModule, AlmIconModule ],
  declarations: [ WorkItemBoardComponent, CountPipe , AlmFilterBoardList ],
  exports: [ WorkItemBoardComponent ]
})
export class WorkItemBoardModule { }