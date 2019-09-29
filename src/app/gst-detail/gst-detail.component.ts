import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-detail',
  templateUrl: './gst-detail.component.html',
  styleUrls: ['./gst-detail.component.css']
})
export class GstDetailComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
      this.createForm(); 
    }
    createForm() {
      this.angForm = this.fb.group({
          person_name: ['', Validators.required ],
          business_name: ['', Validators.required ],
          business_gst_number: ['', Validators.required ]
        });
      }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.business = res;
    });
  });
  }

}
