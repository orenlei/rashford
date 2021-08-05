import { Typography } from "@material-ui/core";
import { error } from "console";
import { useForm } from "react-hook-form";
import "./ContactUs.css";

function ContactUs(): JSX.Element {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onTouched" });
    console.log(errors);



    return (
        <div>
            <Typography variant="h2">Contact Us</Typography>

            <form /*onSubmit={handleSubmit(onSubmit)}*/>
                <input type="text" placeholder="First name" {...register("FirstName",
                    {
                        required: { value: true, message: "Missing first name" },
                        maxLength: { value: 15, message: "First name maximum length is 15 characters" }
                    })} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{errors.FirstName?.message}</span>
                <br />

                <input type="text" placeholder="Last name" {...register("LastName",
                    {
                        required: { value: true, message: "Missing last name" },
                        maxLength: { value: 20, message: "Last name maximum length is 20 characters" }
                    })} />
                &nbsp;&nbsp;&nbsp;&nbsp;

                <span>{errors.LastName?.message}</span>

                <br />
                <input type="text" placeholder="Email" {...register("Email",
                    {
                        required: { value: true, message: "Missing email address" },
                        pattern: { value: /^\S+@\S+$/i, message: "Email address is illegal" }
                    })} />
                &nbsp;&nbsp;&nbsp;&nbsp;

                <span>{errors.Email?.message}</span>

                <br />
                <input type="tel" placeholder="Mobile Number" {...register("MobileNumber",
                    {
                        required: { value: true, message: "Missing mobile number" },
                        maxLength: { value: 15, message: "Mobile number maximum length is 15 numbers" }
                    })} />
                &nbsp;&nbsp;&nbsp;&nbsp;

                <span>{errors.MobileNumber?.message}</span>

                <br />
                <input id="Message" type="text" placeholder="Message" {...register("Message",
                    {
                        required: { value: true, message: "Missing Message" },
                        maxLength: { value: 1500, message: "Message maximum length is 1500 characters" }
                    })} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{errors.Message?.message}</span>
                <br />
                <input type="submit" disabled={!isValid} />
            </form>
        </div>

    )
}

export default ContactUs;
