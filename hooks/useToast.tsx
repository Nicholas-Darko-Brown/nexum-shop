import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const useToast = () => {
    const [toastText, setToastText] = useState("");

    const showToast = (text: string) => {
      setToastText(text);
      toast.success(text);
    };
  
    return (
      <>
        <Toaster />
        {toastText && <p className="toast-text">{toastText}</p>}
        {showToast}
      </>
    );
}

export default useToast