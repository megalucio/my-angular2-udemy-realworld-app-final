import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
@Component({
    selector:'pagination',
    template:`
        <nav *ngIf="pages.length > 1" aria-label="Page navigation">
        <ul class="pagination">
            <li [class.disabled]="currentPage == 1" (click)="onPageChanges(currentPage-1)">
            <a aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
            </li>

            <li [class.active]="currentPage == page" *ngFor="let page of pages">
                <a (click)="onPageChanges(page)">{{page}}</a>
            </li>

           <li [class.disabled]="currentPage == pages.length" (click)="onPageChanges(currentPage+1)" >
            <a aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
            </a>
            </li>
        </ul>
        </nav>
    `
})
export class PaginationComponent implements OnChanges { 
    
    @Input()
    items = [];

    @Input('page-size')
    pageSize = 10;

    @Output('page-changes')
    pageChanges = new EventEmitter();

    pages;
    currentPage = 1;

    ngOnChanges(){

        let pagesCount = this.items.length / this.pageSize;

        this.pages = [];
 		for (var i = 1; i <= pagesCount; i++)
 			this.pages.push(i);
    }

    onPageChanges(page){

        if(page == 0)
            return;
        if(page > this.pages.length)
            return;

        this.currentPage = page;
        this.pageChanges.emit(page);
    }

    

}