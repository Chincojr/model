import React, { useState } from 'react';
import './index.css';
import sample from '../../assets/animation_lneiudfu.mp4'
import emailjs from 'emailjs-com';



const MyForm = ({info}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkbox: false,
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const [overlay, setOverlay] = useState('hidden')

  const HandlePopUp = (value) => {
    console.log(value);
    setOverlay(value)
  }

  var formFields = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
    },

  ];

  console.log(info['formState']['Price'], 'price amount');
  if (info['formState']['Price']) {
    formFields = [...formFields,{name:`Price: ${info['formState']['Price']}`,type:"div"}, {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'text',
    },]
    console.log(formFields);
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    // if (e.target.name === 'phoneNumber') {
    //     console.log(formData[name],value);
        
    //     if (formData[name]) {
    //         setFormData((prevData) => ({
    //             ...prevData,
    //             [name]: value
    //           }));
    //     } else {
    //         setFormData((prevData) => ({
    //             ...prevData,
    //             [name]: `+${value}`
    //           }));
    //     }



    // } else {
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
          }));
    // }

  };

  const handleValidation = () => {
    const newErrors = { ...errors };

    // Name validation (example: it should not be empty)
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    } else {
      newErrors.name = '';
    }

    // Email validation (example: it should be a valid email format)
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    } else {
      newErrors.email = '';
    }

    // Phone number validation (example: it should have a minimum length)
    if (formData.phoneNumber.trim() !== '' && formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = 'Phone number should be at least 10 characters';
    } else {
      newErrors.phoneNumber = '';
    }

    const regex = /^\d+$/;
    let r = regex.test(formData.phoneNumber.trim())
    // Phone number validation (example: it should have a minimum length)
    if (formData.phoneNumber.trim() !== '' && !regex.test(Number(formData.phoneNumber.trim()))) {
        console.log(r);
        newErrors.phoneNumber = 'Invalid phone number';
    } else {
       newErrors.phoneNumber = '';
    }
      
    

    setErrors(newErrors);

    // Return true if there are no errors, otherwise, return false
    return !Object.values(newErrors).some((error) => error !== '');
  };

  function generateHTMLTable(data) {
    let tableHTML = '<table style="width: 100%; border-collapse: collapse;">';
    tableHTML += '<tr><th style="background-color: #f2f2f2; border: 1px solid #ccc; padding: 8px; text-align: left;">Desc</th><th style="background-color: #f2f2f2; border: 1px solid #ccc; padding: 8px; text-align: left;">Info</th></tr>';

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            // Check if the value is an array and join its elements with a comma
            const value = Array.isArray(data[key]) ? data[key].join(', ') : data[key];
            tableHTML += `<tr><td style="border: 1px solid #ccc; padding: 0 8px 0 8px; text-align: left;">${key}</td><td style="border: 1px solid #ccc; padding: 8px; text-align: left;">${value}</td></tr>`;
        }
    }

    tableHTML += '</table>';

    return tableHTML;
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (handleValidation()) {
      // Handle form submission when there are no errors
      HandlePopUp('block')
      let table = generateHTMLTable(info.formState)
      const templateParams = {
        zip:info.zip,
        renovation: info.model,
        building:info.building,
        type: info.type,
        table,
        ...formData,        
      }

      console.log(templateParams)
      await emailjs
        .send(
            "service_phnkfe5",
            "template_1j8o59e",
            templateParams,
            'oItqjuo0LIQ70NLUz'
        )
        .then(
            function (response) {
            console.log("SUCCESS!", response.status, response.text);
            console.log('Form submitted:', formData);
            },
            function (error) {
            console.log("FAILED...", error);
            }
        );

    }
  };

  console.log(info);


  return (
    <div className='py-[5%] flex flex-col justify-center items-center'>
        <h1 className='text-[30px] text-center lg:text-[65px] font-semibold mb-[40px]'>
            Your Contact Info:
        </h1>
    <form className='grid gap-3 w-fit ' onSubmit={handleSubmit}>
        {
            formFields.map((field) => {
                return(
                    <>
                        {
                            field.type === 'div' ? (
                            <div className="flex justify-center items-center " key={field.name}>
                                <label className='fifth-label ' >{field.name}</label>
                                <div className="error">{errors[field.name]}</div>
                            </div>
                        ) : (
                            <div className="grid grid-flow-row" key={field.name}>
                                <label className='fifth-label pb-1' >{field.label}:</label>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleInputChange}
                                    className='fifth-input '
                                />
                                <div className="error">{errors[field.name]}</div>
                            </div>

                        )}
                    </>
                )
            })
                    

        
        }
        <div className='w-full flex justify-center'>
            <button
            className="bg-[#3aba84] w-fit border-[#3aba84] hover:bg-transparent hover:text-[#3aba84] border-2 p-2 px-5 rounded-md text-white"
            type="submit"
            >
            Submit
            </button>
        </div>

    </form>

    <div className={`${overlay}  fixed w-full top-0 left-0 h-full bg-[#000000B3]`}>
          <div className='fixed min-w-[200px]  top-[50%] left-[50%] bg-white -translate-x-1/2 -translate-y-[60%]  shadow-[0px 0px 10px rgba(0, 0, 0, 0.3)] p-[10px] py-[30px] rounded-md '>
        
            <div>
                <video width="300" height="300" muted loop autoPlay>
                    <source src={sample} type="video/mp4" />
                </video>
            </div>

            <div className='w-full grid gap-2 grid-flow-col items-center justify-center text-[10px] md:text-[16px]'>
                <button onClick={() => HandlePopUp('hidden')} className=' text-[#3aba84]'>&times; Close</button>
            </div>

          </div>
     </div>

    </div>
  );
};

export default MyForm;

// onClick={() => HandlePopUp('block')}