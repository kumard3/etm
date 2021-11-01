export default function WhyUS() {
  return (
    <div className="bg-black w-full h-full items-center justify-center flex flex-col text-white p-10">
      <h1 className="text-8xl mb-8">Why ETM ?</h1>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <div className="mb-6">
            <h3 className="text-4xl mb-4">Electric Fleet:</h3>
            <p>
              ETM provides a dedicated Electric Vehicle for the delivery of
              essentials, goods, medicines, and many more. The Eco-friendly
              deliveries reduce the carbon footprint and make India Pollution
              free
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-4xl mb-4">Tailored Pricing:</h3>
            <p>
              Custom plans according to your company's utility. Even if you are
              a small merchant or an E-Commerce giant, or any service industry
              professional serving at doorsteps, ETM provides you with a
              customized plan & fleet according to your requirements and makes
              them within your means.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">
            <h3 className="text-4xl mb-4">S.M.A.R.T:</h3>
            <p>
              Self Monitoring, Analysis, and Reporting Technology enabled. The
              entire fleet is equipped with IoT and AI technology so you can
              track and verify the status of conveyances. Also, you can keep
              track of how much CO2 you saved during transportation.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-4xl mb-4">Secure & Reliable: </h3>
            <p>
              Security for our services is a crucial concern for us, as it plays
              an important part in quality, performance, and availability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
