import FormSidebar from "./components/form-sidebar";
import Form from "./components/form";

const App = () => {
  return (
    <div className='lg:flex items-center justify-center lg:min-h-screen'>
      <div className='bg-Magnolia lg:bg-White lg:w-[60rem] lg:rounded-2xl lg:shadow-xl min-h-screen lg:min-h-[38rem] pb-10 lg:grid lg:grid-cols-[1.3fr_3fr] lg:p-4'>
        <FormSidebar />
        <Form />
      </div>
    </div>
  );
};

export default App;
