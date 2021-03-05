import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-gcarrier',
  templateUrl: './gcarrier.component.html',
  styleUrls: ['./gcarrier.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class GcarrierComponent implements OnInit {
  urls = [];
  Vurls = [];
  checked = false;
  isLinear = false;
  percent: string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  sevenFormGroup: FormGroup;
  historyForm: FormGroup;
  birthForm: FormGroup;
  householdForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      explain: ['', Validators.required]
    });
    this.historyForm = this._formBuilder.group({
      list_historys: this._formBuilder.array([this.initListHitorys()], Validators.required),
    });
    this.secondFormGroup = this._formBuilder.group({
      alcohol_used: ['', Validators.required],
      alcohol_last: ['', Validators.required],
      alcohol_frequent: ['', Validators.required],
      alcohol_quit: ['', Validators.required],
      Nicotine_used: ['', Validators.required],
      Nicotine_last: ['', Validators.required],
      Nicotine_frequent: ['', Validators.required],
      Nicotine_quit: ['', Validators.required],
      Marijuana_used: ['', Validators.required],
      Marijuana_last: ['', Validators.required],
      Marijuana_frequent: ['', Validators.required],
      Marijuana_quit: ['', Validators.required],
      Anxiety_used: ['', Validators.required],
      Anxiety_last: ['', Validators.required],
      Anxiety_frequent: ['', Validators.required],
      Anxiety_quit: ['', Validators.required],
      Amphetamines_used: ['', Validators.required],
      Amphetamines_last: ['', Validators.required],
      Amphetamines_frequent: ['', Validators.required],
      Amphetamines_quit: ['', Validators.required],
      Barbiturates_used: ['', Validators.required],
      Barbiturates_last: ['', Validators.required],
      Barbiturates_frequent: ['', Validators.required],
      Barbiturates_quit: ['', Validators.required],
      Cocaine_used: ['', Validators.required],
      Cocaine_last: ['', Validators.required],
      Cocaine_frequent: ['', Validators.required],
      Cocaine_quit: ['', Validators.required],
      Hallucinogens_used: ['', Validators.required],
      Hallucinogens_last: ['', Validators.required],
      Hallucinogens_frequent: ['', Validators.required],
      Hallucinogens_quit: ['', Validators.required],
      Heroin_used: ['', Validators.required],
      Heroin_last: ['', Validators.required],
      Heroin_frequent: ['', Validators.required],
      Heroin_quit: ['', Validators.required],
      LSD_used: ['', Validators.required],
      LSD_last: ['', Validators.required],
      LSD_frequent: ['', Validators.required],
      LSD_quit: ['', Validators.required],
      Narcotics_used: ['', Validators.required],
      Narcotics_last: ['', Validators.required],
      Narcotics_frequent: ['', Validators.required],
      Narcotics_quit: ['', Validators.required],
      Opiates_used: ['', Validators.required],
      Opiates_last: ['', Validators.required],
      Opiates_frequent: ['', Validators.required],
      Opiates_quit: ['', Validators.required],
      PCP_used: ['', Validators.required],
      PCP_last: ['', Validators.required],
      PCP_frequent: ['', Validators.required],
      PCP_quit: ['', Validators.required],
      explain2: [''],
    });
    this.thirdFormGroup = this._formBuilder.group({
      explain3: [''],
      latest_date: ['', Validators.required],
      latest_result: ['', Validators.required],
      latest_notes: ['', Validators.required],
      latest2_date: ['', Validators.required],
      latest2_result: ['', Validators.required],
      latest2_notes: ['', Validators.required],
      N_A_treatment: ['', Validators.required],
      Ovarian_treatment: ['', Validators.required],
      Fibroid_treatment: ['', Validators.required],
      Salpingectomy_treatment: ['', Validators.required],
      Oophorectomy_treatment: ['', Validators.required],
      Others_treatment: ['', Validators.required],
      Genital_you: ['', Validators.required],
      Genital_Partner: ['', Validators.required],
      Genital_both: ['', Validators.required],
      Genital_neither: ['', Validators.required],
      B_you: ['', Validators.required],
      B_Partner: ['', Validators.required],
      B_both: ['', Validators.required],
      B_neither: ['', Validators.required],
      C_you: ['', Validators.required],
      C_Partner: ['', Validators.required],
      C_both: ['', Validators.required],
      C_neither: ['', Validators.required],
      Herpes_you: ['', Validators.required],
      Herpes_Partner: ['', Validators.required],
      Herpes_both: ['', Validators.required],
      Herpes_neither: ['', Validators.required],
      HIV_you: ['', Validators.required],
      HIV_Partner: ['', Validators.required],
      HIV_both: ['', Validators.required],
      HIV_neither: ['', Validators.required],
      HPV_you: ['', Validators.required],
      HPV_Partner: ['', Validators.required],
      HPV_both: ['', Validators.required],
      HPV_neither: ['', Validators.required],
      Syphilis_you: ['', Validators.required],
      Syphilis_Partner: ['', Validators.required],
      Syphilis_both: ['', Validators.required],
      Syphilis_neither: ['', Validators.required],
      Trichomonas_you: ['', Validators.required],
      Trichomonas_Partner: ['', Validators.required],
      Trichomonas_both: ['', Validators.required],
      Trichomonas_neither: ['', Validators.required],
      Chlamydia_you: ['', Validators.required],
      Chlamydia_Partner: ['', Validators.required],
      Chlamydia_both: ['', Validators.required],
      Chlamydia_neither: ['', Validators.required],
      Gonorrhea_you: ['', Validators.required],
      Gonorrhea_Partner: ['', Validators.required],
      Gonorrhea_both: ['', Validators.required],
      Gonorrhea_neither: ['', Validators.required]
    });
    this.birthForm = this._formBuilder.group({
      list_births: this._formBuilder.array([this.initListBirths()], Validators.required),
    });
    this.forthFormGroup = this._formBuilder.group({
      explain4: [''],
      yourself_Relationship: ['', Validators.required],
      yourself_Name: ['', Validators.required],
      yourself_Age: ['', Validators.required],
      yourself_Occupation: ['', Validators.required],
      yourself_Demeaner: ['', Validators.required],
      yourself_Social: ['', Validators.required],
      yourself_felony: ['', Validators.required],
      h1_Relationship: ['', Validators.required],
      h1_Name: ['', Validators.required],
      h1_Age: ['', Validators.required],
      h1_Occupation: ['', Validators.required],
      h1_Demeaner: ['', Validators.required],
      h1_Social: ['', Validators.required],
      h1_felony: ['', Validators.required],
      h2_Relationship: ['', Validators.required],
      h2_Name: ['', Validators.required],
      h2_Age: ['', Validators.required],
      h2_Occupation: ['', Validators.required],
      h2_Demeaner: ['', Validators.required],
      h2_Social: ['', Validators.required],
      h2_felony: ['', Validators.required],
      h3_Relationship: ['', Validators.required],
      h3_Name: ['', Validators.required],
      h3_Age: ['', Validators.required],
      h3_Occupation: ['', Validators.required],
      h3_Demeaner: ['', Validators.required],
      h3_Social: ['', Validators.required],
      h3_felony: ['', Validators.required],
      h4_Relationship: ['', Validators.required],
      h4_Name: ['', Validators.required],
      h4_Age: ['', Validators.required],
      h4_Occupation: ['', Validators.required],
      h4_Demeaner: ['', Validators.required],
      h4_Social: ['', Validators.required],
      h4_felony: ['', Validators.required]
    });
    this.householdForm = this._formBuilder.group({
      list_households: this._formBuilder.array([this.initListHouseholds()], Validators.required),
    });
    this.fifthFormGroup = this._formBuilder.group({
      inspired: ['', Validators.required],
      intended: ['', Validators.required],
      license: ['', Validators.required],
      appointments: ['', Validators.required],
      residences: ['', Validators.required],
      relationship: ['', Validators.required],
      long: ['', Validators.required],
      marital: ['', Validators.required],
      legal: ['', Validators.required],
      restraining: ['', Validators.required],
      filling: ['', Validators.required],
      name: ['', Validators.required],
      maiden: ['', Validators.required],
      partner: ['', Validators.required],
      explain5: ['']
    });
    this.sixthFormGroup = this._formBuilder.group({
      imageUrl: ['', Validators.required]
    });
    this.sevenFormGroup = this._formBuilder.group({
      agree: ['', Validators.required],
      check: [false, Validators.required]
    });
  }

  selectPhotos(event: any) {
    if (event.target.files) {
      for (var i = 0; i < File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        }
      }
    }
  }

  selectVideos(event: any) {
    if (event.target.files) {
      for (var i = 0; i < File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.Vurls.push(event.target.result);
        }
      }
    }
  }

  initListHitorys () {
    return this._formBuilder.group({
      history: ['', Validators.required],
      delivery_date: ['', Validators.required],
      delivery_method: ['', Validators.required],
      outcome: ['', Validators.required],
      Surrogacy_Pregnancy: ['', Validators.required],
      Pregnancy_Weeks: ['', Validators.required],
      Newborn_weight: ['', Validators.required],
      Pregnancy_Medical: ['', Validators.required],
      Severe_Pregnancy: ['', Validators.required],
      Treatment_applied: ['', Validators.required],
      Treatment_Result: ['', Validators.required]
    });
  }

  initListBirths() {
    return this._formBuilder.group({
      birth_control: ['', Validators.required],
      starting: ['', Validators.required],
      ending: ['', Validators.required],
      use: ['', Validators.required]
    });
  }

  initListHouseholds() {
    return this._formBuilder.group({
      AddHousehold: ['', Validators.required],
      Relationship: ['', Validators.required],
      Name: ['', Validators.required],
      Age: ['', Validators.required],
      Occupation: ['', Validators.required],
      Demeaner: ['', Validators.required],
      Social: ['', Validators.required],
      felony: ['', Validators.required]
    });
  }

  addNewRow() {
    const control = <FormArray>this.historyForm.controls['list_historys'];
    control.push(this.initListHitorys());
  }

  addNewRow3() {
    const control = <FormArray>this.birthForm.controls['list_births'];
    control.push(this.initListBirths());
  }

  addNewRow4() {
    const control = <FormArray>this.householdForm.controls['list_households'];
    control.push(this.initListHouseholds());
  }

}
