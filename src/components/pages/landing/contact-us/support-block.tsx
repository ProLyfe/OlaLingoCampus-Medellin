import CustomInput from '@/components/ui/input/input'
import CustomButton from "@/components/ui/button/button";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { baseBackendUrl } from "@/utils/constants";
import { toast } from "react-toastify";

const contactFormchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  message: Yup.string().required('Message is required'),
  email: Yup.string().email('Use correct format of email').required('Email is required'),
});

interface IFormInputs {
  firstName: string
  lastName: string
  email: string
  message: string
}

const SupportBlock = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>({ mode: "onSubmit", resolver: yupResolver(contactFormchema) });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const payload = {
      "first_name": data.firstName,
      "last_name": data.lastName,
      "email": data.email,
      "message": data.message
    }

    axios
      .post(`${baseBackendUrl}/support`, payload)
      .then((res) => {
        if (!res) return;
        toast("Your message has been send", {
          hideProgressBar: true,
          autoClose: 3000,
          type: "success",
        });
      })
      .catch((error) => {
        console.log(error)
        toast("Something went wrong", {
          hideProgressBar: true,
          autoClose: 3000,
          type: "error",
        });
      });
  };

  return (
    <div className="py-[30px] px-[40px] rounded-[30px] bg-white w-full mobile:w-[558px]">
      <h2 className="text-h text-[28px] text-center font-semibold mb-6">Support</h2>
      <form className='flex flex-col gap-5'>
        <div className='flex flex-col mobile:flex-row gap-5'>
          <div>
            <label className='text-h text-lg mb-2'>
              <span>First Name</span>
              <CustomInput {...register("firstName", { required: true })} placeholder='Enter your first name' />
              { errors.firstName && (<p className='pl-4 mt-1 text-destructive text-small'>{ errors?.firstName?.message }</p>)}
            </label>
          </div>
          <div>
            <label className='text-h text-lg mb-2'>
              <span>Last name</span>
              <CustomInput {...register("lastName", { required: true })} placeholder='Enter your last name' />
              { errors.lastName && (<p className='pl-4 mt-1 text-destructive text-small'>{ errors?.lastName?.message }</p>)}
            </label>
          </div>
        </div>
        <div>
          <label className='text-h text-lg mb-2'>
            <span>Email</span>
            <CustomInput {...register("email", { required: true })} type='email' placeholder='Enter your email' />
            { errors.email && (<p className='pl-4 mt-1 text-destructive text-small'>{ errors?.email?.message }</p>)}
          </label>
        </div>
        <div>
          <label className='text-h text-lg mb-2'>
            <span>Message</span>
            <textarea
              {...register("message", { required: true })}
              className='block w-full border border-secondary rounded-[20px] py-3 px-4'
              rows={6}
              placeholder='Write your message..'
            ></textarea>
            { errors.message && (<p className='pl-4 mt-1 text-destructive text-small'>{ errors?.message?.message }</p>)}
          </label>
        </div>
        <div>
          <CustomButton
            type="submit"
            className="w-full mt-[10px]"
            btnSize="l"
            bgColor="main"
          >
            Send Message
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SupportBlock;
