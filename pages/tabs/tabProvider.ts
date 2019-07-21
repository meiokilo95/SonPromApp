import { Injectable } from '@angular/core'

@Injectable()
export class TabsProvider{
    private tabName: any;
    constructor(){}

    setActiveTab(tab: any){
        this.tabName = tab;
    }
    getActiveTab(){
        return this.tabName;
    }
}