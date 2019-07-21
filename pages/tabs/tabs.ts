
import { Component, ViewChild} from '@angular/core';
import { ContactPage } from '../contact/contact';
import { CalendarioPage } from '../calendario/calendario';
import { FollowPage } from '../follow/follow';
import { HomePage } from '../home/home';
import { BarPage } from '../bar/bar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CalendarioPage;
  tab3Root = ContactPage;
  tab4Root = FollowPage;
  tab5Root = BarPage;

  constructor() {
 
  }

   tabSelected(tab){
    localStorage.setItem('tabActual',tab);
  }


}
