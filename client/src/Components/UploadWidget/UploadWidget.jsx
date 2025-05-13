import { useEffect, useRef } from 'react';

const UploadWidget = ({ uwConfig, setPublicId , setAvatar}) => {
  const uploadWidgetRef = useRef(null);
  const uploadButtonRef = useRef(null);

  useEffect(() => {


  if (!window.cloudinary) {
    console.error("Cloudinary script not loaded");
    return;
  }

  if (!uploadButtonRef.current) {
    console.error("Upload button ref not found");
    return;
  }


    const initializeUploadWidget = () => {
        if (window.cloudinary && uploadButtonRef.current) {
            // Create upload widget
            uploadWidgetRef.current = window.cloudinary.createUploadWidget(
                uwConfig,
                (error, result) => {
                    if (!error && result && result.event === 'success') {
                        console.log('Upload successful:', result.info);
                      setAvatar(result.info.secure_url)
                    }
          }
        );

        // Add click event to open widget
        const handleUploadClick = () => {
            if (uploadWidgetRef.current) {
                uploadWidgetRef.current.open();
          }
        };

        const buttonElement = uploadButtonRef.current;
        buttonElement.addEventListener('click', handleUploadClick);

        // Cleanup
        return () => {
          buttonElement.removeEventListener('click', handleUploadClick);
        };
      }
    };

    initializeUploadWidget();
  }, [uwConfig, setPublicId, setAvatar]);

  return (
    <button
      ref={uploadButtonRef}
      id="upload_widget"
      className="cloudinary-button"
    >
      Upload
    </button>
  );
};

export default UploadWidget;
