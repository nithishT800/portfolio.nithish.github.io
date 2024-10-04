import {FormGroup, FormControl, Validators, MaxLengthValidator, MaxValidator} from '@angular/forms';

export const contractBasicDetailInterFace___ARCHIVE:any = [
    {name: 'contract_name', label: 'Name', help_text: 'Enter the contract name', error_text: 'Contract name is mandatory to move forward', input_field_type: 'text', input_type: 'text'},
    {name: 'contract_start_date', label: 'Start date', help_text: 'Select a start date', error_text: 'Date is mandatory', input_field_type: 'date_picker', input_type: 'text'},
    {name: 'contract_end_date', label: 'End date', help_text: 'Select a end date', error_text: 'Date is mandatory', input_field_type: 'date_picker', input_type: 'text'},
    {name: 'contract_expertise', label: 'Select an expertise', help_text: 'Select an option, You can select multiple if you want.', error_text: 'Expertise is mandatory', input_field_type: 'dropdown', input_type: 'text'},
    {name: 'contract_freelancer_location_is_specific', label: 'Do you want freelancer from a specific location', help_text: 'Select an option', error_text: 'Date is mandatory', input_field_type: 'radio_button', input_type: 'text'},
    {name: 'contract_freelancer_location', label: 'Search location', help_text: 'Select a location', error_text: 'Location is mandatory', input_field_type: 'autocomplete', input_type: 'text'},
    
]


export let projectBasicDetailInterface:any = new FormGroup({

    project_name: new FormControl('', Validators.required),
    project_start_date: new FormControl('', Validators.required),
    project_end_date: new FormControl('', Validators.required),
    project_skills: new FormControl([], Validators.required),
    project_freelancer_location_is_specific: new FormControl(false),
    project_freelancer_location: new FormControl(''),
})


export let projectPaymentDetailInterface:any = new FormGroup({

    project_payment_type: new FormControl('', Validators.required),
    project_payment_rate: new FormControl('', Validators.required),
    project_hours_per_day: new FormControl('', [Validators.required, Validators.max(24)]),
    
})

export let projectPaymentDetailTermsInterface:any = new FormGroup({
    project_employer_agree_contract_policy: new FormControl(false, [Validators.required]),
    project_employer_agree_terms: new FormControl(false, [Validators.required]),
    project_employer_has_policy_attachment: new FormControl(false, [Validators.required]),
    project_employer_contract_attachment_files: new FormControl(),
    file_name: new FormControl('')
})