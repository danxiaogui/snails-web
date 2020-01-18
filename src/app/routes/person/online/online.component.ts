import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'snails-person-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnlineComponent implements OnInit {

  data: any[] = [];
  dataOnLoading = false;

  constructor(private router: Router,
              private http: _HttpClient,
              private module: NzModalService,
              private message: NzMessageService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.dataOnLoading = true;

    this.http.post('/person/online').subscribe((res: any) => {

      this.dataOnLoading = false;
      this.data = res.data;
      this.cdr.detectChanges();

    }, error => {
      this.dataOnLoading = false;
    });
  }

}