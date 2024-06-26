import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/app/_interfaces/member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styles: [],
})
export class MemberCreateComponent implements OnInit {
  members: Member[] = [];
  createForm: FormGroup = new FormGroup({});

  constructor(private memberService: MemberService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.createForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)]
      ],
      email: ['', [
        Validators.required,
        Validators.email
        ]
      ],
      semester: ['', [
        Validators.required,
      ]
      ],
      career: ['', [
        Validators.required,
       ]
      ],
    })
  }

  createClient(): void {
    const values = {...this.createForm.value};

    this.memberService.createMember(values).subscribe({
      next: () => {
        this.router.navigateByUrl('/members').then(() =>
          console.log("exito")
        );
      },
      error: error => {
       console.log("error para agregar");
      }
    });
  }
}
