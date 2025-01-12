export const FormArray: {
    name: "username" | "email" | "phone" | "project_type", 
    label: string,
    type: string,
    placeholder: string

}[] = [
    {
        label: "Select Project Category",
        name: "project_type",
        type: "text",
        placeholder: "Select category"
    },
    {
        label: "Your Name/Company Name",
        name: "username",
        type: "text",
        placeholder: "Enter name"
    },
    {
        label: "Email address",
        name: "email",
        type: "text",
        placeholder: "Enter valid email"
    },
    {
        label: "Phone Number",
        name: "phone",
        type: "number",
        placeholder: "00000 0000 0000"
    },
]