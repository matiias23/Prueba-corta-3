import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/app/_interfaces/member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styles: [],
})
export class MemberEditComponent implements OnInit {
  members: Member[] = [];
  editForm: FormGroup = new FormGroup({});

  constructor(private memberService: MemberService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.editForm = this.fb.group({
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
  

  editClient(): void {
    const values = {...this.editForm.value};

    this.memberService.editMember(values).subscribe({
      next: () => {
        this.router.navigateByUrl('/members').then(() =>
          console.log("exito")
        );
      },
      error: error => {
       console.log("error para editar");
      }
    });
  }
}
