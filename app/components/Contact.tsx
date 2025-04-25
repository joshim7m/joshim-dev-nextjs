import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="w-full max-w-1170 mx-auto px-2 py-16 md:px-0">
        <div className="fx-center mb-10">
          <div className="section-heading">
            <h2 className="text-3xl md:text-5xl">Let’s Collaborate Now!</h2>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full h-full grid place-items-center">
              <div className="w-[310px] h-[155px]">
                <Image
                  src="/contact.png"
                  alt="contact image"
                  width={310}
                  height={155}
                />
              </div>
            </div>
            <div>
              <div className="form flex flex-col gap-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="Input Your Name"
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="Input Your Email"
                  />
                </div>
                <Input label="Subject" type="text" placeholder="Subject" />
                <Input
                  label="Message"
                  textarea={true}
                  placeholder="Write Message..."
                />
                <div className="flex justify-center md:justify-start">
                  <Button type="button" variant="primary_btn">
                    <span>Send Message</span>
                    <MoveRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
