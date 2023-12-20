import RegisterForm from "@/components/RegisterForm";
import ProfileForm from "@/components/backoffice/ProfileForm";

export default function Profile() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center  mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Update your Profile
            </h1>
            <ProfileForm />
          </div>
        </div>
      </div>
    </section>
  );
}
